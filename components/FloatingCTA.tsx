"use client";

import { Phone } from "lucide-react";
import { business } from "@/lib/data";

export default function FloatingCTA() {
  return (
    <a
      href={`tel:${business.phoneRaw}`}
      aria-label="Call to order"
      className="fixed bottom-5 right-5 z-40 grid h-14 w-14 place-items-center rounded-full bg-gradient-to-br from-caramel to-caramel-dark text-cream-50 shadow-glass-lg transition-transform hover:scale-105 active:scale-95"
    >
      {/* Decorative pulse ring — hidden on mobile via .pulse-ring media query */}
      <span className="pulse-ring absolute inset-0 rounded-full bg-caramel/40 animate-pulse-ring" />
      <Phone className="relative h-6 w-6" />
    </a>
  );
}
