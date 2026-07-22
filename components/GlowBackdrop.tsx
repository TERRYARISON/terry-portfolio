interface GlowBackdropProps {
  variant?: "cyan" | "pink" | "both";
  className?: string;
}

/** Ambient glow orbs behind sections. Pure CSS, no canvas. */
export default function GlowBackdrop({ variant = "both", className = "" }: GlowBackdropProps) {
  return (
    <div aria-hidden className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      {(variant === "cyan" || variant === "both") && (
        <div className="glow-orb drift left-[-10%] top-[10%] h-[36rem] w-[36rem] bg-cyan-glow/10" />
      )}
      {(variant === "pink" || variant === "both") && (
        <div className="glow-orb drift bottom-[5%] right-[-12%] h-[32rem] w-[32rem] bg-pink-glow/10" style={{ animationDelay: "-9s" }} />
      )}
    </div>
  );
}
