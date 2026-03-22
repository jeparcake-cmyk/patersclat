import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Alex Carter Fitness | Personal Trainer in East London",
  description:
    "Transform your body and mindset with London's top-rated personal trainer. 1-to-1 coaching, group sessions, and online plans. First session free.",
};

const services = [
  {
    icon: "💪",
    title: "1-to-1 Personal Training",
    desc: "Fully personalised sessions tailored to your goals. Whether it's fat loss, muscle building, or getting competition-ready.",
    price: "From £55/session",
    image: "/images/fitness-weights.jpg",
  },
  {
    icon: "👥",
    title: "Small Group Training",
    desc: "Train with 2-4 people for accountability and motivation. All the benefits of PT at a fraction of the cost.",
    price: "From £25/person",
    image: "/images/fitness-stretching.jpg",
  },
  {
    icon: "📱",
    title: "Online Coaching",
    desc: "Custom training and nutrition plans delivered via app. Weekly check-ins, form reviews, and 24/7 support.",
    price: "From £149/month",
    image: "/images/fitness-running.jpg",
  },
  {
    icon: "🥗",
    title: "Nutrition Planning",
    desc: "Structured meal plans that fit your lifestyle. No crash diets — sustainable nutrition that gets real results.",
    price: "From £99/plan",
    image: "/images/fitness-nutrition.jpg",
  },
];

const transformations = [
  { label: "12 Week", stat: "-18kg", name: "James, 34", desc: "Lost 18kg and dropped 4 trouser sizes in 12 weeks" },
  { label: "8 Week", stat: "+6kg muscle", name: "Sophie, 28", desc: "Gained 6kg of lean muscle for her first competition" },
  { label: "16 Week", stat: "-25kg", name: "David, 42", desc: "Lost 25kg and reversed his pre-diabetic diagnosis" },
];

const testimonials = [
  { name: "Tom H.", text: "Alex completely changed my relationship with fitness. Down 20kg and I actually enjoy going to the gym now.", stars: 5 },
  { name: "Rachel K.", text: "The online coaching is brilliant. I train from home and the results have been incredible. Worth every penny.", stars: 5 },
  { name: "Chris M.", text: "Best investment I've ever made. Alex knows his stuff and actually cares about your progress.", stars: 5 },
];

const pricing = [
  {
    name: "Single Session",
    price: "£55",
    period: "per session",
    features: ["1-to-1 personal training", "Goal assessment", "Form coaching", "Flexible scheduling"],
    highlighted: false,
  },
  {
    name: "8 Week Package",
    price: "£399",
    period: "24 sessions",
    features: ["3x sessions per week", "Nutrition plan included", "Progress tracking", "WhatsApp support", "Body composition scans"],
    highlighted: true,
  },
  {
    name: "Online Coaching",
    price: "£149",
    period: "per month",
    features: ["Custom training program", "Nutrition guidance", "Weekly check-ins", "Form video reviews", "24/7 app support"],
    highlighted: false,
  },
];

