"use client"

import React, { useEffect, useRef } from 'react'

export default function ScrollProgressBar() {
  const progressRef = useRef<HTMLDivElement | null>(null)
  const rafRef = useRef<number | null>(null)

  useEffect(() => {
    const getIsDark = () => {
      try {
        return (
          document.documentElement.classList.contains('dark') ||
          window.matchMedia('(prefers-color-scheme: dark)').matches
        )
      } catch (e) {
        return false
      }
    }

    const update = () => {
      const doc = document.documentElement
      const scrollTop = doc.scrollTop || document.body.scrollTop
      const scrollHeight = doc.scrollHeight || document.body.scrollHeight
      const clientHeight = doc.clientHeight || window.innerHeight

      // Attempt to find a page hero heading to start the progress from
      const startEl = document.querySelector('.cm-heading') || document.querySelector('.rf-h1')
      const startOffset = startEl ? (startEl as HTMLElement).getBoundingClientRect().top + window.scrollY : 0

      // denom is the scrollable distance from the startOffset to the bottom
      const denom = Math.max(scrollHeight - clientHeight - startOffset, 1)

      // progress is 0 until user scrolls past startOffset
      const raw = scrollTop - startOffset
      const pct = Math.min(Math.max((raw / denom) * 100, 0), 100)

      if (progressRef.current) {
        // transform for GPU-accelerated animations
        progressRef.current.style.transform = `scaleX(${pct / 100})`
        // use a single subtle linear gradient based on #01261D
        const base = '#01261D'
        const lightGradient = `linear-gradient(90deg, ${base} 0%, ${base}CC 50%, ${base}99 100%)`
        const darkGradient = `linear-gradient(90deg, ${base} 0%, ${base}CC 50%, ${base}99 100%)`
        progressRef.current.style.background = getIsDark() ? darkGradient : lightGradient
      }
    }

    const onScroll = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      rafRef.current = requestAnimationFrame(update)
    }

    const onResize = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      rafRef.current = requestAnimationFrame(update)
    }

    // observe class changes on html element to react to theme toggles
    const observer = new MutationObserver(() => {
      if (progressRef.current) {
        const base = '#01261D'
        const lightGradient = `linear-gradient(90deg, ${base} 0%, ${base}CC 50%, ${base}99 100%)`
        const darkGradient = `linear-gradient(90deg, ${base} 0%, ${base}CC 50%, ${base}99 100%)`
        progressRef.current.style.background = getIsDark() ? darkGradient : lightGradient
      }
    })

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onResize)
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] })

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onResize)
      observer.disconnect()
    }
  }, [])

  return (
    <div
      aria-hidden
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: 4,
        pointerEvents: 'none',
        zIndex: 9999,
        background: 'transparent',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          height: '4px',
          width: '100%',
          transformOrigin: 'left center',
          background: 'transparent',
        }}
      >
        <div
          ref={progressRef}
          style={{
            height: '4px',
            width: '100%',
            background: 'linear-gradient(90deg, #01261D 0%, #01261DCC 50%, #01261D99 100%)',
            transform: 'scaleX(0)',
            transition: 'transform 120ms linear, background 200ms linear',
            willChange: 'transform, background',
          }}
        />
      </div>
    </div>
  )
}
