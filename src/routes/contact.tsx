import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "motion/react";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { MuralPattern } from "@/components/brand/MuralPattern";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — KINETIK Media Solutions" },
      { name: "description", content: "Start a project with KINETIK. WhatsApp, phone, or email — we reply within one business day." },
      { property: "og:title", content: "Contact — KINETIK Media Solutions" },
      { property: "og:description", content: "Let's engineer momentum together." },
    ],
  }),
  component: Contact,
});

const faqs = [
  { q: "How long does a branding project take?", a: "Typically 4-6 weeks from kickoff to final delivery, depending on scope and the number of stakeholders involved." },
  { q: "Do you work with clients outside Lesotho?", a: "Yes. We work with clients across Southern Africa and remotely worldwide." },
  { q: "What is your minimum project size?", a: "We work with businesses of all sizes. Brand design starts from R50 per design for promo items, and full identity projects start around R15,000." },
  { q: "Do you offer payment plans?", a: "Yes. Most projects are split into 50% upfront, 50% on delivery. Larger engagements can be milestone-based." },
  { q: "How do I get started?", a: "Send us a brief via the form, WhatsApp, or email. We'll schedule a discovery call within 2 business days." },
];

function Contact() {
  const [sent, setSent] = useState(false);

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
              ◆ Contact
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="font-display text-5xl md:text-8xl font-medium leading-[0.9] tracking-[-0.04em] text-balance max-w-[16ch]"
            >
              Let&apos;s engineer <em className="accent-serif text-orange">momentum</em> together.
            </motion.h1>
          </div>
        </header>

        {/* ── CONTACT + FORM ──────────────────────────────── */}
        <section className="py-24 px-6">
          <div className="max-w-screen-xl mx-auto grid md:grid-cols-2 gap-6">

            {/* Direct Channels */}
            <div className="p-8 md:p-12 rounded-3xl bg-navy text-cream relative overflow-hidden">
              <MuralPattern variant="block" className="absolute inset-0 opacity-15 pointer-events-none" />
              <div className="relative z-10">
                <h2 className="font-display text-3xl font-medium mb-10">Direct channels</h2>
                <div className="space-y-8">
                  <a href="https://wa.me/26662068252" target="_blank" rel="noreferrer" className="flex items-center justify-between border-b border-cream/10 pb-5 hover:text-orange transition-colors group">
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-cream/40 mb-1.5">WhatsApp</p>
                      <p className="text-xl font-medium">+266 6206 8252</p>
                    </div>
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </a>
                  <a href="https://wa.me/26657195794" target="_blank" rel="noreferrer" className="flex items-center justify-between border-b border-cream/10 pb-5 hover:text-orange transition-colors group">
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-cream/40 mb-1.5">WhatsApp</p>
                      <p className="text-xl font-medium">+266 5719 5794</p>
                    </div>
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </a>
                  <a href="mailto:kinetikmediasolutions@gmail.com" className="flex items-center justify-between border-b border-cream/10 pb-5 hover:text-orange transition-colors group">
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-cream/40 mb-1.5">Email</p>
                      <p className="text-base font-medium break-all">kinetikmediasolutions@gmail.com</p>
                    </div>
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </a>
                  <a href="mailto:pitsoarnold@gmail.com" className="flex items-center justify-between hover:text-orange transition-colors group">
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-cream/40 mb-1.5">Founder</p>
                      <p className="text-base font-medium break-all">pitsoarnold@gmail.com</p>
                    </div>
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </a>
                </div>

                <div className="mt-16 pt-10 border-t border-cream/10">
                  <p className="text-[10px] uppercase tracking-widest text-cream/40 mb-3">Studio</p>
                  <p className="text-xl leading-snug font-medium">Maseru<br />Kingdom of Lesotho<br /><span className="text-cream/60 font-normal">Southern Africa</span></p>
                </div>
              </div>
            </div>

            {/* Form */}
            <form
              className="p-8 md:p-12 rounded-3xl bg-white ring-1 ring-navy/5"
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
            >
              {sent ? (
                <div className="min-h-[500px] flex flex-col justify-center text-center">
                  <div className="size-20 mx-auto rounded-full bg-orange text-cream grid place-items-center font-display text-3xl mb-8">✓</div>
                  <h3 className="font-display text-4xl font-medium text-navy mb-4">Momentum initiated.</h3>
                  <p className="text-navy/60 text-lg">We&apos;ll reply within one business day.</p>
                </div>
              ) : (
                <>
                  <h2 className="font-display text-3xl font-medium text-navy mb-10">Brief the studio</h2>
                  <div className="space-y-6">
                    <label className="block">
                      <span className="text-[10px] uppercase tracking-widest text-navy/50 block mb-3 font-semibold">Name</span>
                      <input required name="name" className="w-full bg-cream border border-navy/10 rounded-xl px-5 py-4 text-navy focus:outline-none focus:border-orange transition-colors" />
                    </label>
                    <label className="block">
                      <span className="text-[10px] uppercase tracking-widest text-navy/50 block mb-3 font-semibold">Email</span>
                      <input required type="email" name="email" className="w-full bg-cream border border-navy/10 rounded-xl px-5 py-4 text-navy focus:outline-none focus:border-orange transition-colors" />
                    </label>
                    <label className="block">
                      <span className="text-[10px] uppercase tracking-widest text-navy/50 block mb-3 font-semibold">Project type</span>
                      <select name="type" className="w-full bg-cream border border-navy/10 rounded-xl px-5 py-4 text-navy focus:outline-none focus:border-orange transition-colors">
                        <option>Brand Design</option>
                        <option>Digital / Website</option>
                        <option>Creative Media</option>
                        <option>Marketing</option>
                        <option>Print Solutions</option>
                        <option>Creative Consulting</option>
                      </select>
                    </label>
                    <label className="block">
                      <span className="text-[10px] uppercase tracking-widest text-navy/50 block mb-3 font-semibold">Tell us about your ambition</span>
                      <textarea required name="message" rows={5} className="w-full bg-cream border border-navy/10 rounded-xl px-5 py-4 text-navy focus:outline-none focus:border-orange transition-colors resize-none" />
                    </label>
                    <button type="submit" className="w-full bg-navy text-cream font-medium py-5 rounded-full hover:bg-orange transition-colors">
                      Send brief →
                    </button>
                  </div>
                </>
              )}
            </form>
          </div>
        </section>

        {/* ── MAP ──────────────────────────────────────────── */}
        <section className="px-6 pb-24">
          <div className="max-w-screen-xl mx-auto">
            <div className="rounded-3xl overflow-hidden ring-1 ring-navy/10 h-[400px] bg-navy relative">
              <MuralPattern variant="block" className="absolute inset-0 opacity-30" />
              <div className="absolute inset-0 grid place-items-center text-cream">
                <div className="text-center">
                  <span className="font-display text-3xl font-medium block mb-3">Maseru, Lesotho</span>
                  <p className="text-cream/60 text-sm">Map location</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── FAQ ──────────────────────────────────────────── */}
        <section className="py-24 px-6 bg-navy text-cream">
          <div className="max-w-screen-xl mx-auto">
            <div className="mb-14 max-w-2xl">
              <span className="text-[10px] font-semibold tracking-[0.25em] text-orange uppercase block mb-6">◆ FAQ</span>
              <h2 className="font-display text-4xl md:text-6xl font-medium leading-[0.95] tracking-tight">
                Common <em className="accent-serif text-orange">questions</em>.
              </h2>
            </div>
            <div className="space-y-2">
              {faqs.map((f, i) => (
                <details key={i} className="group border-b border-cream/10 py-6">
                  <summary className="flex justify-between items-center cursor-pointer list-none">
                    <span className="font-display text-xl md:text-2xl font-medium pr-6">{f.q}</span>
                    <span className="text-orange text-2xl group-open:rotate-45 transition-transform">+</span>
                  </summary>
                  <p className="text-cream/70 leading-relaxed mt-4 max-w-3xl">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}