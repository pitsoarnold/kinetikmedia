import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — KINETIK Media Solutions" },
      { name: "description", content: "Brand design, creative media, digital solutions, marketing, print and creative consulting — every discipline needed to move a brand forward." },
      { property: "og:title", content: "Services — KINETIK Media Solutions" },
      { property: "og:description", content: "Six studios, one philosophy. From identity to interface, from print to campaign." },
    ],
  }),
  component: Services,
});

const groups = [
  {
    t: "Brand Design",
    items: ["Logo Design", "Visual Identity", "Brand Strategy", "Brand Systems", "Brand Guidelines", "Packaging", "Brand Positioning"],
  },
  {
    t: "Creative Media",
    items: ["Graphic Design", "Social Media Design", "Campaign Design", "Advertising", "Creative Direction", "Photography", "Videography", "Motion Graphics"],
  },
  {
    t: "Digital Solutions",
    items: ["Website Design", "Website Development", "UI/UX Design", "Landing Pages", "Portfolio Sites", "Corporate Sites", "E-Commerce", "SEO", "Maintenance"],
  },
  {
    t: "Marketing",
    items: ["Digital Marketing", "Campaign Management", "Email Marketing", "Content Strategy", "Social Media Management", "Advertising", "Growth Marketing"],
  },
  {
    t: "Print Solutions",
    items: ["Business Cards", "Flyers", "Catalogues", "Company Profiles", "Signage", "Corporate Gifts", "Branded Apparel", "Vehicle Branding", "Packaging"],
  },
  {
    t: "Creative Consulting",
    items: ["Creative Strategy", "Business Identity", "Pitch Decks", "Startup Branding", "Brand Audits", "Innovation Workshops"],
  },
];

function Services() {
  return (
    <div className="bg-cream text-ink">
      <Nav />
      <main>
        <header className="pt-40 pb-16 px-6">
          <div className="max-w-screen-xl mx-auto">
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-orange block mb-6">◆ Services</span>
            <h1 className="font-display text-5xl md:text-7xl font-medium text-navy leading-[0.95] tracking-tight text-balance max-w-[16ch]">
              Every discipline your brand needs to move.
            </h1>
          </div>
        </header>

        <section className="pb-24 px-6">
          <div className="max-w-screen-xl mx-auto grid md:grid-cols-2 gap-4">
            {groups.map((g, i) => (
              <div key={g.t} className="p-8 md:p-10 rounded-3xl bg-white ring-1 ring-navy/5">
                <div className="flex items-start justify-between mb-6">
                  <h3 className="font-display text-3xl font-medium text-navy">{g.t}</h3>
                  <span className="font-display text-orange">0{i + 1}</span>
                </div>
                <ul className="grid grid-cols-2 gap-x-6 gap-y-2 text-sm text-navy/70">
                  {g.items.map((it) => (
                    <li key={it} className="flex items-center gap-2 py-1">
                      <span className="size-1 rounded-full bg-orange" />
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="max-w-screen-xl mx-auto mt-12 flex justify-center">
            <Link to="/contact" className="bg-navy text-cream font-medium py-4 px-8 rounded-full hover:bg-orange transition-colors">
              Brief us on your project →
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
