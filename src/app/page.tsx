import Link from "next/link";

const featuredServices = [
  {
    icon: "🎨",
    title: "Custom Web Design",
    description: "Unique designs crafted from scratch to match your brand identity.",
  },
  {
    icon: "⚡",
    title: "Web Development",
    description: "Fast, responsive, modern websites built with the latest technology.",
  },
  {
    icon: "🔍",
    title: "SEO Optimisation",
    description: "Get found on Google with search engine best practices baked in.",
  },
];

const featuredReviews = [
  {
    name: "Sarah Mitchell",
    business: "Mitchell's Bakery",
    text: "Jake and Tom completely transformed our online presence. We went from having no website to a beautiful one that actually brings in new customers every week.",
    stars: 5,
  },
  {
    name: "Marcus Wright",
    business: "Wright Fitness Studio",
    text: "They built us an online booking system and a clean, modern website in under two weeks. The ongoing support has been brilliant too.",
    stars: 5,
  },
];

export default function Home() {
  return (
    <>
      {/* ─── Hero ─── */}
      <section className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden">
        <div className="hero-glow bg-indigo-600 top-1/4 -left-48 animate-float" />
        <div className="hero-glow bg-purple-600 bottom-1/4 -right-48 animate-float-delay" />
        <div className="hero-glow bg-pink-600 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] animate-pulse-glow" />
        <div className="absolute inset-0 opacity-[0.03] grid-overlay" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <div className="animate-fade-in-up">
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent-light text-sm font-medium mb-8 border border-accent/20">
              Web Design for Small Business
            </span>
          </div>

          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.9] animate-fade-in-up-delay-1">
            We build websites
            <br />
            <span className="gradient-text">that grow your</span>
            <br />
            business
          </h1>

          <p className="mt-8 text-lg sm:text-xl text-muted max-w-2xl mx-auto leading-relaxed animate-fade-in-up-delay-2">
            Beautiful, fast, and affordable websites tailored to small businesses.
            No templates. No nonsense. Just results.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up-delay-3">
            <Link
              href="/contact"
              className="px-8 py-4 bg-accent hover:bg-accent-dark text-white rounded-full font-medium transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(99,102,241,0.3)]"
            >
              Start Your Project
            </Link>
            <Link
              href="/services"
              className="px-8 py-4 border border-border hover:border-muted text-foreground rounded-full font-medium transition-all hover:bg-surface"
            >
              See Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* ─── Featured Services ─── */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-accent-light text-sm font-mono uppercase tracking-widest">
              What We Do
            </span>
            <h2 className="mt-4 text-4xl sm:text-5xl font-bold tracking-tight">
              Everything your business
              <br />
              <span className="gradient-text">needs online</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {featuredServices.map((service) => (
              <div
                key={service.title}
                className="rounded-2xl bg-surface p-8 hover:bg-surface-light transition-all duration-300 gradient-border"
              >
                <div className="text-4xl mb-5">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/services"
              className="text-accent-light hover:text-accent font-medium transition-colors"
            >
              View all services &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* ─── Featured Reviews ─── */}
      <section className="py-24 bg-surface/50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-accent-light text-sm font-mono uppercase tracking-widest">
              Testimonials
            </span>
            <h2 className="mt-4 text-4xl sm:text-5xl font-bold tracking-tight">
              Trusted by
              <span className="gradient-text"> small businesses</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {featuredReviews.map((review) => (
              <div key={review.name} className="rounded-2xl bg-surface p-8 gradient-border">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: review.stars }).map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-muted leading-relaxed italic">&ldquo;{review.text}&rdquo;</p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent to-accent-light flex items-center justify-center text-sm font-bold text-white">
                    {review.name.split(" ").map((n) => n[0]).join("")}
                  </div>
                  <div>
                    <p className="font-semibold text-sm">{review.name}</p>
                    <p className="text-muted text-xs">{review.business}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/reviews" className="text-accent-light hover:text-accent font-medium transition-colors">
              Read more reviews &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-24 relative overflow-hidden">
        <div className="hero-glow bg-indigo-600 top-0 left-1/2 -translate-x-1/2 opacity-20" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Ready to get
            <br />
            <span className="gradient-text">started?</span>
          </h2>
          <p className="mt-6 text-muted text-lg max-w-xl mx-auto">
            Drop us a message and Tom will get back to you within 24 hours. No
            pressure, just a friendly chat about how we can help.
          </p>
          <div className="mt-10">
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
