import Link from "next/link";
import GlassCard from "@/components/GlassCard";
import GlowBackdrop from "@/components/GlowBackdrop";
import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";
import { experiences } from "@/data/experiences";

/** 语者 featured first (larger card), then three more experiences. */
export default function SelectedExperience() {
  const featured = experiences.find((e) => e.featured);
  const rest = experiences.filter((e) => !e.featured).slice(0, 3);
  if (!featured) return null;

  return (
    <section className="relative py-24 md:py-32">
      <GlowBackdrop variant="cyan" />
      <div className="relative mx-auto max-w-site px-6 md:px-10">
        <SectionHeader
          eyebrow="SELECTED EXPERIENCE"
          title="Selected Experience"
          cn="精选经历"
        />

        {/* featured — 语者 */}
        <Reveal>
          <Link
            href="/experience/yuzhe/"
            className="glass glass-hover group grid overflow-hidden rounded-2xl md:grid-cols-2"
          >
            <div className="relative min-h-56 overflow-hidden">
              {featured.image && (
                <img
                  src={featured.image}
                  alt={featured.cn ?? featured.name}
                  className="absolute inset-0 h-full w-full object-cover opacity-80 transition-transform duration-700 ease-editorial group-hover:scale-[1.03]"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent md:bg-gradient-to-r" />
            </div>
            <div className="p-7 md:p-10">
              <p className="inline-flex items-center gap-2 rounded-full border border-cyan-glow/30 px-3 py-1 text-[10px] uppercase tracking-label text-cyan-glow">
                Featured Experience
                <span className="font-cnsans normal-case tracking-normal">代表经历</span>
              </p>
              <h3 className="mt-5 font-display text-3xl text-white md:text-4xl">
                {featured.name}
                <span className="ml-3 font-cnserif text-xl text-mist md:text-2xl">
                  {featured.cn}
                </span>
              </h3>
              <p className="mt-2 text-[11px] uppercase tracking-label text-mist-dim">
                {featured.time}
                <span className="mx-2 text-white/20">·</span>
                <span className="font-cnsans normal-case tracking-normal">{featured.role}</span>
              </p>
              <p className="mt-4 font-cnsans text-sm leading-relaxed text-mist">
                {featured.summary}
              </p>
              <span className="mt-6 inline-block text-sm text-cyan-glow transition-transform duration-500 ease-editorial group-hover:translate-x-1.5">
                Read the case study →
              </span>
            </div>
          </Link>
        </Reveal>

        {/* three more */}
        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {rest.map((exp, i) => (
            <Reveal key={exp.slug} delay={0.1 + i * 0.08}>
              <GlassCard href="/experience/" className="group flex h-full flex-col p-6">
                <span className="text-[10px] uppercase tracking-label text-mist-dim">
                  {exp.group}
                </span>
                <span className="mt-3 block font-display text-lg leading-snug text-white">
                  {exp.name}
                </span>
                {exp.cn && (
                  <span className="mt-0.5 block font-cnserif text-xs text-mist">{exp.cn}</span>
                )}
                <span className="mt-2 block text-[11px] tracking-label text-mist-dim">
                  {exp.time} · {exp.role}
                </span>
                <span className="mt-3 block flex-1 line-clamp-3 font-cnsans text-xs leading-relaxed text-mist">
                  {exp.summary}
                </span>
                <span className="mt-5 block text-cyan-glow transition-transform duration-500 ease-editorial group-hover:translate-x-1.5">
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
