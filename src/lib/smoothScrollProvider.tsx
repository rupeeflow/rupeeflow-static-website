'use client'
import { useEffect, useRef } from 'react'
import Lenis, { LenisOptions } from 'lenis'

export default function SmoothScrollProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const rafId = useRef<number | null>(null)
  const settleTimer = useRef<number | null>(null)

  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.3,
      smoothWheel: true,
      wheelMultiplier: 1.05,
      touchMultiplier: 1.0,
    } as LenisOptions)

    const FAST_VELOCITY = 1.4
    const SETTLE_MS = 250

    const onScroll = ({ velocity }: { velocity: number }) => {
      const v = Math.abs(velocity || 0)

      // If fast movement detected, make it floatier
      if (v > FAST_VELOCITY && lenis.options.lerp !== 0.22) {
        lenis.options.lerp = 0.12
      }

      // When velocity calms down, schedule a restore
      if (settleTimer.current) window.clearTimeout(settleTimer.current)
      settleTimer.current = window.setTimeout(() => {
        lenis.options.lerp = 0.35
      }, SETTLE_MS)
    }

    lenis.on('scroll', onScroll)

    const raf = (time: number) => {
      lenis.raf(time)
      rafId.current = requestAnimationFrame(raf)
    }
    rafId.current = requestAnimationFrame(raf)

    return () => {
      if (rafId.current) cancelAnimationFrame(rafId.current)
      if (settleTimer.current) window.clearTimeout(settleTimer.current)
      lenis.off('scroll', onScroll)
      lenis.destroy()
    }
  }, [])

  return <>{children}</>
}
