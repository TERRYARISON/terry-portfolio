import Link from "next/link";
import type { Metadata } from "next";
import GlowBackdrop from "@/components/GlowBackdrop";
import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";
import { products, visuals, selectedProjects } from "@/data/projects";
import type { Project } from "@/data/projects";

export const metadata: Metadata = {
  title: "Work — What has Terry made?",
  description:
    "Products, visual studies and selected projects. / 产品、视觉研究与精选项目。",
};

const visualGallery = [
  { src: "/assets/visual-1.jpg", alt: "Visual study — crystal form" },
  { src: "/assets/visual-2.jpg", alt: "Visual study — organic light" },
  { src: "/assets/visual-3.jpg", alt: "Visual study — dark field" },
];

function MetaLine({ project }: { project: Project }) {
  return (
    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[11px] uppercase tracking-label text-mist-dim">
      <span>{project.status}</span>
      <span aria-hidden className="text-white/20">
        ·
      </span>
      <span className="font-cnsans normal-case tracking-normal">{project.role}</span>
      <span aria-hidden className="text-white/20">
        ·
      </span>
      <span>{project.year}</span>
    </div>
  );
}

export default function WorkPage() {
  return (
    <>
      {/* ---------- page header ---------- */}
      <header className="relative overflow-hidden pb-16 pt-32 md:pb-24 md:pt-44">
        <GlowBackdrop variant="both" />
        <div className="relative mx-auto max-w-site px-6 md:px-10">
          <Reveal>
            <p className="eyebrow">
              WORK <span className="font-cnsans normal-case tracking-normal">作品</span>
            </p>
            <h1 className="mt-6 font-display text-4xl leading-[1.05] text-white md:text-7xl">
              What has Terry <span className="display-italic">made?</span>
            </h1>
            <p className="mt-5 font-cnserif text-lg text-mist md:text-xl">
              作品是回答，也是新的问题。
            </p>
            <p className="mt-6 max-w-2xl font-cnsans text-sm leading-relaxed text-mist md:text-base">
              从产品工具到视觉研究，再到归档式的小项目——这里收集的是我亲手完成、并愿意为之负责的东西。每一件都可以点进去，看它背后的判断与过程。
            </p>
            <div className="hairline mt-10 w-32" />
          </Reveal>
        </div>
      </header>

      {/* ---------- a) products ---------- */}
      <section className="grain relative py-24 md:py-32">
        <GlowBackdrop variant="cyan" />
        <div className="relative mx-auto max-w-site px-6 md:px-10">
          <SectionHeader
            eyebrow="PRODUCTS"
            title="Products"
            cn="产品"
            description="正在被真实使用、仍在生长的产品工具。"
          />
          {products.map((project) => (
            <Reveal key={project.slug}>
              <Link
                href={`/work/${project.slug}/`}
                className="glass glass-hover group grid overflow-hidden rounded-3xl lg:grid-cols-5"
              >
                <div className="relative min-h-64 overflow-hidden lg:col-span-3 lg:min-h-[26rem]">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="absolute inset-0 h-full w-full object-cover opacity-85 transition-transform duration-700 ease-editorial group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent lg:bg-gradient-to-r" />
                </div>
                <div className="flex flex-col justify-center p-8 md:p-12 lg:col-span-2">
                  <p className="eyebrow">{project.type}</p>
                  <h3 className="mt-4 font-display text-4xl text-white md:text-5xl">
                    {project.name}
                    {project.cn && (
                      <span className="mt-2 block font-cnserif text-xl font-normal text-mist md:text-2xl">
                        {project.cn}
                      </span>
                    )}
                  </h3>
                  <p className="mt-5 font-cnsans text-sm leading-relaxed text-mist md:text-base">
                    {project.oneLiner}
                  </p>
                  <div className="mt-8 space-y-3 border-t border-white/10 pt-6">
                    <div className="flex items-baseline justify-between gap-4 text-xs">
                      <span className="uppercase tracking-label text-mist-dim">Status</span>
                      <span className="font-cnsans text-mist">{project.status}</span>
                    </div>
                    <div className="flex items-baseline justify-between gap-4 text-xs">
                      <span className="uppercase tracking-label text-mist-dim">Role</span>
                      <span className="font-cnsans text-mist">{project.role}</span>
                    </div>
                    <div className="flex items-baseline justify-between gap-4 text-xs">
                      <span className="uppercase tracking-label text-mist-dim">Year</span>
                      <span className="text-mist">{project.year}</span>
                    </div>
                  </div>
                  <span className="mt-8 inline-block text-sm text-cyan-glow transition-transform duration-500 ease-editorial group-hover:translate-x-1.5">
                    View project →
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------- b) visual ---------- */}
      <section className="relative py-24 md:py-32">
        <GlowBackdrop variant="pink" />
        <div className="relative mx-auto max-w-site px-6 md:px-10">
          <SectionHeader
            eyebrow="VISUAL"
            title="Visual"
            cn="视觉研究"
            description="关于光、晶体与有机形态的长期视觉练习。"
          />
          {visuals.map((project) => (
            <Reveal key={project.slug}>
              <Link
                href={`/work/${project.slug}/`}
                className="glass glass-hover group block overflow-hidden rounded-3xl"
              >
                <div className="grid gap-4 p-4 md:grid-cols-3 md:p-6">
                  <div className="overflow-hidden rounded-2xl md:col-span-3">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="aspect-[21/9] w-full object-cover opacity-85 transition-transform duration-700 ease-editorial group-hover:scale-[1.02]"
                    />
                  </div>
                  {visualGallery.map((img) => (
                    <div key={img.src} className="overflow-hidden rounded-2xl">
                      <img
                        src={img.src}
                        alt={img.alt}
                        className="aspect-[4/3] w-full object-cover opacity-75 transition-all duration-700 ease-editorial group-hover:scale-[1.04] group-hover:opacity-90"
                      />
                    </div>
                  ))}
                </div>
                <div className="flex flex-col gap-4 px-7 pb-8 md:flex-row md:items-end md:justify-between md:px-10 md:pb-10">
                  <div>
                    <p className="eyebrow">{project.type}</p>
                    <h3 className="mt-3 font-display text-3xl text-white md:text-4xl">
                      {project.name}
                      {project.cn && (
                        <span className="mt-1 block font-cnserif text-lg font-normal text-mist md:text-xl">
                          {project.cn}
                        </span>
                      )}
                    </h3>
                    <p className="mt-3 max-w-xl font-cnsans text-sm leading-relaxed text-mist">
                      {project.oneLiner}
                    </p>
                    <div className="mt-5">
                      <MetaLine project={project} />
                    </div>
                  </div>
                  <span className="shrink-0 text-sm text-cyan-glow transition-transform duration-500 ease-editorial group-hover:translate-x-1.5">
                    View project →
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------- c) selected projects ---------- */}
      <section className="grain relative py-24 md:py-32">
        <div className="relative mx-auto max-w-site px-6 md:px-10">
          <SectionHeader
            eyebrow="SELECTED PROJECTS"
            title="Selected Projects"
            cn="精选项目"
            description="规模更小，但同样被认真完成的独立项目。"
          />
          <div className="grid gap-6 md:grid-cols-2">
            {selectedProjects.map((project, i) => (
              <Reveal key={project.slug} delay={i * 0.08}>
                <Link
                  href={`/work/${project.slug}/`}
                  className="glass glass-hover group flex h-full flex-col overflow-hidden rounded-2xl"
                >
                  <div className="overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="aspect-[16/9] w-full object-cover opacity-80 transition-transform duration-700 ease-editorial group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-7 md:p-8">
                    <p className="eyebrow">{project.type}</p>
                    <h3 className="mt-3 font-display text-2xl text-white md:text-3xl">
                      {project.name}
                      {project.cn && (
                        <span className="mt-1 block font-cnserif text-base font-normal text-mist">
                          {project.cn}
                        </span>
                      )}
                    </h3>
                    <p className="mt-3 flex-1 font-cnsans text-sm leading-relaxed text-mist">
                      {project.oneLiner}
                    </p>
                    <div className="mt-6">
                      <MetaLine project={project} />
                    </div>
                    <span className="mt-6 inline-block text-sm text-cyan-glow transition-transform duration-500 ease-editorial group-hover:translate-x-1.5">
                      View project →
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
