import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="bg-navy text-cream pt-24 pb-12 px-6 rounded-t-[2.5rem]">
      <div className="max-w-screen-xl mx-auto">
        <div className="mb-16">
          <h2 className="font-display text-4xl md:text-6xl font-medium leading-[0.95] tracking-tight text-balance mb-10">
            Let&apos;s engineer <span className="text-orange italic">momentum</span> together.
          </h2>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 bg-orange text-cream font-medium py-4 px-8 rounded-full hover:scale-[1.02] transition-transform"
          >
            Start a Project
            <span className="size-2 bg-cream rounded-full" />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-12 mb-16">
          <div>
            <p className="text-cream/40 text-[10px] font-bold uppercase tracking-widest mb-4">Connect</p>
            <a href="tel:+26662068252" className="block text-lg hover:text-orange transition-colors">+266 6206 8252</a>
            <a href="tel:+26657195794" className="block text-lg hover:text-orange transition-colors">+266 5719 5794</a>
            <a href="mailto:kinetikmediasolutions@gmail.com" className="block text-sm text-cream/70 mt-3 hover:text-orange transition-colors break-all">
              kinetikmediasolutions@gmail.com
            </a>
          </div>
          <div>
            <p className="text-cream/40 text-[10px] font-bold uppercase tracking-widest mb-4">Navigate</p>
            <div className="flex flex-col gap-2 text-sm">
              <Link to="/about" className="hover:text-orange transition-colors">About</Link>
              <Link to="/services" className="hover:text-orange transition-colors">Services</Link>
              <Link to="/portfolio" className="hover:text-orange transition-colors">Work</Link>
              <Link to="/contact" className="hover:text-orange transition-colors">Contact</Link>
            </div>
          </div>
          <div>
            <p className="text-cream/40 text-[10px] font-bold uppercase tracking-widest mb-4">Studio</p>
            <p className="text-sm text-cream/70 leading-relaxed">
              Maseru<br />Kingdom of Lesotho<br />Southern Africa
            </p>
          </div>
        </div>

        <div className="pt-8 border-t border-cream/10 flex flex-col md:flex-row justify-between gap-6 items-start md:items-center">
          <Logo variant="cream" />
          <p className="text-[10px] text-cream/40 uppercase tracking-widest">
            © {new Date().getFullYear()} KINETIK Media Solutions · Design · Brand · Impact
          </p>
          <div className="flex gap-3">
            {["IG", "FB", "LN", "WA"].map((s) => (
              <span key={s} className="size-9 rounded-full border border-cream/15 grid place-items-center text-[10px] font-bold">{s}</span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
