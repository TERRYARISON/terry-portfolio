import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import ResumeView from "@/components/ResumeView";
import { profile, resume } from "@/data/profile";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "RESUME — 简历",
  description: resume.summaryCn,
};

export default function ResumePage() {
  return (
    <div className="mx-auto max-w-site px-6 pb-24 pt-32 md:px-10 md:pb-32 md:pt-40">
      {/* ---------- header ---------- */}
      <Reveal className="flex flex-col gap-5">
        <p className="eyebrow">RESUME · 简历</p>
        <h1 className="font-display text-5xl leading-none text-white md:text-7xl">
          Res<span className="display-italic">u</span>mé
        </h1>
        <p className="font-cnserif text-xl text-mist md:text-2xl">简历</p>
        <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs tracking-label text-mist-dim">
          <span className="font-display tracking-[0.18em]">{profile.name.toUpperCase()}</span>
          <span aria-hidden className="text-white/20">
            /
          </span>
          <span className="font-cnsans tracking-normal">{profile.city}</span>
          <span aria-hidden className="text-white/20">
            /
          </span>
          <span className="font-cnsans tracking-normal">{profile.careerSpan}</span>
        </div>
      </Reveal>

      {/* ---------- download (no-print) ---------- */}
      <Reveal delay={0.08} className="no-print mt-8 flex flex-wrap gap-4">
        <a
          href="/resume/resume-cn.pdf"
          download
          className="glass glass-hover inline-flex items-center gap-3 rounded-full px-6 py-3 text-xs tracking-label text-mist transition-colors hover:text-white"
        >
          下载中文 PDF
          <span aria-hidden>↓</span>
        </a>
        <a
          href="/resume/resume-en.pdf"
          download
          className="glass glass-hover inline-flex items-center gap-3 rounded-full px-6 py-3 text-xs uppercase tracking-label text-mist transition-colors hover:text-white"
        >
          Download English PDF
          <span aria-hidden>↓</span>
        </a>
      </Reveal>

      <div className="mt-14 md:mt-16">
        <ResumeView
          resume={resume}
          contact={{ email: site.email, city: site.city, timezone: site.timezone }}
        />
      </div>
    </div>
  );
}
