import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Thames Plumbing Co. | London's Trusted Plumber",
  description:
    "24/7 emergency plumber in London. Gas Safe registered. Boiler repair, bathroom fitting, leak detection & more. Free quotes, no call-out charge.",
};

const services = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
      </svg>
    ),
    title: "Boiler Repair & Install",
    desc: "Expert boiler repairs, servicing and new installations. Worcester Bosch accredited. All makes and models.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-4 0a1 1 0 01-1-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 01-1 1h-2z" />
      </svg>
    ),
    title: "Bathroom Fitting",
    desc: "Complete bathroom design and installation. From budget refreshes to luxury renovations. Free design consultation.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
    title: "Leak Detection",
    desc: "Advanced leak detection and repair. We find and fix leaks fast, minimising damage to your property.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
      </svg>
    ),
    title: "Drain Unblocking",
    desc: "Blocked drains cleared fast. CCTV drain surveys, high-pressure jetting, and drainage repairs.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Emergency Plumbing",
    desc: "24/7 emergency call-outs across London. Fast response, no call-out charge. We're there when you need us.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: "Central Heating",
    desc: "Full central heating installation, powerflush, radiator replacement, and underfloor heating systems.",
  },
];

const reviews = [
  {
    name: "Sarah M.",
    area: "Islington",
    text: "Called Thames Plumbing at 11pm with a burst pipe. They were at my door within 40 minutes and had it sorted by midnight. Absolute lifesavers!",
    stars: 5,
  },
  {
    name: "David K.",
    area: "Camden",
    text: "Had a full bathroom refit done. The quality of work is outstanding and the price was very fair. Would recommend to anyone in North London.",
    stars: 5,
  },
  {
    name: "Emma R.",
    area: "Greenwich",
    text: "Professional, punctual, and tidy. Fixed our boiler issue quickly and explained everything clearly. No hidden charges either.",
    stars: 5,
  },
  {
    name: "James W.",
    area: "Hackney",
    text: "Best plumber I've used in London. Came same day, diagnosed the problem straight away, and fixed it for a very reasonable price.",
    stars: 5,
  },
];

const areas = [
  "Central London",
  "North London",
  "South London",
  "East London",
  "West London",
  "Camden",
  "Islington",
  "Hackney",
  "Greenwich",
  "Lewisham",
  "Southwark",
  "Lambeth",
  "Westminster",
  "Kensington",
  "Hammersmith",
  "Tower Hamlets",
];

