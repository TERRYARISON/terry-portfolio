import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import GlowBackdrop from "@/components/GlowBackdrop";
import Reveal from "@/components/Reveal";
import { getProject, projects } from "@/data/projects";
import type { Project } from "@/data/projects";

interface ProjectPageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({ params }: ProjectPageProps): Metadata {
  const project = getProject(params.slug);
  if (!project) return {};
  return {
    title: `${project.name}${project.cn ? ` ${project.cn}` : ""} — Work`,
    description: project.oneLiner,
  };
}

function MetaGrid({ project }: { project: Project }) {
  const rows = [
    { label: "Type", value: project.type, cn: false },
    { label: "Status", value: project.status, cn: true },
    { label: "Role", value: project.role, cn: true },
    { label: "Year", value: project.year, cn: false },
  ];
  return (
    <dl className="grid grid-cols-2 gap-x-6 gap-y-5 md:grid-cols-4">
      {rows.map((row) => (
        <div key={row.label} className="border-t border-white/10 pt-3">
          <dt className="text-[10px] uppercase tracking-label text-mist-dim">{row.label}</dt>
          <dd className={`mt-1.5 text-sm text-white ${row.cn ? "font-cnsans" : ""}`}>
            {row.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}

function NavCard({
  project,
  direction,
}: {
  project: Project;
  direction: "prev" | "next";
}) {
  return (
    <Link
      href={`/work/${project.slug}/`}
      className={`glass glass-hover group flex h-full flex-col gap-2 rounded-2xl p-6 ${
        direction === "next" ? "md:items-end md:text-right" : ""
      }`}
    >
      <span className="text-[10px] uppercase tracking-label text-mist-dim">
        {direction === "prev" ? "← Previous" : "Next →"}
      </span>
      <span className="font-display text-xl text-white md:text-2xl">
        {project.name}
        {project.cn && (
          <span className="mt-0.5 block font-cnserif text-xs font-normal text-mist">
            {project.cn}
          </span>
        )}
      </span>
      <span className="font-cnsans text-xs text-mist-dim">{project.type}</span>
    </Link>
  );
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = getProject(params.slug);
  if (!project) notFound();

  const index = projects.findIndex((p) => p.slug === project.slug);
  const prev = projects[(index - 1 + projects.length) % projects.length];
  const next = projects[(index + 1) % projects.length];

  return (
    <>
      {/* ---------- header ---------- */}
      <header className="relative overflow-hidden pb-14 pt-32 md:pb-20 md:pt-44">
        <GlowBackdrop variant="cyan" />
        <div className="relative mx-auto max-w-site px-6 md:px-10">
          <Reveal>
            <p className="eyebrow">
              <Link
                href="/work/"
                className="transition-colors duration-300 hover:text-white"
              >
                WORK
              </Link>
              <span className="mx-2 text-white/20">/</span>
              <span className="text-mist">{project.type}</span>
            </p>
            <h1 className="mt-6 font-display text-4xl leading-[1.05] text-white md:text-6xl">
              {project.name}
              {project.cn && (
                <span className="mt-3 block font-cnserif text-xl font-normal text-mist md:text-2xl">
                  {project.cn}
                </span>
              )}
            </h1>
            <p className="mt-6 max-w-2xl font-cnserif text-lg leading-relaxed text-mist md:text-xl">
              {project.oneLiner}
            </p>
            <div className="mt-10">
              <MetaGrid project={project} />
            </div>
          </Reveal>
        </div>
      </header>

      {/* ---------- hero image ---------- */}
      <section className="relative">
        <div className="mx-auto max-w-site px-6 md:px-10">
          <Reveal>
            <div className="glass overflow-hidden rounded-3xl p-2 md:p-3">
              <img
                src={project.image}
                alt={project.name}
                className="w-full rounded-2xl object-cover opacity-90"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- summary + highlights ---------- */}
      <section className="relative py-24 md:py-32">
        <GlowBackdrop variant="pink" />
        <div className="relative mx-auto grid max-w-site gap-12 px-6 md:grid-cols-12 md:px-10">
          <Reveal className="md:col-span-7">
            <p className="eyebrow">ABOUT <span className="font-cnsans normal-case tracking-normal">关于</span></p>
            <div className="prose-terry mt-6 font-cnsans text-sm leading-relaxed md:text-base">
              {project.summary.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 rounded-full border border-cyan-glow/30 px-5 py-2.5 text-xs uppercase tracking-label text-cyan-glow transition-colors duration-300 hover:bg-cyan-glow/10"
              >
                Visit live →
              </a>
            )}
          </Reveal>

          <Reveal delay={0.1} className="md:col-span-5">
            <div className="glass rounded-2xl p-7 md:p-8">
              <p className="eyebrow">HIGHLIGHTS <span className="font-cnsans normal-case tracking-normal">要点</span></p>
              <ul className="mt-6 space-y-4">
                {project.highlights.map((highlight, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-cyan-glow" />
                    <span className="font-cnsans text-sm leading-relaxed text-mist">
                      {highlight}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- prev / next ---------- */}
      <section className="relative pb-24 md:pb-32">
        <div className="mx-auto max-w-site px-6 md:px-10">
          <Reveal>
            <div className="hairline mb-10 w-full" />
            <div className="grid gap-5 md:grid-cols-2">
              <NavCard project={prev} direction="prev" />
              <NavCard project={next} direction="next" />
            </div>
            <div className="mt-10 text-center">
              <Link
                href="/work/"
                className="group inline-flex items-baseline gap-2 text-sm text-mist transition-colors duration-300 hover:text-white"
              >
                <span className="text-cyan-glow transition-transform duration-500 ease-editorial group-hover:-translate-x-1">
                  ←
                </span>
                <span className="uppercase tracking-label text-[11px]">Back to Work</span>
                <span className="font-cnsans text-xs text-mist-dim">返回作品</span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
