import { cn } from "@/lib/utils";

interface FlagIconProps {
  country: "MY" | "SG";
  className?: string;
  label?: string;
}

export const FlagIcon = ({ country, className, label }: FlagIconProps) => {
  const flagSvg =
    country === "MY" ? (
      <svg viewBox="0 0 60 40" className={cn("w-5 h-auto rounded-sm shadow-sm", className)} aria-label="Malaysia flag">
        <rect width="60" height="40" fill="#fff" />
        {[0, 2, 4, 6, 8, 10, 12].map((i) => (
          <rect key={i} y={(i * 40) / 14} width="60" height={40 / 14} fill="#cc0000" />
        ))}
        <rect width="30" height="22" fill="#000066" />
        <path
          d="M18 11c-4.5 0-8 3.5-8 8s3.5 8 8 8c3.5 0 6.5-2.2 7.6-5.4a8.5 8.5 0 1 1 0-5.2C24.5 13.2 21.5 11 18 11z"
          fill="#ffcc00"
        />
        <polygon
          fill="#ffcc00"
          points="30,3 31.5,7 36,7 32.4,9.8 33.8,14 30,11.5 26.2,14 27.6,9.8 24,7 28.5,7"
        />
      </svg>
    ) : (
      <svg viewBox="0 0 60 40" className={cn("w-5 h-auto rounded-sm shadow-sm", className)} aria-label="Singapore flag">
        <rect width="60" height="20" fill="#ed2939" />
        <rect y="20" width="60" height="20" fill="#fff" />
        <circle cx="16" cy="12" r="8" fill="#fff" opacity="0.9" />
        <circle cx="19" cy="12" r="7" fill="#ed2939" />
        <polygon
          fill="#fff"
          points="42,5 43.2,8.2 46.8,8.2 43.8,10.2 44.9,13.6 42,11.5 39.1,13.6 40.2,10.2 37.2,8.2 40.8,8.2"
        />
        <polygon
          fill="#fff"
          points="52,5 53.2,8.2 56.8,8.2 53.8,10.2 54.9,13.6 52,11.5 49.1,13.6 50.2,10.2 47.2,8.2 50.8,8.2"
        />
        <polygon
          fill="#fff"
          points="47,14 48.2,17.2 51.8,17.2 48.8,19.2 49.9,22.6 47,20.5 44.1,22.6 45.2,19.2 42.2,17.2 45.8,17.2"
        />
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
