import { cn } from "@/lib/utils";

const ORANGE = "#e85d3a";
const NAVY = "#151b54";
const CREAM = "#faf9f6";
const TERRACOTTA = "#b25e41";
const TEAL = "#2d6a6a";
const GOLD = "#c5a059";

export type MuralVariant = "hero" | "divider" | "block" | "footer";

type MuralPatternProps = {
  variant?: MuralVariant;
  className?: string;
};

const VIEWBOX: Record<MuralVariant, string> = {
  hero: "0 0 1440 900",
  divider: "0 0 1200 120",
  block: "0 0 400 400",
  footer: "0 0 900 420",
};

function HeroMural() {
  return (
    <g opacity={0.18}>
      <circle cx="160" cy="140" r="96" fill={ORANGE} />
      <circle
        cx="1180"
        cy="180"
        r="130"
        fill="none"
        stroke={TEAL}
        strokeWidth="8"
      />
      <circle
        cx="980"
        cy="720"
        r="110"
        fill="none"
        stroke={GOLD}
        strokeWidth="6"
      />
      <rect
        x="420"
        y="80"
        width="180"
        height="72"
        rx="36"
        fill={TERRACOTTA}
        transform="rotate(-6 510 116)"
      />
      <circle cx="620" cy="520" r="70" fill={NAVY} />
      <circle cx="240" cy="680" r="48" fill={GOLD} />
      <rect
        x="1080"
        y="480"
        width="200"
        height="88"
        rx="44"
        fill={ORANGE}
        transform="rotate(5 1180 524)"
      />
      <path
        d="M780 220 L830 160 L880 220"
        fill="none"
        stroke={NAVY}
        strokeWidth="10"
        strokeLinecap="round"
        strokeLinejoin="round"
        transform="rotate(4 830 190)"
      />
      <polygon points="320,320 380,460 250,430" fill={TEAL} transform="rotate(-7 315 390)" />
      <path
        d="M70 420 A70 70 0 0 1 140 490"
        fill="none"
        stroke={TERRACOTTA}
        strokeWidth="12"
        strokeLinecap="round"
      />
      <g>
        <circle cx="520" cy="760" r="7" fill={ORANGE} />
        <circle cx="542" cy="748" r="5" fill={CREAM} />
        <circle cx="558" cy="768" r="6" fill={NAVY} />
        <circle cx="536" cy="780" r="4" fill={GOLD} />
        <circle cx="568" cy="744" r="4.5" fill={TERRACOTTA} />
      </g>
      <circle cx="1320" cy="360" r="36" fill={CREAM} />
      <rect
        x="740"
        y="620"
        width="64"
        height="160"
        rx="32"
        fill={TEAL}
        transform="rotate(8 772 700)"
      />
    </g>
  );
}

function DividerMural() {
  return (
    <g>
      <circle cx="40" cy="60" r="48" fill={ORANGE} opacity={0.55} />
      <circle cx="110" cy="40" r="36" fill={NAVY} opacity={0.45} />
      <circle cx="170" cy="78" r="28" fill={TEAL} opacity={0.5} />
      <path
        d="M230 88 L255 48 L280 88"
        fill="none"
        stroke={GOLD}
        strokeWidth="7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M310 32 L310 88 L360 88"
        fill="none"
        stroke={TERRACOTTA}
        strokeWidth="6"
        strokeLinecap="round"
        transform="rotate(8 330 60)"
      />
      <rect x="380" y="28" width="90" height="28" rx="14" fill={ORANGE} opacity={0.7} />
      <circle cx="520" cy="62" r="42" fill={CREAM} opacity={0.35} />
      <circle cx="560" cy="50" r="30" fill={NAVY} opacity={0.4} />
      <g>
        <circle cx="640" cy="38" r="5" fill={GOLD} />
        <circle cx="656" cy="52" r="4" fill={ORANGE} />
        <circle cx="644" cy="66" r="5" fill={TEAL} />
        <circle cx="672" cy="44" r="3.5" fill={CREAM} />
        <circle cx="668" cy="70" r="4" fill={TERRACOTTA} />
        <circle cx="686" cy="58" r="3" fill={NAVY} />
      </g>
      <path
        d="M740 30 L780 60 L740 90"
        fill="none"
        stroke={TEAL}
        strokeWidth="8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="860" cy="58" r="50" fill={TERRACOTTA} opacity={0.45} />
      <circle cx="910" cy="70" r="34" fill={ORANGE} opacity={0.5} />
      <polygon points="980,28 1010,92 950,80" fill={GOLD} opacity={0.55} />
      <path
        d="M1040 90 A34 34 0 0 0 1074 56"
        fill="none"
        stroke={NAVY}
        strokeWidth="7"
        strokeLinecap="round"
      />
      <rect
        x="1100"
        y="36"
        width="72"
        height="48"
        rx="24"
        fill={TEAL}
        opacity={0.5}
        transform="rotate(-5 1136 60)"
      />
      <circle cx="1188" cy="64" r="22" fill={ORANGE} opacity={0.6} />
    </g>
  );
}

