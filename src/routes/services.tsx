import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { MuralPattern } from "@/components/brand/MuralPattern";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — KINETIK Media Solutions" },
      { name: "description", content: "Brand design, creative media, digital solutions, marketing, print, and creative consulting — every discipline needed to move a brand forward." },
      { property: "og:title", content: "Services — KINETIK Media Solutions" },
      { property: "og:description", content: "Six studios, one philosophy. From identity to interface, from print to campaign." },
    ],
  }),
  component: Services,
});

const groups = [
  { n: "01", title: "Brand Design", body: "Identity systems that capture the soul of your ambition — logos, guidelines, positioning, packaging.", tone: "bg-navy text-cream", items: ["Logo Design", "Visual Identity", "Brand Strategy", "Brand Systems", "Brand Guidelines", "Packaging", "Brand Positioning"] },
  { n: "02", title: "Creative Media", body: "Cinematic motion, photography, videography, and campaign design that tell your story with impact.", tone: "bg-orange text-cream", items: ["Graphic Design", "Social Media Design", "Campaign Design", "Advertising", "Creative Direction", "Photography", "Videography", "Motion Graphics"] },
  { n: "03", title: "Digital Solutions", body: "High-performance websites, UI/UX, and immersive digital ecosystems that convert.", tone: "bg-terracotta text-cream", items: ["Website Design", "Website Development", "UI/UX Design", "Landing Pages", "Portfolio Sites", "Corporate Sites", "E-Commerce", "SEO", "Maintenance"] },
  { n: "04", title: "Marketing", body: "Digital marketing, growth strategy, campaign management, and social media that moves audiences.", tone: "bg-cream text-navy ring-1 ring-navy/10", items: ["Digital Marketing", "Campaign Management", "Email Marketing", "Content Strategy", "Social Media Management", "Advertising", "Growth Marketing"] },
  { n: "05", title: "Print Solutions", body: "Business cards, catalogues, signage, and branded merchandise — crafted for the physical world.", tone: "bg-teal text-cream", items: ["Business Cards", "Flyers", "Catalogues", "Company Profiles", "Signage", "Corporate Gifts", "Branded Apparel", "Vehicle Branding", "Packaging"] },
  { n: "06", title: "Creative Consulting", body: "Brand audits, pitch decks, startup branding, and innovation workshops with strategy at the center.", tone: "bg-gold text-navy", items: ["Creative Strategy", "Business Identity", "Pitch Decks", "Startup Branding", "Brand Audits", "Innovation Workshops"] },
];

function Services() {
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
              ◆ Services
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="font-display text-5xl md:text-8xl font-medium leading-[0.9] tracking-[-0.04em] text-balance max-w-[18ch]"
            >
              Every discipline your brand needs <em className="accent-serif text-orange">to move</em>.
            </motion.h1>
          </div>
        </header>

        {/* ── SERVICE GROUPS ───────────────────────────────── */}
        <section className="py-24 px-6">
          <div className="max-w-screen-xl mx-auto space-y-6">
            {groups.map((g, i) => (
              <motion.div
                key={g.n}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className={`relative rounded-3xl p-8 md:p-14 overflow-hidden ${g.tone}`}
              >
                <div className="grid md:grid-cols-3 gap-8 md:gap-12 relative z-10">
                  <div className="md:col-span-1">
                    <div className="font-display text-5xl md:text-6xl font-medium mb-6 opacity-90">{g.n}</div>
                    <h2 className="font-display text-3xl md:text-4xl font-medium mb-4 leading-tight">{g.title}</h2>
                    <p className="text-base leading-relaxed opacity-75">{g.body}</p>
                  </div>
                  <div className="md:col-span-2">
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
                      {g.items.map((item) => (
                        <li key={item} className="flex items-center gap-3 py-1.5 text-base md:text-lg">
                          <span className="size-1.5 rounded-full bg-current opacity-60" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────────── */}
        <section className="px-6 pb-32">
          <div className="max-w-screen-xl mx-auto p-10 md:p-20 rounded-[3rem] bg-navy text-cream relative overflow-hidden">
            <MuralPattern variant="block" className="absolute inset-0 opacity-20" />
            <div className="relative z-10">
              <span className="text-[10px] font-semibold tracking-[0.25em] text-gold uppercase block mb-6">◆ Get Started</span>
              <h2 className="font-display text-4xl md:text-7xl font-medium leading-[0.95] tracking-tight text-balance mb-8 max-w-[20ch]">
                Ready to <em className="accent-serif text-orange">move</em>?
              </h2>
              <Link to="/contact" className="inline-flex items-center justify-center bg-orange text-cream font-medium py-4 px-8 rounded-full hover:scale-[1.02] transition-transform">
                Brief us on your project →
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}