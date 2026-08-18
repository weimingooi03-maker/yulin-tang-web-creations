import { useMemo } from "react";

// Subtle decorative sparkles that gently fall down the page background.
// Kept low in opacity/count so it reads as an accent, not a distraction.
const SPARKLE_COUNT = 16;

interface Sparkle {
  id: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
  drift: number;
  opacity: number;
}

const SparkleBackground = () => {
  const sparkles = useMemo<Sparkle[]>(
    () =>
      Array.from({ length: SPARKLE_COUNT }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        size: 2 + Math.random() * 3,
        duration: 14 + Math.random() * 12,
        delay: Math.random() * 18,
        drift: (Math.random() - 0.5) * 50,
        opacity: 0.25 + Math.random() * 0.25,
      })),
    []
  );

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[1] overflow-hidden motion-reduce:hidden"
    >
      {sparkles.map((s) => (
        <span
          key={s.id}
          className="absolute top-[-5%] rounded-full"
          style={
            {
              left: `${s.left}%`,
              width: `${s.size}px`,
              height: `${s.size}px`,
              backgroundColor: "hsl(var(--gold-light))",
              boxShadow: "0 0 6px 1px hsl(var(--gold-light) / 0.7)",
              animation: `sparkle-fall ${s.duration}s linear ${s.delay}s infinite`,
              ["--sparkle-drift" as string]: `${s.drift}px`,
              ["--sparkle-max-opacity" as string]: s.opacity,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
};

export default SparkleBackground;