function BlockMural() {
  return (
    <g>
      <circle cx="40" cy="36" r="38" fill={NAVY} />
      <circle cx="92" cy="28" r="24" fill={ORANGE} />
      <circle cx="70" cy="78" r="22" fill={TEAL} />
      <rect x="118" y="8" width="70" height="28" rx="14" fill={GOLD} transform="rotate(-4 153 22)" />
      <circle
        cx="210"
        cy="48"
        r="34"
        fill="none"
        stroke={TERRACOTTA}
        strokeWidth="6"
      />
      <path
        d="M250 18 L278 52 L250 86"
        fill="none"
        stroke={ORANGE}
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <polygon points="300,12 338,70 268,62" fill={NAVY} />
      <rect x="348" y="20" width="22" height="64" rx="11" fill={TEAL} transform="rotate(6 359 52)" />
      <circle cx="380" cy="90" r="18" fill={GOLD} />

      <circle cx="28" cy="150" r="30" fill={ORANGE} />
      <g>
        <circle cx="78" cy="132" r="5" fill={CREAM} />
        <circle cx="94" cy="142" r="4" fill={GOLD} />
        <circle cx="82" cy="156" r="5" fill={NAVY} />
        <circle cx="108" cy="136" r="3.5" fill={ORANGE} />
        <circle cx="100" cy="160" r="4" fill={TERRACOTTA} />
        <circle cx="118" cy="150" r="3" fill={TEAL} />
        <circle cx="88" cy="172" r="3.5" fill={CREAM} />
      </g>
      <rect x="140" y="118" width="86" height="36" rx="18" fill={NAVY} transform="rotate(5 183 136)" />
      <circle cx="250" cy="150" r="40" fill={TERRACOTTA} />
      <circle cx="278" cy="168" r="22" fill={GOLD} />
      <path
        d="M320 118 L350 148 L320 178"
        fill="none"
        stroke={TEAL}
        strokeWidth="7"
        strokeLinecap="round"
        strokeLinejoin="round"
        transform="rotate(-8 335 148)"
      />
      <path
        d="M360 200 A28 28 0 0 1 388 172"
        fill="none"
        stroke={ORANGE}
        strokeWidth="8"
        strokeLinecap="round"
      />

      <rect x="8" y="210" width="54" height="54" rx="18" fill={GOLD} transform="rotate(-6 35 237)" />
      <circle cx="92" cy="240" r="28" fill={NAVY} />
      <circle
        cx="148"
        cy="248"
        r="26"
        fill="none"
        stroke={ORANGE}
        strokeWidth="5"
      />
      <polygon points="186,210 230,268 168,262" fill={TEAL} />
      <path
        d="M248 268 L278 228 L308 268"
        fill="none"
        stroke={GOLD}
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="340" cy="236" r="32" fill={ORANGE} />
      <circle cx="372" cy="258" r="16" fill={NAVY} />
      <rect x="300" y="278" width="88" height="24" rx="12" fill={TERRACOTTA} />

      <circle cx="36" cy="330" r="26" fill={TEAL} />
      <g>
        <circle cx="80" cy="312" r="4" fill={ORANGE} />
        <circle cx="94" cy="324" r="5" fill={GOLD} />
        <circle cx="84" cy="340" r="3.5" fill={NAVY} />
        <circle cx="108" cy="316" r="4" fill={CREAM} />
        <circle cx="112" cy="338" r="5" fill={TERRACOTTA} />
        <circle cx="98" cy="352" r="3" fill={TEAL} />
        <circle cx="124" cy="328" r="3.5" fill={ORANGE} />
        <circle cx="70" cy="328" r="3" fill={CREAM} />
        <circle cx="128" cy="350" r="4" fill={NAVY} />
      </g>
      <rect x="150" y="308" width="40" height="80" rx="20" fill={ORANGE} transform="rotate(7 170 348)" />
      <circle cx="230" cy="348" r="36" fill={NAVY} />
      <circle cx="268" cy="332" r="18" fill={GOLD} />
      <path
        d="M300 380 A40 40 0 0 0 340 340"
        fill="none"
        stroke={TEAL}
        strokeWidth="7"
        strokeLinecap="round"
      />
      <polygon points="352,308 392,360 330,372" fill={TERRACOTTA} />
      <rect x="8" y="372" width="70" height="22" rx="11" fill={CREAM} opacity={0.85} />
    </g>
  );
}

