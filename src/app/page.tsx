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

const portfolio = [
  {
    title: "Thames Plumbing Co.",
    category: "Local Tradesperson",
    href: "/demo/london-plumber",
    color: "from-blue-600 to-blue-900",
    description: "Emergency plumber website with online booking and trust signals.",
  },
  {
    title: "The Golden Fork",
    category: "Restaurant",
    href: "/demo/italian-restaurant",
    color: "from-amber-800 to-yellow-900",
    description: "Elegant restaurant site with menu, gallery, and reservations.",
  },
  {
    title: "Alex Carter Fitness",
    category: "Personal Trainer",
    href: "/demo/personal-trainer",
    color: "from-lime-500 to-green-900",
    description: "Bold PT website with results showcase and booking system.",
  },
  {
    title: "Pusher Music",
    category: "Music Sync Agency",
    href: "/demo/pusher-music",
    color: "from-emerald-500 to-gray-900",
    description: "Interactive 3D globe showcasing music placements and artists.",
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
      <section className="relative min-h-[calc(100vh-4rem)] flex items-center overflow-hidden">
        <div className="hero-glow bg-indigo-600 top-1/4 -left-48 animate-float" />
        <div className="hero-glow bg-purple-600 bottom-1/4 -right-48 animate-float-delay" />
        <div className="hero-glow bg-pink-600 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] animate-pulse-glow" />
        <div className="absolute inset-0 opacity-[0.03] grid-overlay" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center py-20">
          {/* Left: Text */}
          <div>
            <div className="animate-fade-in-up">
              <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent-light text-sm font-medium mb-8 border border-accent/20">
                Web Design for Small Business
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[0.9] animate-fade-in-up-delay-1">
              We build websites
              <br />
              <span className="gradient-text">that grow your</span>
              <br />
              business
            </h1>

            <p className="mt-8 text-lg text-muted max-w-lg leading-relaxed animate-fade-in-up-delay-2">
              Beautiful, fast, and affordable websites tailored to small businesses.
              No templates. No nonsense. Just results.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 animate-fade-in-up-delay-3">
              <Link
                href="/contact"
                className="px-8 py-4 bg-accent hover:bg-accent-dark text-white rounded-full font-medium transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(99,102,241,0.3)] text-center"
              >
                Start Your Project
              </Link>
              <Link
                href="/services"
                className="px-8 py-4 border border-border hover:border-muted text-foreground rounded-full font-medium transition-all hover:bg-surface text-center"
              >
                See Our Services
              </Link>
            </div>
          </div>

          {/* Right: Hero image */}
          <div className="hidden lg:block animate-fade-in-up-delay-2">
            <div className="relative">
              {/* Laptop frame */}
              <div className="rounded-xl overflow-hidden shadow-2xl shadow-accent/10 border border-border/50">
                <div className="bg-surface-light px-4 py-2.5 flex items-center gap-2 border-b border-border/50">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/70" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                    <div className="w-3 h-3 rounded-full bg-green-500/70" />
                  </div>
                  <div className="flex-1 text-center">
                    <span className="text-xs text-muted bg-surface px-4 py-1 rounded-md">thamesplumbing.co.uk</span>
                  </div>
                </div>
                <img
                  src="/images/hero-workspace.jpg"
                  alt="Web design workspace"
                  className="w-full aspect-[16/10] object-cover"
                />
              </div>

              {/* Floating phone mockup */}
              <div className="absolute -bottom-8 -left-8 w-36 rounded-2xl overflow-hidden shadow-xl border-2 border-border/50 bg-surface">
                <div className="bg-surface-light px-2 py-1 flex items-center justify-center">
                  <div className="w-8 h-1 rounded-full bg-muted/30" />
                </div>
                <img
                  src="/images/design-process.jpg"
                  alt="Mobile responsive design"
                  className="w-full aspect-[9/16] object-cover"
                />
              </div>

              {/* Floating stats card */}
              <div className="absolute -top-4 -right-4 bg-surface rounded-xl p-4 shadow-xl border border-border/50">
                <div className="text-2xl font-bold gradient-text">+147%</div>
                <div className="text-xs text-muted mt-1">More enquiries</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Portfolio Showcase ─── */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-accent-light text-sm font-mono uppercase tracking-widest">
              Our Work
            </span>
            <h2 className="mt-4 text-4xl sm:text-5xl font-bold tracking-tight">
              Sites we&apos;ve built
              <br />
              <span className="gradient-text">for real businesses</span>
            </h2>
            <p className="mt-4 text-muted text-lg max-w-2xl mx-auto">
              Every site is custom designed and built from scratch. No templates, no shortcuts.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {portfolio.map((project) => (
              <Link
                key={project.title}
                href={project.href}
                className="group relative rounded-2xl overflow-hidden gradient-border"
              >
                {/* Gradient background */}
                <div className={`bg-gradient-to-br ${project.color} p-8 pb-12 min-h-[260px] flex flex-col justify-end transition-transform duration-500 group-hover:scale-[1.02]`}>
                  {/* Category badge */}
                  <span className="inline-block w-fit px-3 py-1 rounded-full bg-white/15 text-white/80 text-xs font-medium mb-4 backdrop-blur-sm">
                    {project.category}
                  </span>
                  <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                  <p className="text-white/70 mt-2 text-sm">{project.description}</p>

                  {/* Arrow */}
                  <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                    <svg className="w-5 h-5 text-white group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/portfolio"
              className="text-accent-light hover:text-accent font-medium transition-colors"
            >
              View all projects &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* ─── How It Works ─── */}
      <section className="py-24 bg-surface/50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <span className="text-accent-light text-sm font-mono uppercase tracking-widest">
              How It Works
            </span>
            <h2 className="mt-4 text-4xl sm:text-5xl font-bold tracking-tight">
              From idea to launch
              <br />
              <span className="gradient-text">in 4 simple steps</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center">
                <span className="text-2xl font-bold gradient-text font-mono">01</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Discovery Call</h3>
                <p className="text-muted leading-relaxed">
                  Tom chats with you about your business, goals, and vision. Free, no obligation, no jargon.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center">
                <span className="text-2xl font-bold gradient-text font-mono">02</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Design & Prototype</h3>
                <p className="text-muted leading-relaxed">
                  Jake designs your site with your input at every step. You approve it before we build.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center">
                <span className="text-2xl font-bold gradient-text font-mono">03</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Development</h3>
                <p className="text-muted leading-relaxed">
                  We bring the design to life with clean, fast code. Mobile-first and performance-optimised.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center">
                <span className="text-2xl font-bold gradient-text font-mono">04</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Launch & Support</h3>
                <p className="text-muted leading-relaxed">
                  We go live, set up analytics, and stick around. Ongoing support always included.
                </p>
              </div>
            </div>
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
