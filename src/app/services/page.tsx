import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services | slap.",
  description: "Custom web design, development, SEO, hosting, and analytics for small businesses.",
};

const services = [
  {
    icon: "🎨",
    title: "Custom Web Design",
    description:
      "Every business is different, so every website should be too. We design from scratch — your site will look and feel uniquely yours, built around your brand identity, your audience, and your goals.",
  },
  {
    icon: "⚡",
    title: "Web Development",
    description:
      "We build with modern technology that loads fast and works perfectly on every device. Whether it's a simple brochure site or something more complex, we write clean, efficient code that performs. Your visitors won't wait around for slow pages.",
  },
  {
    icon: "🔍",
    title: "SEO Optimisation",
    description:
      "What's the point of a great website if nobody can find it? We build every site with search engine best practices from the ground up - proper meta tags, fast load times, mobile optimisation, structured data, and content that Google loves.",
  },
  {
    icon: "🛡️",
    title: "Hosting & Maintenance",
    description:
      "We don't just build your site and disappear. We offer ongoing hosting, security updates, backups, and maintenance so your website stays fast, secure, and up-to-date. Think of us as your website's support team.",
  },
  {
    icon: "📈",
    title: "Analytics & Growth",
    description:
      "Knowledge is power. We set up Google Analytics, conversion tracking, and custom reporting dashboards so you can see exactly how your website is performing - who's visiting, what they're looking at, and where your leads are coming from.",
  },
];

const process = [
  {
    num: "01",
    title: "Discovery Call",
    description:
      "We chat about your business, goals, and vision. Tom will walk you through exactly how we can help and answer any questions.",
  },
  {
    num: "02",
    title: "Design & Prototype",
    description:
      "Jake designs your site with your input at every step. You see it and approve it before we write a single line of code.",
  },
  {
    num: "03",
    title: "Development",
    description:
      "We bring the design to life with clean, fast code. Mobile-first, performance-optimised, and built to last.",
  },
  {
    num: "04",
    title: "Launch & Support",
    description:
      "We go live, set up analytics, and stick around to make sure everything runs smoothly. Ongoing support included.",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Header */}
      <section className="py-24 relative overflow-hidden">
        <div className="hero-glow bg-indigo-600 top-0 -right-48 animate-float" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <span className="text-accent-light text-sm font-mono uppercase tracking-widest">
            Our Services
          </span>
          <h1 className="mt-4 text-5xl sm:text-6xl font-bold tracking-tight">
            Everything you need
            <br />
            <span className="gradient-text">to succeed online</span>
          </h1>
          <p className="mt-6 text-muted text-lg max-w-2xl mx-auto">
            From first design to ongoing support, we handle every aspect of your web
            presence so you can focus on what you do best.
          </p>
        </div>
      </section>

      {/* Services grid */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div
                key={service.title}
                className="rounded-2xl bg-surface p-8 hover:bg-surface-light transition-all duration-300 gradient-border"
              >
                <div className="text-4xl mb-5">{service.icon}</div>
                <h2 className="text-xl font-semibold mb-3">{service.title}</h2>
                <p className="text-muted leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-surface/50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-20">
            <span className="text-accent-light text-sm font-mono uppercase tracking-widest">
              How It Works
            </span>
            <h2 className="mt-4 text-4xl sm:text-5xl font-bold tracking-tight">
              Simple, transparent
              <br />
              <span className="gradient-text">process</span>
            </h2>
          </div>

          <div className="space-y-12">
            {process.map((step, i) => (
              <div
                key={step.num}
                className={`flex flex-col md:flex-row gap-8 items-start ${
                  i % 2 === 1 ? "md:flex-row-reverse md:text-right" : ""
                }`}
              >
                <div className="flex-shrink-0">
                  <span className="text-6xl font-bold gradient-text font-mono">
                    {step.num}
                  </span>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-muted text-lg leading-relaxed max-w-lg">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-3xl sm:text-4xl font-bold">
            Like what you see? <span className="gradient-text">Let&apos;s talk.</span>
          </h2>
          <p className="mt-4 text-muted text-lg">
            Every project starts with a free, no-obligation chat.
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
