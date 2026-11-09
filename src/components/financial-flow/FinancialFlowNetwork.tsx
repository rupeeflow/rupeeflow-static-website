'use client'

import { useEffect, useRef } from 'react'
import { createFinancialFlowEngine } from './FinancialFlowEngine'

export default function FinancialFlowNetwork() {
  const wrapRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const labelsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const wrap = wrapRef.current
    const canvas = canvasRef.current
    const labelsDiv = labelsRef.current
    if (!wrap || !canvas || !labelsDiv) return

    const engine = createFinancialFlowEngine({ wrap, canvas, labelsDiv })
    return () => engine.dispose()
  }, [])

  return (
    <div
      ref={wrapRef}
      className="relative w-full select-none"
      style={{ height: 'clamp(520px, 78vh, 900px)' }}
    >
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
      <div
        ref={labelsRef}
        className="absolute inset-0 w-full h-full pointer-events-none z-10"
      />
      <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-[10px] tracking-[0.2em] uppercase text-[#5A8F7A] pointer-events-none whitespace-nowrap z-10">
        Click a module · tap background to reset
      </p>
    </div>
  )
}
