import Reveal from "@/components/Reveal";
import { menuHighlights, business } from "@/lib/data";
import { Phone } from "lucide-react";

// Signature gallery tiles. Swap the gradient tiles for real photos later by
// dropping images in /public and using asset("/images/your-cake.jpg").
const gallery = [
  { label: "Theme Cakes", emoji: "\uD83C\uDF82", span: "row-span-2", tint: "from-rose-bakery to-caramel" },
  { label: "Truffle", emoji: "\uD83C\uDF6B", span: "", tint: "from-espresso-700 to-caramel-dark" },
  { label: "Pastries", emoji: "\uD83E\uDD50", span: "", tint: "from-honey to-caramel-light" },
  { label: "Doll Cakes", emoji: "\uD83D\uDC78", span: "", tint: "from-rose-light to-rose-bakery" },
  { label: "Photo Cakes", emoji: "\uD83D\uDCF8", span: "", tint: "from-caramel to-honey" },
];

export default function Menu() {
  return (
    <section id="menu" className="section-perf relative py-24">
      <div className="absolute inset-0 -z-10 bg-mesh-warm opacity-60" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <span className="eyebrow bg-rose-bakery/15 text-rose-bakery">
              Menu highlights
            </span>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="mt-4 font-display text-4xl font-extrabold text-espresso sm:text-5xl">
              Our crowd <span className="text-gradient">favourites</span>
            </h2>
          </Reveal>
          <Reveal delay={2}>
            <p className="mt-4 text-lg text-espresso-500">
              A taste of what's on the board. Custom flavours and sizes always
              available — just ask.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {/* Signature gallery */}
          <Reveal>
            <div className="grid h-full grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-2">
              {gallery.map((g) => (
                <div
                  key={g.label}
                  className={`relative overflow-hidden rounded-3xl bg-gradient-to-br ${g.tint} ${g.span} min-h-[150px] p-5 shadow-glass`}
                >
                  <div className="absolute -right-3 -top-3 text-7xl opacity-30 blur-[1px]">
                    {g.emoji}
                  </div>
                  <div className="relative flex h-full flex-col justify-end">
                    <span className="text-3xl">{g.emoji}</span>
                    <span className="mt-1 font-display text-lg font-bold text-cream-50">
                      {g.label}
                    </span>
                  </div>
                  <div className="pointer-events-none absolute inset-0 bg-white/5" />
                </div>
              ))}
            </div>
          </Reveal>

          {/* Price board */}
          <Reveal delay={1}>
            <div className="glass-card flex h-full flex-col p-7 shadow-glass-lg sm:p-8">
              <h3 className="font-display text-2xl font-bold text-espresso">
                Price board
              </h3>
              <p className="mt-1 text-sm text-espresso-500">
                Indicative starting prices
              </p>
              <ul className="mt-6 flex-1 space-y-1">
                {menuHighlights.map((item) => (
                  <li
                    key={item.name}
                    className="flex items-center gap-4 rounded-2xl px-3 py-3 transition-colors hover:bg-white/50"
                  >
                    <span className="text-2xl">{item.emoji}</span>
                    <div className="flex-1">
                      <p className="font-semibold text-espresso">{item.name}</p>
                      <p className="text-xs text-espresso-500">{item.note}</p>
                    </div>
                    <span className="font-display text-lg font-extrabold text-caramel-dark">
                      {item.price}
                    </span>
                  </li>
                ))}
              </ul>
              <a href={`tel:${business.phoneRaw}`} className="btn-primary mt-6">
                <Phone className="h-5 w-5" />
                Call to customise your order
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
