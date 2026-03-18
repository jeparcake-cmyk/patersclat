import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About | Patersclat",
  description: "Meet Jake and Tom - the team behind Patersclat. We build websites for small businesses that actually deliver results.",
};

export default function AboutPage() {
  return (
    <>
      {/* Header */}
      <section className="py-24 relative overflow-hidden">
        <div className="hero-glow bg-purple-600 top-0 -left-48 animate-float" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <span className="text-accent-light text-sm font-mono uppercase tracking-widest">
            About Us
          </span>
          <h1 className="mt-4 text-5xl sm:text-6xl font-bold tracking-tight">
            Two mates building
            <br />
            <span className="gradient-text">websites that work</span>
          </h1>
          <p className="mt-6 text-muted text-lg max-w-2xl mx-auto">
            We started Patersclat because we saw too many small businesses getting
            ripped off by agencies charging thousands for mediocre websites. We knew
            we could do better - and charge less.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="pb-24">
        <div className="max-w-3xl mx-auto px-6">
          <div className="space-y-6 text-lg text-muted leading-relaxed">
            <p>
              We&apos;re not a big agency with layers of account managers and endless
              meetings. We&apos;re two people who are genuinely good at what we do and
              care about getting it right.
            </p>
            <p>
              When you work with us, you talk directly to the people building your
              website. No middlemen, no miscommunication, no corporate runaround. Tom
              handles the business side - he&apos;ll get to know your business inside
              out. Jake handles the creative and technical side - he&apos;ll make sure
              your website looks amazing and performs flawlessly.
            </p>
            <p>
              We believe every small business deserves a professional online presence
              without breaking the bank. That&apos;s why we keep our prices fair and
              our process simple.
            </p>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-surface/50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-20">
            <span className="text-accent-light text-sm font-mono uppercase tracking-widest">
              The Team
            </span>
            <h2 className="mt-4 text-4xl sm:text-5xl font-bold tracking-tight">
              Meet the people
              <br />
              <span className="gradient-text">behind the pixels</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="rounded-2xl bg-surface p-10 gradient-border text-center">
              <img
                src="/team/jake.jpeg"
                alt="Jake Paterson"
                className="w-28 h-28 rounded-full mx-auto mb-6 object-cover"
              />
              <h3 className="text-2xl font-bold">Jake Paterson</h3>
              <p className="text-accent-light font-medium mt-1">
                Web Designer & Developer
              </p>
              <p className="text-muted mt-4 leading-relaxed">
                The creative force. Jake handles everything from initial design
                concepts to the final line of code. He obsesses over the details so
                your website looks and performs flawlessly. If there&apos;s a pixel out
                of place, he&apos;ll find it.
              </p>
            </div>

            <div className="rounded-2xl bg-surface p-10 gradient-border text-center">
              <img
                src="/team/tom.jpeg"
                alt="Tom Sclater"
                className="w-28 h-28 rounded-full mx-auto mb-6 object-cover"
              />
              <h3 className="text-2xl font-bold">Tom Sclater</h3>
              <p className="text-accent-light font-medium mt-1">
                Business Development & Client Relations
              </p>
              <p className="text-muted mt-4 leading-relaxed">
                Your first point of contact. Tom takes the time to understand your
                business inside and out, ensuring we deliver exactly what you need.
                He keeps things running smoothly from start to finish.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
              What we <span className="gradient-text">stand for</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">💯</div>
              <h3 className="text-xl font-semibold mb-2">No Shortcuts</h3>
              <p className="text-muted">
                Every site is custom built. We don&apos;t use templates or cut corners.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-semibold mb-2">Honest Pricing</h3>
              <p className="text-muted">
                What we quote is what you pay. No hidden fees, no surprise invoices.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">📞</div>
              <h3 className="text-xl font-semibold mb-2">Always Available</h3>
              <p className="text-muted">
                We don&apos;t disappear after launch. We&apos;re here whenever you need us.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-surface/50 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-3xl sm:text-4xl font-bold">
            Want to work with us? <span className="gradient-text">Let&apos;s chat.</span>
          </h2>
          <p className="mt-4 text-muted text-lg">
            We&apos;d love to hear about your business and how we can help.
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="px-8 py-4 bg-accent hover:bg-accent-dark text-white rounded-full font-medium transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(99,102,241,0.3)]"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
