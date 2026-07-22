import Link from "next/link";
import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import {
  experiences,
  experienceGroups,
  groupLabels,
} from "@/data/experiences";

export const metadata: Metadata = {
  title: "Experience — What has Terry taken responsibility for?",
  description:
    "Featured case study and grouped experience: project direction, business & operations, content & storytelling, collaboration. / 代表经历与分组经历。",
};

export default function ExperiencePage() {
  const featured = experiences.find((e) => e.featured);
  const rest = experiences.filter((e) => !e.featured);

  return (
    <>
      {/* ---------- page header ---------- */}
      <header className="relative pb-14 pt-32 md:pb-20 md:pt-44">
        <div className="mx-auto max-w-site px-6 md:px-10">
          <Reveal>
            <p className="eyebrow">
              EXPERIENCE{" "}
              <span className="font-cnsans normal-case tracking-normal">经历</span>
            </p>
            <h1 className="mt-6 max-w-3xl font-display text-4xl leading-[1.08] text-white md:text-6xl">
              What has Terry taken{" "}
              <span className="display-italic">responsibility</span> for?
            </h1>
            <p className="mt-5 font-cnserif text-lg text-mist md:text-xl">
              经历不是头衔的清单，而是承担过的责任。
            </p>
            <p className="mt-6 max-w-2xl font-cnsans text-sm leading-relaxed text-mist md:text-base">
              这一页刻意保持朴素：真实的时间、真实的角色、真实做过的事。首先是一段我愿意完整展开的代表经历，其余按责任类型分组呈现。
            </p>
            <div className="hairline mt-10 w-32" />
          </Reveal>
        </div>
      </header>

      {/* ---------- featured experience ---------- */}
      {featured && (
        <section className="relative pb-24 md:pb-32">
          <div className="mx-auto max-w-site px-6 md:px-10">
            <Reveal>
              <Link
                href="/experience/yuzhe/"
                className="glass glass-hover group grid overflow-hidden rounded-2xl md:grid-cols-2"
              >
                <div className="relative min-h-56 overflow-hidden md:min-h-[22rem]">
                  {featured.image && (
                    <img
                      src={featured.image}
                      alt={featured.cn ?? featured.name}
                      className="absolute inset-0 h-full w-full object-cover opacity-80 transition-transform duration-700 ease-editorial group-hover:scale-[1.03]"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent md:bg-gradient-to-r" />
                </div>
                <div className="flex flex-col justify-center p-7 md:p-10">
                  <p className="inline-flex w-fit items-center gap-2 rounded-full border border-cyan-glow/30 px-3 py-1 text-[10px] uppercase tracking-label text-cyan-glow">
                    Featured Experience
                    <span className="font-cnsans normal-case tracking-normal">代表经历</span>
                  </p>
                  <h2 className="mt-5 font-display text-3xl text-white md:text-4xl">
                    {featured.name}
                    {featured.cn && (
                      <span className="ml-3 font-cnserif text-xl text-mist md:text-2xl">
                        {featured.cn}
                      </span>
                    )}
                  </h2>
                  <p className="mt-2 text-[11px] uppercase tracking-label text-mist-dim">
                    {featured.time}
                    <span className="mx-2 text-white/20">·</span>
                    <span className="font-cnsans normal-case tracking-normal">
                      {featured.role}
                    </span>
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
          </div>
        </section>
      )}

      {/* ---------- other experience, grouped ---------- */}
      <section className="relative pb-24 md:pb-32">
        <div className="mx-auto max-w-site px-6 md:px-10">
          <Reveal className="mb-12">
            <p className="eyebrow">
              OTHER EXPERIENCE{" "}
              <span className="font-cnsans normal-case tracking-normal">其他经历</span>
            </p>
            <div className="hairline mt-6 w-24" />
          </Reveal>

          <div className="space-y-16">
            {experienceGroups.map((group) => {
              const items = rest.filter((e) => e.group === group);
              if (items.length === 0) return null;
              return (
                <Reveal key={group}>
                  <div className="grid gap-8 md:grid-cols-12">
                    <div className="md:col-span-4">
                      <h2 className="font-display text-2xl text-white md:text-3xl">
                        {group}
                      </h2>
                      <p className="mt-1.5 font-cnserif text-sm text-mist">
                        {groupLabels[group]}
                      </p>
                    </div>
                    <div className="md:col-span-8">
                      {items.map((exp) => (
                        <article
                          key={exp.slug}
                          className="border-t border-white/10 py-7 first:pt-0 last:pb-0 md:first:border-t-0"
                        >
                          <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                            <h3 className="font-display text-xl text-white">
                              {exp.name}
                              {exp.cn && (
                                <span className="ml-3 font-cnserif text-sm font-normal text-mist">
                                  {exp.cn}
                                </span>
                              )}
                            </h3>
                            <p className="text-[11px] uppercase tracking-label text-mist-dim">
                              {exp.time}
                            </p>
                          </div>
                          <p className="mt-2 font-cnsans text-xs uppercase tracking-label text-mist-dim">
                            <span className="normal-case tracking-normal">{exp.role}</span>
                          </p>
                          <p className="mt-3 max-w-2xl font-cnsans text-sm leading-relaxed text-mist">
                            {exp.summary}
                          </p>
                        </article>
                      ))}
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>

          {/* ---------- resume link ---------- */}
          <Reveal className="mt-20">
            <div className="hairline mb-10 w-full" />
            <Link
              href="/resume/"
              className="group inline-flex items-baseline gap-3 text-sm text-mist transition-colors duration-300 hover:text-white"
            >
              <span className="uppercase tracking-label text-[11px]">
                View full Resume
              </span>
              <span className="font-cnsans text-xs text-mist-dim">查看完整简历</span>
              <span className="text-cyan-glow transition-transform duration-500 ease-editorial group-hover:translate-x-1">
                →
              </span>
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
