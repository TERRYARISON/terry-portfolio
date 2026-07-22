import Link from "next/link";
import GlowBackdrop from "@/components/GlowBackdrop";
import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";
import { books, booksMeta } from "@/data/books";

/** Four covers — featured book first and largest. */
export default function BooksPreview() {
  const featured = books.find((b) => b.featured) ?? books[0];
  const others = books.filter((b) => b.slug !== featured.slug).slice(0, 3);

  return (
    <section className="relative py-24 md:py-32">
      <GlowBackdrop variant="pink" />
      <div className="relative mx-auto max-w-site px-6 md:px-10">
        <SectionHeader
          eyebrow="BOOKS"
          title="Books"
          cn="书库"
          description={`${booksMeta.intro.en} ${booksMeta.intro.cn}`}
        />

        <div className="grid gap-10 md:grid-cols-12">
          {/* meta column */}
          <Reveal className="flex flex-col justify-center md:col-span-4">
            <p className="font-display text-4xl leading-tight text-white md:text-5xl">
              {booksMeta.countLabel}
            </p>
            <p className="mt-2 font-cnserif text-base text-mist">{booksMeta.countLabelCn}</p>
            <p className="mt-4 text-[11px] uppercase tracking-label text-mist-dim">
              {booksMeta.yearRange}
            </p>
            <div className="hairline my-6 w-20" />
            <p className="font-cnsans text-sm leading-relaxed text-mist">{booksMeta.intro.cn}</p>
            <Link
              href="/books/"
              className="group mt-8 inline-flex items-baseline gap-2 text-sm text-mist transition-colors duration-300 hover:text-white"
            >
              <span className="text-[11px] uppercase tracking-label">View all books</span>
              <span className="font-cnsans text-xs text-mist-dim">进入书库</span>
              <span className="text-cyan-glow transition-transform duration-500 ease-editorial group-hover:translate-x-1">
                →
              </span>
            </Link>
          </Reveal>

          {/* covers */}
          <div className="grid gap-5 sm:grid-cols-4 md:col-span-8">
            <Reveal className="sm:col-span-2">
              <Link
                href={`/books/${featured.slug}/`}
                className="glass glass-hover group block overflow-hidden rounded-2xl"
              >
                <div className="overflow-hidden">
                  <img
                    src={featured.cover}
                    alt={featured.cn ?? featured.title}
                    className="aspect-[3/4] w-full object-cover opacity-90 transition-transform duration-700 ease-editorial group-hover:scale-[1.03]"
                  />
                </div>
                <div className="p-5">
                  <p className="text-[10px] uppercase tracking-label text-cyan-glow">Featured</p>
                  <p className="mt-2 font-cnserif text-lg text-white">《{featured.cn}》</p>
                  <p className="mt-1 font-display text-xs italic text-mist">{featured.title}</p>
                  <p className="mt-2 text-[11px] tracking-label text-mist-dim">
                    {featured.year} · {featured.status}
                  </p>
                </div>
              </Link>
            </Reveal>

            <div className="grid grid-cols-3 gap-4 sm:col-span-2 sm:grid-cols-1 md:mt-14">
              {others.map((book, i) => (
                <Reveal key={book.slug} delay={0.1 + i * 0.08}>
                  <Link
                    href={`/books/${book.slug}/`}
                    className="glass glass-hover group flex items-center gap-4 rounded-2xl p-3"
                  >
                    <span className="block w-14 shrink-0 overflow-hidden rounded-lg">
                      <img
                        src={book.cover}
                        alt={book.cn ?? book.title}
                        className="aspect-[3/4] w-full object-cover opacity-85 transition-transform duration-700 ease-editorial group-hover:scale-[1.05]"
                      />
                    </span>
                    <span className="min-w-0">
                      <span className="block truncate font-cnserif text-sm text-white">
                        《{book.cn}》
                      </span>
                      <span className="mt-0.5 block text-[11px] tracking-label text-mist-dim">
                        {book.year} · {book.theme}
                      </span>
                    </span>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
