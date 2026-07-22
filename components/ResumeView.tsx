"use client";

import { useState } from "react";
import type { ResumeEntry } from "@/data/profile";

interface ResumeData {
  summaryCn: string;
  summaryEn: string;
  work: ResumeEntry[];
  projects: ResumeEntry[];
  education: ResumeEntry[];
  languages: { cn: string; en: string }[];
  skills: { cn: string; en: string }[];
}

interface ResumeViewProps {
  resume: ResumeData;
  contact: {
    email: string;
    city: string;
    timezone: string;
  };
}

type Lang = "cn" | "en";

const labels = {
  summary: { cn: "个人简介", en: "Profile Summary" },
  work: { cn: "工作经历", en: "Work Experience" },
  projects: { cn: "精选项目", en: "Selected Projects" },
  education: { cn: "教育经历", en: "Education" },
  languages: { cn: "语言", en: "Languages" },
  skills: { cn: "技能", en: "Skills" },
  contact: { cn: "联系方式", en: "Contact" },
} as const;

function EntryList({ entries, lang }: { entries: ResumeEntry[]; lang: Lang }) {
  return (
    <ul className="flex flex-col gap-8">
      {entries.map((entry) => {
        const title = lang === "cn" ? entry.title : entry.titleEn ?? entry.title;
        const org = lang === "cn" ? entry.org : entry.orgEn ?? entry.org;
        const points = lang === "cn" ? entry.points : entry.pointsEn ?? entry.points;
        return (
          <li key={`${entry.title}-${entry.period}`}>
            <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
              <h3 className="font-cnserif text-lg text-white">
                {title}
                <span className="ml-3 font-cnsans text-sm font-normal text-mist">{org}</span>
              </h3>
              <span className="text-xs tracking-label text-mist-dim">{entry.period}</span>
            </div>
            <ul className="mt-3 flex flex-col gap-1.5">
              {points.map((point) => (
                <li key={point} className="flex gap-3 font-cnsans text-sm leading-relaxed text-mist">
                  <span aria-hidden className="mt-[0.55em] h-px w-3 shrink-0 bg-cyan-glow/50" />
                  {point}
                </li>
              ))}
            </ul>
          </li>
        );
      })}
    </ul>
  );
}

function SectionTitle({ children }: { children: string }) {
  return (
    <div className="mb-6 flex items-baseline gap-4">
      <h2 className="font-display text-xl text-white md:text-2xl">{children}</h2>
      <div className="hairline flex-1" />
    </div>
  );
}

export default function ResumeView({ resume, contact }: ResumeViewProps) {
  const [lang, setLang] = useState<Lang>("cn");

  return (
    <div>
      {/* language toggle */}
      <div className="no-print mb-10 inline-flex rounded-full border border-white/10 p-1">
        {(["cn", "en"] as const).map((l) => (
          <button
            key={l}
            onClick={() => setLang(l)}
            aria-pressed={lang === l}
            className={`rounded-full px-5 py-1.5 text-xs tracking-label transition-colors duration-300 ${
              lang === l ? "bg-white/10 text-white" : "text-mist-dim hover:text-mist"
            }`}
          >
            {l === "cn" ? "中文" : "English"}
          </button>
        ))}
      </div>

      <div className="print-page flex flex-col gap-12">
        {/* summary */}
        <section>
          <SectionTitle>{labels.summary[lang]}</SectionTitle>
          <p className="max-w-2xl font-cnsans text-sm leading-relaxed text-mist">
            {lang === "cn" ? resume.summaryCn : resume.summaryEn}
          </p>
        </section>

        {/* work */}
        <section>
          <SectionTitle>{labels.work[lang]}</SectionTitle>
          <EntryList entries={resume.work} lang={lang} />
        </section>

        {/* projects */}
        <section>
          <SectionTitle>{labels.projects[lang]}</SectionTitle>
          <EntryList entries={resume.projects} lang={lang} />
        </section>

        {/* education */}
        <section>
          <SectionTitle>{labels.education[lang]}</SectionTitle>
          <EntryList entries={resume.education} lang={lang} />
        </section>

        {/* languages + skills */}
        <div className="grid gap-12 md:grid-cols-2">
          <section>
            <SectionTitle>{labels.languages[lang]}</SectionTitle>
            <ul className="flex flex-col gap-2">
              {resume.languages.map((l) => (
                <li key={l.en} className="font-cnsans text-sm text-mist">
                  {lang === "cn" ? l.cn : l.en}
                </li>
              ))}
            </ul>
          </section>
          <section>
            <SectionTitle>{labels.skills[lang]}</SectionTitle>
            <ul className="flex flex-col gap-2">
              {resume.skills.map((s) => (
                <li key={s.en} className="font-cnsans text-sm text-mist">
                  {lang === "cn" ? s.cn : s.en}
                </li>
              ))}
            </ul>
          </section>
        </div>

        {/* contact */}
        <section>
          <SectionTitle>{labels.contact[lang]}</SectionTitle>
          <div className="flex flex-wrap gap-x-8 gap-y-2 font-cnsans text-sm text-mist">
            <a href={`mailto:${contact.email}`} className="transition-colors hover:text-cyan-glow">
              {contact.email}
            </a>
            <span>{contact.city}</span>
            <span>{contact.timezone}</span>
          </div>
        </section>
      </div>
    </div>
  );
}
