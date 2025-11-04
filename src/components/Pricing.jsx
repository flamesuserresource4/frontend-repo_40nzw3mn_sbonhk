import { CheckCircle, Star } from "lucide-react";

const tiers = [
  {
    name: "Atelier",
    price: "€0",
    cadence: "/mo",
    highlight: "For small teams",
    features: ["Up to 2 frameworks", "Evidence upload", "Basic reporting", "Email support"],
    cta: "Begin",
    popular: false,
    tone: "from-rose-50 to-amber-50 ring-rose-200/70",
  },
  {
    name: "Salon",
    price: "€79",
    cadence: "/mo",
    highlight: "Most popular",
    features: ["All frameworks", "Automated mapping", "Evidence trails", "Team collaboration"],
    cta: "Start 14‑day trial",
    popular: true,
    tone: "from-pink-50 to-sky-50 ring-pink-200/70",
  },
  {
    name: "Grand Tour",
    price: "Custom",
    cadence: "",
    highlight: "For enterprises",
    features: ["SSO & SCIM", "Custom controls", "Dedicated support", "Onboarding & training"],
    cta: "Contact sales",
    popular: false,
    tone: "from-violet-50 to-sky-50 ring-violet-200/70",
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-rose-50/40 to-transparent" />
      <div className="relative mx-auto max-w-6xl px-6 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2
            className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl italic"
            style={{ fontFamily: "cursive" }}
          >
            Pricing, simply framed
          </h2>
          <p className="mt-3 text-gray-600">Transparent plans for European teams. Upgrade as your canvas grows.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tiers.map((tier) => (
            <div key={tier.name} className={`relative rounded-2xl bg-gradient-to-br p-6 shadow-sm ring-1 ${tier.tone}`}>
              {tier.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-fuchsia-500 px-3 py-1 text-xs font-medium text-white shadow">
                  <div className="inline-flex items-center gap-1">
                    <Star className="h-3 w-3" /> Most popular
                  </div>
                </div>
              )}
              <h3 className="text-lg font-semibold text-gray-900 italic" style={{ fontFamily: "cursive" }}>
                {tier.name}
              </h3>
              <div className="mt-2 flex items-end gap-1">
                <span className="text-3xl font-semibold text-gray-900">{tier.price}</span>
                <span className="text-sm text-gray-500">{tier.cadence}</span>
              </div>
              <p className="mt-2 text-sm text-gray-600">{tier.highlight}</p>
              <ul className="mt-6 space-y-3">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-gray-700">
                    <CheckCircle className="mt-0.5 h-4 w-4 text-pink-500" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`mt-6 inline-flex w-full items-center justify-center rounded-xl bg-gray-900/90 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-gray-900 ${tier.popular ? "bg-fuchsia-500 hover:bg-fuchsia-600" : ""}`}
              >
                {tier.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
