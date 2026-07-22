import Link from "next/link";
import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import { getExperience, yuzheCase } from "@/data/experiences";

export const metadata: Metadata = {
  title: `${yuzheCase.name} ${yuzheCase.cn} — Experience Case Study`,
  description: yuzheCase.background,
};

function SectionBlock({
  eyebrow,
  eyebrowCn,
  children,
  className = "",
}: {
  eyebrow: string;
  eyebrowCn: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Reveal className={className}>
      <p className="eyebrow">
        {eyebrow}{" "}
        <span className="font-cnsans normal-case tracking-normal">{eyebrowCn}</span>
      </p>
      <div className="hairline mt-4 w-16" />
      <div className="mt-6">{children}</div>
    </Reveal>
  );
}

export default function YuzheCasePage() {
  const next = getExperience(yuzheCase.nextSlug);

  return (
    <>
      {/* ---------- breadcrumb + header ---------- */}
      <header className="relative pb-14 pt-32 md:pb-20 md:pt-44">
        <div className="mx-auto max-w-site px-6 md:px-10">
          <Reveal>
            <nav aria-label="Breadcrumb" className="eyebrow">
              <Link
                href="/experience/"
                className="transition-colors duration-300 hover:text-white"
              >
                Experience
              </Link>
              <span className="mx-2 text-white/20">/</span>
              <span className="font-cnsans normal-case tracking-normal text-mist">
                {yuzheCase.cn}
              </span>
            </nav>
            <h1 className="mt-8 font-display text-4xl leading-[1.05] text-white md:text-6xl">
              {yuzheCase.name}
              <span className="ml-4 font-cnserif text-2xl font-normal text-mist md:text-4xl">
                {yuzheCase.cn}
              </span>
            </h1>
            <p className="mt-5 text-[11px] uppercase tracking-label text-mist-dim">
              {yuzheCase.time}
              <span className="mx-2 text-white/20">·</span>
              <span className="font-cnsans normal-case tracking-normal">
                {yuzheCase.role}
              </span>
            </p>
            <div className="hairline mt-10 w-32" />
          </Reveal>
        </div>
      </header>

      {/* ---------- background ---------- */}
      <section className="relative pb-20 md:pb-28">
        <div className="mx-auto max-w-site px-6 md:px-10">
          <SectionBlock eyebrow="BACKGROUND" eyebrowCn="背景" className="max-w-3xl">
            <p className="font-cnserif text-lg leading-relaxed text-white/90 md:text-xl">
              {yuzheCase.background}
            </p>
          </SectionBlock>
        </div>
      </section>

      {/* ---------- collaborators + role ---------- */}
      <section className="relative pb-20 md:pb-28">
        <div className="mx-auto grid max-w-site gap-12 px-6 md:grid-cols-2 md:px-10">
          <SectionBlock eyebrow="COLLABORATORS" eyebrowCn="合作者">
            <ul className="space-y-3">
              {yuzheCase.collaborators.map((c) => (
                <li key={c} className="flex gap-3">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-cyan-glow" />
                  <span className="font-cnsans text-sm leading-relaxed text-mist">{c}</span>
                </li>
              ))}
            </ul>
          </SectionBlock>
          <SectionBlock eyebrow="ROLE & RESPONSIBILITIES" eyebrowCn="角色与职责">
            <p className="font-cnsans text-sm text-white">{yuzheCase.role}</p>
            <ul className="mt-4 space-y-3">
              {yuzheCase.responsibilities.map((r) => (
                <li key={r} className="flex gap-3">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-cyan-glow" />
                  <span className="font-cnsans text-sm leading-relaxed text-mist">{r}</span>
                </li>
              ))}
            </ul>
          </SectionBlock>
        </div>
      </section>

      {/* ---------- the problem ---------- */}
      <section className="relative pb-20 md:pb-28">
        <div className="mx-auto max-w-site px-6 md:px-10">
          <SectionBlock eyebrow="THE PROBLEM" eyebrowCn="问题" className="max-w-3xl">
            <blockquote className="border-l-2 border-cyan-glow/60 pl-6">
              <p className="font-cnserif text-lg leading-relaxed text-white/90 md:text-xl">
                {yuzheCase.problem}
              </p>
            </blockquote>
          </SectionBlock>
        </div>
      </section>

      {/* ---------- actions taken ---------- */}
      <section className="relative pb-20 md:pb-28">
        <div className="mx-auto max-w-site px-6 md:px-10">
          <SectionBlock eyebrow="ACTIONS TAKEN" eyebrowCn="采取的行动">
            <ol className="space-y-5">
              {yuzheCase.actions.map((action, i) => (
                <li key={i} className="flex gap-5 border-t border-white/10 pt-5 first:border-t-0 first:pt-0">
                  <span className="font-display text-lg text-cyan-glow/80">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="max-w-2xl font-cnsans text-sm leading-relaxed text-mist md:text-base">
                    {action}
                  </span>
                </li>
              ))}
            </ol>
          </SectionBlock>
        </div>
      </section>

      {/* ---------- key judgments ---------- */}
      <section className="relative pb-20 md:pb-28">
        <div className="mx-auto max-w-site px-6 md:px-10">
          <SectionBlock eyebrow="KEY JUDGMENTS" eyebrowCn="关键判断">
            <div className="grid gap-5 md:grid-cols-3">
              {yuzheCase.keyJudgments.map((judgment) => (
                <div key={judgment} className="glass glass-hover rounded-2xl p-6">
                  <p className="font-cnsans text-sm leading-relaxed text-mist">
                    {judgment}
                  </p>
                </div>
              ))}
            </div>
          </SectionBlock>
        </div>
      </section>

      {/* ---------- results ---------- */}
      <section className="relative pb-20 md:pb-28">
        <div className="mx-auto max-w-site px-6 md:px-10">
          <SectionBlock eyebrow="RESULTS" eyebrowCn="结果">
            <div className="grid gap-5 md:grid-cols-3">
              {yuzheCase.results.map((result) => (
                <div key={result.metric} className="glass rounded-2xl p-6">
                  <p className="font-cnsans text-xs text-mist-dim">{result.metric}</p>
                  <p className="mt-3 font-display text-4xl text-white md:text-5xl">
                    {result.value}
                  </p>
                  <p className="mt-4 font-cnsans text-[10px] leading-relaxed text-mist-dim">
                    {result.note}
                  </p>
                </div>
              ))}
            </div>
          </SectionBlock>
        </div>
      </section>

      {/* ---------- materials ---------- */}
      <section className="relative pb-20 md:pb-28">
        <div className="mx-auto max-w-site px-6 md:px-10">
          <SectionBlock eyebrow="MATERIALS" eyebrowCn="过程材料">
            <div className="grid gap-6 md:grid-cols-2">
              {yuzheCase.materials.map((material) => (
                <figure key={material.src}>
                  <div className="glass overflow-hidden rounded-2xl p-2">
                    <img
                      src={material.src}
                      alt={material.caption}
                      className="w-full rounded-xl object-cover opacity-85"
                    />
                  </div>
                  <figcaption className="mt-3 font-cnsans text-xs leading-relaxed text-mist-dim">
                    {material.caption}
                  </figcaption>
                </figure>
              ))}
            </div>
          </SectionBlock>
        </div>
      </section>

      {/* ---------- next related experience ---------- */}
      {next && (
        <section className="relative pb-24 md:pb-32">
          <div className="mx-auto max-w-site px-6 md:px-10">
            <Reveal>
              <div className="hairline mb-10 w-full" />
              <p className="eyebrow mb-6">
                NEXT RELATED EXPERIENCE{" "}
                <span className="font-cnsans normal-case tracking-normal">下一段相关经历</span>
              </p>
              <Link
                href="/experience/"
                className="glass glass-hover group flex flex-col gap-3 rounded-2xl p-7 md:flex-row md:items-center md:justify-between md:p-8"
              >
                <div>
                  <p className="text-[10px] uppercase tracking-label text-mist-dim">
                    {next.group}
                    <span className="mx-2 text-white/20">·</span>
                    {next.time}
                  </p>
                  <h2 className="mt-2 font-display text-2xl text-white md:text-3xl">
                    {next.name}
                    {next.cn && (
                      <span className="ml-3 font-cnserif text-base font-normal text-mist">
                        {next.cn}
                      </span>
                    )}
                  </h2>
                  <p className="mt-3 max-w-xl font-cnsans text-sm leading-relaxed text-mist">
                    {next.summary}
                  </p>
                </div>
                <span className="shrink-0 text-sm text-cyan-glow transition-transform duration-500 ease-editorial group-hover:translate-x-1.5">
                  View experience →
                </span>
              </Link>
              <div className="mt-10 text-center">
                <Link
                  href="/experience/"
                  className="group inline-flex items-baseline gap-2 text-sm text-mist transition-colors duration-300 hover:text-white"
                >
                  <span className="text-cyan-glow transition-transform duration-500 ease-editorial group-hover:-translate-x-1">
                    ←
                  </span>
                  <span className="uppercase tracking-label text-[11px]">
                    Back to Experience
                  </span>
                  <span className="font-cnsans text-xs text-mist-dim">返回经历</span>
                </Link>
              </div>
            </Reveal>
          </div>
        </section>
      )}
    </>
  );
}
