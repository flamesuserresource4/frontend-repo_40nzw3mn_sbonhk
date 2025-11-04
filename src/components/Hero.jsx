import { Shield, Rocket } from "lucide-react";
import Spline from "@splinetool/react-spline";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden">
      {/* Spline background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/QblYNXAoH6zf7SHu/scene.splinecode"
          style={{ width: "100%", height: "100%" }}
        />
      </div>

      {/* Painterly veil + vignette (doesn't block interactions) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/40 to-white/80" />
      <div className="pointer-events-none absolute inset-0 [background:radial-gradient(80%_60%_at_50%_10%,transparent,rgba(255,255,255,0.7))]" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-6xl px-6 pt-28 pb-20 sm:pt-32">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-rose-100/80 px-3 py-1 text-rose-700 ring-1 ring-rose-200">
            <span className="text-xs font-medium tracking-wide italic" style={{ fontFamily: "cursive" }}>Pastel • Europe‑ready</span>
          </span>

          <h1
            className="mt-5 text-4xl font-semibold leading-tight tracking-tight text-gray-900 sm:text-5xl italic"
            style={{ fontFamily: "cursive" }}
          >
            Compliance, with a modern atelier flair
          </h1>
          <p className="mt-3 text-lg text-gray-700">
            Automate ESG reporting across CSRD, GRI, and ISSB with a workflow as refined as a salon painting. Evidence, mapping, and audit trails—in one elegant suite.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#pricing"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-fuchsia-600 px-5 py-3 text-white shadow-sm transition hover:bg-fuchsia-700 focus:outline-none focus:ring-2 focus:ring-fuchsia-300 focus:ring-offset-2"
            >
              <Rocket className="h-5 w-5" /> Start free trial
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-white/90 px-5 py-3 text-pink-700 ring-1 ring-pink-200 backdrop-blur transition hover:bg-white"
            >
              <Shield className="h-5 w-5" /> Book a demo
            </a>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-3 text-xs text-gray-700">
            {["CSRD-ready", "Evidence trails", "Automated mapping", "Assurance exports"].map((chip) => (
              <span key={chip} className="rounded-full bg-white/80 px-3 py-1 ring-1 ring-gray-200">
                <span className="italic" style={{ fontFamily: "cursive" }}>{chip}</span>
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
