"use client"

import Link from 'next/link'
import clsx from 'clsx'
import React from 'react'

type ButtonProps = {
  children: React.ReactNode
  className?: string
  href?: string
  onClick?: () => void
}

export default function Button({ children, className, href, onClick }: ButtonProps) {
  const base = `group inline-flex items-center justify-center gap-2 px-6 py-2 rounded-full text-sm font-medium transition-transform duration-200 ease-in-out`
  // default (before hover): use site primary -> accent gradient
  // hover (after hover): lighter mint gradient and black text (matches Make Payments CTA)
  const gradient = `bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] text-white border border-transparent shadow-sm hover:from-[#6ed3cf] hover:to-[#00ef64] hover:shadow-md hover:scale-[1.02] hover:text-black`

  if (href) {
    return (
      <Link href={href} onClick={onClick} className={clsx(base, className, gradient)}>
        <span className="flex items-center gap-2 transition-transform duration-200 group-hover:translate-x-1">{children}</span>
      </Link>
    )
  }

  return (
    <button onClick={onClick} className={clsx(base, className, gradient)}>
      <span className="flex items-center gap-2 transition-transform duration-200 group-hover:translate-x-1">{children}</span>
    </button>
  )
}
