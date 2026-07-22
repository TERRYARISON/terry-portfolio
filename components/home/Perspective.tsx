import Link from "next/link";
import GlowBackdrop from "@/components/GlowBackdrop";
import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";
import { featuredArticle } from "@/data/profile";

/** Exactly one featured article — not a list. */
export default function Perspective() {
  const article = featuredArticle;

  return (
    <section className="relative py-24 md:py-32">
      <GlowBackdrop variant="cyan" />
      <div className="relative mx-auto max-w-site px-6 md:px-10">
        <SectionHeader eyebrow="PERSPECTIVE" title="Perspective" cn="观点" />

        <Reveal>
          <Link
            href={article.href}
            className="glass glass-hover group grid overflow-hidden rounded-2xl md:grid-cols-5"
          >
            <div className="relative min-h-52 overflow-hidden md:col-span-2">
              <img
                src={article.image}
                alt={article.title}
                className="absolute inset-0 h-full w-full object-cover opacity-80 transition-transform duration-700 ease-editorial group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/50 to-transparent" />
            </div>
            <div className="p-7 md:col-span-3 md:p-10">
              <p className="eyebrow">Featured Essay</p>
              <h3 className="mt-4 font-display text-2xl leading-snug text-white md:text-3xl">
                {article.title}
              </h3>
              <p className="mt-1 font-cnserif text-base text-mist">{article.cn}</p>
              <p className="mt-4 max-w-xl font-cnsans text-sm leading-relaxed text-mist">
                {article.abstract}
              </p>
              <div className="mt-6 flex items-center gap-4">
                <span className="text-[11px] uppercase tracking-label text-mist-dim">
                  {article.readingTime} read
                </span>
                <span className="text-sm text-cyan-glow transition-transform duration-500 ease-editorial group-hover:translate-x-1.5">
                  Read →
                </span>
              </div>
            </div>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