export default function LondonPlumberPage() {
  return (
    <div className="london-plumber">
      <style>{`
        .london-plumber {
          --plumber-blue: #1a3a5c;
          --plumber-blue-light: #2563eb;
          --plumber-blue-dark: #0f2440;
          --plumber-orange: #f97316;
          --plumber-orange-dark: #ea580c;
          --plumber-bg: #f8fafc;
          --plumber-surface: #ffffff;
          --plumber-text: #1e293b;
          --plumber-muted: #64748b;
          --plumber-border: #e2e8f0;
          font-family: system-ui, -apple-system, sans-serif;
          color: var(--plumber-text);
          background: var(--plumber-bg);
        }

        .plumber-btn-primary {
          background: var(--plumber-orange);
          color: white;
          padding: 14px 32px;
          border-radius: 8px;
          font-weight: 600;
          font-size: 16px;
          transition: all 0.2s;
          display: inline-block;
          text-decoration: none;
        }
        .plumber-btn-primary:hover {
          background: var(--plumber-orange-dark);
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(249, 115, 22, 0.3);
        }

        .plumber-btn-secondary {
          background: white;
          color: var(--plumber-blue);
          padding: 14px 32px;
          border-radius: 8px;
          font-weight: 600;
          font-size: 16px;
          border: 2px solid var(--plumber-blue);
          transition: all 0.2s;
          display: inline-block;
          text-decoration: none;
        }
        .plumber-btn-secondary:hover {
          background: var(--plumber-blue);
          color: white;
        }

        .plumber-hero {
          background: linear-gradient(135deg, var(--plumber-blue-dark) 0%, var(--plumber-blue) 100%);
          color: white;
          position: relative;
          overflow: hidden;
        }
        .plumber-hero::before {
          content: '';
          position: absolute;
          top: -50%;
          right: -20%;
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(37, 99, 235, 0.3) 0%, transparent 70%);
          border-radius: 50%;
        }

        .service-card {
          background: var(--plumber-surface);
          border: 1px solid var(--plumber-border);
          border-radius: 12px;
          padding: 32px;
          transition: all 0.2s;
        }
        .service-card:hover {
          border-color: var(--plumber-blue-light);
          box-shadow: 0 4px 20px rgba(37, 99, 235, 0.1);
          transform: translateY(-2px);
        }

        .review-card {
          background: var(--plumber-surface);
          border: 1px solid var(--plumber-border);
          border-radius: 12px;
          padding: 28px;
        }

        .trust-badge {
          background: var(--plumber-surface);
          border: 1px solid var(--plumber-border);
          border-radius: 10px;
          padding: 20px 28px;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
        }

        .area-tag {
          background: var(--plumber-surface);
          border: 1px solid var(--plumber-border);
          border-radius: 8px;
          padding: 10px 20px;
          font-size: 14px;
          color: var(--plumber-text);
          transition: all 0.2s;
        }
        .area-tag:hover {
          border-color: var(--plumber-blue-light);
          background: rgba(37, 99, 235, 0.05);
        }

        .emergency-bar {
          background: var(--plumber-orange);
          color: white;
          text-align: center;
          padding: 10px 16px;
          font-weight: 600;
          font-size: 14px;
        }

        .plumber-nav {
          background: var(--plumber-blue-dark);
          color: white;
          padding: 0 24px;
          height: 64px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
      `}</style>

      {/* Emergency bar */}
      <div className="emergency-bar">
        <span>🔧 24/7 Emergency Plumber — Call Now: </span>
        <a href="tel:02071234567" className="underline">020 7123 4567</a>
      </div>

      {/* Navigation */}
      <div className="plumber-nav">
        <div className="text-xl font-bold tracking-tight">
          Thames Plumbing Co.
        </div>
        <div className="hidden md:flex items-center gap-6 text-sm">
          <a href="#services" className="hover:text-blue-300 transition-colors">Services</a>
          <a href="#areas" className="hover:text-blue-300 transition-colors">Areas</a>
          <a href="#reviews" className="hover:text-blue-300 transition-colors">Reviews</a>
          <a href="#contact" className="hover:text-blue-300 transition-colors">Contact</a>
          <a href="tel:02071234567" className="plumber-btn-primary" style={{ padding: '10px 20px', fontSize: '14px' }}>
            Call Now
          </a>
        </div>
      </div>

      {/* Hero */}
      <section className="plumber-hero py-20 md:py-28">
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                Gas Safe Registered
              </span>
              <span className="bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                5★ Rated
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              London&apos;s Most Trusted
              <br />
              <span className="text-blue-300">Plumbing Service</span>
            </h1>
            <p className="mt-6 text-lg text-blue-100 leading-relaxed max-w-lg">
              From emergency repairs to complete bathroom installations. Fast,
              reliable, and fairly priced — serving all London boroughs 24/7.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#contact" className="plumber-btn-primary">
                Get a Free Quote
              </a>
              <a href="tel:02071234567" className="plumber-btn-secondary" style={{ background: 'transparent', borderColor: 'white', color: 'white' }}>
                📞 020 7123 4567
              </a>
            </div>
            <div className="mt-10 flex flex-wrap gap-6 text-sm text-blue-200">
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                No call-out charge
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Fully insured
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                1-hour response
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Trust badges */}
      <section className="py-12 border-b" style={{ borderColor: 'var(--plumber-border)' }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="trust-badge">
              <span className="text-2xl">🔒</span>
              <span className="font-bold text-sm">Gas Safe</span>
              <span className="text-xs" style={{ color: 'var(--plumber-muted)' }}>Reg. No. 123456</span>
            </div>
            <div className="trust-badge">
              <span className="text-2xl">✅</span>
              <span className="font-bold text-sm">Checkatrade</span>
              <span className="text-xs" style={{ color: 'var(--plumber-muted)' }}>9.8/10 Rating</span>
            </div>
            <div className="trust-badge">
              <span className="text-2xl">🛡️</span>
              <span className="font-bold text-sm">Fully Insured</span>
              <span className="text-xs" style={{ color: 'var(--plumber-muted)' }}>£2M Public Liability</span>
            </div>
            <div className="trust-badge">
              <span className="text-2xl">⭐</span>
              <span className="font-bold text-sm">500+ Reviews</span>
              <span className="text-xs" style={{ color: 'var(--plumber-muted)' }}>4.9 Average</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-sm font-bold uppercase tracking-widest" style={{ color: 'var(--plumber-blue-light)' }}>
              Our Services
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold">
              Expert plumbing for every need
            </h2>
            <p className="mt-4 max-w-2xl mx-auto" style={{ color: 'var(--plumber-muted)' }}>
              Whether it&apos;s an emergency repair at 3am or a planned bathroom renovation,
              our qualified engineers have you covered.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div key={service.title} className="service-card">
                <div className="mb-4" style={{ color: 'var(--plumber-blue-light)' }}>
                  {service.icon}
                </div>
                <h3 className="text-lg font-bold mb-2">{service.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--plumber-muted)' }}>
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="py-20" style={{ background: 'var(--plumber-surface)' }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-14 items-center">
            <div>
              <span className="text-sm font-bold uppercase tracking-widest" style={{ color: 'var(--plumber-blue-light)' }}>
                Why Choose Us
              </span>
              <h2 className="mt-3 text-3xl md:text-4xl font-bold">
                Honest, reliable plumbing since 2008
              </h2>
              <p className="mt-4 leading-relaxed" style={{ color: 'var(--plumber-muted)' }}>
                Thames Plumbing Co. was founded on a simple idea: do great work at a fair
                price, and treat every customer&apos;s home like your own. 15 years on,
                that&apos;s still what drives us.
              </p>
              <div className="mt-8 space-y-4">
                {[
                  "Fixed pricing — no hourly surprises",
                  "All work guaranteed for 12 months",
                  "Clean and tidy — we always leave your home spotless",
                  "Upfront quotes before any work begins",
                  "DBS-checked, friendly engineers",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <svg className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: 'var(--plumber-blue-light)' }} fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl p-10 text-center" style={{ background: 'linear-gradient(135deg, var(--plumber-blue-dark), var(--plumber-blue))' }}>
              <div className="text-6xl font-bold text-white">15+</div>
              <div className="text-blue-200 mt-2 text-lg">Years Experience</div>
              <div className="mt-8 grid grid-cols-2 gap-6">
                <div>
                  <div className="text-3xl font-bold text-white">5,000+</div>
                  <div className="text-blue-300 text-sm mt-1">Jobs Completed</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white">4.9★</div>
                  <div className="text-blue-300 text-sm mt-1">Avg Rating</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white">30 min</div>
                  <div className="text-blue-300 text-sm mt-1">Avg Response</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white">100%</div>
                  <div className="text-blue-300 text-sm mt-1">Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-sm font-bold uppercase tracking-widest" style={{ color: 'var(--plumber-blue-light)' }}>
              Customer Reviews
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold">
              Don&apos;t take our word for it
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {reviews.map((review) => (
              <div key={review.name} className="review-card">
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: review.stars }).map((_, i) => (
                    <span key={i} className="text-yellow-500">★</span>
                  ))}
                </div>
                <p className="leading-relaxed mb-4" style={{ color: 'var(--plumber-muted)' }}>
                  &ldquo;{review.text}&rdquo;
                </p>
                <div className="text-sm">
                  <span className="font-bold">{review.name}</span>
                  <span style={{ color: 'var(--plumber-muted)' }}> — {review.area}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service areas */}
      <section id="areas" className="py-20" style={{ background: 'var(--plumber-surface)' }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-sm font-bold uppercase tracking-widest" style={{ color: 'var(--plumber-blue-light)' }}>
              Coverage
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold">
              Serving all London boroughs
            </h2>
            <p className="mt-4" style={{ color: 'var(--plumber-muted)' }}>
              Based in Central London with engineers across the city. We cover all areas within the M25.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {areas.map((area) => (
              <span key={area} className="area-tag">{area}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Contact / Quote form */}
      <section id="contact" className="py-20" style={{ background: 'linear-gradient(135deg, var(--plumber-blue-dark), var(--plumber-blue))' }}>
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Get a Free Quote
            </h2>
            <p className="mt-4 text-blue-200">
              Tell us what you need and we&apos;ll get back to you within the hour.
            </p>
          </div>

          <div className="rounded-2xl p-8 md:p-10" style={{ background: 'var(--plumber-surface)' }}>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Your name *</label>
                <input
                  type="text"
                  placeholder="John Smith"
                  className="w-full px-4 py-3 rounded-lg text-sm"
                  style={{ border: '1px solid var(--plumber-border)', outline: 'none' }}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Phone number *</label>
                <input
                  type="tel"
                  placeholder="07123 456789"
                  className="w-full px-4 py-3 rounded-lg text-sm"
                  style={{ border: '1px solid var(--plumber-border)', outline: 'none' }}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 rounded-lg text-sm"
                  style={{ border: '1px solid var(--plumber-border)', outline: 'none' }}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Postcode *</label>
                <input
                  type="text"
                  placeholder="SW1A 1AA"
                  className="w-full px-4 py-3 rounded-lg text-sm"
                  style={{ border: '1px solid var(--plumber-border)', outline: 'none' }}
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium mb-2">What do you need help with? *</label>
                <textarea
                  rows={4}
                  placeholder="Describe the issue or work you need done..."
                  className="w-full px-4 py-3 rounded-lg text-sm resize-none"
                  style={{ border: '1px solid var(--plumber-border)', outline: 'none' }}
                />
              </div>
              <div className="md:col-span-2">
                <button className="plumber-btn-primary w-full text-center" style={{ padding: '16px' }}>
                  Request Free Quote
                </button>
                <p className="text-center text-xs mt-3" style={{ color: 'var(--plumber-muted)' }}>
                  We typically respond within 1 hour during business hours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency CTA */}
      <section className="py-14 text-center" style={{ background: 'var(--plumber-orange)' }}>
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            Plumbing Emergency?
          </h2>
          <p className="mt-3 text-orange-100">
            Don&apos;t wait — call us now for immediate assistance. Available 24/7, 365 days a year.
          </p>
          <a
            href="tel:02071234567"
            className="mt-6 inline-block bg-white font-bold px-8 py-4 rounded-lg transition-all hover:shadow-lg hover:scale-105"
            style={{ color: 'var(--plumber-orange-dark)' }}
          >
            📞 020 7123 4567
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12" style={{ background: 'var(--plumber-blue-dark)', color: 'rgba(255,255,255,0.7)' }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-10">
            <div>
              <div className="text-white text-lg font-bold mb-4">Thames Plumbing Co.</div>
              <p className="text-sm leading-relaxed">
                London&apos;s trusted plumbing service since 2008. Gas Safe registered,
                fully insured, and committed to quality workmanship.
              </p>
            </div>
            <div>
              <div className="text-white font-bold mb-4">Services</div>
              <ul className="space-y-2 text-sm">
                <li>Boiler Repair &amp; Install</li>
                <li>Bathroom Fitting</li>
                <li>Leak Detection</li>
                <li>Drain Unblocking</li>
                <li>Emergency Plumbing</li>
                <li>Central Heating</li>
              </ul>
            </div>
            <div>
              <div className="text-white font-bold mb-4">Contact</div>
              <ul className="space-y-2 text-sm">
                <li>📞 020 7123 4567</li>
                <li>📧 info@thamesplumbing.co.uk</li>
                <li>📍 Central London</li>
                <li>⏰ 24/7 Emergency Service</li>
              </ul>
            </div>
          </div>
          <div className="mt-10 pt-8 text-center text-xs" style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
            <p>© 2024 Thames Plumbing Co. All rights reserved. Gas Safe Reg. 123456</p>
            <p className="mt-2 opacity-60">
              Demo site built by{" "}
              <Link href="/" className="underline hover:text-white">
                Patersclat
              </Link>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
