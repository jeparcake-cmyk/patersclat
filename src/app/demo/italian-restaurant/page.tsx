import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "The Golden Fork | Italian Restaurant in Notting Hill",
  description:
    "Authentic Italian dining in the heart of Notting Hill. Fresh pasta, wood-fired pizza, and fine wines. Book your table today.",
};

const menuHighlights = [
  {
    category: "Starters",
    items: [
      { name: "Burrata e Pomodorini", desc: "Creamy burrata, heritage tomatoes, basil oil", price: "£12" },
      { name: "Calamari Fritti", desc: "Crispy squid, lemon aioli, rocket", price: "£10" },
      { name: "Bruschetta al Tartufo", desc: "Truffle, wild mushroom, pecorino", price: "£11" },
    ],
  },
  {
    category: "Mains",
    items: [
      { name: "Tagliatelle al Ragù", desc: "Slow-cooked beef ragù, fresh egg pasta, parmigiano", price: "£18" },
      { name: "Pizza Margherita DOP", desc: "San Marzano tomato, fior di latte, fresh basil", price: "£14" },
      { name: "Branzino alla Griglia", desc: "Grilled sea bass, roast fennel, salsa verde", price: "£24" },
    ],
  },
  {
    category: "Desserts",
    items: [
      { name: "Tiramisù della Casa", desc: "Our famous house recipe, made fresh daily", price: "£9" },
      { name: "Panna Cotta", desc: "Vanilla bean, seasonal berry compote", price: "£8" },
      { name: "Affogato al Caffè", desc: "Vanilla gelato, hot espresso, amaretto", price: "£7" },
    ],
  },
];

const reviews = [
  { name: "Charlotte B.", text: "The best Italian in West London, hands down. The truffle pasta is to die for.", stars: 5 },
  { name: "Marco P.", text: "Feels like being back in Rome. Authentic flavours, beautiful atmosphere, wonderful staff.", stars: 5 },
  { name: "Priya S.", text: "We had our anniversary dinner here and it was absolutely perfect. Can't recommend enough.", stars: 5 },
];

