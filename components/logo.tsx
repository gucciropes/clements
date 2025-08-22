"use client";
import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2 group">
      <div className="h-8 w-8 rounded-md bg-brand text-white grid place-items-center shadow-soft">
        <span className="font-serif text-lg leading-none">C</span>
      </div>
      <div className="flex flex-col leading-none">
        <span className="font-serif text-base sm:text-lg tracking-tight text-foreground group-hover:text-brand transition-colors">Clements United</span>
        <span className="text-xs text-foreground/60">Executive Coaching</span>
      </div>
    </Link>
  );
}


