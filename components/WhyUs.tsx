import Reveal from "@/components/Reveal";
import { whyUs } from "@/lib/data";

export default function WhyUs() {
  return (
    <section id="why" className="section-perf relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="glass-card relative overflow-hidden p-8 shadow-glass-lg sm:p-12">
          <div className="blob right-0 top-0 h-64 w-64 bg-caramel-light" />
          <div className="blob bottom-0 left-10 h-56 w-56 bg-rose-light" />

          <div className="relative mx-auto max-w-2xl text-center">
            <Reveal>
              <span className="eyebrow bg-honey/20 text-caramel-dark">
                The Delite difference
              </span>
            </Reveal>
            <Reveal delay={1}>
              <h2 className="mt-4 font-display text-4xl font-extrabold text-espresso sm:text-5xl">
                Quality you can <span className="text-gradient">taste</span>
              </h2>
            </Reveal>
          </div>

          <div className="relative mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whyUs.map((f, i) => (
              <Reveal key={f.title} delay={i}>
                <div className="flex h-full flex-col items-center rounded-3xl bg-white/50 p-6 text-center">
                  <span className="mb-4 grid h-16 w-16 place-items-center rounded-2xl bg-gradient-to-br from-caramel to-caramel-dark text-cream-50 shadow-glow">
                    <f.icon className="h-8 w-8" />
                  </span>
                  <h3 className="font-display text-lg font-bold text-espresso">
                    {f.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-espresso-500">
                    {f.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
