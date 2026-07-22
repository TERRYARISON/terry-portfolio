import Link from "next/link";
import type { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  href?: string;
  className?: string;
}

export default function GlassCard({ children, href, className = "" }: GlassCardProps) {
  const cls = `glass glass-hover block rounded-2xl ${className}`;
  if (href) {
    return (
      <Link href={href} className={cls}>
        {children}
      </Link>
    );
  }
  return <div className={cls}>{children}</div>;
}
