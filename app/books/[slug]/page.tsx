import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Reveal from "@/components/Reveal";
import { adjacentBooks, books, getBook } from "@/data/books";

interface BookPageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return books.map((book) => ({ slug: book.slug }));
}

export const dynamicParams = false;

export function generateMetadata({ params }: BookPageProps): Metadata {
  const book = getBook(params.slug);
  if (!book) return {};
  return {
    title: `${book.title} — 《${book.cn}》`,
    description: book.thesis,
  };
}

export default function BookPage({ params }: BookPageProps) {
  const book = getBook(params.slug);
  if (!book) notFound();

  const { prev, next } = adjacentBooks(book.slug);

  return (
    <article className="mx-auto max-w-site px-6 pb-24 pt-32 md:px-10 md:pb-32 md:pt-40">
      {/* ---------- back link ---------- */}
      <Reveal>
        <Link
          href="/books/"
          className="group inline-flex items-center gap-2 text-[11px] uppercase tracking-label text-mist-dim transition-colors hover:text-cyan-glow"
        >
          <span aria-hidden>←</span> Back to library
          <span className="font-cnsans normal-case tracking-normal">返回书库</span>
        </Link>
      </Reveal>

      {/* ---------- hero: cover + title ---------- */}
      <div className="mt-12 grid gap-10 md:grid-cols-12 md:gap-14">
        <Reveal className="md:col-span-4">
          <div className="overflow-hidden rounded-xl">
            <img
              src={book.cover}
              alt={`${book.title} / 《${book.cn}》封面`}
              className="aspect-[2/3] w-full object-cover"
            />
          </div>
        </Reveal>

        <div className="flex flex-col justify-center gap-6 md:col-span-8">
          <Reveal className="flex flex-col gap-4">
            <p className="eyebrow">BOOKS · 书库</p>
            <h1 className="font-display text-4xl leading-tight text-white md:text-6xl">{book.title}</h1>
            <p className="font-cnserif text-xl text-mist md:text-2xl">《{book.cn}》</p>
            <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs tracking-label text-mist-dim">
              <span>{book.year}</span>
              <span aria-hidden className="text-white/20">
                /
              </span>
              <span className="font-cnsans tracking-normal">{book.status}</span>
              <span aria-hidden className="text-white/20">
                /
              </span>
              <span className="font-cnsans tracking-normal">完成于 {book.completionDate}</span>
            </div>
            <div className="hairline w-24" />
          </Reveal>

          {/* thesis — serif pull */}
          <Reveal delay={0.1}>
            <p className="font-cnserif text-2xl leading-relaxed text-white md:text-3xl">{book.thesis}</p>
            <p className="mt-3 text-[11px] uppercase tracking-label text-mist-dim">
              Thesis <span className="font-cnsans normal-case tracking-normal">一句话论点</span>
            </p>
          </Reveal>
        </div>
      </div>

      {/* ---------- synopsis ---------- */}
      <Reveal className="mt-16 max-w-2xl md:mt-20">
        <p className="eyebrow mb-4">Synopsis · 简介</p>
        <div className="prose-terry font-cnsans">
          <p>{book.synopsis}</p>
        </div>
      </Reveal>

      {/* ---------- excerpt — editorial quote ---------- */}
      <Reveal className="mt-16 max-w-2xl md:mt-20">
        <p className="eyebrow mb-6">Excerpt · 节选</p>
        <blockquote className="border-l-2 border-cyan-glow/40 pl-6 md:pl-8">
          <p className="font-cnserif text-xl leading-loose text-mist md:text-2xl">{book.excerpt}</p>
          <footer className="mt-5 text-[11px] uppercase tracking-label text-mist-dim">
            —— 《<span className="font-cnserif normal-case">{book.cn}</span>》
          </footer>
        </blockquote>
      </Reveal>

      {/* ---------- prev / next ---------- */}
      <nav className="mt-24 md:mt-32">
        <div className="hairline mb-10 w-full" />
        <div className="grid gap-6 md:grid-cols-2">
          {prev ? (
            <Reveal>
              <Link href={`/books/${prev.slug}/`} className="group flex flex-col gap-2">
                <span className="text-[11px] uppercase tracking-label text-mist-dim">
                  ← Previous <span className="font-cnsans normal-case tracking-normal">上一本</span>
                </span>
                <span className="font-display text-xl text-mist transition-colors group-hover:text-white md:text-2xl">
                  {prev.title}
                </span>
                <span className="font-cnserif text-sm text-mist-dim">《{prev.cn}》</span>
              </Link>
            </Reveal>
          ) : (
            <span />
          )}
          {next ? (
            <Reveal delay={0.08} className="md:text-right">
              <Link href={`/books/${next.slug}/`} className="group flex flex-col gap-2 md:items-end">
                <span className="text-[11px] uppercase tracking-label text-mist-dim">
                  Next <span className="font-cnsans normal-case tracking-normal">下一本</span> →
                </span>
                <span className="font-display text-xl text-mist transition-colors group-hover:text-white md:text-2xl">
                  {next.title}
                </span>
                <span className="font-cnserif text-sm text-mist-dim">《{next.cn}》</span>
              </Link>
            </Reveal>
          ) : (
            <span />
          )}
        </div>

        <Reveal className="mt-14 text-center">
          <Link
            href="/books/"
            className="glass glass-hover inline-flex items-center gap-3 rounded-full px-6 py-3 text-xs uppercase tracking-label text-mist transition-colors hover:text-white"
          >
            Back to library
            <span className="font-cnsans normal-case tracking-normal text-mist-dim">返回书库</span>
          </Link>
        </Reveal>
      </nav>
    </article>
  );
}
