import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Work | Patersclat",
  description:
    "Browse our portfolio of websites built for small businesses. See real examples of what we can create for you.",
};

const projects = [
  {
    title: "Thames Plumbing Co.",
    category: "Plumber — London",
    description:
      "A professional, trust-focused website for a London plumbing company. Features emergency call-to-action, service listings, customer reviews, and a quote request form.",
    features: ["Emergency CTA bar", "Service grid", "Trust badges", "Quote form", "London area coverage"],
    href: "/demo/london-plumber",
    color: "from-blue-900 to-blue-700",
  },
  {
    title: "The Golden Fork",
    category: "Restaurant — Notting Hill",
    description:
      "An elegant, warm-toned website for an Italian restaurant. Showcases the menu, photo gallery, customer reviews, and online table reservations.",
    features: ["Menu display", "Table booking form", "Photo gallery", "Reviews", "Opening hours"],
    href: "/demo/italian-restaurant",
    color: "from-amber-900 to-red-900",
  },
  {
    title: "Alex Carter Fitness",
    category: "Personal Trainer — East London",
    description:
      "A bold, high-energy website for a personal trainer. Highlights services, client transformations, pricing packages, and a free consultation booking form.",
    features: ["Transformation stats", "Pricing tables", "Credentials", "Free session CTA", "Testimonials"],
    href: "/demo/personal-trainer",
    color: "from-gray-900 to-lime-900",
  },
];

export default function PortfolioPage() {
  return (
    <>
      {/* Header */}
      <section className="py-24 relative overflow-hidden">
        <div className="hero-glow bg-indigo-600 top-0 left-1/2 -translate-x-1/2 opacity-20" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <span className="text-accent-light text-sm font-mono uppercase tracking-widest">
            Our Work
          </span>
          <h1 className="mt-4 text-5xl sm:text-6xl font-bold tracking-tight">
            Websites that
            <br />
            <span className="gradient-text">win customers</span>
          </h1>
          <p className="mt-6 text-muted text-lg max-w-2xl mx-auto">
            Every site we build is designed to look great, load fast, and convert
            visitors into paying customers. Browse our portfolio below.
          </p>
        </div>
      </section>

      {/* Projects */}
      <section className="pb-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="space-y-12">
            {projects.map((project) => (
              <div
                key={project.title}
                className="rounded-2xl overflow-hidden bg-surface gradient-border"
              >
                <div className="grid md:grid-cols-2">
                  {/* Preview area */}
                  <div
                    className={`bg-gradient-to-br ${project.color} p-10 flex items-center justify-center min-h-[280px]`}
                  >
                    <div className="text-center text-white">
                      <div className="text-4xl font-bold">{project.title}</div>
                      <div className="mt-2 text-sm opacity-75">
                        {project.category}
                      </div>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="p-8 md:p-10 flex flex-col justify-center">
                    <span className="text-accent-light text-xs font-mono uppercase tracking-widest">
                      {project.category}
                    </span>
                    <h2 className="mt-2 text-2xl font-bold">{project.title}</h2>
                    <p className="mt-3 text-muted text-sm leading-relaxed">
                      {project.description}
                    </p>
                    <ul className="mt-5 flex flex-wrap gap-2">
                      {project.features.map((feature) => (
                        <li
                          key={feature}
                          className="text-xs px-3 py-1 rounded-full bg-accent/10 text-accent-light"
                        >
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6">
                      <Link
                        href={project.href}
                        className="inline-block px-6 py-3 bg-accent hover:bg-accent-dark text-white rounded-full text-sm font-medium transition-all hover:scale-105"
                      >
                        View Live Demo →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* More coming soon */}
          <div className="mt-16 text-center rounded-2xl bg-surface p-12 gradient-border">
            <h3 className="text-2xl font-bold">More projects coming soon</h3>
            <p className="mt-3 text-muted max-w-lg mx-auto">
              We&apos;re always building. Check back regularly or get in touch to
              discuss your own project.
            </p>
            <div className="mt-6">
              <Link
                href="/contact"
                className="px-8 py-4 bg-accent hover:bg-accent-dark text-white rounded-full font-medium transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(99,102,241,0.3)] inline-block"
              >
                Start Your Project
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
