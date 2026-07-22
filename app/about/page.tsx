import Link from "next/link";
import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import GlassCard from "@/components/GlassCard";
import GlowBackdrop from "@/components/GlowBackdrop";
import SectionHeader from "@/components/SectionHeader";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: "ABOUT — 关于",
  description: profile.publicBioShort,
};

export default function AboutPage() {
  return (
    <div className="relative">
      <GlowBackdrop />

      {/* ---------- header ---------- */}
      <section className="mx-auto max-w-site px-6 pb-16 pt-32 md:px-10 md:pt-40">
        <Reveal className="flex flex-col gap-5">
          <p className="eyebrow">ABOUT · 关于</p>
          <h1 className="font-display text-5xl leading-none text-white md:text-7xl">
            Ab<span className="display-italic">ou</span>t
          </h1>
          <p className="font-cnserif text-xl text-mist md:text-2xl">关于</p>
          <div className="hairline w-24" />
        </Reveal>
      </section>

      {/* ---------- portrait + bio ---------- */}
      <section className="mx-auto max-w-site px-6 md:px-10">
        <div className="grid gap-10 md:grid-cols-12 md:gap-14">
          <Reveal className="md:col-span-5">
            <div className="glass rounded-2xl p-3">
              <div className="overflow-hidden rounded-xl">
                <img
                  src={profile.portrait}
                  alt={`${profile.name} 的职业肖像`}
                  className="aspect-[3/4] w-full object-cover"
                />
              </div>
            </div>
            <div className="mt-5 flex flex-wrap gap-x-4 gap-y-1 text-xs tracking-label text-mist-dim">
              <span className="font-cnsans tracking-normal">{profile.city}</span>
              <span aria-hidden className="text-white/20">
                /
              </span>
              <span className="font-cnsans tracking-normal">{profile.careerSpan}</span>
            </div>
          </Reveal>

          <div className="flex flex-col justify-center gap-8 md:col-span-7">
            <Reveal delay={0.08} className="flex flex-col gap-4">
              <p className="eyebrow">Bio · 简介</p>
              <p className="font-cnserif text-2xl leading-relaxed text-white md:text-3xl">{profile.publicBio}</p>
            </Reveal>

            <Reveal delay={0.16} className="flex flex-col gap-3">
              <p className="eyebrow">Fields · 领域</p>
              <ul className="flex flex-wrap gap-2">
                {profile.fields.map((field) => (
                  <li
                    key={field}
                    className="glass rounded-full px-4 py-1.5 font-cnsans text-xs text-mist"
                  >
                    {field}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------- value + working style ---------- */}
      <section className="mx-auto max-w-site px-6 py-24 md:px-10 md:py-32">
        <SectionHeader eyebrow="HOW I WORK" title="What I offer" cn="我能提供的价值" />

        <div className="grid gap-6 md:grid-cols-2">
          <Reveal>
            <GlassCard className="flex h-full flex-col gap-4 p-8">
              <p className="eyebrow">Value · 价值</p>
              <p className="font-cnserif text-xl leading-relaxed text-white md:text-2xl">{profile.valueOffered}</p>
              <div className="mt-auto pt-4">
                <p className="text-[11px] uppercase tracking-label text-mist-dim">
                  Current focus <span className="font-cnsans normal-case tracking-normal">当前重心</span>
                </p>
                <p className="mt-2 font-cnsans text-sm leading-relaxed text-mist">{profile.currentFocus}</p>
              </div>
            </GlassCard>
          </Reveal>

          <Reveal delay={0.08}>
            <GlassCard className="flex h-full flex-col gap-4 p-8">
              <p className="eyebrow">Working style · 工作方式</p>
              <ul className="flex flex-col gap-4">
                {profile.workingStyle.map((item, i) => (
                  <li key={item} className="flex gap-4">
                    <span className="font-display text-sm text-cyan-glow">{String(i + 1).padStart(2, "0")}</span>
                    <span className="font-cnsans text-sm leading-relaxed text-mist">{item}</span>
                  </li>
                ))}
              </ul>
            </GlassCard>
          </Reveal>
        </div>

        {/* ---------- links ---------- */}
        <Reveal className="mt-12 flex flex-wrap gap-4">
          <Link
            href="/resume/"
            className="glass glass-hover inline-flex items-center gap-3 rounded-full px-6 py-3 text-xs uppercase tracking-label text-mist transition-colors hover:text-white"
          >
            Resume
            <span className="font-cnsans normal-case tracking-normal text-mist-dim">查看简历</span>
            <span aria-hidden>→</span>
          </Link>
          <Link
            href="/contact/"
            className="glass glass-hover inline-flex items-center gap-3 rounded-full px-6 py-3 text-xs uppercase tracking-label text-mist transition-colors hover:text-white"
          >
            Contact
            <span className="font-cnsans normal-case tracking-normal text-mist-dim">联系我</span>
            <span aria-hidden>→</span>
          </Link>
        </Reveal>
      </section>
    </div>
  );
}
