import { useId } from "react";
import { Link } from "@tanstack/react-router";

import { cn } from "@/lib/utils";

const NAVY = "#151b54";
const CREAM = "#faf9f6";
const ORANGE = "#e85d3a";
const TERRACOTTA = "#b25e41";

type LogoMarkVariant = "navy" | "cream" | "solid";

type LogoMarkProps = {
  variant?: LogoMarkVariant;
  color?: string;
  className?: string;
};

const LEFT_BLOB =
  "M22.5 7.5 C36 3.5 52 8 55.5 22 C58 32 46.5 38 44 48.5 C41.5 59 57 66 51.5 81 C47 93.5 31 97.5 19.5 90 C6.5 81 8 18 22.5 7.5 Z";

const RIGHT_BLOB =
  "M61 16 C76 7 93 14 91.5 30 C90 42 78 47 70.5 54 C62 62 58 72 63.5 80 C68 87 62 92 55 86 C48 79 52 64 56 54 C60 44 50 28 61 16 Z";

export function LogoMark({
  variant = "navy",
  color = "currentColor",
  className,
}: LogoMarkProps) {
  const rawId = useId();
  const clipId = `kinetik-k-clip-${rawId.replace(/:/g, "")}`;

  const fill = variant === "solid" ? color : variant === "cream" ? CREAM : NAVY;
  const muralOrange = variant === "solid" ? fill : ORANGE;
  const muralCream = variant === "solid" ? fill : CREAM;
  const muralTerracotta = variant === "solid" ? fill : TERRACOTTA;

  return (
    <svg
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
      className={cn("block size-full", className)}
    >
      <defs>
        <clipPath id={clipId}>
          <path d={LEFT_BLOB} />
        </clipPath>
      </defs>

      <path d={LEFT_BLOB} fill={fill} />

      <g clipPath={`url(#${clipId})`}>
        <circle cx="28" cy="22" r="4.2" fill={muralOrange} />
        <circle cx="42" cy="34" r="2.4" fill={muralCream} />
        <rect x="20" y="38" width="10" height="3.2" rx="1" fill={muralTerracotta} />
        <path
          d="M24 54 L32 48 L40 54"
          fill="none"
          stroke={muralOrange}
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="31" cy="66" r="3" fill={muralCream} />
        <rect x="38" y="58" width="4" height="9" rx="0.8" fill={muralTerracotta} />
        <circle cx="24" cy="78" r="2.1" fill={muralOrange} />
        <rect x="34" y="80" width="8" height="2.6" rx="0.8" fill={muralCream} />
      </g>

      <path d={RIGHT_BLOB} fill={fill} />
      <circle cx="72" cy="40" r="5.2" fill={fill} />
    </svg>
  );
}

type LogoProps = {
  variant?: "navy" | "cream";
  className?: string;
};

export function Logo({ variant = "navy", className }: LogoProps) {
  const isCream = variant === "cream";

  return (
    <Link
      to="/"
      aria-label="KINETIK home"
      className={cn("flex items-center gap-2.5", className)}
    >
      <span className="size-9 shrink-0">
        <LogoMark variant={isCream ? "cream" : "navy"} />
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-display text-lg font-bold tracking-tight">
          <span className={isCream ? "text-cream" : "text-navy"}>KINET</span>
          <span className={isCream ? "text-cream" : "text-orange"}>IK</span>
        </span>
        <span
          className={cn(
            "mt-1 text-[9px] uppercase tracking-[0.22em]",
            isCream ? "text-cream/70" : "text-navy/50",
          )}
        >
          DESIGN · BRAND · IMPACT
        </span>
      </span>
    </Link>
  );
}
