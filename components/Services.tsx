import Reveal from "@/components/Reveal";
import { services } from "@/lib/data";

export default function Services() {
  return (
    <section id="services" className="section-perf relative py-24">
      <div className="blob right-10 top-20 h-64 w-64 bg-rose-light" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <span className="eyebrow bg-caramel/15 text-caramel-dark">
              What we bake
            </span>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="mt-4 font-display text-4xl font-extrabold text-espresso sm:text-5xl">
              Made fresh, made for{" "}
              <span className="text-gradient">your moments</span>
            </h2>
          </Reveal>
          <Reveal delay={2}>
            <p className="mt-4 text-lg text-espresso-500">
              From everyday treats to once-in-a-lifetime celebrations — every
              order is baked with premium ingredients and a whole lot of love.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={i}>
              <article className="glass-card glass-card-hover group h-full p-7">
                <div
                  className={`mb-5 grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br ${service.tint} text-cream-50 shadow-glass`}
                >
                  <service.icon className="h-7 w-7" />
                </div>
                <h3 className="font-display text-xl font-bold text-espresso">
                  {service.title}
                </h3>
                <p className="mt-2 leading-relaxed text-espresso-500">
                  {service.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
