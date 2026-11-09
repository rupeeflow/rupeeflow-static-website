type Props = {
  className?: string
  compact?: boolean
}

/** Public disclaimers — no loans, and third-party site not affiliated with RupeeFlow. */
export default function NoLoanNotice({
  className = '',
  compact = false,
}: Props) {
  return (
    <div
      role="note"
      className={`space-y-2 rounded-md border border-red-500/40 bg-red-50 px-3 py-2 text-center font-semibold text-red-600 ${
        compact
          ? 'text-[11px] leading-snug'
          : 'text-xs sm:text-sm leading-relaxed'
      } ${className}`}
    >
      <p>
        Note: RupeeFlow is not offering any kind of loan, credit, or lending
        product.
      </p>
      <p>
        Note:{' '}
        <a
          href="https://www.rupeeflowcard.com/"
          target="_blank"
          rel="noopener noreferrer nofollow"
          className="underline underline-offset-2 hover:text-red-700"
        >
          https://www.rupeeflowcard.com/
        </a>{' '}
        does not belong to RupeeFlow and is not affiliated with, endorsed by, or
        operated by RupeeFlow.
      </p>
    </div>
  )
}
