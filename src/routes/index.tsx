import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Mural } from "@/components/site/Mural";

export const Route = createFileRoute("/")({
  component: Index,
});

const services = [
  {
    n: "01",
    title: "Brand Design",
    body: "Architecting visual identities that capture the soul of your ambition — logos, systems, guidelines, positioning.",
    tone: "bg-zinc-50 text-navy",
    accent: "bg-navy text-cream",
  },
  {
    n: "02",
    title: "Digital Innovation",
    body: "Engineering high-performance websites, UI/UX and immersive digital ecosystems that convert.",
    tone: "bg-orange text-cream",
    accent: "bg-cream/20 text-cream",
  },
  {
    n: "03",
    title: "Creative Media",
    body: "Cinematic motion, photography, videography and campaign design that tell your story with impact.",
    tone: "bg-navy text-cream",
    accent: "bg-orange text-cream",
  },
  {
    n: "04",
    title: "Marketing",
    body: "Digital marketing, growth strategy, campaign management and social media that moves audiences.",
    tone: "bg-teal/10 text-navy",
    accent: "bg-teal text-cream",
  },
  {
    n: "05",
    title: "Print Solutions",
    body: "Business cards, catalogues, signage, apparel, packaging and vehicle branding — crafted for the physical world.",
    tone: "bg-terracotta/10 text-navy",
    accent: "bg-terracotta text-cream",
  },
  {
    n: "06",
    title: "Creative Consulting",
    body: "Brand audits, pitch decks, startup branding and innovation workshops with strategy at the center.",
    tone: "bg-gold/15 text-navy",
    accent: "bg-gold text-navy",
  },
];

const process = [
  { n: 1, label: "Discover", body: "We immerse in your world to uncover the core spark of your brand's potential.", dot: "bg-orange" },
  { n: 2, label: "Strategy", body: "Defining the trajectory — mapping the path from where you are to where you need to be.", dot: "bg-navy" },
  { n: 3, label: "Design", body: "Crafting the visual language. Geometry meeting emotion to create lasting momentum.", dot: "bg-teal" },
  { n: 4, label: "Prototype", body: "Bringing ideas to life through tangible, testable, iterative artifacts.", dot: "bg-terracotta" },
  { n: 5, label: "Launch", body: "Deploying with precision. Every pixel, print and product ready for the world.", dot: "bg-gold" },
  { n: 6, label: "Support", body: "We stay with you — evolving, refining, sustaining the momentum long after launch.", dot: "bg-orange" },
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
];

const testimonials = [
  { quote: "KINETIK didn't just design a logo — they engineered our entire brand momentum. Six months in, we've tripled inbound leads.", author: "Thabo Molefe", role: "Founder, Vertex Architects" },
  { quote: "The team turned a two-year-old idea into a launch-ready brand system in six weeks. Ruthless discipline, wild creativity.", author: "Palesa Nkosi", role: "CEO, Lumina Skincare" },
  { quote: "Every deliverable felt like a piece of art that also happened to sell. Rare combination.", author: "Sipho Dlamini", role: "Marketing Lead, IGM" },
];

