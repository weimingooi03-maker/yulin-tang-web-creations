import { cn } from "@/lib/utils";

interface FlagIconProps {
  country: "MY" | "SG";
  className?: string;
  label?: string;
}

export const FlagIcon = ({ country, className, label }: FlagIconProps) => {
  const flagSvg =
    country === "MY" ? (
      <svg
        viewBox="0 0 140 70"
        className={cn("w-6 h-auto rounded-sm shadow-sm ring-1 ring-black/10", className)}
        aria-label="Malaysia flag"
      >
        {/* 14 alternating stripes (red/white), starting with red */}
        {Array.from({ length: 14 }).map((_, i) => (
          <rect
            key={i}
            x="0"
            y={(i * 70) / 14}
            width="140"
            height={70 / 14}
            fill={i % 2 === 0 ? "#CC0001" : "#FFFFFF"}
          />
        ))}
        {/* Canton: blue rectangle covering top 8 stripes */}
        <rect x="0" y="0" width="70" height={(70 / 14) * 8} fill="#010066" />
        {/* Crescent: big yellow circle minus offset blue circle */}
        <defs>
          <mask id="my-crescent">
            <rect width="140" height="70" fill="white" />
            <circle cx="34" cy="20" r="9" fill="black" />
          </mask>
        </defs>
        <circle cx="30" cy="20" r="9" fill="#FFCC00" mask="url(#my-crescent)" />
        {/* 14-point star */}
        <g transform="translate(48 20)" fill="#FFCC00">
          <polygon
            points={Array.from({ length: 28 })
              .map((_, i) => {
                const r = i % 2 === 0 ? 7 : 3;
                const a = (Math.PI / 14) * i - Math.PI / 2;
                return `${(Math.cos(a) * r).toFixed(2)},${(Math.sin(a) * r).toFixed(2)}`;
              })
              .join(" ")}
          />
        </g>
      </svg>
    ) : (
      <svg
        viewBox="0 0 140 70"
        className={cn("w-6 h-auto rounded-sm shadow-sm ring-1 ring-black/10", className)}
        aria-label="Singapore flag"
      >
        <rect width="140" height="35" fill="#ED2939" />
        <rect y="35" width="140" height="35" fill="#FFFFFF" />
        {/* Crescent */}
        <defs>
          <mask id="sg-crescent">
            <rect width="140" height="70" fill="white" />
            <circle cx="34" cy="17.5" r="9" fill="black" />
          </mask>
        </defs>
        <circle cx="28" cy="17.5" r="10" fill="#FFFFFF" mask="url(#sg-crescent)" />
        {/* 5 stars in pentagon */}
        {(() => {
          const cx = 52;
          const cy = 20;
          const R = 9;
          return Array.from({ length: 5 }).map((_, i) => {
            const a = (2 * Math.PI * i) / 5 - Math.PI / 2;
            const x = cx + Math.cos(a) * R;
            const y = cy + Math.sin(a) * R;
            const points = Array.from({ length: 10 })
              .map((_, j) => {
                const r = j % 2 === 0 ? 2.6 : 1.1;
                const ang = (Math.PI / 5) * j - Math.PI / 2;
                return `${(x + Math.cos(ang) * r).toFixed(2)},${(y + Math.sin(ang) * r).toFixed(2)}`;
              })
              .join(" ");
            return <polygon key={i} points={points} fill="#FFFFFF" />;
          });
        })()}
      </svg>
    );

  if (label) {
    return (
      <span className="inline-flex items-center gap-1.5">
        {flagSvg}
        <span>{label}</span>
      </span>
    );
  }

  return flagSvg;
};
