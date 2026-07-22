import Reveal from "./Reveal";

interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  cn?: string;
  description?: string;
  align?: "left" | "center";
}

export default function SectionHeader({
  eyebrow,
  title,
  cn,
  description,
  align = "left",
}: SectionHeaderProps) {
  const alignCls = align === "center" ? "text-center items-center" : "text-left items-start";
  return (
    <Reveal className={`mb-12 flex flex-col gap-4 ${alignCls}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="font-display text-3xl leading-tight text-white md:text-5xl">
        {title}
        {cn && (
          <span className="mt-2 block font-cnserif text-base font-normal text-mist md:text-lg">
            {cn}
          </span>
        )}
      </h2>
      {description && <p className="max-w-xl font-cnsans text-sm leading-relaxed text-mist">{description}</p>}
      <div className="hairline w-24" />
    </Reveal>
  );
}
