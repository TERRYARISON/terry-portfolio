import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import GlowBackdrop from "@/components/GlowBackdrop";
import CopyEmail from "@/components/CopyEmail";
import { site, socialLinks } from "@/data/site";

export const metadata: Metadata = {
  title: "CONTACT — 联系",
  description: `${site.contactLine.en} ${site.contactLine.cn}`,
};

export default function ContactPage() {
  return (
    <div className="relative overflow-hidden">
      {/* background echo of the home visual */}
      <div aria-hidden className="absolute inset-0">
        <img
          src="/assets/contact-echo.jpg"
          alt=""
          className="h-full w-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/40 to-ink" />
      </div>
      <GlowBackdrop />

      <div className="relative mx-auto flex min-h-screen max-w-site flex-col justify-center px-6 pb-24 pt-32 md:px-10 md:pt-40">
        {/* ---------- header ---------- */}
        <Reveal className="flex flex-col gap-5">
          <p className="eyebrow">CONTACT · 联系</p>
          <h1 className="font-display text-5xl leading-none text-white md:text-7xl">
            Say <span className="display-italic">hello</span>
          </h1>
          <p className="font-cnserif text-xl text-mist md:text-2xl">联系</p>
          <div className="max-w-xl">
            <p className="text-sm leading-relaxed text-mist">{site.contactLine.en}</p>
            <p className="mt-1 font-cnsans text-sm leading-relaxed text-mist-dim">{site.contactLine.cn}</p>
          </div>
        </Reveal>

        {/* ---------- email ---------- */}
        <Reveal delay={0.1} className="mt-14 flex flex-col gap-6 md:mt-16">
          <a
            href={`mailto:${site.email}`}
            className="break-all font-display text-3xl leading-tight text-white transition-colors hover:text-cyan-glow md:text-6xl"
          >
            {site.email}
          </a>
          <div>
            <CopyEmail email={site.email} />
          </div>
        </Reveal>

        {/* ---------- socials ---------- */}
        <Reveal delay={0.16} className="mt-14 md:mt-16">
          <p className="eyebrow mb-5">Elsewhere · 别处</p>
          <ul className="flex flex-wrap gap-x-8 gap-y-3">
            {socialLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                  className="group inline-flex items-baseline gap-2 text-sm text-mist transition-colors hover:text-white"
                >
                  <span className="tracking-label">{link.label}</span>
                  <span aria-hidden className="text-mist-dim transition-colors group-hover:text-cyan-glow">
                    ↗
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </Reveal>

        {/* ---------- city / timezone ---------- */}
        <Reveal delay={0.22} className="mt-14 md:mt-16">
          <div className="hairline mb-6 w-full max-w-md" />
          <div className="flex flex-wrap gap-x-6 gap-y-1 text-xs tracking-label text-mist-dim">
            <span className="font-cnsans tracking-normal">{site.city}</span>
            <span aria-hidden className="text-white/20">
              /
            </span>
            <span>{site.timezone}</span>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
