import { ArrowRight, Feather, Palette } from "lucide-react";

const posts = [
  {
    title: "CSRD essentials: a practical guide for 2025",
    excerpt:
      "What mid‑market teams need to know to prepare for CSRD reporting, timelines, and controls.",
    tag: "Guides",
  },
  {
    title: "Automating evidence collection without chaos",
    excerpt:
      "Reduce spreadsheet sprawl and build reliable audit trails with thoughtful automation.",
    tag: "Automation",
  },
  {
    title: "Mapping frameworks: GRI, SASB, and ISSB",
    excerpt:
      "How leading teams map disclosures across frameworks to avoid duplicate work.",
    tag: "Frameworks",
  },
];

export default function BlogTeaser() {
  return (
    <section id="blog" className="relative">
      <div className="relative mx-auto max-w-6xl px-6 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">From the studio</h2>
          <p className="mt-3 text-gray-600">Notes on reporting, automation, and assurance—composed with care.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((p, i) => (
            <article
              key={p.title}
              className="group rounded-2xl bg-gradient-to-br from-rose-50 via-amber-50 to-emerald-50 p-6 ring-1 ring-rose-100/60 transition hover:shadow-sm"
            >
              <span className="inline-flex w-fit items-center gap-1 rounded-full bg-white/70 px-3 py-1 text-xs font-medium text-gray-700 ring-1 ring-gray-200">
                {i % 2 === 0 ? <Feather className="h-3.5 w-3.5" /> : <Palette className="h-3.5 w-3.5" />} {p.tag}
              </span>
              <h3 className="mt-3 text-lg font-semibold text-gray-900">{p.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{p.excerpt}</p>
              <a href="#" className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-emerald-700">
                Read more <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
