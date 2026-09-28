import { Link } from "@tanstack/react-router";
import { Logo } from "@/components/brand/Logo";
import { MuralPattern } from "@/components/brand/MuralPattern";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/portfolio", label: "Work" },
  { to: "/contact", label: "Contact" },
] as const;

export function Footer() {
  return (
    <footer className="relative bg-navy text-cream pt-32 pb-16 px-6 rounded-t-[3rem] overflow-hidden mt-32">
      <MuralPattern variant="footer" className="absolute inset-0 opacity-20 pointer-events-none" />

      <div className="relative z-10 max-w-screen-xl mx-auto">
        <h2 className="font-display text-5xl md:text-7xl font-medium leading-[0.95] tracking-tight text-balance max-w-[20ch]">
          Let's engineer <em className="accent-serif text-orange">momentum</em> together.
        </h2>
        <Link
          to="/contact"
          className="inline-flex items-center gap-3 bg-orange text-cream font-medium py-4 px-8 rounded-full hover:scale-[1.02] transition-transform mt-10"
        >
          Start a Project
          <span className="size-2 bg-cream rounded-full" />
        </Link>

        <div className="mt-20 grid md:grid-cols-4 gap-12">
          <div>
            <Logo variant="cream" />
            <p className="text-cream/60 text-sm mt-6 leading-relaxed">
              Africa's next-generation creative studio. We engineer momentum through design, brand, and impact.
            </p>
          </div>

          <div>
            <p className="text-cream/40 text-[10px] font-bold uppercase tracking-widest mb-4">Navigate</p>
            <div className="flex flex-col gap-3 text-sm">
              {navLinks.map((l) => (
                <Link key={l.to} to={l.to} className="hover:text-orange transition-colors">
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="text-cream/40 text-[10px] font-bold uppercase tracking-widest mb-4">Connect</p>
            <div className="flex flex-col gap-3">
              <a href="tel:+26662068252" className="text-lg hover:text-orange transition-colors">
                +266 6206 8252
              </a>
              <a href="tel:+26657195794" className="text-lg hover:text-orange transition-colors">
                +266 5719 5794
              </a>
              <a
                href="mailto:kinetikmediasolutions@gmail.com"
                className="text-sm text-cream/70 mt-2 hover:text-orange transition-colors break-all"
              >
                kinetikmediasolutions@gmail.com
              </a>
              <a
                href="mailto:pitsoarnold@gmail.com"
                className="text-sm text-cream/70 hover:text-orange transition-colors break-all"
              >
                pitsoarnold@gmail.com
              </a>
            </div>
          </div>

          <div>
            <p className="text-cream/40 text-[10px] font-bold uppercase tracking-widest mb-4">Studio</p>
            <p className="text-sm text-cream/70 leading-relaxed">
              Maseru
              <br />
              Kingdom of Lesotho
              <br />
              Southern Africa
            </p>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-cream/10 flex flex-col md:flex-row justify-between gap-6 items-start md:items-center">
          <p className="text-[10px] text-cream/40 uppercase tracking-widest">
            © 2026 KINETIK Media Solutions · Design · Brand · Impact
          </p>
          <div className="flex gap-3">
            {["IG", "FB", "LI", "WA"].map((s) => (
              <span
                key={s}
                className="size-10 rounded-full border border-cream/15 grid place-items-center text-[10px] font-bold hover:border-orange hover:text-orange transition-colors"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
