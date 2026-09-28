import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { MuralPattern } from "@/components/brand/MuralPattern";

export const Route = createFileRoute("/")({
  component: Home,
});

// ─── DATA ─────────────────────────────────────────────────────────────
const services = [
  { n: "01", title: "Brand Design", body: "Identity systems that capture the soul of your ambition.", tone: "bg-navy text-cream", accent: "bg-orange", span: "lg:col-span-2 lg:row-span-2" },
  { n: "02", title: "Digital Solutions", body: "High-performance websites, UI/UX, and immersive digital ecosystems.", tone: "bg-orange text-cream", accent: "bg-navy", span: "" },
  { n: "03", title: "Creative Media", body: "Cinematic motion, photography, videography, and campaign design.", tone: "bg-terracotta text-cream", accent: "bg-cream", span: "" },
  { n: "04", title: "Marketing", body: "Digital marketing, growth strategy, and social media that moves audiences.", tone: "bg-cream text-navy ring-1 ring-navy/10", accent: "bg-teal", span: "" },
  { n: "05", title: "Print Solutions", body: "Business cards, catalogues, signage, and vehicle branding.", tone: "bg-teal text-cream", accent: "bg-gold", span: "" },
];

const process = [
  { n: "01", label: "Discover", body: "We immerse in your world to uncover the core spark." },
  { n: "02", label: "Strategy", body: "We map the trajectory from where you are to where you need to be." },
  { n: "03", label: "Design", body: "Geometry meets emotion. Visual language built to last." },
  { n: "04", label: "Prototype", body: "Ideas become tangible, testable, iterative artifacts." },
  { n: "05", label: "Launch", body: "Every pixel, print, and product ready for the world." },
  { n: "06", label: "Support", body: "We stay with you — evolving, refining, sustaining momentum." },
];

const values = [
  { title: "Creative Excellence", body: "Every artifact leaves the studio with fingerprints of care and craft." },
  { title: "Strategic Thinking", body: "Design without strategy is decoration. We anchor beauty to outcomes." },
  { title: "Visual Storytelling", body: "Brands are narratives told in shape, colour, and motion." },
  { title: "Measurable Impact", body: "Momentum you can count — leads, conversions, cultural weight." },
];

const industries = [
  "Government", "SMEs", "Corporate", "NGOs", "Startups", "Education",
  "Hospitality", "Construction", "Retail", "Health", "Creative", "Technology",
  "Manufacturing", "Development",
];

const portfolio = [
  { title: "Lumina Skincare", tag: "Branding", aspect: "aspect-[4/5]", bg: "bg-terracotta" },
  { title: "Vertex Platform", tag: "Digital", aspect: "aspect-[4/5]", bg: "bg-navy" },
  { title: "Drip Sunday", tag: "Campaign", aspect: "aspect-square", bg: "bg-orange" },
  { title: "Ndebele Prints", tag: "Print", aspect: "aspect-[3/4]", bg: "bg-teal" },
  { title: "IGM Impact", tag: "Branding", aspect: "aspect-[4/5]", bg: "bg-gold" },
  { title: "King Kin Café", tag: "Print", aspect: "aspect-square", bg: "bg-terracotta" },
];

const testimonials = [
  { quote: "KINETIK didn't just design a logo — they engineered our entire brand momentum. Six months in, we've tripled inbound leads.", author: "Thabo Molefe", role: "Founder, Vertex Architects" },
  { quote: "They turned a two-year-old idea into a launch-ready brand system in six weeks. Ruthless discipline, wild creativity.", author: "Palesa Nkosi", role: "CEO, Lumina Skincare" },
  { quote: "Every deliverable felt like a piece of art that also happened to sell. Rare combination.", author: "Sipho Dlamini", role: "Marketing Lead, IGM" },
];

const insights = [
  { cat: "Brand Strategy", title: "The Four Pillars of a Brand That Moves", date: "12 Sep 2026" },
  { cat: "Digital", title: "Why Your Website Should Feel Like an Editorial", date: "05 Sep 2026" },
  { cat: "Design", title: "African Geometry in Modern Brand Systems", date: "28 Aug 2026" },
];

// ─── HELPERS ──────────────────────────────────────────────────────────
function useCountUp(target: number, duration = 1800) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    if (!ref.current) return;
    const el = ref.current;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        const start = performance.now();
        const tick = (now: number) => {
          const p = Math.min((now - start) / duration, 1);
          setValue(Math.floor(target * (1 - Math.pow(1 - p, 3))));
          if (p < 1) requestAnimationFrame(tick);
          else setValue(target);
        };
        requestAnimationFrame(tick);
      }
    }, { threshold: 0.4 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [target, duration]);

  return { ref, value };
}

