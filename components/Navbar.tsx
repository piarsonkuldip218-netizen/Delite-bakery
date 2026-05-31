"use client";

import { useEffect, useState } from "react";
import { Menu, X, Phone, Cake } from "lucide-react";
import { business, navLinks } from "@/lib/data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "py-2.5" : "py-4"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6">
        <div
          className={`flex w-full items-center justify-between rounded-2xl px-4 py-2.5 transition-all duration-500 ${
            scrolled ? "glass shadow-glass" : "bg-transparent"
          }`}
        >
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2.5">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-caramel to-caramel-dark text-cream-50 shadow-glow">
              <Cake className="h-5 w-5" />
            </span>
            <span className="font-display text-lg font-extrabold leading-none text-espresso">
              {business.name}
              <span className="block text-[11px] font-semibold uppercase tracking-[0.2em] text-caramel-dark">
                Margherita
              </span>
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-full px-4 py-2 text-sm font-semibold text-espresso-700 transition-colors hover:bg-white/50 hover:text-caramel-dark"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="flex items-center gap-2">
            <a
              href={`tel:${business.phoneRaw}`}
              className="btn-primary hidden !px-5 !py-2.5 text-sm sm:inline-flex"
            >
              <Phone className="h-4 w-4" />
              Call to Order
            </a>
            <button
              onClick={() => setOpen((v) => !v)}
              className="grid h-10 w-10 place-items-center rounded-xl glass text-espresso lg:hidden"
              aria-label="Toggle menu"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile drawer */}
      {open && (
        <div className="mx-4 mt-2 lg:hidden">
          <div className="glass-card flex flex-col gap-1 p-4 shadow-glass-lg">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 font-semibold text-espresso-700 transition-colors hover:bg-white/60"
              >
                {link.label}
              </a>
            ))}
            <a
              href={`tel:${business.phoneRaw}`}
              className="btn-primary mt-2"
              onClick={() => setOpen(false)}
            >
              <Phone className="h-4 w-4" />
              {business.phoneDisplay}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
