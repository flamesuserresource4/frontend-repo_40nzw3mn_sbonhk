import { Mail } from "lucide-react";
import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    setStatus(`Thanks, ${name}! We'll be in touch within 1 business day.`);
    e.currentTarget.reset();
  }

  return (
    <section id="contact" className="relative">
      <div className="absolute inset-0 bg-gradient-to-t from-sky-50/60 to-transparent" />
      <div className="relative mx-auto max-w-4xl px-6 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold text-gray-900 sm:text-4xl">Talk to our team</h2>
          <p className="mt-3 text-gray-600">
            Questions about pricing, security, or fit? Send a message and we'll respond quickly.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mx-auto mt-10 max-w-2xl rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="sm:col-span-1">
              <label htmlFor="name" className="text-sm font-medium text-gray-700">Name</label>
              <input
                id="name"
                name="name"
                required
                className="mt-1 w-full rounded-xl border border-gray-200 bg-white px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-200"
                placeholder="Alex Rivera"
              />
            </div>
            <div className="sm:col-span-1">
              <label htmlFor="email" className="text-sm font-medium text-gray-700">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="mt-1 w-full rounded-xl border border-gray-200 bg-white px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-200"
                placeholder="alex@example.com"
              />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="message" className="text-sm font-medium text-gray-700">Message</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="mt-1 w-full rounded-xl border border-gray-200 bg-white px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-200"
                placeholder="Tell us a bit about your compliance goals"
              />
            </div>
            <div className="sm:col-span-2 flex items-center justify-between">
              <p className="text-xs text-gray-500">We care about your privacy. We won't share your info.</p>
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-4 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-300 focus:ring-offset-2"
              >
                <Mail className="h-4 w-4" /> Send message
              </button>
            </div>
          </div>
          {status && (
            <div className="mt-4 rounded-xl bg-emerald-50 p-3 text-sm text-emerald-800 ring-1 ring-emerald-200">
              {status}
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