function Stat({ target, label, suffix = "" }: { target: number; label: string; suffix?: string }) {
  const { ref, value } = useCountUp(target);
  return (
    <div>
      <span ref={ref} className="block font-display text-4xl md:text-5xl font-medium text-cream mb-2 tracking-tight">
        {value}{suffix}
      </span>
      <span className="text-[10px] uppercase tracking-[0.2em] text-cream/50">{label}</span>
    </div>
  );
}

// ─── PAGE ─────────────────────────────────────────────────────────────
function Home() {
  return (
    <div className="bg-cream text-ink selection:bg-orange/30 overflow-x-hidden">
      <Nav />
      <main>

        {/* ── HERO ─────────────────────────────────────────────── */}
        <header className="relative min-h-[100dvh] flex flex-col justify-end pt-40 pb-16 overflow-hidden bg-navy text-cream rounded-b-[3rem]">
          <MuralPattern variant="hero" className="absolute inset-0 opacity-25 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/70 to-navy/40 pointer-events-none" />

          <div className="relative z-10 px-6 max-w-screen-xl mx-auto w-full">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 mb-8"
            >
              <span className="size-2 rounded-full bg-orange animate-pulse" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-cream/70">
                Digital Headquarters · Est. Lesotho
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="font-display text-[14vw] md:text-[10vw] lg:text-[9rem] font-medium leading-[0.9] tracking-[-0.04em] text-balance mb-10 max-w-[16ch]"
            >
              We build brands that <em className="accent-serif text-orange">move</em>.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="max-w-[52ch] text-lg md:text-xl text-cream/75 leading-relaxed mb-12"
            >
              Africa&apos;s next-generation creative studio. We engineer momentum through human-centered design, strategy, technology, and storytelling.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center gap-3 bg-orange text-cream font-medium py-5 px-8 rounded-full hover:scale-[1.02] transition-transform"
              >
                Start a Project
                <span className="size-2 bg-cream rounded-full group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/portfolio"
                className="inline-flex items-center justify-center bg-cream/10 border border-cream/20 backdrop-blur-sm text-cream font-medium py-5 px-8 rounded-full hover:bg-cream/20 transition-colors"
              >
                Explore Work
              </Link>
            </motion.div>
          </div>

          <div className="relative z-10 mt-20 px-6 max-w-screen-xl mx-auto w-full grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-cream/15 pt-8">
            <Stat target={120} suffix="+" label="Projects" />
            <Stat target={45} label="Brands" />
            <Stat target={8} suffix="yr" label="Craft" />
            <Stat target={49} suffix="★" label="Rating" />
          </div>
        </header>

        {/* ── MARQUEE ───────────────────────────────────────────── */}
        <div className="bg-cream border-y border-navy/10 py-8 overflow-hidden">
          <div className="flex whitespace-nowrap animate-marquee-slow gap-16 text-navy font-display text-4xl md:text-6xl font-medium tracking-tight">
            {Array.from({ length: 2 }).map((_, i) => (
              <div key={i} className="flex gap-16 shrink-0 items-center">
                <span>Design</span><span className="text-orange">◆</span>
                <span>Brand</span><span className="text-orange">◆</span>
                <span>Impact</span><span className="text-orange">◆</span>
                <span>Movement</span><span className="text-orange">◆</span>
                <span>Creativity</span><span className="text-orange">◆</span>
                <span>Momentum</span><span className="text-orange">◆</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── SERVICES BENTO ───────────────────────────────────── */}
        <section className="py-32 px-6">
          <div className="max-w-screen-xl mx-auto">
            <div className="mb-16 grid md:grid-cols-2 gap-8 items-end">
              <div>
                <span className="text-[10px] font-semibold tracking-[0.25em] text-orange uppercase block mb-6">◆ Our Expertise</span>
                <h2 className="font-display text-5xl md:text-7xl font-medium text-navy leading-[0.95] tracking-tight text-balance">
                  Momentum through <em className="accent-serif text-orange">multidisciplinary craft</em>.
                </h2>
              </div>
              <p className="text-navy/60 text-lg leading-relaxed max-w-md">
                Six studios, one philosophy. From identity to interface, from print to campaign — every discipline compounds the last.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[minmax(260px,auto)]">
              {services.map((s, i) => (
                <motion.div
                  key={s.n}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className={`group relative p-8 rounded-3xl flex flex-col justify-between overflow-hidden hover:scale-[1.01] transition-transform ${s.tone} ${s.span}`}
                >
                  <div className="flex justify-between items-start relative z-10">
                    <span className="font-display text-2xl font-semibold opacity-90">{s.n}</span>
                    <div className={`size-11 rounded-2xl grid place-items-center ${s.accent}`}>
                      <span className="size-2 rounded-full bg-current opacity-80" />
                    </div>
                  </div>
                  <div className="relative z-10 mt-16">
                    <h3 className="font-display text-3xl md:text-4xl font-medium mb-3 leading-tight">{s.title}</h3>
                    <p className="text-base leading-relaxed opacity-80 text-pretty max-w-[32ch]">{s.body}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PORTFOLIO PREVIEW ────────────────────────────────── */}
        <section className="py-32 bg-navy text-cream overflow-hidden">
          <div className="px-6 max-w-screen-xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-8">
              <div>
                <span className="text-[10px] font-semibold tracking-[0.25em] text-gold uppercase block mb-6">◆ Selected Work</span>
                <h2 className="font-display text-5xl md:text-7xl font-medium text-cream leading-[0.95] tracking-tight">
                  Brands <em className="accent-serif text-orange">in motion</em>.
                </h2>
              </div>
              <Link to="/portfolio" className="hidden md:inline-flex text-sm border border-cream/20 rounded-full py-3 px-6 hover:bg-cream/10 transition-colors">
                View All Work →
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {portfolio.map((p, i) => (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                  className={`group ${i === 0 || i === 3 ? "md:row-span-2" : ""}`}
                >
                  <div className={`w-full ${p.aspect} ${p.bg} rounded-3xl overflow-hidden relative ring-1 ring-white/5`}>
                    <MuralPattern variant="block" className="absolute inset-0 opacity-15" />
                    <div className="absolute inset-0 grid place-items-center font-display text-3xl md:text-4xl font-medium text-cream/95 text-center px-6">
                      {p.title}
                    </div>
                    <div className="absolute top-4 right-4 bg-cream/15 backdrop-blur-md text-cream text-[10px] uppercase tracking-widest px-3 py-1.5 rounded-full">
                      {p.tag}
                    </div>
                  </div>
                  <div className="mt-4 flex justify-between items-center">
                    <h4 className="text-lg font-medium">{p.title}</h4>
                    <span className="text-xs text-cream/50 uppercase tracking-widest">{p.tag}</span>
                  </div>
                </motion.div>
              ))}
            </div>

            <Link to="/portfolio" className="md:hidden mt-12 inline-flex text-sm border border-cream/20 rounded-full py-3 px-6">
              View all work →
            </Link>
          </div>
        </section>

        {/* ── PROCESS ──────────────────────────────────────────── */}
        <section className="py-32 px-6 bg-cream">
          <div className="max-w-screen-xl mx-auto">
            <div className="mb-20 max-w-3xl">
              <span className="text-[10px] font-semibold tracking-[0.25em] text-orange uppercase block mb-6">◆ Process</span>
              <h2 className="font-display text-5xl md:text-7xl font-medium text-navy leading-[0.95] tracking-tight">
                Six moves from <em className="accent-serif text-orange">spark</em> to sustained momentum.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
              {process.map((p, i) => (
                <motion.div
                  key={p.n}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="border-t border-navy/15 pt-6"
                >
                  <span className="font-display text-5xl font-medium text-orange block mb-4">{p.n}</span>
                  <h3 className="font-display text-2xl md:text-3xl font-medium text-navy mb-3">{p.label}</h3>
                  <p className="text-navy/60 leading-relaxed text-base">{p.body}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── VALUES ───────────────────────────────────────────── */}
        <section className="py-32 bg-navy text-cream">
          <div className="max-w-screen-xl mx-auto px-6">
            <div className="mb-16 max-w-3xl">
              <span className="text-[10px] font-semibold tracking-[0.25em] text-gold uppercase block mb-6">◆ Why KINETIK</span>
              <h2 className="font-display text-5xl md:text-7xl font-medium leading-[0.95] tracking-tight">
                We don&apos;t design brands. We <em className="accent-serif text-orange">engineer momentum</em>.
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {values.map((v, i) => (
                <div key={v.title} className="p-8 bg-cream/5 rounded-3xl border border-cream/10 hover:border-orange/40 transition-colors">
                  <span className="font-display text-orange text-2xl font-medium">0{i + 1}</span>
                  <h3 className="font-display text-xl font-medium mt-10 mb-3">{v.title}</h3>
                  <p className="text-cream/70 text-sm leading-relaxed">{v.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── INDUSTRIES ───────────────────────────────────────── */}
        <section className="py-32 bg-cream">
          <div className="max-w-screen-xl mx-auto px-6">
            <div className="mb-14 max-w-2xl">
              <span className="text-[10px] font-semibold tracking-[0.25em] text-orange uppercase block mb-6">◆ Industries</span>
              <h2 className="font-display text-4xl md:text-6xl font-medium text-navy leading-[0.95] tracking-tight">
                Fourteen sectors. One creative operating system.
              </h2>
            </div>
            <div className="flex flex-wrap gap-3">
              {industries.map((i) => (
                <span key={i} className="border border-navy/15 rounded-full px-5 py-3 text-sm hover:bg-orange hover:border-orange hover:text-cream transition-colors cursor-default">
                  {i}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ── TESTIMONIALS ─────────────────────────────────────── */}
        <section className="py-32 bg-cream">
          <div className="max-w-screen-xl mx-auto px-6">
            <div className="mb-16 max-w-2xl">
              <span className="text-[10px] font-semibold tracking-[0.25em] text-orange uppercase block mb-6">◆ Voices</span>
              <h2 className="font-display text-4xl md:text-6xl font-medium text-navy leading-[0.95] tracking-tight">
                Trusted by ambitious operators.
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map((t, i) => (
                <figure key={i} className="bg-white rounded-3xl p-8 ring-1 ring-navy/5 flex flex-col justify-between">
                  <div className="flex gap-1 mb-6 text-orange">
                    {"★★★★★".split("").map((s, j) => <span key={j} className="text-sm">{s}</span>)}
                  </div>
                  <blockquote className="font-display text-xl text-navy leading-snug mb-8 text-balance">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <figcaption>
                    <div className="text-sm font-medium text-navy">{t.author}</div>
                    <div className="text-xs text-navy/50 uppercase tracking-widest mt-1">{t.role}</div>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* ── INSIGHTS ─────────────────────────────────────────── */}
        <section className="py-32 bg-cream">
          <div className="max-w-screen-xl mx-auto px-6">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-14 gap-8">
              <div>
                <span className="text-[10px] font-semibold tracking-[0.25em] text-orange uppercase block mb-6">◆ Insights</span>
                <h2 className="font-display text-4xl md:text-6xl font-medium text-navy leading-[0.95] tracking-tight">
                  Ideas. Trends. <em className="accent-serif text-orange">Inspiration</em>.
                </h2>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {insights.map((a) => (
                <article key={a.title} className="group bg-white rounded-3xl overflow-hidden ring-1 ring-navy/5 hover:ring-orange/30 transition-colors">
                  <div className="aspect-[4/3] bg-navy relative overflow-hidden">
                    <MuralPattern variant="block" className="absolute inset-0 opacity-30" />
                  </div>
                  <div className="p-7">
                    <div className="flex justify-between text-[10px] uppercase tracking-widest text-navy/40 mb-4">
                      <span>{a.cat}</span>
                      <span>{a.date}</span>
                    </div>
                    <h3 className="font-display text-2xl font-medium text-navy mb-4 leading-snug">{a.title}</h3>
                    <span className="text-sm text-orange font-medium group-hover:translate-x-1 inline-block transition-transform">Read more →</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── FINAL CTA ────────────────────────────────────────── */}
        <section className="px-6 pb-32">
          <div className="max-w-screen-xl mx-auto p-10 md:p-20 rounded-[3rem] bg-orange text-cream relative overflow-hidden">
            <MuralPattern variant="block" className="absolute inset-0 opacity-20" />
            <div className="relative z-10">
              <span className="text-[10px] font-semibold tracking-[0.25em] text-cream/70 uppercase block mb-6">◆ Let&apos;s Work</span>
              <h2 className="font-display text-5xl md:text-7xl font-medium leading-[0.95] tracking-tight text-balance mb-8 max-w-[20ch]">
                Let&apos;s engineer <em className="accent-serif">momentum</em> together.
              </h2>
              <p className="max-w-md text-cream/85 mb-10 leading-relaxed text-lg">
                Whether you&apos;re building a brand from scratch or reinventing an established one, we&apos;re ready.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="inline-flex items-center justify-center bg-cream text-navy font-medium py-4 px-8 rounded-full hover:scale-[1.02] transition-transform">
                  Start a Project →
                </Link>
                <a href="https://wa.me/26662068252" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center border border-cream/40 text-cream font-medium py-4 px-8 rounded-full hover:bg-cream/10 transition-colors">
                  WhatsApp Us
                </a>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}