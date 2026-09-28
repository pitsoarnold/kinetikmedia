import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/brand/Logo";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/portfolio", label: "Work" },
  { to: "/contact", label: "Contact" },
] as const;

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-cream/85 backdrop-blur-md border-b border-navy/5">
        <div className="max-w-screen-xl mx-auto px-6 h-20 flex items-center justify-between">
          <Logo variant="navy" />

          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="text-sm font-medium text-navy/70 hover:text-orange transition-colors"
                activeProps={{ className: "text-sm font-medium text-navy font-semibold" }}
                activeOptions={{ exact: l.to === "/" }}
              >
                {l.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex">
            <Link
              to="/contact"
              className="bg-navy text-cream text-sm font-medium px-6 py-3 rounded-full hover:bg-orange transition-colors"
            >
              Start a Project
            </Link>
          </div>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="md:hidden p-2 min-h-11 min-w-11 flex items-center justify-center text-navy"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="fixed inset-0 z-40 pt-24 bg-cream md:hidden">
          <div className="flex flex-col px-6">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="font-display text-4xl font-medium text-navy py-4 border-b border-navy/5"
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="bg-orange text-cream font-medium py-4 px-8 rounded-full mt-8 text-center"
            >
              Start a Project
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
