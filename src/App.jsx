import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
import BlogTeaser from "./components/BlogTeaser";
import ContactForm from "./components/ContactForm";
import { Leaf, User } from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <header className="sticky top-0 z-20 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/50">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#" className="inline-flex items-center gap-3">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-rose-100 text-rose-700 ring-1 ring-rose-200">
              <Leaf className="h-5 w-5" />
            </span>
            <span
              className="text-[22px] font-semibold tracking-tight italic"
              style={{ fontFamily: "cursive" }}
            >
              Verdant
            </span>
          </a>
          <nav className="hidden items-center gap-6 text-sm text-gray-700 sm:flex">
            <a href="#pricing" className="hover:text-gray-900">Pricing</a>
            <a href="#blog" className="hover:text-gray-900">Blog</a>
            <a href="#contact" className="hover:text-gray-900">Contact</a>
            <a
              href="#pricing"
              className="inline-flex items-center gap-2 rounded-xl bg-fuchsia-600 px-4 py-2 font-medium text-white shadow-sm transition hover:bg-fuchsia-700"
            >
              <User className="h-4 w-4" /> Sign up
            </a>
          </nav>
        </div>
      </header>

      {/* Sections */}
      <main>
        <Hero />
        <Pricing />
        <BlogTeaser />
        <ContactForm />
      </main>

      {/* Footer */}
      <footer className="mt-10 border-t border-gray-200 bg-gradient-to-b from-white to-rose-50/40">
        <div className="mx-auto max-w-6xl px-6 py-10">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div className="inline-flex items-center gap-2 text-sm text-gray-600">
              <Leaf className="h-4 w-4 text-rose-600" />
              <span
                className="italic"
                style={{ fontFamily: "cursive" }}
              >
                Verdant • Sustainability Compliance
              </span>
            </div>
            <p className="text-xs text-gray-500">© {new Date().getFullYear()} Verdant, Inc. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
