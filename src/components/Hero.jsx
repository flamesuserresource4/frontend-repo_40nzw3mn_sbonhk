import { Rocket, Leaf, Shield } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-sky-50 to-violet-50" />

      <div className="relative mx-auto max-w-6xl px-6 pt-24 pb-16 sm:pt-28 sm:pb-24">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-100/80 px-3 py-1 text-emerald-700 ring-1 ring-emerald-200">
              <Leaf className="h-4 w-4" />
              <span className="text-xs font-medium">Sustainability Compliance Automation</span>
            </div>
            <h1 className="mt-5 text-4xl font-semibold leading-tight text-gray-900 sm:text-5xl">
              Automate ESG & sustainability compliance with confidence
            </h1>
            <p className="mt-4 max-w-xl text-base text-gray-600 sm:text-lg">
              Track frameworks, collect evidence, and generate audit-ready reports in minutes.
              Built for modern teams navigating CSRD, SEC Climate, GRI, and more.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#pricing"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-500 px-5 py-3 text-white shadow-sm transition hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2"
              >
                <Rocket className="h-5 w-5" />
                <span>Start free trial</span>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-emerald-700 ring-1 ring-emerald-200 transition hover:bg-emerald-50"
              >
                <Shield className="h-5 w-5" />
                <span>Book a demo</span>
              </a>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-gray-600">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1 ring-1 ring-gray-200">
                <span className="font-medium text-gray-800">CSRD-ready</span>
                <span className="text-gray-400">•</span>
                <span>Evidence trails</span>
              </div>
              <div className="inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1 ring-1 ring-gray-200">
                <span className="font-medium text-gray-800">Automated mapping</span>
                <span className="text-gray-400">•</span>
                <span>Policy library</span>
              </div>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md md:max-w-none">
            <div className="rounded-2xl bg-white/80 p-5 shadow-lg ring-1 ring-gray-200 backdrop-blur">
              <div className="grid grid-cols-3 gap-3">
                {[
                  { label: "CSRD", color: "bg-emerald-100 text-emerald-700" },
                  { label: "GRI", color: "bg-sky-100 text-sky-700" },
                  { label: "SEC", color: "bg-violet-100 text-violet-700" },
                  { label: "CDP", color: "bg-rose-100 text-rose-700" },
                  { label: "SASB", color: "bg-amber-100 text-amber-700" },
                  { label: "ISSB", color: "bg-teal-100 text-teal-700" },
                ].map((f, i) => (
                  <div
                    key={i}
                    className={`flex h-20 flex-col items-center justify-center rounded-xl ${f.color}`}
                  >
                    <span className="text-sm font-semibold">{f.label}</span>
                    <span className="text-[10px] opacity-70">Framework</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 rounded-xl bg-gradient-to-r from-emerald-50 to-sky-50 p-4">
                <p className="text-sm text-gray-700">
                  "We cut our reporting prep time by 70% and increased assurance quality."
                </p>
                <p className="mt-2 text-xs text-gray-500">— Sustainability Lead, Series B SaaS</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