function FooterMural() {
  return (
    <g opacity={0.22}>
      <circle cx="70" cy="80" r="64" fill={ORANGE} />
      <circle cx="150" cy="50" r="40" fill={GOLD} />
      <circle cx="120" cy="150" r="36" fill={TEAL} />
      <rect x="200" y="20" width="120" height="40" rx="20" fill={CREAM} transform="rotate(-5 260 40)" />
      <circle
        cx="360"
        cy="90"
        r="54"
        fill="none"
        stroke={ORANGE}
        strokeWidth="8"
      />
      <path
        d="M430 30 L470 80 L430 130"
        fill="none"
        stroke={GOLD}
        strokeWidth="8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <polygon points="500,18 560,110 470,96" fill={TERRACOTTA} />
      <circle cx="640" cy="70" r="58" fill={TEAL} />
      <circle cx="700" cy="110" r="32" fill={ORANGE} />
      <rect x="760" y="24" width="36" height="110" rx="18" fill={GOLD} transform="rotate(6 778 79)" />
      <circle cx="850" cy="80" r="48" fill={CREAM} />

      <g>
        <circle cx="40" cy="210" r="6" fill={GOLD} />
        <circle cx="58" cy="222" r="5" fill={ORANGE} />
        <circle cx="46" cy="238" r="6" fill={CREAM} />
        <circle cx="74" cy="214" r="4" fill={TEAL} />
        <circle cx="70" cy="242" r="5" fill={TERRACOTTA} />
        <circle cx="90" cy="228" r="4.5" fill={NAVY} />
        <circle cx="62" cy="258" r="4" fill={GOLD} />
        <circle cx="88" cy="252" r="3.5" fill={ORANGE} />
      </g>
      <rect x="130" y="190" width="100" height="44" rx="22" fill={ORANGE} transform="rotate(4 180 212)" />
      <circle cx="280" cy="230" r="50" fill={GOLD} />
      <circle cx="320" cy="250" r="28" fill={TEAL} />
      <path
        d="M380 280 L420 220 L460 280"
        fill="none"
        stroke={CREAM}
        strokeWidth="8"
        strokeLinecap="round"
        strokeLinejoin="round"
        transform="rotate(-4 420 250)"
      />
      <path
        d="M490 280 A42 42 0 0 1 532 238"
        fill="none"
        stroke={ORANGE}
        strokeWidth="10"
        strokeLinecap="round"
      />
      <polygon points="560,180 620,270 530,255" fill={NAVY} />
      <circle
        cx="700"
        cy="230"
        r="46"
        fill="none"
        stroke={GOLD}
        strokeWidth="6"
      />
      <rect x="760" y="190" width="110" height="36" rx="18" fill={TERRACOTTA} />
      <circle cx="860" cy="250" r="30" fill={ORANGE} />

      <circle cx="90" cy="340" r="44" fill={TEAL} />
      <rect x="150" y="310" width="48" height="90" rx="24" fill={GOLD} transform="rotate(-8 174 355)" />
      <circle cx="250" cy="350" r="38" fill={ORANGE} />
      <g>
        <circle cx="320" cy="320" r="5" fill={CREAM} />
        <circle cx="338" cy="334" r="4" fill={GOLD} />
        <circle cx="324" cy="350" r="5" fill={ORANGE} />
        <circle cx="352" cy="326" r="3.5" fill={TEAL} />
        <circle cx="348" cy="352" r="4" fill={TERRACOTTA} />
      </g>
      <path
        d="M390 390 L430 330 L470 390"
        fill="none"
        stroke={TEAL}
        strokeWidth="7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="540" cy="350" r="52" fill={CREAM} />
      <circle cx="590" cy="370" r="24" fill={NAVY} />
      <rect x="640" y="318" width="96" height="32" rx="16" fill={ORANGE} />
      <polygon points="760,300 820,390 720,380" fill={GOLD} />
      <path
        d="M840 400 A36 36 0 0 0 876 364"
        fill="none"
        stroke={CREAM}
        strokeWidth="8"
        strokeLinecap="round"
      />
    </g>
  );
}

export function MuralPattern({ variant = "hero", className = "" }: MuralPatternProps) {
  let body;
  switch (variant) {
    case "divider":
      body = <DividerMural />;
      break;
    case "block":
      body = <BlockMural />;
      break;
    case "footer":
      body = <FooterMural />;
      break;
    default:
      body = <HeroMural />;
  }

  return (
    <svg
      viewBox={VIEWBOX[variant]}
      preserveAspectRatio="xMidYMid slice"
      overflow="visible"
      aria-hidden="true"
      focusable="false"
      className={cn(
        "pointer-events-none absolute inset-0 h-full w-full overflow-visible",
        className,
      )}
    >
      {body}
    </svg>
  );
}
