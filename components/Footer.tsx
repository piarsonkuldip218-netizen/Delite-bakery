import { Cake, Phone, MapPin, Heart } from "lucide-react";
import { business, navLinks } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 pb-10 sm:px-6">
        <div className="glass-dark relative overflow-hidden rounded-[2rem] p-8 sm:p-12">
          <div className="blob right-0 top-0 h-56 w-56 bg-caramel" />
          <div className="relative grid gap-10 md:grid-cols-[1.5fr_1fr_1fr]">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-caramel to-caramel-dark text-cream-50">
                  <Cake className="h-5 w-5" />
                </span>
                <span className="font-display text-xl font-extrabold text-cream-50">
                  {business.name}
                </span>
              </div>
              <p className="mt-4 max-w-sm text-cream-200/80">
                {business.shortDescription}
              </p>
              <a
                href={`tel:${business.phoneRaw}`}
                className="btn-primary mt-6 !px-5 !py-2.5 text-sm"
              >
                <Phone className="h-4 w-4" />
                {business.phoneDisplay}
              </a>
            </div>

            {/* Links */}
            <div>
              <h4 className="font-display text-sm font-bold uppercase tracking-[0.2em] text-honey">
                Explore
              </h4>
              <ul className="mt-4 space-y-2.5">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-cream-200/80 transition-colors hover:text-cream-50"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-display text-sm font-bold uppercase tracking-[0.2em] text-honey">
                Find us
              </h4>
              <p className="mt-4 flex items-start gap-2 text-cream-200/80">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-honey" />
                {business.address}
              </p>
            </div>
          </div>

          <div className="relative mt-10 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-sm text-cream-200/70 sm:flex-row">
            <p>
              © {new Date().getFullYear()} {business.name}. All rights reserved.
            </p>
            <p className="flex items-center gap-1.5">
              Baked with <Heart className="h-4 w-4 fill-rose-bakery text-rose-bakery" /> in
              Margherita, Assam
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
