import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { MuralPattern } from "@/components/brand/MuralPattern";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — KINETIK Media Solutions" },
      { name: "description", content: "Why KINETIK exists. Our mission, values, human-centered philosophy, and the founders behind Africa's next-generation creative studio." },
      { property: "og:title", content: "About — KINETIK Media Solutions" },
      { property: "og:description", content: "We don't simply create brands. We engineer momentum." },
    ],
  }),
  component: About,
});

const values = [
  { title: "Creative Excellence", body: "Every artifact leaves the studio with the fingerprints of care and craft." },
  { title: "Strategic Thinking", body: "Design without strategy is decoration. We anchor beauty to business outcomes." },
  { title: "Visual Storytelling", body: "Brands are narratives told in shape, colour, and motion. We make them unforgettable." },
  { title: "Measurable Impact", body: "Momentum you can count — leads, conversions, recognition, cultural weight." },
];

const team = [
  { name: "Arnold Pitso", role: "Founder & Creative Director" },
  { name: "Team Member", role: "Brand Strategist" },
  { name: "Team Member", role: "Design Lead" },
  { name: "Team Member", role: "Digital Lead" },
];

const timeline = [
  { year: "2024", title: "Founded in Maseru", body: "KINETIK opens its doors with a stubborn belief that African brands deserve world-class craft." },
  { year: "2025", title: "First 40 clients", body: "From SMEs to corporates — across 10 industries. The momentum compounds." },
  { year: "2026", title: "Six studios, one philosophy", body: "We expand into Digital, Print, Marketing, and Consulting. Full-stack creative." },
  { year: "Ahead", title: "Africa's next-generation studio", body: "The ambition stays the same. Only the canvas gets bigger." },
];

function About() {
  return (
    <div className="bg-cream text-ink overflow-x-hidden">
      <Nav />
      <main>

        {/* ── HERO ──────────────────────────────────────────── */}
        <header className="relative pt-40 pb-24 px-6 bg-navy text-cream overflow-hidden rounded-b-[3rem]">
          <MuralPattern variant="hero" className="absolute inset-0 opacity-25 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/70 to-navy/40 pointer-events-none" />

          <div className="relative z-10 max-w-screen-xl mx-auto">
            <motion.span
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-[10px] font-semibold uppercase tracking-[0.25em] text-orange block mb-6"
            >
              ◆ About KINETIK
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="font-display text-5xl md:text-8xl font-medium leading-[0.9] tracking-[-0.04em] text-balance max-w-[20ch]"
            >
              We don&apos;t design brands. We <em className="accent-serif text-orange">engineer momentum</em>.
            </motion.h1>
          </div>
        </header>

        {/* ── WHY WE EXIST ──────────────────────────────────── */}
        <section className="py-32 px-6">
          <div className="max-w-screen-xl mx-auto grid md:grid-cols-2 gap-16 items-start">
            <div>
              <span className="text-[10px] font-semibold tracking-[0.25em] text-orange uppercase block mb-6">◆ Why we exist</span>
              <h2 className="font-display text-4xl md:text-6xl font-medium text-navy leading-[0.95] tracking-tight mb-8 text-balance">
                Africa is producing the next generation of <em className="accent-serif text-orange">world-class brands</em>. We&apos;re here to make sure they look and feel like it.
              </h2>
            </div>
            <div className="space-y-6 text-lg text-navy/70 leading-relaxed pt-4 md:pt-16">
              <p>KINETIK was founded on a stubborn belief — that a small business in Maseru deserves the same craft, strategy, and rigour as a listed corporation in Johannesburg or New York.</p>
              <p>We combine Swiss discipline with African creative soul. Editorial layouts. Bold geometry. Cinematic motion. Design that respects both the eye and the bottom line.</p>
              <p>Human-centered design is not a poster on our wall. It is the operating system of the studio.</p>
            </div>
          </div>
        </section>

        {/* ── VALUES ────────────────────────────────────────── */}
        <section className="py-32 px-6 bg-navy text-cream">
          <div className="max-w-screen-xl mx-auto">
            <div className="mb-16 max-w-3xl">
              <span className="text-[10px] font-semibold tracking-[0.25em] text-gold uppercase block mb-6">◆ Values</span>
              <h2 className="font-display text-4xl md:text-6xl font-medium leading-[0.95] tracking-tight">
                Four principles that show up in <em className="accent-serif text-orange">every deliverable</em>.
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {values.map((v, i) => (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="p-8 bg-cream/5 rounded-3xl border border-cream/10 hover:border-orange/40 transition-colors"
                >
                  <span className="font-display text-orange text-2xl font-medium">0{i + 1}</span>
                  <h3 className="font-display text-xl font-medium mt-10 mb-3">{v.title}</h3>
                  <p className="text-cream/70 text-sm leading-relaxed">{v.body}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── TIMELINE ─────────────────────────────────────── */}
        <section className="py-32 px-6 bg-cream">
          <div className="max-w-screen-xl mx-auto">
            <div className="mb-16 max-w-3xl">
              <span className="text-[10px] font-semibold tracking-[0.25em] text-orange uppercase block mb-6">◆ Our Story</span>
              <h2 className="font-display text-4xl md:text-6xl font-medium text-navy leading-[0.95] tracking-tight">
                From one studio in Maseru to <em className="accent-serif text-orange">six disciplines</em>.
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {timeline.map((t, i) => (
                <div key={t.year} className="border-t border-navy/15 pt-6">
                  <div className="font-display text-3xl font-medium text-orange mb-4">{t.year}</div>
                  <h3 className="font-display text-xl font-medium text-navy mb-3">{t.title}</h3>
                  <p className="text-navy/60 text-sm leading-relaxed">{t.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── TEAM ─────────────────────────────────────────── */}
        <section className="py-32 px-6 bg-cream">
          <div className="max-w-screen-xl mx-auto">
            <div className="mb-16 max-w-2xl">
              <span className="text-[10px] font-semibold tracking-[0.25em] text-orange uppercase block mb-6">◆ The Studio</span>
              <h2 className="font-display text-4xl md:text-6xl font-medium text-navy leading-[0.95] tracking-tight">
                Small team. <em className="accent-serif text-orange">Big ideas</em>.
              </h2>
            </div>
            <div className="grid md:grid-cols-4 gap-6">
              {team.map((p) => (
                <div key={p.name}>
                  <div className="aspect-[3/4] bg-navy rounded-3xl relative overflow-hidden mb-4">
                    <MuralPattern variant="block" className="absolute inset-0 opacity-30" />
                  </div>
                  <h3 className="font-display text-lg font-medium text-navy">{p.name}</h3>
                  <p className="text-sm text-navy/50 mt-1">{p.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────────── */}
        <section className="px-6 pb-32">
          <div className="max-w-screen-xl mx-auto p-10 md:p-20 rounded-[3rem] bg-orange text-cream relative overflow-hidden">
            <MuralPattern variant="block" className="absolute inset-0 opacity-20" />
            <div className="relative z-10">
              <h2 className="font-display text-4xl md:text-6xl font-medium leading-[0.95] tracking-tight text-balance mb-8 max-w-[20ch]">
                Come build <em className="accent-serif">momentum</em> with us.
              </h2>
              <Link to="/contact" className="inline-flex items-center justify-center bg-cream text-navy font-medium py-4 px-8 rounded-full hover:scale-[1.02] transition-transform">
                Start a Project →
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}