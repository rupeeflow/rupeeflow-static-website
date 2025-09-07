"use client";
import { ReactNode } from "react";

interface TestimonialCardProps {
  children: ReactNode;
  author: string;
}

export default function TestimonialCard({ children, author }: TestimonialCardProps) {
  return (
    <div className="flex-shrink-0 w-80 md:w-96 bg-gray-50 rounded-2xl shadow-md p-6 mx-3">
      <p className="italic text-gray-800 text-lg">“{children}”</p>
      <p className="mt-4 text-right text-sm font-semibold text-sky-700">
        – {author}
      </p>
    </div>
  );
}
