import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Work — KINETIK Media Solutions" },
      { name: "description", content: "A selection of brand, digital, print and campaign work from KINETIK Media Solutions." },
      { property: "og:title", content: "Work — KINETIK Media Solutions" },
      { property: "og:description", content: "Selected projects. Real momentum." },
    ],
  }),
  component: Portfolio,
});

const filters = ["All", "Branding", "Digital", "Print", "Campaign", "Photography"] as const;

const projects = [
  { title: "Lumina Skincare", tag: "Branding", aspect: "aspect-[4/5]", bg: "bg-terracotta" },
  { title: "Vertex Platform", tag: "Digital", aspect: "aspect-[4/5]", bg: "bg-navy" },
  { title: "Drip Sunday", tag: "Campaign", aspect: "aspect-square", bg: "bg-orange" },
  { title: "Ndebele Prints", tag: "Print", aspect: "aspect-[3/4]", bg: "bg-teal" },
  { title: "IGM Impact", tag: "Branding", aspect: "aspect-[4/5]", bg: "bg-gold" },
  { title: "King Kin Café", tag: "Print", aspect: "aspect-square", bg: "bg-terracotta" },
  { title: "Wellness Retreat", tag: "Photography", aspect: "aspect-[3/4]", bg: "bg-teal" },
  { title: "Nansray Digital", tag: "Digital", aspect: "aspect-[4/5]", bg: "bg-navy" },
];

function Portfolio() {
  const [active, setActive] = useState<(typeof filters)[number]>("All");
  const visible = active === "All" ? projects : projects.filter((p) => p.tag === active);

  return (
    <div className="bg-cream text-ink">
      <Nav />
      <main>
        <header className="pt-40 pb-12 px-6">
          <div className="max-w-screen-xl mx-auto">
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-orange block mb-6">◆ Selected Work</span>
            <h1 className="font-display text-5xl md:text-7xl font-medium text-navy leading-[0.95] tracking-tight text-balance">
              Brands in motion.
            </h1>
          </div>
        </header>

        <div className="px-6 mb-10">
          <div className="max-w-screen-xl mx-auto flex gap-2 flex-wrap">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-colors min-h-11 ${active === f ? "bg-navy text-cream" : "border border-navy/15 text-navy/70 hover:border-navy"}`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <section className="px-6 pb-24">
          <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visible.map((p) => (
              <div key={p.title} className="group">
                <div className={`w-full ${p.aspect} ${p.bg} rounded-3xl overflow-hidden relative ring-1 ring-navy/5`}>
                  <div className="absolute inset-0 mural-grid opacity-30" />
                  <div className="absolute inset-0 grid place-items-center font-display text-3xl font-medium text-cream/90 text-center px-6">
                    {p.title}
                  </div>
                  <div className="absolute top-4 right-4 bg-cream/15 backdrop-blur-md text-cream text-[10px] uppercase tracking-widest px-3 py-1.5 rounded-full">
                    {p.tag}
                  </div>
                </div>
                <div className="mt-4 flex justify-between items-center">
                  <h4 className="text-lg font-medium text-navy">{p.title}</h4>
                  <span className="text-xs text-navy/40 uppercase tracking-widest">{p.tag}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
