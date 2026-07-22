"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { navItems } from "@/data/site";

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 no-print">
      <div className="mx-auto flex max-w-site items-center justify-between px-6 py-5 md:px-10">
        <Link href="/" className="group flex items-baseline gap-2" onClick={() => setOpen(false)}>
          <span className="font-display text-xl tracking-[0.18em] text-white">TERRY</span>
        </Link>

        {/* desktop */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => {
            const active = pathname.startsWith(item.href);
            return (
              <Link key={item.href} href={item.href} className="group relative py-1">
                <span
                  className={`block text-[11px] uppercase tracking-nav transition-colors duration-300 ${
                    active ? "text-white" : "text-mist group-hover:text-white"
                  }`}
                >
                  {item.en}
                </span>
                <span
                  className={`block text-center font-cnsans text-[10px] transition-colors duration-300 ${
                    active ? "text-cyan-glow" : "text-mist-dim group-hover:text-mist"
                  }`}
                >
                  {item.cn}
                </span>
                <span
                  className={`absolute -bottom-0.5 left-0 h-px w-full origin-left bg-gradient-to-r from-cyan-glow to-pink-glow transition-transform duration-500 ${
                    active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        {/* mobile button */}
        <button
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
          className="glass flex h-10 w-10 items-center justify-center rounded-full lg:hidden"
        >
          <div className="space-y-1.5">
            <span className={`block h-px w-4 bg-white transition-transform duration-300 ${open ? "translate-y-[3.5px] rotate-45" : ""}`} />
            <span className={`block h-px w-4 bg-white transition-transform duration-300 ${open ? "-translate-y-[3px] -rotate-45" : ""}`} />
          </div>
        </button>
      </div>

      {/* mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="glass mx-4 rounded-2xl p-6 lg:hidden"
          >
            <ul className="space-y-4">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="flex items-baseline justify-between"
                  >
                    <span className="text-sm uppercase tracking-nav text-white">{item.en}</span>
                    <span className="font-cnsans text-xs text-mist-dim">{item.cn}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
