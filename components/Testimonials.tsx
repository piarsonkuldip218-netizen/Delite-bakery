import Reveal from "@/components/Reveal";
import { Star } from "lucide-react";
import { testimonials, business } from "@/lib/data";

export default function Testimonials() {
  return (
    <section id="reviews" className="section-perf relative py-24">
      <div className="absolute inset-0 -z-10 bg-mesh-warm opacity-50" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <span className="eyebrow bg-rose-bakery/15 text-rose-bakery">
              Loved by locals
            </span>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="mt-4 font-display text-4xl font-extrabold text-espresso sm:text-5xl">
              {business.rating} stars from{" "}
              <span className="text-gradient">{business.reviewCount} reviews</span>
            </h2>
          </Reveal>
          <Reveal delay={2}>
            <div className="mt-4 flex items-center justify-center gap-1 text-honey">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-6 w-6 fill-current" />
              ))}
            </div>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i}>
              <figure className="glass-card glass-card-hover flex h-full flex-col p-7">
                <div className="flex items-center gap-1 text-honey">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <blockquote className="mt-4 flex-1 text-lg leading-relaxed text-espresso-700">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-gradient-to-br from-caramel to-rose-bakery font-display text-lg font-bold text-cream-50">
                    {t.initial}
                  </span>
                  <div>
                    <p className="font-bold text-espresso">{t.name}</p>
                    <p className="text-xs text-espresso-500">Google review</p>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
