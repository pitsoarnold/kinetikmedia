import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Logo } from "./Logo";

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
        <div className="max-w-screen-xl mx-auto px-6 h-16 flex items-center justify-between">
          <Logo />
          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="text-sm font-medium text-navy/70 hover:text-orange transition-colors"
                activeProps={{ className: "text-sm font-medium text-navy" }}
                activeOptions={{ exact: l.to === "/" }}
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="bg-navy text-cream text-sm font-medium py-2.5 px-5 rounded-full hover:bg-orange transition-colors"
            >
              Start a Project
            </Link>
          </div>
          <button
            aria-label={open ? "Close menu" : "Open menu"}
            className="md:hidden p-2 text-navy min-h-11 min-w-11 flex items-center justify-center"
            onClick={() => setOpen((v) => !v)}
          >
            <svg className="size-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 6l12 12M6 18L18 6" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>
      {open && (
        <div className="fixed inset-0 z-40 pt-16 bg-cream md:hidden">
          <div className="px-6 py-10 flex flex-col gap-6">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="font-display text-4xl font-medium text-navy"
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-6 bg-orange text-cream font-medium py-4 px-8 rounded-full text-center"
            >
              Start a Project →
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
