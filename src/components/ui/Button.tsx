'use client';
import clsx from 'clsx';

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
};

export default function Button({
  children,
  className,
  onClick,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={clsx(
        `
        group
        rounded-full px-6 py-2 text-sm font-medium
        flex items-center gap-2
        bg-gradient-to-r from-[#054C38] to-[#2AB871]
        text-white
        transition-all duration-500 ease-in-out
        hover:bg-white hover:from-[#054C38] hover:to-white hover:text-black
        `,
        className
      )}
    >
      {/* Text + arrow move together */}
      <span className="flex items-center gap-2 transition-transform duration-200 group-hover:translate-x-1">
        {children}
      </span>
    </button>
  );
}
