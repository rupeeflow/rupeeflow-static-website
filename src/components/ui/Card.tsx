import React from 'react';

type CardProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Card({ children, className = '' }: CardProps) {
  return (
    <div
      className={`
        relative
        rounded-[20px]
        border border-white/20
        bg-[#0d191a]
        px-8 py-6
        flex flex-col
        transition-all duration-300
        hover:border-emerald-400/50
        hover:-translate-y-1
        ${className}
      `}
    >
      {children}
    </div>
  );
}
