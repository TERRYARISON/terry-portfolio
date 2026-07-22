import Link from "next/link";
import GlowBackdrop from "@/components/GlowBackdrop";
import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";
import { getProject } from "@/data/projects";
import type { Project } from "@/data/projects";

function MetaRow({ project }: { project: Project }) {
  return (
    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[11px] uppercase tracking-label text-mist-dim">
      <span>{project.status}</span>
      <span aria-hidden className="text-white/20">
        ·
      </span>
      <span className="font-cnsans normal-case tracking-normal">{project.role}</span>
    </div>
  );
}

/** Three editorial cards of varying sizes — PTG large, two smaller offset. */
export default function SelectedWork() {
  const ptg = getProject("ptg");
  const visual = getProject("terry-visual-studies");
  const archive = getProject("archive-of-questions");
  if (!ptg || !visual || !archive) return null;

  return (
    <section className="grain relative py-24 md:py-32">
      <GlowBackdrop variant="pink" />
      <div className="relative mx-auto max-w-site px-6 md:px-10">
        <SectionHeader
          eyebrow="SELECTED WORK"
          title="Selected Work"
          cn="精选作品"
        />

        <div className="grid gap-6 md:grid-cols-12">
          {/* large card — PTG */}
          <Reveal className="md:col-span-7">
            <Link
              href={`/work/${ptg.slug}/`}
              className="glass glass-hover group block h-full overflow-hidden rounded-2xl"
            >
              <div className="overflow-hidden">
                <img
                  src={ptg.image}
                  alt={ptg.name}
                  className="aspect-[16/9] w-full object-cover opacity-80 transition-transform duration-700 ease-editorial group-hover:scale-[1.03]"
                />
              </div>
              <div className="p-7 md:p-9">
                <p className="eyebrow mb-4">{ptg.type}</p>
                <h3 className="font-display text-3xl text-white md:text-4xl">{ptg.name}</h3>
                <p className="mt-3 max-w-md font-cnsans text-sm leading-relaxed text-mist">
                  {ptg.oneLiner}
                </p>
                <div className="mt-6">
                  <MetaRow project={ptg} />
                </div>
                <span className="mt-6 inline-block text-sm text-cyan-glow transition-transform duration-500 ease-editorial group-hover:translate-x-1.5">
                  View project →
                </span>
              </div>
            </Link>
          </Reveal>

          {/* two smaller offset cards */}
          <div className="flex flex-col gap-6 md:col-span-5 md:mt-16">
            {[visual, archive].map((project, i) => (
              <Reveal key={project.slug} delay={0.1 + i * 0.08}>
                <Link
                  href={`/work/${project.slug}/`}
                  className="glass glass-hover group flex h-full gap-5 overflow-hidden rounded-2xl p-5 md:p-6"
                >
                  <div className="w-24 shrink-0 overflow-hidden rounded-xl md:w-28">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="h-full w-full object-cover opacity-80 transition-transform duration-700 ease-editorial group-hover:scale-[1.05]"
                    />
                  </div>
                  <div className="min-w-0">
                    <p className="eyebrow mb-2">{project.type}</p>
                    <h3 className="font-display text-lg leading-snug text-white md:text-xl">
                      {project.name}
                      {project.cn && (
                        <span className="mt-0.5 block font-cnserif text-xs font-normal text-mist">
                          {project.cn}
                        </span>
                      )}
                    </h3>
                    <p className="mt-2 line-clamp-2 font-cnsans text-xs leading-relaxed text-mist">
                      {project.oneLiner}
                    </p>
                    <div className="mt-3">
                      <MetaRow project={project} />
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}

            <Reveal delay={0.25}>
              <Link
                href="/work/"
                className="group inline-flex items-baseline gap-2 px-1 text-sm text-mist transition-colors duration-300 hover:text-white"
              >
                <span className="uppercase tracking-label text-[11px]">All work</span>
                <span className="font-cnsans text-xs text-mist-dim">全部作品</span>
                <span className="text-cyan-glow transition-transform duration-500 ease-editorial group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
