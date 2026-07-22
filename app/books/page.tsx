import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import GlassCard from "@/components/GlassCard";
import GlowBackdrop from "@/components/GlowBackdrop";
import { books, booksMeta } from "@/data/books";

export const metadata: Metadata = {
  title: "BOOKS — 书库",
  description: `${booksMeta.intro.en} ${booksMeta.intro.cn}`,
};

export default function BooksPage() {
  const featured = books.find((b) => b.featured) ?? books[0];
  const rest = books.filter((b) => b.slug !== featured.slug);

  return (
    <div className="relative">
      <GlowBackdrop variant="cyan" />

      {/* ---------- header ---------- */}
      <section className="mx-auto max-w-site px-6 pb-16 pt-32 md:px-10 md:pt-40">
        <Reveal className="flex flex-col gap-5">
          <p className="eyebrow">BOOKS · 书库</p>
          <h1 className="font-display text-5xl leading-none text-white md:text-7xl">
            B<span className="display-italic">oo</span>ks
          </h1>
          <p className="font-cnserif text-xl text-mist md:text-2xl">书库</p>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs uppercase tracking-label text-mist-dim">
            <span>{booksMeta.countLabel}</span>
            <span className="font-cnsans normal-case tracking-normal">{booksMeta.countLabelCn}</span>
            <span aria-hidden className="text-white/20">
              /
            </span>
            <span>{booksMeta.yearRange}</span>
          </div>
          <div className="max-w-xl">
            <p className="text-sm leading-relaxed text-mist">{booksMeta.intro.en}</p>
            <p className="mt-1 font-cnsans text-sm leading-relaxed text-mist-dim">{booksMeta.intro.cn}</p>
          </div>
          <div className="hairline w-24" />
        </Reveal>
      </section>

      {/* ---------- featured ---------- */}
      <section className="mx-auto max-w-site px-6 md:px-10">
        <Reveal>
          <GlassCard href={`/books/${featured.slug}/`} className="group grid gap-8 p-6 md:grid-cols-5 md:p-10">
            <div className="md:col-span-2">
              <div className="overflow-hidden rounded-xl">
                <img
                  src={featured.cover}
                  alt={`${featured.title} / 《${featured.cn}》封面`}
                  className="aspect-[2/3] w-full object-cover transition-transform duration-700 ease-editorial group-hover:scale-[1.03]"
                />
              </div>
            </div>
            <div className="flex flex-col justify-center gap-5 md:col-span-3">
              <p className="eyebrow">Featured · 主打</p>
              <h2 className="font-display text-3xl leading-tight text-white md:text-5xl">{featured.title}</h2>
              <p className="font-cnserif text-lg text-mist md:text-xl">《{featured.cn}》</p>
              <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs tracking-label text-mist-dim">
                <span>{featured.year}</span>
                <span aria-hidden className="text-white/20">
                  /
                </span>
                <span className="font-cnsans tracking-normal">{featured.status}</span>
                <span aria-hidden className="text-white/20">
                  /
                </span>
                <span className="font-cnsans tracking-normal">{featured.theme}</span>
              </div>
              <p className="font-cnserif text-xl leading-relaxed text-cyan-soft md:text-2xl">{featured.thesis}</p>
              <p className="max-w-xl font-cnsans text-sm leading-relaxed text-mist">{featured.synopsis}</p>
              <span className="mt-2 inline-flex items-center gap-2 text-xs uppercase tracking-label text-cyan-glow">
                Read more
                <span className="font-cnsans normal-case tracking-normal text-mist">阅读详情</span>
                <span aria-hidden>→</span>
              </span>
            </div>
          </GlassCard>
        </Reveal>
      </section>

      {/* ---------- the rest ---------- */}
      <section className="mx-auto max-w-site px-6 py-24 md:px-10 md:py-32">
        <Reveal className="mb-12 flex items-baseline justify-between gap-4">
          <h2 className="font-display text-2xl text-white md:text-3xl">
            More books
            <span className="ml-3 font-cnserif text-base font-normal text-mist">更多作品</span>
          </h2>
          <div className="hairline hidden flex-1 md:block" />
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((book, i) => (
            <Reveal key={book.slug} delay={i * 0.08}>
              <GlassCard href={`/books/${book.slug}/`} className="group h-full p-5">
                <div className="overflow-hidden rounded-lg">
                  <img
                    src={book.cover}
                    alt={`${book.title} / 《${book.cn}》封面`}
                    className="aspect-[2/3] w-full object-cover transition-transform duration-700 ease-editorial group-hover:scale-[1.03]"
                  />
                </div>
                <div className="mt-5 flex flex-col gap-2">
                  <h3 className="font-display text-xl leading-snug text-white">{book.title}</h3>
                  <p className="font-cnserif text-sm text-mist">《{book.cn}》</p>
                  <div className="flex flex-wrap gap-x-3 gap-y-1 text-[11px] tracking-label text-mist-dim">
                    <span>{book.year}</span>
                    <span aria-hidden className="text-white/20">
                      /
                    </span>
                    <span className="font-cnsans tracking-normal">{book.status}</span>
                  </div>
                  <p className="mt-1 font-cnsans text-xs leading-relaxed text-mist-dim">{book.theme}</p>
                </div>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
