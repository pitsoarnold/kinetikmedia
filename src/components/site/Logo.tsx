import { Link } from "@tanstack/react-router";

export function Logo({ variant = "navy" }: { variant?: "navy" | "cream" }) {
  const isCream = variant === "cream";
  return (
    <Link to="/" className="flex items-center gap-2 group">
      <span className={`relative size-9 rounded-full overflow-hidden grid place-items-center ${isCream ? "bg-cream" : "bg-navy"}`}>
        <span className={`size-4 rounded-sm rotate-45 ${isCream ? "bg-orange" : "bg-orange"} animate-pulse`} />
        <span className={`absolute inset-0 rounded-full ring-1 ${isCream ? "ring-navy/10" : "ring-white/10"}`} />
      </span>
      <span className={`font-display text-lg font-semibold tracking-tight ${isCream ? "text-cream" : "text-navy"}`}>
        KINETIK
      </span>
    </Link>
  );
}
