export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <Services />
      <Process />
      <Team />
      <Pricing />
      <Contact />
      <Footer />
    </>
  );
}

/* ─── Navigation ─── */
function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="text-xl font-bold gradient-text tracking-tight">
          patersclat
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm text-muted">
          <a href="#services" className="hover:text-foreground transition-colors">
            Services
          </a>
          <a href="#process" className="hover:text-foreground transition-colors">
            Process
          </a>
          <a href="#team" className="hover:text-foreground transition-colors">
            Team
          </a>
          <a href="#pricing" className="hover:text-foreground transition-colors">
            Pricing
          </a>
          <a
            href="#contact"
            className="px-4 py-2 bg-accent hover:bg-accent-dark text-white rounded-full text-sm font-medium transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </nav>
  );
}

/* ─── Hero ─── */
function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background glows */}
      <div className="hero-glow bg-indigo-600 top-1/4 -left-48 animate-float" />
      <div className="hero-glow bg-purple-600 bottom-1/4 -right-48 animate-float-delay" />
      <div className="hero-glow bg-pink-600 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] animate-pulse-glow" />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

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
          <a
            href="#contact"
            className="px-8 py-4 bg-accent hover:bg-accent-dark text-white rounded-full font-medium transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(99,102,241,0.3)]"
          >
            Start Your Project
          </a>
          <a
            href="#services"
            className="px-8 py-4 border border-white/10 hover:border-white/20 text-foreground rounded-full font-medium transition-all hover:bg-white/5"
          >
            See Our Services
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─── Services ─── */
const services = [
  {
    icon: "🎨",
    title: "Custom Web Design",
    description:
      "Unique designs crafted from scratch to match your brand identity. No cookie-cutter templates.",
  },
  {
    icon: "⚡",
    title: "Web Development",
    description:
      "Fast, responsive, modern websites built with the latest technology. Optimised for every device.",
  },
  {
    icon: "🔍",
    title: "SEO Optimisation",
    description:
      "Get found on Google. We build every site with search engine best practices baked in from day one.",
  },
  {
    icon: "🛒",
    title: "E-Commerce",
    description:
      "Online stores that convert. From product pages to checkout, we make selling online simple.",
  },
  {
    icon: "🛡️",
    title: "Hosting & Maintenance",
    description:
      "We keep your site fast, secure, and up-to-date so you can focus on running your business.",
  },
  {
    icon: "📈",
    title: "Analytics & Growth",
    description:
      "Understand your visitors. We set up tracking and reporting so you can see what's working.",
  },
];

