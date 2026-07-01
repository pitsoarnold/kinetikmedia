import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Mural } from "@/components/site/Mural";

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
  { t: "Creative Excellence", d: "Every artifact leaves the studio with the fingerprints of care and craft." },
  { t: "Strategic Thinking", d: "Design without strategy is decoration. We anchor beauty to business outcomes." },
  { t: "Visual Storytelling", d: "Brands are narratives told in shape, colour and motion. We make them unforgettable." },
  { t: "Measurable Impact", d: "Momentum you can count — leads, conversions, recognition, cultural weight." },
];

function About() {
  return (
    <div className="bg-cream text-ink">
      <Nav />
      <main>
        <header className="relative pt-40 pb-24 px-6 bg-navy text-cream overflow-hidden">
          <Mural />
          <div className="relative max-w-screen-xl mx-auto">
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-orange block mb-6">◆ About KINETIK</span>
            <h1 className="font-display text-5xl md:text-7xl font-medium leading-[0.95] tracking-tight text-balance max-w-[18ch]">
              We don&apos;t design brands. We <span className="text-orange italic">engineer momentum</span>.
            </h1>
          </div>
        </header>

        <section className="py-24 px-6">
          <div className="max-w-screen-xl mx-auto grid md:grid-cols-2 gap-16">
            <div>
              <span className="text-xs font-semibold tracking-widest text-orange uppercase block mb-4">◆ Why we exist</span>
              <h2 className="font-display text-3xl md:text-5xl font-medium text-navy leading-[1.05] tracking-tight mb-8 text-balance">
                Africa is producing the next generation of world-class brands. We&apos;re here to make sure they look and feel like it.
              </h2>
            </div>
            <div className="space-y-6 text-lg text-navy/70 leading-relaxed">
              <p>KINETIK was founded on a stubborn belief — that a small business in Maseru deserves the same craft, strategy and rigour as a listed corporation in Johannesburg or New York.</p>
              <p>We combine Swiss discipline with African creative soul. Editorial layouts. Bold geometry. Cinematic motion. Design that respects both the eye and the bottom line.</p>
              <p>Human-centered design is not a poster on our wall. It is the operating system of the studio.</p>
            </div>
          </div>
        </section>

        <section className="py-24 px-6 bg-navy text-cream">
          <div className="max-w-screen-xl mx-auto">
            <span className="text-xs font-semibold tracking-widest text-gold uppercase block mb-4">◆ Values</span>
            <h2 className="font-display text-3xl md:text-5xl font-medium leading-[1.05] tracking-tight mb-16 max-w-2xl">
              Four principles that show up in every deliverable.
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {values.map((v, i) => (
                <div key={v.t} className="p-8 bg-cream/5 rounded-3xl border border-cream/10">
                  <span className="font-display text-orange text-xl font-medium">0{i + 1}</span>
                  <h3 className="font-display text-xl font-medium mt-8 mb-3">{v.t}</h3>
                  <p className="text-cream/70 text-sm leading-relaxed">{v.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
