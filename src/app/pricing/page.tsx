import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pricing | slap.",
  description: "Transparent, affordable pricing for small business websites. No hidden fees, no surprises.",
};

const plans = [
  {
    name: "Starter",
    price: "£499",
    monthly: "+ hosting/domain costs",
    description: "Perfect for new businesses that need a professional online presence.",
    features: [
      "Up to 5 pages",
      "Mobile responsive design",
      "Contact form",
      "Basic SEO setup",
      "1 month free support",
      "Hosting & maintenance included",
    ],
    highlighted: false,
  },
  {
    name: "Growth",
    price: "£999",
    monthly: "+ hosting/domain costs",
    description: "For businesses ready to stand out and attract more customers.",
    features: [
      "Up to 10 pages",
      "Custom animations & interactions",
      "Full SEO optimisation",
      "Google Analytics setup",
      "Blog / news section",
      "Social media integration",
      "3 months free support",
      "Hosting & maintenance included",
    ],
    highlighted: true,
  },
  {
    name: "Premium",
    price: "£1,999+",
    monthly: "+ hosting/domain costs",
    description: "Full-featured websites with advanced functionality.",
    features: [
      "Unlimited pages",
      "Advanced SEO strategy",
      "Custom functionality",
      "Online booking / payments",
      "Priority support",
      "6 months free support",
      "Hosting & maintenance included",
    ],
    highlighted: false,
  },
];

const faqs = [
  {
    q: "How long does it take to build a website?",
    a: "Most projects take 2-4 weeks from start to finish, depending on the complexity. We'll give you a clear timeline during our initial chat.",
  },
  {
    q: "Do I need to provide the content?",
    a: "It helps if you have some ideas, but we can help write copy and source images too. We'll work with whatever you've got.",
  },
  {
    q: "What about hosting and domain?",
    a: "We can set up hosting for you or work with your existing provider. Domain registration is separate but we'll help you get one sorted.",
  },
  {
    q: "What does the yearly hosting fee cover?",
    a: "The yearly hosting fee covers hosting, security updates, backups, and keeping your site running smoothly. Hosting costs depend on your site's needs, but we'll give you a transparent quote.",
  },
  {
    q: "What if I need changes after launch?",
    a: "Your support period covers minor changes and updates. After that, we offer affordable ongoing support packages or one-off change requests.",
  },
  {
    q: "Do you offer payment plans?",
    a: "Yes - we can split payments across the project. Typically 50% upfront and 50% on completion, but we're flexible.",
  },
];

export default function PricingPage() {
  return (
    <>
      {/* Header */}
      <section className="py-24 relative overflow-hidden">
        <div className="hero-glow bg-indigo-600 top-0 left-1/3 animate-float" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <span className="text-accent-light text-sm font-mono uppercase tracking-widest">
            Pricing
          </span>
          <h1 className="mt-4 text-5xl sm:text-6xl font-bold tracking-tight">
            Transparent pricing,
            <br />
            <span className="gradient-text">no surprises</span>
          </h1>
          <p className="mt-6 text-muted text-lg max-w-2xl mx-auto">
            Every project is unique. These are starting points &mdash; we&apos;ll
            tailor a package that fits your needs and budget.
          </p>
        </div>
      </section>

      {/* Pricing cards */}
      <section className="pb-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-6">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-2xl p-8 flex flex-col ${
                  plan.highlighted
                    ? "bg-gradient-to-b from-accent/10 to-surface border border-accent/30 md:scale-105"
                    : "bg-surface gradient-border"
                }`}
              >
                {plan.highlighted && (
                  <span className="text-xs font-mono text-accent-light uppercase tracking-widest mb-4">
                    Most Popular
                  </span>
                )}
                <h2 className="text-2xl font-bold">{plan.name}</h2>
                <div className="mt-4">
                  <span className="text-4xl font-bold gradient-text">{plan.price}</span>
                  <span className="text-sm text-muted ml-2">{plan.monthly}</span>
                </div>
                <p className="mt-3 text-muted text-sm">{plan.description}</p>
                <ul className="mt-8 space-y-3 flex-1">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm">
                      <svg
                        className="w-5 h-5 text-accent-light flex-shrink-0 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-muted">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={`mt-8 block text-center py-3 rounded-full font-medium transition-all ${
                    plan.highlighted
                      ? "bg-accent hover:bg-accent-dark text-white hover:shadow-[0_0_30px_rgba(99,102,241,0.3)]"
                      : "border border-border hover:border-muted hover:bg-surface-light"
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-surface/50">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-accent-light text-sm font-mono uppercase tracking-widest">
              FAQ
            </span>
            <h2 className="mt-4 text-4xl sm:text-5xl font-bold tracking-tight">
              Common <span className="gradient-text">questions</span>
            </h2>
          </div>

          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.q} className="rounded-2xl bg-surface p-6 gradient-border">
                <h3 className="font-semibold text-lg">{faq.q}</h3>
                <p className="mt-2 text-muted leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-3xl sm:text-4xl font-bold">
            Not sure which plan? <span className="gradient-text">Let&apos;s talk.</span>
          </h2>
          <p className="mt-4 text-muted text-lg">
            We&apos;ll recommend the right package based on your needs.
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="px-8 py-4 bg-accent hover:bg-accent-dark text-white rounded-full font-medium transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(99,102,241,0.3)]"
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
