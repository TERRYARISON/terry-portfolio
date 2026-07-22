"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Ambient sound toggle — muted by default.
 * Drop an ambient loop at /public/assets/ambient.mp3 to enable playback;
 * without the file the toggle simply stays silent.
 */
export default function SoundToggle() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [on, setOn] = useState(false);
  const [available, setAvailable] = useState(true);

  useEffect(() => {
    const audio = new Audio("/assets/ambient.mp3");
    audio.loop = true;
    audio.volume = 0.25;
    audio.addEventListener("error", () => setAvailable(false));
    audioRef.current = audio;
    return () => {
      audio.pause();
      audioRef.current = null;
    };
  }, []);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio || !available) return;
    if (on) {
      audio.pause();
      setOn(false);
    } else {
      audio.play().then(() => setOn(true)).catch(() => setAvailable(false));
    }
  };

  return (
    <button
      onClick={toggle}
      aria-label={on ? "Mute ambient sound" : "Play ambient sound"}
      aria-pressed={on}
      className="glass flex h-11 w-11 items-center justify-center rounded-full transition-opacity"
      style={{ opacity: available ? 1 : 0.5 }}
      title={available ? (on ? "Sound on" : "Sound off") : "Add /assets/ambient.mp3 to enable"}
    >
      <span className="relative flex h-4 w-4 items-end justify-center gap-[2px]">
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className={`w-[2px] rounded-full ${on ? "bg-cyan-glow pulse-soft" : "bg-mist-dim"}`}
            style={{ height: `${6 + i * 4}px`, animationDelay: `${i * 0.4}s` }}
          />
        ))}
      </span>
    </button>
  );
}
