"use client";

import { useEffect, useRef, useState } from "react";

interface CopyEmailProps {
  email: string;
}

export default function CopyEmail({ email }: CopyEmailProps) {
  const [copied, setCopied] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, []);

  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
    } catch {
      const ta = document.createElement("textarea");
      ta.value = email;
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
    }
    setCopied(true);
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setCopied(false), 2000);
  }

  return (
    <button
      onClick={copy}
      aria-live="polite"
      className="glass glass-hover inline-flex items-center gap-3 rounded-full px-6 py-3 text-xs uppercase tracking-label text-mist transition-colors hover:text-white"
    >
      {copied ? (
        <>
          <span className="text-cyan-glow">Copied</span>
          <span className="font-cnsans normal-case tracking-normal text-cyan-glow">已复制</span>
        </>
      ) : (
        <>
          Copy email
          <span className="font-cnsans normal-case tracking-normal text-mist-dim">复制邮箱</span>
        </>
      )}
    </button>
  );
}
