"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import MouseGlow from "@/components/MouseGlow";
import SoundToggle from "@/components/SoundToggle";
import { site } from "@/data/site";

/** Full-screen site cover. No project names allowed here. */
export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <section ref={ref} className="grain relative flex min-h-screen items-center overflow-hidden">
      {/* background: ken burns + slight parallax */}
      <motion.div
        aria-hidden
        className="absolute inset-0"
        style={reduce ? undefined : { y: bgY }}
      >
        <div className="kenburns absolute inset-[-4%]">
          <img
            src="/assets/hero-terry.jpg"
            alt=""
            className="h-full w-full object-cover opacity-70"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/35 to-ink" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(5,5,5,0.55)_100%)]" />
      </motion.div>

      <MouseGlow />

      {/* ambient orbs */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="glow-orb drift left-[-8%] top-[12%] h-[30rem] w-[30rem] bg-cyan-glow/10" />
        <div
          className="glow-orb drift bottom-[8%] right-[-10%] h-[28rem] w-[28rem] bg-pink-glow/10"
          style={{ animationDelay: "-9s" }}
        />
      </div>

      {/* content */}
      <motion.div
        className="relative z-20 mx-auto w-full max-w-site px-6 pb-28 pt-32 md:px-10"
        style={reduce ? undefined : { opacity: contentOpacity, y: contentY }}
      >
        <motion.p
          className="eyebrow mb-8"
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          Personal Portfolio · 个人作品集
        </motion.p>

        <motion.h1
          className="font-display text-[clamp(4.5rem,16vw,13rem)] leading-[0.95] tracking-[0.06em] text-white"
          initial={reduce ? false : { opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          TERRY
        </motion.h1>

        <motion.div
          className="mt-8 max-w-2xl"
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="font-display text-2xl leading-snug text-white md:text-4xl">
            <span className="display-italic">{site.slogan.en}</span>
          </p>
          <p className="mt-3 font-cnserif text-base text-mist md:text-lg">{site.slogan.cn}</p>

          <div className="hairline my-8 w-32" />

          <p className="text-sm leading-relaxed text-mist md:text-base">
            {site.description.en}
            <span className="mx-2 text-mist-dim">/</span>
            <span className="font-cnsans">{site.description.cn}</span>
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#site-index"
              className="glass glass-hover group rounded-full px-7 py-3.5 transition-transform"
            >
              <span className="block text-[11px] uppercase tracking-nav text-white">
                View Portfolio
              </span>
              <span className="mt-0.5 block font-cnsans text-[11px] text-mist-dim transition-colors duration-300 group-hover:text-cyan-glow">
                浏览全站
              </span>
            </a>
            <Link
              href="/contact/"
              className="group rounded-full border border-white/15 px-7 py-3.5 transition-colors duration-500 hover:border-pink-glow/40"
            >
              <span className="block text-[11px] uppercase tracking-nav text-mist transition-colors duration-300 group-hover:text-white">
                Contact
              </span>
              <span className="mt-0.5 block font-cnsans text-[11px] text-mist-dim transition-colors duration-300 group-hover:text-pink-glow">
                联系
              </span>
            </Link>
          </div>
        </motion.div>
      </motion.div>

      {/* bottom bar: scroll hint + sound */}
      <div className="absolute inset-x-0 bottom-0 z-20">
        <div className="mx-auto flex max-w-site items-end justify-between px-6 pb-8 md:px-10">
          <a
            href="#site-index"
            className="group flex flex-col items-start gap-2"
            aria-label="Scroll to site index"
          >
            <span className="text-[10px] uppercase tracking-label text-mist-dim transition-colors duration-300 group-hover:text-mist">
              Scroll
            </span>
            <span className="block h-10 w-px overflow-hidden bg-white/15">
              <span className="pulse-soft block h-full w-full bg-gradient-to-b from-cyan-glow to-transparent" />
            </span>
          </a>
          <SoundToggle />
        </div>
      </div>
    </section>
  );
}
