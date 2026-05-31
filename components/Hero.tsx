"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { Star, Phone, MapPin, ArrowRight } from "lucide-react";
import { business, stats } from "@/lib/data";

// 3D canvas loaded client-side only (no SSR) to keep export build clean.
const FloatingGlass = dynamic(() => import("@/components/FloatingGlass"), {
  ssr: false,
});

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[100svh] overflow-hidden pt-28 pb-16">
      {/* Warm mesh background */}
      <div className="absolute inset-0 -z-10 bg-mesh-warm" />
      <div className="blob -left-20 top-10 h-72 w-72 bg-rose-light" />
      <div className="blob right-0 top-40 h-80 w-80 bg-honey" />
      <div className="blob bottom-0 left-1/3 h-72 w-72 bg-caramel-light" />

      {/* Floating 3D waterglass icons */}
      <FloatingGlass className="pointer-events-none absolute inset-0 -z-10 opacity-90" />

      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2">
        {/* Copy */}
        <div className="relative z-10 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="glass mx-auto mb-6 inline-flex items-center gap-2 rounded-full px-4 py-2 lg:mx-0"
          >
            <span className="flex items-center gap-0.5 text-honey">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-3.5 w-3.5 fill-current" />
              ))}
            </span>
            <span className="text-sm font-bold text-espresso">
              {business.rating}
            </span>
            <span className="text-sm font-medium text-espresso-500">
              ({business.reviewCount} Google reviews)
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08 }}
            className="font-display text-5xl font-extrabold leading-[1.05] tracking-tight text-espresso sm:text-6xl lg:text-7xl"
          >
            Freshly Baked
            <span className="block text-gradient">Happiness, Daily.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.16 }}
            className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-espresso-500 lg:mx-0"
          >
            {business.longDescription}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.24 }}
            className="mt-8 flex flex-col items-center gap-3 sm:flex-row lg:justify-start"
          >
            <a href={`tel:${business.phoneRaw}`} className="btn-primary w-full sm:w-auto">
              <Phone className="h-5 w-5" />
              Order Your Cake
            </a>
            <a href="#menu" className="btn-ghost w-full sm:w-auto">
              View Menu
              <ArrowRight className="h-5 w-5" />
            </a>
          </motion.div>

          <motion.a
            href={business.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.32 }}
            className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-espresso-500 transition-colors hover:text-caramel-dark"
          >
            <MapPin className="h-4 w-4 text-caramel-dark" />
            {business.shortAddress}
          </motion.a>
        </div>

        {/* Stats glass panel */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative z-10 lg:justify-self-end"
        >
          <div className="glass-card mx-auto max-w-md p-6 shadow-glass-lg sm:p-8">
            <p className="font-display text-sm font-bold uppercase tracking-[0.2em] text-caramel-dark">
              Why locals love us
            </p>
            <div className="mt-5 grid grid-cols-2 gap-4">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-2xl bg-white/50 p-4 text-center"
                >
                  <s.icon className="mx-auto mb-2 h-6 w-6 text-caramel" />
                  <div className="font-display text-3xl font-extrabold text-espresso">
                    {s.value}
                  </div>
                  <div className="text-xs font-semibold uppercase tracking-wide text-espresso-500">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-5 rounded-2xl bg-gradient-to-br from-caramel/15 to-rose-bakery/15 p-4 text-center">
              <p className="text-sm font-semibold text-espresso-700">
                Open today · 8:00 AM – 8:30 PM
              </p>
              <p className="text-xs text-espresso-500">
                Price for two: {business.priceRange}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
