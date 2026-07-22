import Link from "next/link";
import GlowBackdrop from "@/components/GlowBackdrop";
import Reveal from "@/components/Reveal";
import { site } from "@/data/site";

const linkCls =
  "group inline-flex items-baseline gap-1.5 text-mist transition-colors duration-300 hover:text-white";

/** Compact strip: resume links, PDFs, email, contact line. */
export default function ResumeContactStrip() {
  return (
    <section className="relative py-24 md:py-32">
      <GlowBackdrop variant="pink" />
      <div className="relative mx-auto max-w-site px-6 md:px-10">
        <Reveal>
          <div className="glass rounded-2xl p-7 md:p-10">
            <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
              <div className="max-w-md">
                <p className="font-display text-xl leading-snug text-white md:text-2xl">
                  {site.contactLine.en}
                </p>
                <p className="mt-2 font-cnserif text-sm text-mist">{site.contactLine.cn}</p>
              </div>

              <nav className="flex flex-col gap-3 text-sm md:items-end" aria-label="Resume and contact">
                <Link href="/resume/" className={linkCls}>
                  <span className="text-[11px] uppercase tracking-label">View Resume</span>
                  <span className="text-cyan-glow transition-transform duration-500 ease-editorial group-hover:translate-x-1">
                    →
                  </span>
                </Link>
                <div className="flex flex-wrap gap-x-6 gap-y-2 md:justify-end">
                  <a href="/resume/resume-cn.pdf" className={linkCls}>
                    <span className="font-cnsans text-xs">中文简历 PDF</span>
                  </a>
                  <a href="/resume/resume-en.pdf" className={linkCls}>
                    <span className="text-xs tracking-label">English PDF</span>
                  </a>
                </div>
                <a href={`mailto:${site.email}`} className={linkCls}>
                  <span className="text-xs tracking-label">{site.email}</span>
                </a>
              </nav>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
