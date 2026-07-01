import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";

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

function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <div className="bg-cream text-ink">
      <Nav />
      <main>
        <header className="pt-40 pb-16 px-6">
          <div className="max-w-screen-xl mx-auto">
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-orange block mb-6">◆ Contact</span>
            <h1 className="font-display text-5xl md:text-7xl font-medium text-navy leading-[0.95] tracking-tight text-balance max-w-[16ch]">
              Let&apos;s engineer <span className="text-orange italic">momentum</span> together.
            </h1>
          </div>
        </header>

        <section className="px-6 pb-24">
          <div className="max-w-screen-xl mx-auto grid md:grid-cols-2 gap-6">
            <div className="p-8 md:p-12 rounded-3xl bg-navy text-cream">
              <h2 className="font-display text-2xl font-medium mb-8">Direct channels</h2>
              <div className="space-y-6">
                <a href="https://wa.me/26662068252" target="_blank" rel="noreferrer" className="flex items-center justify-between border-b border-cream/10 pb-4 hover:text-orange transition-colors">
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-cream/40 mb-1">WhatsApp</p>
                    <p className="text-lg font-medium">+266 6206 8252</p>
                  </div>
                  <span>→</span>
                </a>
                <a href="https://wa.me/26657195794" target="_blank" rel="noreferrer" className="flex items-center justify-between border-b border-cream/10 pb-4 hover:text-orange transition-colors">
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-cream/40 mb-1">WhatsApp</p>
                    <p className="text-lg font-medium">+266 5719 5794</p>
                  </div>
                  <span>→</span>
                </a>
                <a href="mailto:kinetikmediasolutions@gmail.com" className="flex items-center justify-between border-b border-cream/10 pb-4 hover:text-orange transition-colors">
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-cream/40 mb-1">Email</p>
                    <p className="text-base font-medium break-all">kinetikmediasolutions@gmail.com</p>
                  </div>
                  <span>→</span>
                </a>
                <a href="mailto:pitsoarnold@gmail.com" className="flex items-center justify-between hover:text-orange transition-colors">
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-cream/40 mb-1">Founder</p>
                    <p className="text-base font-medium break-all">pitsoarnold@gmail.com</p>
                  </div>
                  <span>→</span>
                </a>
              </div>

              <div className="mt-12 pt-8 border-t border-cream/10">
                <p className="text-[10px] uppercase tracking-widest text-cream/40 mb-2">Studio</p>
                <p className="text-lg leading-snug">Maseru<br />Kingdom of Lesotho</p>
              </div>
            </div>

            <form
              className="p-8 md:p-12 rounded-3xl bg-white ring-1 ring-navy/5"
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
            >
              {sent ? (
                <div className="min-h-[400px] flex flex-col justify-center text-center">
                  <div className="size-16 mx-auto rounded-full bg-orange text-cream grid place-items-center font-display text-2xl mb-6">✓</div>
                  <h3 className="font-display text-3xl font-medium text-navy mb-3">Momentum initiated.</h3>
                  <p className="text-navy/60">We&apos;ll reply within one business day.</p>
                </div>
              ) : (
                <>
                  <h2 className="font-display text-2xl font-medium text-navy mb-8">Brief the studio</h2>
                  <div className="space-y-5">
                    <label className="block">
                      <span className="text-[10px] uppercase tracking-widest text-navy/50 block mb-2">Name</span>
                      <input required name="name" className="w-full bg-cream border border-navy/10 rounded-xl px-4 py-3 text-navy focus:outline-none focus:border-orange" />
                    </label>
                    <label className="block">
                      <span className="text-[10px] uppercase tracking-widest text-navy/50 block mb-2">Email</span>
                      <input required type="email" name="email" className="w-full bg-cream border border-navy/10 rounded-xl px-4 py-3 text-navy focus:outline-none focus:border-orange" />
                    </label>
                    <label className="block">
                      <span className="text-[10px] uppercase tracking-widest text-navy/50 block mb-2">Project type</span>
                      <select name="type" className="w-full bg-cream border border-navy/10 rounded-xl px-4 py-3 text-navy focus:outline-none focus:border-orange">
                        <option>Brand Design</option>
                        <option>Digital / Website</option>
                        <option>Creative Media</option>
                        <option>Marketing</option>
                        <option>Print</option>
                        <option>Consulting</option>
                      </select>
                    </label>
                    <label className="block">
                      <span className="text-[10px] uppercase tracking-widest text-navy/50 block mb-2">Tell us about your ambition</span>
                      <textarea required name="message" rows={5} className="w-full bg-cream border border-navy/10 rounded-xl px-4 py-3 text-navy focus:outline-none focus:border-orange resize-none" />
                    </label>
                    <button type="submit" className="w-full bg-navy text-cream font-medium py-4 rounded-full hover:bg-orange transition-colors">
                      Send brief →
                    </button>
                  </div>
                </>
              )}
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
