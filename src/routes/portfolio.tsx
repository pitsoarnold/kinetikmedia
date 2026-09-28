import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { MuralPattern } from "@/components/brand/MuralPattern";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Work — KINETIK Media Solutions" },
      { name: "description", content: "A selection of brand, digital, print, and campaign work from KINETIK Media Solutions." },
      { property: "og:title", content: "Work — KINETIK Media Solutions" },
      { property: "og:description", content: "Selected projects. Real momentum." },
    ],
  }),
  component: Portfolio,
});

const filters = ["All", "Branding", "Digital", "Print", "Campaign", "Photography"] as const;
type Filter = (typeof filters)[number];

const projects: { title: string; tag: Exclude<Filter, "All">; aspect: string; bg: string }[] = [
  { title: "Lumina Skincare", tag: "Branding", aspect: "aspect-[4/5]", bg: "bg-terracotta" },
  { title: "Vertex Platform", tag: "Digital", aspect: "aspect-[4/5]", bg: "bg-navy" },
  { title: "Drip Sunday", tag: "Campaign", aspect: "aspect-square", bg: "bg-orange" },
  { title: "Ndebele Prints", tag: "Print", aspect: "aspect-[3/4]", bg: "bg-teal" },
  { title: "IGM Impact", tag: "Branding", aspect: "aspect-[4/5]", bg: "bg-gold" },
  { title: "King Kin Café", tag: "Print", aspect: "aspect-square", bg: "bg-terracotta" },
  { title: "Wellness Retreat", tag: "Photography", aspect: "aspect-[3/4]", bg: "bg-teal" },
  { title: "Nansray Digital", tag: "Digital", aspect: "aspect-[4/5]", bg: "bg-navy" },
  { title: "Sesotho Heritage", tag: "Campaign", aspect: "aspect-square", bg: "bg-orange" },
];

function Portfolio() {
  const [active, setActive] = useState<Filter>("All");
  const visible = active === "All" ? projects : projects.filter((p) => p.tag === active);

  return (
    <div className="bg-cream text-ink overflow-x-hidden">
      <Nav />
      <main>

        {/* ── HERO ──────────────────────────────────────────── */}
        <header className="relative pt-40 pb-16 px-6 bg-navy text-cream overflow-hidden rounded-b-[3rem]">
          <MuralPattern variant="hero" className="absolute inset-0 opacity-25 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/70 to-navy/40 pointer-events-none" />
          <div className="relative z-10 max-w-screen-xl mx-auto">
            <motion.span
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-[10px] font-semibold uppercase tracking-[0.25em] text-gold block mb-6"
            >
              ◆ Selected Work
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="font-display text-5xl md:text-8xl font-medium leading-[0.9] tracking-[-0.04em] text-balance max-w-[16ch]"
            >
              Brands <em className="accent-serif text-orange">in motion</em>.
            </motion.h1>
          </div>
        </header>

        {/* ── FILTERS ──────────────────────────────────────── */}
        <div className="px-6 pt-16 pb-10">
          <div className="max-w-screen-xl mx-auto flex gap-3 flex-wrap">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all ${
                  active === f
                    ? "bg-navy text-cream shadow-lg"
                    : "border border-navy/15 text-navy/70 hover:border-orange hover:text-orange"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* ── GRID ────────────────────────────────────────── */}
        <section className="px-6 pb-24">
          <div className="max-w-screen-xl mx-auto">
            <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <AnimatePresence mode="popLayout">
                {visible.map((p) => (
                  <motion.div
                    key={p.title}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.35 }}
                    className="group"
                  >
                    <div className={`w-full ${p.aspect} ${p.bg} rounded-3xl overflow-hidden relative ring-1 ring-navy/5`}>
                      <MuralPattern variant="block" className="absolute inset-0 opacity-25" />
                      <div className="absolute inset-0 grid place-items-center font-display text-3xl md:text-4xl font-medium text-cream/95 text-center px-6">
                        {p.title}
                      </div>
                      <div className="absolute top-4 right-4 bg-cream/20 backdrop-blur-md text-cream text-[10px] uppercase tracking-widest px-3 py-1.5 rounded-full">
                        {p.tag}
                      </div>
                      <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/30 transition-colors flex items-end p-6 opacity-0 group-hover:opacity-100">
                        <span className="text-cream font-medium text-sm">View project →</span>
                      </div>
                    </div>
                    <div className="mt-4 flex justify-between items-center">
                      <h4 className="text-lg font-medium text-navy">{p.title}</h4>
                      <span className="text-xs text-navy/40 uppercase tracking-widest">{p.tag}</span>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>

            {visible.length === 0 && (
              <div className="text-center py-32">
                <p className="text-navy/40 text-lg">No projects in this category yet.</p>
              </div>
            )}
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────────── */}
        <section className="px-6 pb-32">
          <div className="max-w-screen-xl mx-auto p-10 md:p-20 rounded-[3rem] bg-orange text-cream relative overflow-hidden">
            <MuralPattern variant="block" className="absolute inset-0 opacity-20" />
            <div className="relative z-10">
              <h2 className="font-display text-4xl md:text-6xl font-medium leading-[0.95] tracking-tight text-balance mb-8 max-w-[20ch]">
                Your brand could be <em className="accent-serif">next</em>.
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