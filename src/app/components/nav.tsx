"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import ThemeToggle from "./theme-toggle";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Our Work" },
  { href: "/about", label: "About" },
  { href: "/reviews", label: "Reviews" },
  { href: "/pricing", label: "Pricing" },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold gradient-text tracking-tight">
          slap.
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8 text-sm">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`transition-colors ${
                pathname === link.href
                  ? "text-foreground font-medium"
                  : "text-muted hover:text-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <ThemeToggle />
          <Link
            href="/contact"
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              pathname === "/contact"
                ? "bg-accent-dark text-white"
                : "bg-accent hover:bg-accent-dark text-white"
            }`}
          >
            Get in Touch
          </Link>
        </div>

        {/* Mobile controls */}
        <div className="md:hidden flex items-center gap-3">
          <ThemeToggle />
          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            className="relative w-9 h-9 flex items-center justify-center rounded-full border border-border text-muted hover:text-foreground transition-colors"
          >
            <svg
              className={`w-5 h-5 absolute transition-all duration-300 ${
                open ? "opacity-0 rotate-90 scale-0" : "opacity-100 rotate-0 scale-100"
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg
              className={`w-5 h-5 absolute transition-all duration-300 ${
                open ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-0"
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-96 border-t border-border" : "max-h-0"
        }`}
      >
        <div className="px-6 py-4 space-y-3 bg-background/95 backdrop-blur-xl">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`block py-2 transition-colors ${
                pathname === link.href
                  ? "text-foreground font-medium"
                  : "text-muted hover:text-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="block py-3 text-center bg-accent hover:bg-accent-dark text-white rounded-full font-medium transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </nav>
  );
}