function Index() {
  return (
    <div className="bg-cream text-ink selection:bg-orange/30">
      <Nav />
      <main>
        {/* HERO */}
        <header className="relative min-h-[100dvh] flex flex-col justify-end pt-32 pb-16 overflow-hidden bg-navy">
          <Mural />
          <div className="relative z-10 px-6 max-w-screen-xl mx-auto w-full">
            <div className="inline-flex items-center gap-2 mb-8 animate-reveal">
              <span className="size-2 rounded-full bg-orange animate-pulse" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-cream/70">
                Digital Headquarters · Est. Lesotho
              </span>
            </div>
            <h1 className="font-display text-[15vw] md:text-[9vw] lg:text-[8rem] font-medium text-cream leading-[0.9] tracking-tight text-balance mb-10 animate-reveal">
              We build brands that <span className="text-orange italic">move</span>.
            </h1>
            <p className="max-w-[46ch] text-lg md:text-xl text-cream/75 leading-relaxed mb-10 animate-reveal">
              Africa&apos;s next-generation creative studio. We engineer momentum through
              human-centered design, strategy, technology and storytelling.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-reveal">
              <Link
                to="/contact"
                className="group relative bg-orange text-cream font-medium py-5 px-8 rounded-full text-center inline-flex items-center justify-center gap-3 overflow-hidden hover:scale-[1.02] transition-transform"
              >
                Start a Project
                <span className="size-2 bg-cream rounded-full group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/portfolio"
                className="bg-cream/10 border border-cream/20 backdrop-blur-sm text-cream font-medium py-5 px-8 rounded-full text-center hover:bg-cream/20 transition-colors"
              >
                Explore Work
              </Link>
            </div>
          </div>

          <div className="relative z-10 mt-16 px-6 max-w-screen-xl mx-auto w-full grid grid-cols-3 gap-6 text-cream/60 text-xs uppercase tracking-widest border-t border-cream/10 pt-6">
            <div><span className="block text-cream font-display text-3xl font-medium mb-1">120+</span>Projects</div>
            <div><span className="block text-cream font-display text-3xl font-medium mb-1">45</span>Brands</div>
            <div><span className="block text-cream font-display text-3xl font-medium mb-1">8yr</span>Craft</div>
          </div>
        </header>

        {/* MARQUEE */}
        <div className="bg-cream border-y border-navy/10 py-6 overflow-hidden">
          <div className="flex whitespace-nowrap animate-marquee gap-16 text-navy font-display text-3xl md:text-5xl font-medium">
            {Array.from({ length: 2 }).map((_, i) => (
              <div key={i} className="flex gap-16 shrink-0">
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

        {/* SERVICES */}
        <section id="services" className="py-24 px-6">
          <div className="max-w-screen-xl mx-auto">
            <div className="mb-16 grid md:grid-cols-2 gap-8 items-end">
              <div>
                <span className="text-xs font-semibold tracking-widest text-orange uppercase block mb-4">
                  ◆ Our Expertise
                </span>
                <h2 className="font-display text-4xl md:text-6xl font-medium text-navy leading-[1.02] tracking-tight text-balance">
                  Momentum through <br />multidisciplinary craft.
                </h2>
              </div>
              <p className="text-navy/60 text-lg leading-relaxed max-w-md">
                Six studios, one philosophy. From identity to interface, from print to campaign — every discipline compounds the last.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {services.map((s) => (
                <div key={s.n} className={`group p-8 rounded-3xl ring-1 ring-black/5 flex flex-col justify-between aspect-square ${s.tone} hover:scale-[1.02] transition-transform`}>
                  <div className="flex justify-between items-start">
                    <span className="font-display text-xl font-semibold opacity-80">{s.n}</span>
                    <div className={`size-12 rounded-2xl grid place-items-center ${s.accent}`}>
                      <div className="w-4 h-0.5 bg-current" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-display text-2xl md:text-3xl font-medium mb-3">{s.title}</h3>
                    <p className="text-base leading-relaxed opacity-80 text-pretty">{s.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PORTFOLIO */}
        <section id="work" className="py-24 bg-navy text-cream overflow-hidden">
          <div className="px-6 max-w-screen-xl mx-auto">
            <div className="flex items-end justify-between mb-12">
              <div>
                <span className="text-xs font-semibold tracking-widest text-gold uppercase block mb-4">
                  ◆ Selected Work
                </span>
                <h2 className="font-display text-4xl md:text-6xl font-medium text-cream leading-[1.02] tracking-tight">
                  Brands in motion.
                </h2>
              </div>
              <Link to="/portfolio" className="hidden md:inline-flex text-sm border border-cream/20 rounded-full py-2.5 px-5 hover:bg-cream/10 transition-colors">
                View All →
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {portfolio.map((p) => (
                <div key={p.title} className="group">
                  <div className={`w-full ${p.aspect} ${p.bg} rounded-3xl overflow-hidden relative ring-1 ring-white/5`}>
                    <div className="absolute inset-0 mural-grid opacity-30" />
                    <div className="absolute inset-0 grid place-items-center font-display text-4xl font-medium text-cream/90">
                      {p.title}
                    </div>
                    <div className="absolute top-4 right-4 bg-cream/10 backdrop-blur-md text-[10px] uppercase tracking-widest px-3 py-1.5 rounded-full">
                      {p.tag}
                    </div>
                  </div>
                  <div className="mt-4 flex justify-between items-center">
                    <h4 className="text-lg font-medium">{p.title}</h4>
                    <span className="text-xs text-cream/50 uppercase tracking-widest">{p.tag}</span>
                  </div>
                </div>
              ))}
            </div>

            <Link to="/portfolio" className="md:hidden mt-10 inline-flex text-sm border border-cream/20 rounded-full py-3 px-6">
              View all work →
            </Link>
          </div>
        </section>

        {/* PROCESS */}
        <section id="process" className="py-24 px-6 bg-cream">
          <div className="max-w-screen-xl mx-auto">
            <div className="mb-16 max-w-2xl">
              <span className="text-xs font-semibold tracking-widest text-orange uppercase block mb-4">◆ Process</span>
              <h2 className="font-display text-4xl md:text-6xl font-medium text-navy leading-[1.02] tracking-tight">
                Six moves from spark to sustained momentum.
              </h2>
            </div>

            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-px bg-navy/10" />
              <div className="space-y-12 relative">
                {process.map((p) => (
                  <div key={p.n} className="flex gap-8">
                    <div className={`shrink-0 size-9 ${p.dot} text-cream rounded-full flex items-center justify-center font-display text-sm font-medium z-10 ring-4 ring-cream`}>
                      {p.n}
                    </div>
                    <div className="max-w-[52ch]">
                      <h4 className="font-display text-2xl md:text-3xl font-medium text-navy mb-2">{p.label}</h4>
                      <p className="text-base text-navy/60 leading-relaxed">{p.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* INDUSTRIES */}
        <section className="py-24 px-6 bg-ink text-cream">
          <div className="max-w-screen-xl mx-auto">
            <div className="mb-12 max-w-2xl">
              <span className="text-xs font-semibold tracking-widest text-orange uppercase block mb-4">◆ Industries</span>
              <h2 className="font-display text-4xl md:text-6xl font-medium leading-[1.02] tracking-tight">
                Fourteen sectors. One creative operating system.
              </h2>
            </div>
            <div className="flex flex-wrap gap-3">
              {industries.map((i) => (
                <span key={i} className="border border-cream/15 rounded-full px-5 py-2.5 text-sm hover:bg-orange hover:border-orange transition-colors">
                  {i}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="py-24 px-6 bg-cream">
          <div className="max-w-screen-xl mx-auto">
            <div className="mb-12">
              <span className="text-xs font-semibold tracking-widest text-orange uppercase block mb-4">◆ Voices</span>
              <h2 className="font-display text-4xl md:text-6xl font-medium text-navy leading-[1.02] tracking-tight">
                Trusted by ambitious operators.
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map((t, i) => (
                <figure key={i} className="bg-white rounded-3xl p-8 ring-1 ring-navy/5 flex flex-col justify-between">
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

        {/* IDEA LAB CTA */}
        <section className="px-6 pb-24">
          <div className="max-w-screen-xl mx-auto p-10 md:p-16 rounded-[2.5rem] bg-orange text-cream relative overflow-hidden">
            <div className="absolute -bottom-20 -right-20 size-80 rounded-full border-[28px] border-cream/20 animate-mural-slow" />
            <div className="relative">
              <span className="text-xs font-semibold tracking-widest text-cream/70 uppercase block mb-4">◆ Idea Lab · Coming Soon</span>
              <h2 className="font-display text-4xl md:text-6xl font-medium leading-[1.02] tracking-tight text-balance mb-6 max-w-[20ch]">
                Play with your brand before you brief us.
              </h2>
              <p className="max-w-md text-cream/85 mb-8 leading-relaxed">
                Brand name generator, palette explorer, personality quiz, website cost estimator — AI tools that turn our website into a creative workspace.
              </p>
              <Link to="/contact" className="inline-flex bg-cream text-navy font-medium py-4 px-8 rounded-full hover:scale-[1.02] transition-transform">
                Join the waitlist →
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
