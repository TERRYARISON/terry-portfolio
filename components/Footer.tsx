import Link from "next/link";
import { navItems, site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="no-print border-t border-white/5">
      <div className="mx-auto flex max-w-site flex-col gap-6 px-6 py-10 md:flex-row md:items-center md:justify-between md:px-10">
        <p className="font-display text-sm tracking-[0.18em] text-mist">TERRY</p>
        <nav className="flex flex-wrap gap-x-6 gap-y-2">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[11px] uppercase tracking-label text-mist-dim transition-colors hover:text-white"
            >
              {item.en}
            </Link>
          ))}
        </nav>
        <a
          href={`mailto:${site.email}`}
          className="text-[11px] tracking-label text-mist-dim transition-colors hover:text-cyan-glow"
        >
          {site.email}
        </a>
      </div>
    </footer>
  );
}
