import GlassCard from "@/components/GlassCard";
import GlowBackdrop from "@/components/GlowBackdrop";
import Reveal from "@/components/Reveal";
import { siteIndexCards } from "@/data/site";

/** Four clickable glass cards indexing the site — the page then continues into real content. */
export default function SiteIndex() {
  return (
    <section id="site-index" className="relative scroll-mt-24 py-24 md:py-32">
      <GlowBackdrop variant="cyan" />
      <div className="relative mx-auto max-w-site px-6 md:px-10">
        <Reveal className="mb-12 flex flex-col gap-4">
          <p className="eyebrow">SITE INDEX</p>
          <h2 className="font-display text-3xl leading-tight text-white md:text-5xl">
            Start anywhere.
            <span className="mt-2 block font-cnserif text-base font-normal text-mist md:text-lg">
              从这里进入全站的四个章节。
            </span>
          </h2>
          <div className="hairline w-24" />
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {siteIndexCards.map((card, i) => (
            <Reveal key={card.key} delay={i * 0.08}>
              <GlassCard href={card.href} className="group flex h-full flex-col p-6 md:p-7">
                <span className="font-display text-sm italic text-mist-dim">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="mt-8 block text-sm uppercase tracking-nav text-white">
                  {card.title}
                </span>
                <span className="mt-1 block font-cnserif text-sm text-mist">{card.cn}</span>
                <span className="mt-4 block flex-1 font-cnsans text-xs leading-relaxed text-mist-dim">
                  {card.description}
                </span>
                <span className="mt-6 block text-cyan-glow transition-transform duration-500 ease-editorial group-hover:translate-x-1.5">
                  →
                </span>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
