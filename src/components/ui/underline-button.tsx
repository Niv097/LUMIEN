"use client";

import { cn } from "@/lib/utils";

interface UnderlineButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export function UnderlineButton({ children, onClick, className }: UnderlineButtonProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "relative group inline-flex items-center justify-center",
        "px-6 py-3 text-base font-medium text-white",
        "bg-transparent",
        "transition-all duration-300",
        "active:scale-95 active:opacity-80",
        className
      )}
    >
      <span className="relative">
        {children}
        <span className="absolute left-0 bottom-0 w-full h-0.5 bg-white origin-left scale-x-100 transition-transform duration-300 group-hover:scale-x-0 group-active:scale-x-0" />
        <span className="absolute left-0 bottom-0 w-full h-0.5 bg-primary origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100 group-active:scale-x-100" />
      </span>
    </button>
  );
}
