import Reveal from "@/components/Reveal";
import { Quote } from "lucide-react";
import { business } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="section-perf relative py-24">
      <div className="blob -left-10 top-1/2 h-72 w-72 bg-pistachio/60" />
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
        {/* Visual card */}
        <Reveal>
          <div className="relative">
            <div className="glass-card overflow-hidden p-8 shadow-glass-lg">
              <div className="flex aspect-square items-center justify-center rounded-3xl bg-gradient-to-br from-caramel via-honey to-rose-bakery">
                <span className="text-[10rem] leading-none drop-shadow-lg">
                  {"\uD83C\uDF70"}
                </span>
              </div>
              <div className="absolute -bottom-6 -right-4 hidden rounded-2xl glass px-6 py-4 shadow-glass-lg sm:block">
                <p className="font-display text-3xl font-extrabold text-espresso">
                  {business.rating}
                  <span className="text-base text-caramel-dark"> / 5</span>
                </p>
                <p className="text-xs font-semibold text-espresso-500">
                  {business.reviewCount}+ happy reviews
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Story */}
        <div>
          <Reveal>
            <span className="eyebrow bg-pistachio/25 text-espresso-700">
              Our story
            </span>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="mt-4 font-display text-4xl font-extrabold leading-tight text-espresso sm:text-5xl">
              The sweet heart of{" "}
              <span className="text-gradient">Margherita</span>
            </h2>
          </Reveal>
          <Reveal delay={2}>
            <p className="mt-5 text-lg leading-relaxed text-espresso-500">
              {business.longDescription}
            </p>
          </Reveal>

          <Reveal delay={3}>
            <div className="mt-8 flex gap-4 rounded-3xl glass p-6">
              <Quote className="h-8 w-8 shrink-0 text-caramel" />
              <p className="font-display text-lg font-semibold italic text-espresso-700">
                &ldquo;Fresh, delicious cakes and pastries with reasonable
                prices and excellent quality.&rdquo;
                <span className="mt-1 block text-sm font-medium not-italic text-espresso-500">
                  — as summarised from Google reviews
                </span>
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
