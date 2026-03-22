import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | slap.",
  description: "Get in touch with slap. Tell us about your project and we'll get back to you within 24 hours.",
};

export default function ContactPage() {
  return (
    <>
      {/* Header */}
      <section className="py-24 relative overflow-hidden">
        <div className="hero-glow bg-indigo-600 top-0 left-1/2 -translate-x-1/2 opacity-20" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <span className="text-accent-light text-sm font-mono uppercase tracking-widest">
            Contact Us
          </span>
          <h1 className="mt-4 text-5xl sm:text-6xl font-bold tracking-tight">
            Let&apos;s build
            <br />
            <span className="gradient-text">something great</span>
          </h1>
          <p className="mt-6 text-muted text-lg max-w-2xl mx-auto">
            Fill in the form below and Tom will get back to you within 24 hours.
            No pressure, no hard sell - just a friendly chat about how we can help.
          </p>
        </div>
      </section>

      {/* Form + info */}
      <section className="pb-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-5 gap-12">
            {/* Form */}
            <div className="md:col-span-3">
              <form
                action="https://formsubmit.co/jakepatercake@gmail.com"
                method="POST"
                className="space-y-4"
              >
                {/* FormSubmit config */}
                <input type="hidden" name="_subject" value="New enquiry from slap. website" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_next" value="https://patersclat.vercel.app/contact?sent=true" />

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Your name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="John Smith"
                      required
                      className="w-full px-5 py-4 rounded-xl bg-surface border border-border focus:border-accent/50 focus:outline-none focus:ring-1 focus:ring-accent/50 transition-colors placeholder:text-muted"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="john@example.com"
                      required
                      className="w-full px-5 py-4 rounded-xl bg-surface border border-border focus:border-accent/50 focus:outline-none focus:ring-1 focus:ring-accent/50 transition-colors placeholder:text-muted"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    Phone number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="07123 456789"
                    className="w-full px-5 py-4 rounded-xl bg-surface border border-border focus:border-accent/50 focus:outline-none focus:ring-1 focus:ring-accent/50 transition-colors placeholder:text-muted"
                  />
                </div>

                <div>
                  <label htmlFor="business" className="block text-sm font-medium mb-2">
                    Business name
                  </label>
                  <input
                    type="text"
                    id="business"
                    name="business"
                    placeholder="Your Business Ltd"
                    className="w-full px-5 py-4 rounded-xl bg-surface border border-border focus:border-accent/50 focus:outline-none focus:ring-1 focus:ring-accent/50 transition-colors placeholder:text-muted"
                  />
                </div>

                <div>
                  <label htmlFor="budget" className="block text-sm font-medium mb-2">
                    Budget range
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    className="w-full px-5 py-4 rounded-xl bg-surface border border-border focus:border-accent/50 focus:outline-none focus:ring-1 focus:ring-accent/50 transition-colors text-muted"
                  >
                    <option value="">Select a range</option>
                    <option value="Under £500">Under £500</option>
                    <option value="£500 - £1,000">£500 - £1,000</option>
                    <option value="£1,000 - £2,000">£1,000 - £2,000</option>
                    <option value="£2,000+">£2,000+</option>
                    <option value="Not sure">Not sure yet</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Tell us about your project *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="What does your business do? What are you looking for in a website? Any specific features you need?"
                    required
                    className="w-full px-5 py-4 rounded-xl bg-surface border border-border focus:border-accent/50 focus:outline-none focus:ring-1 focus:ring-accent/50 transition-colors placeholder:text-muted resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-accent hover:bg-accent-dark text-white rounded-full font-medium transition-all hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(99,102,241,0.3)]"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Info sidebar */}
            <div className="md:col-span-2 space-y-8">
              <div className="rounded-2xl bg-surface p-8 gradient-border">
                <h3 className="text-lg font-semibold mb-4">What happens next?</h3>
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <span className="text-accent-light font-mono font-bold">1.</span>
                    <p className="text-muted text-sm">
                      Tom reviews your message and gets back to you within 24 hours.
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-accent-light font-mono font-bold">2.</span>
                    <p className="text-muted text-sm">
                      We arrange a free discovery call to understand your needs.
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-accent-light font-mono font-bold">3.</span>
                    <p className="text-muted text-sm">
                      You receive a clear quote with no hidden costs.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl bg-surface p-8 gradient-border">
                <h3 className="text-lg font-semibold mb-4">Get in touch directly</h3>
                <div className="space-y-3 text-sm text-muted">
                  <p>
                    <span className="font-medium text-foreground">Email:</span>{" "}
                    <a
                      href="mailto:jakepatercake@gmail.com"
                      className="text-accent-light hover:text-accent transition-colors"
                    >
                      jakepatercake@gmail.com
                    </a>
                  </p>
                </div>
              </div>

              <div className="rounded-2xl bg-surface p-8 gradient-border">
                <h3 className="text-lg font-semibold mb-2">Free, no-obligation quote</h3>
                <p className="text-muted text-sm">
                  Not sure what you need? No problem. We&apos;re happy to chat
                  things through and give you honest advice - even if you end up
                  not working with us.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