export default function PersonalTrainerPage() {
  return (
    <div className="ac-fitness">
      <style>{`
        .ac-fitness {
          --ac-black: #0A0A0A;
          --ac-dark: #141414;
          --ac-surface: #1E1E1E;
          --ac-lime: #BFFF00;
          --ac-lime-dark: #99CC00;
          --ac-white: #FFFFFF;
          --ac-gray: #888888;
          --ac-gray-light: #CCCCCC;
          --ac-border: #2A2A2A;
          font-family: system-ui, -apple-system, sans-serif;
          color: var(--ac-white);
          background: var(--ac-black);
        }

        .ac-nav {
          background: var(--ac-black);
          border-bottom: 1px solid var(--ac-border);
          padding: 0 24px;
          height: 68px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .ac-hero {
          background: var(--ac-black);
          position: relative;
          overflow: hidden;
        }
        .ac-hero::before {
          content: '';
          position: absolute;
          top: -30%;
          right: -10%;
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(191, 255, 0, 0.08) 0%, transparent 70%);
          border-radius: 50%;
        }
        .ac-hero::after {
          content: '';
          position: absolute;
          bottom: -20%;
          left: -10%;
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(191, 255, 0, 0.05) 0%, transparent 70%);
          border-radius: 50%;
        }

        .ac-btn-primary {
          background: var(--ac-lime);
          color: var(--ac-black);
          padding: 14px 32px;
          border-radius: 50px;
          font-weight: 700;
          font-size: 14px;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          transition: all 0.3s;
          display: inline-block;
          text-decoration: none;
        }
        .ac-btn-primary:hover {
          background: var(--ac-lime-dark);
          transform: translateY(-2px);
          box-shadow: 0 4px 20px rgba(191, 255, 0, 0.25);
        }

        .ac-btn-outline {
          border: 2px solid var(--ac-lime);
          color: var(--ac-lime);
          padding: 12px 32px;
          border-radius: 50px;
          font-weight: 700;
          font-size: 14px;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          transition: all 0.3s;
          display: inline-block;
          text-decoration: none;
        }
        .ac-btn-outline:hover {
          background: var(--ac-lime);
          color: var(--ac-black);
        }

        .ac-card {
          background: var(--ac-surface);
          border: 1px solid var(--ac-border);
          border-radius: 16px;
          padding: 32px;
          transition: all 0.3s;
        }
        .ac-card:hover {
          border-color: rgba(191, 255, 0, 0.3);
          transform: translateY(-2px);
        }

        .ac-stat-card {
          background: linear-gradient(135deg, var(--ac-surface), var(--ac-dark));
          border: 1px solid var(--ac-border);
          border-radius: 16px;
          padding: 32px;
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        .ac-stat-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: var(--ac-lime);
        }

        .ac-pricing-card {
          background: var(--ac-surface);
          border: 1px solid var(--ac-border);
          border-radius: 16px;
          padding: 36px;
          display: flex;
          flex-direction: column;
        }
        .ac-pricing-highlighted {
          border-color: var(--ac-lime);
          position: relative;
        }
        .ac-pricing-highlighted::before {
          content: '';
          position: absolute;
          inset: -1px;
          border-radius: 16px;
          padding: 1px;
          background: linear-gradient(135deg, var(--ac-lime), rgba(191, 255, 0, 0.3));
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
        }
      `}</style>

      {/* Navigation */}
      <div className="ac-nav">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full flex items-center justify-center font-black text-sm" style={{ background: 'var(--ac-lime)', color: 'var(--ac-black)' }}>
            AC
          </div>
          <div>
            <div className="text-sm font-bold tracking-wide">ALEX CARTER</div>
            <div className="text-[10px] uppercase tracking-[0.2em]" style={{ color: 'var(--ac-gray)' }}>Fitness</div>
          </div>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm" style={{ color: 'var(--ac-gray)' }}>
          <a href="#services" className="hover:text-white transition-colors">Services</a>
          <a href="#results" className="hover:text-white transition-colors">Results</a>
          <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          <a href="#contact" className="ac-btn-primary" style={{ padding: '10px 24px', fontSize: '12px' }}>
            Free Consultation
          </a>
        </div>
      </div>

      {/* Hero */}
      <section className="ac-hero py-24 md:py-32">
        <img
          src="/images/fitness-hero.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-15"
        />
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <div className="max-w-2xl">
            <div className="text-xs font-bold uppercase tracking-[0.3em] mb-6" style={{ color: 'var(--ac-lime)' }}>
              East London&apos;s #1 Rated PT
            </div>
            <h1 className="text-4xl md:text-6xl font-black leading-[1.1]">
              Your body.
              <br />
              Your rules.
              <br />
              <span style={{ color: 'var(--ac-lime)' }}>My expertise.</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed" style={{ color: 'var(--ac-gray-light)' }}>
              No cookie-cutter plans. No gimmicks. Just real coaching that delivers
              real results. 200+ transformations and counting.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#contact" className="ac-btn-primary">
                Book Free Session →
              </a>
              <a href="#results" className="ac-btn-outline">
                See Results
              </a>
            </div>
          </div>

          {/* Stats row */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { num: "200+", label: "Clients Transformed" },
              { num: "8 yrs", label: "Experience" },
              { num: "4.9★", label: "Google Rating" },
              { num: "Level 4", label: "Certified" },
            ].map((stat) => (
              <div key={stat.label} className="text-center py-5 rounded-xl" style={{ background: 'var(--ac-surface)', border: '1px solid var(--ac-border)' }}>
                <div className="text-2xl font-black" style={{ color: 'var(--ac-lime)' }}>{stat.num}</div>
                <div className="text-xs mt-1" style={{ color: 'var(--ac-gray)' }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-20" style={{ background: 'var(--ac-dark)' }}>
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="rounded-2xl h-80 overflow-hidden" style={{ border: '1px solid var(--ac-border)' }}>
              <img
                src="/images/fitness-training.jpg"
                alt="Personal training session"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-[0.3em] mb-4" style={{ color: 'var(--ac-lime)' }}>
                About Me
              </div>
              <h2 className="text-3xl font-bold">
                Not your average <span style={{ color: 'var(--ac-lime)' }}>personal trainer</span>
              </h2>
              <p className="mt-4 leading-relaxed" style={{ color: 'var(--ac-gray-light)' }}>
                I&apos;ve been in this game for 8 years — and I got into it because I
                was once the guy who had no idea what he was doing in the gym.
              </p>
              <p className="mt-3 leading-relaxed" style={{ color: 'var(--ac-gray-light)' }}>
                I hold a Level 4 qualification in Strength &amp; Conditioning, a
                Precision Nutrition certification, and I&apos;ve worked with everyone
                from complete beginners to competitive athletes. Based at Gymbox
                Shoreditch, but I also offer mobile PT across East London.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                {["Level 4 S&C", "Precision Nutrition", "First Aid", "REPs Registered"].map((badge) => (
                  <span key={badge} className="text-xs px-3 py-1.5 rounded-full font-medium" style={{ background: 'rgba(191,255,0,0.1)', color: 'var(--ac-lime)', border: '1px solid rgba(191,255,0,0.2)' }}>
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="text-xs font-bold uppercase tracking-[0.3em] mb-4" style={{ color: 'var(--ac-lime)' }}>
              Services
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">How I can help you</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service) => (
              <div key={service.title} className="ac-card" style={{ padding: 0, overflow: 'hidden' }}>
                <div className="h-40 overflow-hidden">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-2">{service.title}</h3>
                  <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--ac-gray-light)' }}>
                    {service.desc}
                  </p>
                  <div className="text-sm font-bold" style={{ color: 'var(--ac-lime)' }}>{service.price}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Transformations */}
      <section id="results" className="py-20" style={{ background: 'var(--ac-dark)' }}>
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="text-xs font-bold uppercase tracking-[0.3em] mb-4" style={{ color: 'var(--ac-lime)' }}>
              Real Results
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">Client transformations</h2>
            <p className="mt-3" style={{ color: 'var(--ac-gray)' }}>
              These are real people with real results. No filters, no shortcuts.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {transformations.map((t) => (
              <div key={t.name} className="ac-stat-card">
                <div className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: 'var(--ac-lime)' }}>
                  {t.label} Transformation
                </div>
                <div className="text-4xl font-black my-4" style={{ color: 'var(--ac-lime)' }}>
                  {t.stat}
                </div>
                <div className="font-bold">{t.name}</div>
                <p className="text-xs mt-2" style={{ color: 'var(--ac-gray)' }}>{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="text-xs font-bold uppercase tracking-[0.3em] mb-4" style={{ color: 'var(--ac-lime)' }}>
              Testimonials
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">What clients say</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="ac-card">
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <span key={i} style={{ color: 'var(--ac-lime)' }}>★</span>
                  ))}
                </div>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--ac-gray-light)' }}>
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="mt-4 text-sm font-bold">{t.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20" style={{ background: 'var(--ac-dark)' }}>
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="text-xs font-bold uppercase tracking-[0.3em] mb-4" style={{ color: 'var(--ac-lime)' }}>
              Pricing
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">Invest in yourself</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {pricing.map((plan) => (
              <div key={plan.name} className={`ac-pricing-card ${plan.highlighted ? 'ac-pricing-highlighted' : ''}`}>
                {plan.highlighted && (
                  <span className="text-xs font-bold uppercase tracking-wider mb-4" style={{ color: 'var(--ac-lime)' }}>
                    Most Popular
                  </span>
                )}
                <h3 className="text-xl font-bold">{plan.name}</h3>
                <div className="mt-4">
                  <span className="text-4xl font-black" style={{ color: 'var(--ac-lime)' }}>{plan.price}</span>
                  <span className="text-sm ml-2" style={{ color: 'var(--ac-gray)' }}>{plan.period}</span>
                </div>
                <ul className="mt-6 space-y-3 flex-1">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm">
                      <span style={{ color: 'var(--ac-lime)' }}>✓</span>
                      <span style={{ color: 'var(--ac-gray-light)' }}>{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className={plan.highlighted ? 'ac-btn-primary w-full text-center mt-8' : 'ac-btn-outline w-full text-center mt-8'}
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="text-xs font-bold uppercase tracking-[0.3em] mb-4" style={{ color: 'var(--ac-lime)' }}>
              Get Started
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">
              Your first session is <span style={{ color: 'var(--ac-lime)' }}>free</span>
            </h2>
            <p className="mt-3" style={{ color: 'var(--ac-gray)' }}>
              No commitment, no pressure. Let&apos;s chat about your goals and see if we&apos;re a good fit.
            </p>
          </div>

          <div className="max-w-lg mx-auto ac-card">
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider mb-2" style={{ color: 'var(--ac-lime)' }}>Name</label>
                <input type="text" placeholder="Your name" className="w-full px-4 py-3 rounded-lg text-sm" style={{ background: 'var(--ac-dark)', border: '1px solid var(--ac-border)', color: 'white', outline: 'none' }} />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider mb-2" style={{ color: 'var(--ac-lime)' }}>Email</label>
                  <input type="email" placeholder="Email" className="w-full px-4 py-3 rounded-lg text-sm" style={{ background: 'var(--ac-dark)', border: '1px solid var(--ac-border)', color: 'white', outline: 'none' }} />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider mb-2" style={{ color: 'var(--ac-lime)' }}>Phone</label>
                  <input type="tel" placeholder="Phone" className="w-full px-4 py-3 rounded-lg text-sm" style={{ background: 'var(--ac-dark)', border: '1px solid var(--ac-border)', color: 'white', outline: 'none' }} />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider mb-2" style={{ color: 'var(--ac-lime)' }}>What are your goals?</label>
                <textarea rows={3} placeholder="Tell me what you want to achieve..." className="w-full px-4 py-3 rounded-lg text-sm resize-none" style={{ background: 'var(--ac-dark)', border: '1px solid var(--ac-border)', color: 'white', outline: 'none' }} />
              </div>
              <button className="ac-btn-primary w-full text-center" style={{ padding: '16px' }}>
                Claim Free Session
              </button>
            </div>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-4 text-center max-w-lg mx-auto">
            <div>
              <div className="text-lg mb-1">📍</div>
              <div className="text-xs" style={{ color: 'var(--ac-gray)' }}>Gymbox Shoreditch<br />& Mobile PT</div>
            </div>
            <div>
              <div className="text-lg mb-1">📱</div>
              <div className="text-xs" style={{ color: 'var(--ac-gray)' }}>07700 900123</div>
            </div>
            <div>
              <div className="text-lg mb-1">📸</div>
              <div className="text-xs" style={{ color: 'var(--ac-gray)' }}>@alexcarterfitness</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-xs" style={{ background: 'var(--ac-dark)', borderTop: '1px solid var(--ac-border)', color: 'var(--ac-gray)' }}>
        <p>© 2024 Alex Carter Fitness. All rights reserved.</p>
        <p className="mt-2 opacity-60">
          Demo site built by{" "}
          <Link href="/" className="underline hover:text-white">
            slap.
          </Link>
        </p>
      </footer>
    </div>
  );
}
