import Link from "next/link";
import GlowBackdrop from "@/components/GlowBackdrop";

export default function NotFound() {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <GlowBackdrop />
      <div className="relative flex flex-col items-center gap-6 px-6 text-center">
        <p className="eyebrow">PAGE NOT FOUND · 页面不存在</p>
        <h1 className="font-display text-8xl leading-none text-white md:text-9xl">
          4<span className="display-italic">0</span>4
        </h1>
        <p className="font-cnserif text-lg text-mist">这一页不存在，或已经被移动到别处。</p>
        <Link
          href="/"
          className="glass glass-hover mt-4 inline-flex items-center gap-3 rounded-full px-6 py-3 text-xs uppercase tracking-label text-mist transition-colors hover:text-white"
        >
          Back home
          <span className="font-cnsans normal-case tracking-normal text-mist-dim">回到首页</span>
        </Link>
      </div>
    </div>
  );
}