export default function ItalianRestaurantPage() {
  return (
    <div className="golden-fork">
      <style>{`
        .golden-fork {
          --gf-burgundy: #722F37;
          --gf-burgundy-dark: #5a252c;
          --gf-gold: #D4A853;
          --gf-gold-light: #e8c882;
          --gf-cream: #FFF8F0;
          --gf-dark: #2C1810;
          --gf-text: #4A3728;
          --gf-muted: #8B7355;
          --gf-border: #E8DDD0;
          font-family: 'Georgia', 'Times New Roman', serif;
          color: var(--gf-text);
          background: var(--gf-cream);
        }

        .gf-heading {
          font-family: 'Georgia', serif;
          letter-spacing: 0.02em;
        }

        .gf-sans {
          font-family: system-ui, -apple-system, sans-serif;
        }

        .gf-nav {
          background: var(--gf-dark);
          padding: 0 24px;
          height: 72px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .gf-hero {
          background: linear-gradient(160deg, var(--gf-dark) 0%, var(--gf-burgundy) 50%, var(--gf-burgundy-dark) 100%);
          color: white;
          position: relative;
          overflow: hidden;
        }
        .gf-hero::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(ellipse at 70% 20%, rgba(212, 168, 83, 0.15) 0%, transparent 60%);
        }

        .gf-btn-primary {
          background: var(--gf-gold);
          color: var(--gf-dark);
          padding: 14px 36px;
          border-radius: 4px;
          font-weight: 600;
          font-size: 14px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          transition: all 0.3s;
          display: inline-block;
          text-decoration: none;
          font-family: system-ui, -apple-system, sans-serif;
        }
        .gf-btn-primary:hover {
          background: var(--gf-gold-light);
          transform: translateY(-1px);
          box-shadow: 0 4px 16px rgba(212, 168, 83, 0.3);
        }

        .gf-btn-outline {
          border: 1px solid var(--gf-gold);
          color: var(--gf-gold);
          padding: 14px 36px;
          border-radius: 4px;
          font-weight: 600;
          font-size: 14px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          transition: all 0.3s;
          display: inline-block;
          text-decoration: none;
          font-family: system-ui, -apple-system, sans-serif;
        }
        .gf-btn-outline:hover {
          background: var(--gf-gold);
          color: var(--gf-dark);
        }

        .gf-divider {
          width: 60px;
          height: 2px;
          background: var(--gf-gold);
          margin: 0 auto;
        }

        .gf-menu-card {
          background: white;
          border: 1px solid var(--gf-border);
          border-radius: 8px;
          padding: 36px;
          transition: all 0.3s;
        }
        .gf-menu-card:hover {
          box-shadow: 0 8px 30px rgba(44, 24, 16, 0.08);
        }

        .gf-img-placeholder {
          border-radius: 8px;
          overflow: hidden;
          position: relative;
        }
        .gf-img-placeholder img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
      `}</style>

      {/* Navigation */}
      <div className="gf-nav">
        <div className="flex items-center gap-3">
          <span style={{ color: 'var(--gf-gold)', fontSize: '28px' }}>🍴</span>
          <div>
            <div className="text-lg gf-heading" style={{ color: 'var(--gf-gold)', letterSpacing: '0.15em' }}>
              THE GOLDEN FORK
            </div>
            <div className="text-xs gf-sans" style={{ color: 'rgba(255,255,255,0.5)', letterSpacing: '0.2em' }}>
              NOTTING HILL
            </div>
          </div>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm gf-sans" style={{ color: 'rgba(255,255,255,0.7)' }}>
          <a href="#about" className="hover:text-white transition-colors">Our Story</a>
          <a href="#menu" className="hover:text-white transition-colors">Menu</a>
          <a href="#gallery" className="hover:text-white transition-colors">Gallery</a>
          <a href="#reviews" className="hover:text-white transition-colors">Reviews</a>
          <a href="#book" className="gf-btn-primary" style={{ padding: '10px 24px', fontSize: '12px' }}>
            Book a Table
          </a>
        </div>
      </div>

      {/* Hero */}
      <section className="gf-hero py-24 md:py-36">
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <div className="gf-sans text-xs uppercase tracking-[0.3em] mb-6" style={{ color: 'var(--gf-gold)' }}>
            Authentic Italian Dining
          </div>
          <h1 className="text-4xl md:text-7xl gf-heading leading-tight">
            Where every meal
            <br />
            is a <span style={{ color: 'var(--gf-gold)' }}>celebration</span>
          </h1>
          <p className="mt-6 text-lg max-w-xl mx-auto gf-sans" style={{ color: 'rgba(255,255,255,0.7)' }}>
            Fresh pasta made daily. Wood-fired pizza. Fine Italian wines.
            In the heart of Notting Hill since 2015.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a href="#book" className="gf-btn-primary">Reserve a Table</a>
            <a href="#menu" className="gf-btn-outline">View Menu</a>
          </div>
          <div className="mt-14 flex flex-wrap justify-center gap-8 gf-sans text-sm" style={{ color: 'rgba(255,255,255,0.5)' }}>
            <span>📍 Notting Hill, W11</span>
            <span>🕐 Tue–Sun, 12pm–10:30pm</span>
            <span>📞 020 7946 0958</span>
          </div>
        </div>
      </section>

      {/* Photo strip */}
      <section className="py-0">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
          {[
            { bg: 'linear-gradient(135deg, #8B4513, #D2691E)', label: 'Fresh Pasta' },
            { bg: 'linear-gradient(135deg, #CD853F, #DEB887)', label: 'Wood-Fired Pizza' },
            { bg: 'linear-gradient(135deg, #722F37, #8B0000)', label: 'Fine Wines' },
            { bg: 'linear-gradient(135deg, #2C1810, #4A3728)', label: 'Warm Ambiance' },
          ].map((item) => (
            <div
              key={item.label}
              className="h-48 md:h-64 flex items-end justify-center pb-6"
              style={{ background: item.bg }}
            >
              <span className="gf-sans text-white text-xs uppercase tracking-[0.2em] bg-black/30 px-4 py-2 rounded-full">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="gf-sans text-xs uppercase tracking-[0.3em] mb-4" style={{ color: 'var(--gf-gold)' }}>
            Our Story
          </div>
          <h2 className="text-3xl md:text-4xl gf-heading">A taste of Italy in London</h2>
          <div className="gf-divider mt-6 mb-8" />
          <p className="text-lg leading-relaxed max-w-2xl mx-auto" style={{ color: 'var(--gf-muted)' }}>
            The Golden Fork was born from a simple dream: to bring the warmth of an
            Italian family kitchen to Notting Hill. Head chef Marco Rossi trained in
            Bologna and Naples before bringing his passion to London. Every dish is
            made with love, using ingredients sourced directly from small Italian
            producers.
          </p>
          <div className="mt-12 grid grid-cols-3 gap-8">
            {[
              { num: '9', label: 'Years Open' },
              { num: '4.8★', label: 'Google Rating' },
              { num: '100%', label: 'Fresh Pasta' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl font-bold gf-heading" style={{ color: 'var(--gf-burgundy)' }}>{stat.num}</div>
                <div className="text-xs gf-sans uppercase tracking-wider mt-1" style={{ color: 'var(--gf-muted)' }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Menu */}
      <section id="menu" className="py-20" style={{ background: 'white' }}>
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="gf-sans text-xs uppercase tracking-[0.3em] mb-4" style={{ color: 'var(--gf-gold)' }}>
              Our Menu
            </div>
            <h2 className="text-3xl md:text-4xl gf-heading">A selection of favourites</h2>
            <div className="gf-divider mt-6" />
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {menuHighlights.map((section) => (
              <div key={section.category} className="gf-menu-card">
                <h3 className="text-xl gf-heading text-center mb-6" style={{ color: 'var(--gf-burgundy)' }}>
                  {section.category}
                </h3>
                <div className="space-y-5">
                  {section.items.map((item) => (
                    <div key={item.name}>
                      <div className="flex justify-between items-baseline">
                        <span className="font-semibold text-sm">{item.name}</span>
                        <span className="gf-sans text-sm font-bold" style={{ color: 'var(--gf-burgundy)' }}>{item.price}</span>
                      </div>
                      <p className="text-xs mt-1 gf-sans" style={{ color: 'var(--gf-muted)' }}>{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <p className="text-sm gf-sans" style={{ color: 'var(--gf-muted)' }}>
              This is just a taste — view our full menu in the restaurant or ask your server for seasonal specials.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="gf-sans text-xs uppercase tracking-[0.3em] mb-4" style={{ color: 'var(--gf-gold)' }}>
              Gallery
            </div>
            <h2 className="text-3xl md:text-4xl gf-heading">Inside The Golden Fork</h2>
            <div className="gf-divider mt-6" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {[
              { bg: 'linear-gradient(135deg, #3E2723, #5D4037)', h: 'h-48 md:h-64', label: 'Interior' },
              { bg: 'linear-gradient(135deg, #BF360C, #E64A19)', h: 'h-48 md:h-64', label: 'Wood-Fired Oven' },
              { bg: 'linear-gradient(135deg, #4E342E, #795548)', h: 'h-48 md:h-64', label: 'Bar Area' },
              { bg: 'linear-gradient(135deg, #F9A825, #FFD54F)', h: 'h-48 md:h-64', label: 'Fresh Pasta' },
              { bg: 'linear-gradient(135deg, #1B5E20, #388E3C)', h: 'h-48 md:h-64', label: 'Garden Terrace' },
              { bg: 'linear-gradient(135deg, #880E4F, #AD1457)', h: 'h-48 md:h-64', label: 'Private Dining' },
            ].map((item) => (
              <div
                key={item.label}
                className={`${item.h} rounded-lg flex items-end justify-center pb-4`}
                style={{ background: item.bg }}
              >
                <span className="gf-sans text-white text-xs bg-black/40 px-3 py-1 rounded-full">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="py-20" style={{ background: 'white' }}>
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="gf-sans text-xs uppercase tracking-[0.3em] mb-4" style={{ color: 'var(--gf-gold)' }}>
              Reviews
            </div>
            <h2 className="text-3xl md:text-4xl gf-heading">What our guests say</h2>
            <div className="gf-divider mt-6" />
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((review) => (
              <div key={review.name} className="text-center p-6 rounded-lg" style={{ background: 'var(--gf-cream)' }}>
                <div className="flex justify-center gap-1 mb-4">
                  {Array.from({ length: review.stars }).map((_, i) => (
                    <span key={i} style={{ color: 'var(--gf-gold)' }}>★</span>
                  ))}
                </div>
                <p className="text-sm leading-relaxed italic" style={{ color: 'var(--gf-muted)' }}>
                  &ldquo;{review.text}&rdquo;
                </p>
                <div className="mt-4 gf-sans text-xs font-bold uppercase tracking-wider">
                  {review.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section id="book" className="py-20" style={{ background: 'var(--gf-dark)', color: 'white' }}>
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="gf-sans text-xs uppercase tracking-[0.3em] mb-4" style={{ color: 'var(--gf-gold)' }}>
              Reservations
            </div>
            <h2 className="text-3xl md:text-4xl gf-heading">Book your table</h2>
            <div className="gf-divider mt-6 mb-6" />
            <p className="gf-sans" style={{ color: 'rgba(255,255,255,0.6)' }}>
              Reserve your spot for an unforgettable dining experience.
            </p>
          </div>

          <div className="max-w-lg mx-auto rounded-lg p-8" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}>
            <div className="space-y-4 gf-sans">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider mb-2" style={{ color: 'var(--gf-gold)' }}>Name</label>
                  <input type="text" placeholder="Your name" className="w-full px-4 py-3 rounded text-sm bg-white/10 border border-white/10 text-white placeholder:text-white/30 outline-none focus:border-white/30" />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider mb-2" style={{ color: 'var(--gf-gold)' }}>Phone</label>
                  <input type="tel" placeholder="Phone number" className="w-full px-4 py-3 rounded text-sm bg-white/10 border border-white/10 text-white placeholder:text-white/30 outline-none focus:border-white/30" />
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider mb-2" style={{ color: 'var(--gf-gold)' }}>Date</label>
                  <input type="date" className="w-full px-4 py-3 rounded text-sm bg-white/10 border border-white/10 text-white outline-none focus:border-white/30" />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider mb-2" style={{ color: 'var(--gf-gold)' }}>Time</label>
                  <select className="w-full px-4 py-3 rounded text-sm bg-white/10 border border-white/10 text-white outline-none focus:border-white/30">
                    <option value="">Select</option>
                    <option value="12:00">12:00</option>
                    <option value="12:30">12:30</option>
                    <option value="13:00">13:00</option>
                    <option value="18:00">18:00</option>
                    <option value="18:30">18:30</option>
                    <option value="19:00">19:00</option>
                    <option value="19:30">19:30</option>
                    <option value="20:00">20:00</option>
                    <option value="20:30">20:30</option>
                    <option value="21:00">21:00</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider mb-2" style={{ color: 'var(--gf-gold)' }}>Guests</label>
                  <select className="w-full px-4 py-3 rounded text-sm bg-white/10 border border-white/10 text-white outline-none focus:border-white/30">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7+</option>
                  </select>
                </div>
              </div>
              <button className="gf-btn-primary w-full text-center mt-4" style={{ padding: '16px' }}>
                Request Reservation
              </button>
              <p className="text-center text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>
                For parties of 8+ or special events, please call us directly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Info strip */}
      <section className="py-14" style={{ background: 'var(--gf-burgundy)', color: 'white' }}>
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 text-center gf-sans">
            <div>
              <div className="text-2xl mb-2">📍</div>
              <div className="font-bold text-sm">Find Us</div>
              <p className="text-xs mt-1" style={{ color: 'rgba(255,255,255,0.7)' }}>
                42 Westbourne Grove<br />Notting Hill, London W11 2RH
              </p>
            </div>
            <div>
              <div className="text-2xl mb-2">🕐</div>
              <div className="font-bold text-sm">Opening Hours</div>
              <p className="text-xs mt-1" style={{ color: 'rgba(255,255,255,0.7)' }}>
                Tue–Thu: 12pm–10pm<br />Fri–Sat: 12pm–10:30pm<br />Sun: 12pm–9pm
              </p>
            </div>
            <div>
              <div className="text-2xl mb-2">📞</div>
              <div className="font-bold text-sm">Contact</div>
              <p className="text-xs mt-1" style={{ color: 'rgba(255,255,255,0.7)' }}>
                020 7946 0958<br />hello@thegoldenfork.co.uk
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 text-center gf-sans" style={{ background: 'var(--gf-dark)', color: 'rgba(255,255,255,0.4)' }}>
        <div className="text-lg gf-heading mb-2" style={{ color: 'var(--gf-gold)', letterSpacing: '0.15em' }}>
          THE GOLDEN FORK
        </div>
        <p className="text-xs">© 2024 The Golden Fork. All rights reserved.</p>
        <p className="text-xs mt-2 opacity-60">
          Demo site built by{" "}
          <Link href="/" className="underline hover:text-white">
            Patersclat
          </Link>
        </p>
      </footer>
    </div>
  );
}
