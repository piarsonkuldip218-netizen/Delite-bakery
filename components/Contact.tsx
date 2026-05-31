import Reveal from "@/components/Reveal";
import { MapPin, Phone, Clock, MessageCircle } from "lucide-react";
import { business, hours } from "@/lib/data";

const mapEmbed =
  "https://maps.google.com/maps?q=Delite%20Bakery%20Baragolai%20Main%20Rd%20Margherita%20Assam&t=&z=15&ie=UTF8&iwloc=&output=embed";

export default function Contact() {
  return (
    <section id="contact" className="section-perf relative py-24">
      <div className="blob right-10 top-10 h-64 w-64 bg-honey" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <span className="eyebrow bg-caramel/15 text-caramel-dark">
              Visit us
            </span>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="mt-4 font-display text-4xl font-extrabold text-espresso sm:text-5xl">
              Come say <span className="text-gradient">hello</span>
            </h2>
          </Reveal>
          <Reveal delay={2}>
            <p className="mt-4 text-lg text-espresso-500">
              Drop by the shop, or call ahead to reserve your cake for that
              special day.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {/* Info cards */}
          <Reveal>
            <div className="flex h-full flex-col gap-4">
              <a
                href={business.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card glass-card-hover flex items-start gap-4 p-6"
              >
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-caramel to-caramel-dark text-cream-50">
                  <MapPin className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="font-display text-lg font-bold text-espresso">
                    Our location
                  </h3>
                  <p className="mt-1 text-espresso-500">{business.address}</p>
                </div>
              </a>

              <div className="grid gap-4 sm:grid-cols-2">
                <a
                  href={`tel:${business.phoneRaw}`}
                  className="glass-card glass-card-hover flex flex-col gap-3 p-6"
                >
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-rose-bakery to-rose-light text-cream-50">
                    <Phone className="h-6 w-6" />
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-bold text-espresso">
                      Call to order
                    </h3>
                    <p className="mt-1 font-semibold text-caramel-dark">
                      {business.phoneDisplay}
                    </p>
                  </div>
                </a>

                <a
                  href={`https://wa.me/${business.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card glass-card-hover flex flex-col gap-3 p-6"
                >
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-pistachio to-caramel text-cream-50">
                    <MessageCircle className="h-6 w-6" />
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-bold text-espresso">
                      WhatsApp
                    </h3>
                    <p className="mt-1 font-semibold text-caramel-dark">
                      Message us
                    </p>
                  </div>
                </a>
              </div>

              <div className="glass-card flex-1 p-6">
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-caramel" />
                  <h3 className="font-display text-lg font-bold text-espresso">
                    Opening hours
                  </h3>
                </div>
                <ul className="mt-4 space-y-1.5">
                  {hours.map((h) => (
                    <li
                      key={h.day}
                      className="flex items-center justify-between text-sm"
                    >
                      <span className="font-medium text-espresso-700">
                        {h.day}
                      </span>
                      <span className="text-espresso-500">{h.time}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>

          {/* Map */}
          <Reveal delay={1}>
            <div className="glass-card h-full overflow-hidden p-2 shadow-glass-lg">
              <iframe
                title="Delite Bakery location map"
                src={mapEmbed}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full min-h-[420px] w-full rounded-[1.4rem] border-0"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