function Services() {
  return (
    <section id="services" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-accent-light text-sm font-mono uppercase tracking-widest">
            What We Do
          </span>
          <h2 className="mt-4 text-4xl sm:text-5xl font-bold tracking-tight">
            Everything your business
            <br />
            <span className="gradient-text">needs online</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="group relative rounded-2xl bg-surface p-8 hover:bg-surface-light transition-all duration-300 gradient-border"
            >
              <div className="text-4xl mb-5">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-muted leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Process ─── */
const steps = [
  {
    num: "01",
    title: "Discovery Call",
    description:
      "We chat about your business, goals, and vision. Tom will walk you through exactly how we can help.",
  },
  {
    num: "02",
    title: "Design & Prototype",
    description:
      "Jake designs your site with your input at every step. You see it before we build it.",
  },
  {
    num: "03",
    title: "Development",
    description:
      "We bring the design to life with clean, fast code. Mobile-first and built to perform.",
  },
  {
    num: "04",
    title: "Launch & Support",
    description:
      "We go live, set up analytics, and stick around to make sure everything runs smoothly.",
  },
];

function Process() {
  return (
    <section id="process" className="py-32 bg-surface/50">
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
          {steps.map((step, i) => (
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
  );
}

/* ─── Team ─── */
function Team() {
  return (
    <section id="team" className="py-32">
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
          {/* Jake */}
          <div className="rounded-2xl bg-surface p-10 gradient-border text-center">
            <div className="w-28 h-28 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 mx-auto mb-6 flex items-center justify-center text-4xl font-bold text-white">
              JP
            </div>
            <h3 className="text-2xl font-bold">Jake Paterson</h3>
            <p className="text-accent-light font-medium mt-1">
              Web Designer & Developer
            </p>
            <p className="text-muted mt-4 leading-relaxed">
              The creative force. Jake handles everything from initial design concepts
              to the final line of code. He obsesses over the details so your website
              looks and performs flawlessly.
            </p>
          </div>

          {/* Tom */}
          <div className="rounded-2xl bg-surface p-10 gradient-border text-center">
            <div className="w-28 h-28 rounded-full bg-gradient-to-br from-pink-500 to-rose-600 mx-auto mb-6 flex items-center justify-center text-4xl font-bold text-white">
              TS
            </div>
            <h3 className="text-2xl font-bold">Tom Sclater</h3>
            <p className="text-accent-light font-medium mt-1">
              Business Development & Client Relations
            </p>
            <p className="text-muted mt-4 leading-relaxed">
              Your first point of contact. Tom takes the time to understand your
              business inside and out, ensuring we deliver exactly what you need. He
              keeps things running smoothly from start to finish.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Pricing ─── */
const plans = [
  {
    name: "Starter",
    price: "£499",
    description: "Perfect for new businesses that need a professional online presence.",
    features: [
      "Up to 5 pages",
      "Mobile responsive design",
      "Contact form",
      "Basic SEO setup",
      "1 month free support",
    ],
    highlighted: false,
  },
  {
    name: "Growth",
    price: "£999",
    description: "For businesses ready to stand out and attract more customers.",
    features: [
      "Up to 10 pages",
      "Custom animations",
      "SEO optimisation",
      "Google Analytics setup",
      "Blog / news section",
      "3 months free support",
    ],
    highlighted: true,
  },
  {
    name: "Premium",
    price: "£1,999+",
    description: "Full-featured websites with e-commerce and advanced functionality.",
    features: [
      "Unlimited pages",
      "E-commerce integration",
      "Advanced SEO strategy",
      "Custom functionality",
      "Priority support",
      "6 months free support",
    ],
    highlighted: false,
  },
];

function Pricing() {
  return (
    <section id="pricing" className="py-32 bg-surface/50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-accent-light text-sm font-mono uppercase tracking-widest">
            Pricing
          </span>
          <h2 className="mt-4 text-4xl sm:text-5xl font-bold tracking-tight">
            Transparent pricing,
            <br />
            <span className="gradient-text">no surprises</span>
          </h2>
          <p className="mt-6 text-muted text-lg max-w-2xl mx-auto">
            Every project is unique. These are starting points &mdash; we&apos;ll tailor
            a package that fits your needs and budget.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl p-8 flex flex-col ${
                plan.highlighted
                  ? "bg-gradient-to-b from-accent/10 to-surface border border-accent/30 scale-105"
                  : "bg-surface gradient-border"
              }`}
            >
              {plan.highlighted && (
                <span className="text-xs font-mono text-accent-light uppercase tracking-widest mb-4">
                  Most Popular
                </span>
              )}
              <h3 className="text-2xl font-bold">{plan.name}</h3>
              <div className="mt-4">
                <span className="text-4xl font-bold gradient-text">{plan.price}</span>
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
              <a
                href="#contact"
                className={`mt-8 block text-center py-3 rounded-full font-medium transition-all ${
                  plan.highlighted
                    ? "bg-accent hover:bg-accent-dark text-white hover:shadow-[0_0_30px_rgba(99,102,241,0.3)]"
                    : "border border-white/10 hover:border-white/20 hover:bg-white/5"
                }`}
              >
                Get Started
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Contact ─── */
function Contact() {
  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      {/* Background glow */}
      <div className="hero-glow bg-indigo-600 top-0 left-1/2 -translate-x-1/2 opacity-20" />

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <span className="text-accent-light text-sm font-mono uppercase tracking-widest">
          Let&apos;s Talk
        </span>
        <h2 className="mt-4 text-4xl sm:text-5xl font-bold tracking-tight">
          Ready to get
          <br />
          <span className="gradient-text">started?</span>
        </h2>
        <p className="mt-6 text-muted text-lg max-w-xl mx-auto">
          Drop us a message and Tom will get back to you within 24 hours. No pressure,
          just a friendly chat about how we can help.
        </p>

        <form
          className="mt-12 space-y-4 text-left"
          action="https://formspree.io/f/placeholder"
          method="POST"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              placeholder="Your name"
              required
              className="w-full px-5 py-4 rounded-xl bg-surface border border-white/10 focus:border-accent/50 focus:outline-none focus:ring-1 focus:ring-accent/50 transition-colors placeholder:text-muted"
            />
            <input
              type="email"
              name="email"
              placeholder="Email address"
              required
              className="w-full px-5 py-4 rounded-xl bg-surface border border-white/10 focus:border-accent/50 focus:outline-none focus:ring-1 focus:ring-accent/50 transition-colors placeholder:text-muted"
            />
          </div>
          <input
            type="text"
            name="business"
            placeholder="Business name"
            className="w-full px-5 py-4 rounded-xl bg-surface border border-white/10 focus:border-accent/50 focus:outline-none focus:ring-1 focus:ring-accent/50 transition-colors placeholder:text-muted"
          />
          <textarea
            name="message"
            rows={5}
            placeholder="Tell us about your project..."
            required
            className="w-full px-5 py-4 rounded-xl bg-surface border border-white/10 focus:border-accent/50 focus:outline-none focus:ring-1 focus:ring-accent/50 transition-colors placeholder:text-muted resize-none"
          />
          <button
            type="submit"
            className="w-full py-4 bg-accent hover:bg-accent-dark text-white rounded-full font-medium transition-all hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(99,102,241,0.3)]"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

/* ─── Footer ─── */
function Footer() {
  return (
    <footer className="border-t border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="text-sm text-muted">
          &copy; {new Date().getFullYear()} Patersclat. All rights reserved.
        </span>
        <div className="flex gap-6 text-sm text-muted">
          <a href="#services" className="hover:text-foreground transition-colors">
            Services
          </a>
          <a href="#team" className="hover:text-foreground transition-colors">
            Team
          </a>
          <a href="#pricing" className="hover:text-foreground transition-colors">
            Pricing
          </a>
          <a href="#contact" className="hover:text-foreground transition-colors">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
