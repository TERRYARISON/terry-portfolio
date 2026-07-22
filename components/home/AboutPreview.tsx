import Link from "next/link";
import GlowBackdrop from "@/components/GlowBackdrop";
import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";
import { profile } from "@/data/profile";

/** Real portrait + public bio, fields, value offered, current focus. */
export default function AboutPreview() {
  return (
    <section className="relative py-24 md:py-32">
      <GlowBackdrop variant="both" />
      <div className="relative mx-auto max-w-site px-6 md:px-10">
        <SectionHeader eyebrow="ABOUT" title="About" cn="关于" />

        <div className="grid gap-10 md:grid-cols-12">
          {/* portrait */}
          <Reveal className="md:col-span-4">
            <div className="glass overflow-hidden rounded-2xl p-3">
              <img
                src={profile.portrait}
                alt="Terry 肖像"
                className="aspect-[4/5] w-full rounded-xl object-cover"
              />
              <div className="flex items-center justify-between px-2 py-3">
                <span className="text-[10px] uppercase tracking-label text-mist-dim">
                  {profile.city}
                </span>
                <span className="text-[10px] uppercase tracking-label text-mist-dim">
                  {profile.careerSpan}
                </span>
              </div>
            </div>
          </Reveal>

          {/* bio */}
          <div className="md:col-span-8">
            <Reveal>
              <p className="max-w-xl font-cnsans text-base leading-relaxed text-mist md:text-lg">
                {profile.publicBio}
              </p>
            </Reveal>

            <Reveal delay={0.1} className="mt-8">
              <p className="eyebrow mb-4">Fields · 领域</p>
              <ul className="flex flex-wrap gap-2.5">
                {profile.fields.map((field) => (
                  <li
                    key={field}
                    className="glass rounded-full px-4 py-2 font-cnsans text-xs text-mist"
                  >
                    {field}
                  </li>
                ))}
              </ul>
            </Reveal>

            <div className="mt-10 grid gap-8 sm:grid-cols-2">
              <Reveal delay={0.15}>
                <p className="eyebrow mb-3">Value offered · 我能提供</p>
                <p className="font-cnsans text-sm leading-relaxed text-mist">
                  {profile.valueOffered}
                </p>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="eyebrow mb-3">Current focus · 当前专注</p>
                <p className="font-cnsans text-sm leading-relaxed text-mist">
                  {profile.currentFocus}
                </p>
              </Reveal>
            </div>

            <Reveal delay={0.25} className="mt-10 flex flex-wrap gap-6">
              <Link
                href="/resume/"
                className="group inline-flex items-baseline gap-2 text-sm text-mist transition-colors duration-300 hover:text-white"
              >
                <span className="text-[11px] uppercase tracking-label">View Resume</span>
                <span className="font-cnsans text-xs text-mist-dim">查看简历</span>
                <span className="text-cyan-glow transition-transform duration-500 ease-editorial group-hover:translate-x-1">
                  →
                </span>
              </Link>
              <Link
                href="/about/"
                className="group inline-flex items-baseline gap-2 text-sm text-mist transition-colors duration-300 hover:text-white"
              >
                <span className="text-[11px] uppercase tracking-label">More about Terry</span>
                <span className="font-cnsans text-xs text-mist-dim">更多</span>
                <span className="text-pink-glow transition-transform duration-500 ease-editorial group-hover:translate-x-1">
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
