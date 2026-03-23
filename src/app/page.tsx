"use client";

import Link from "next/link";
import { useRef, useState, useCallback } from "react";

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
    color: "from-blue-600/90 to-blue-900/90",
    image: "/images/plumber.jpg",
    description: "Emergency plumber website with online booking and trust signals.",
  },
  {
    title: "The Golden Fork",
    category: "Restaurant",
    href: "/demo/italian-restaurant",
    color: "from-amber-800/90 to-yellow-900/90",
    image: "/images/restaurant.jpg",
    description: "Elegant restaurant site with menu, gallery, and reservations.",
  },
  {
    title: "Alex Carter Fitness",
    category: "Personal Trainer",
    href: "/demo/personal-trainer",
    color: "from-lime-600/90 to-green-900/90",
    image: "/images/gym.jpg",
    description: "Bold PT website with results showcase and booking system.",
  },
  {
    title: "Pusher Music",
    category: "Music Sync Agency",
    href: "/demo/pusher-music",
    color: "from-emerald-600/90 to-gray-900/90",
    image: "/images/music-studio.jpg",
    description: "Interactive 3D globe showcasing music placements and artists.",
  },
];


function BeforeAfterSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [sliderPos, setSliderPos] = useState(50);
  const dragging = useRef(false);

  const handleMove = useCallback((clientX: number) => {
    if (!dragging.current || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((clientX - rect.left) / rect.width) * 100;
    setSliderPos(Math.max(5, Math.min(95, x)));
  }, []);

  const handleMouseDown = () => { dragging.current = true; };
  const handleMouseUp = () => { dragging.current = false; };

  return (
    <section className="py-24 bg-surface/50">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-accent-light text-sm font-mono uppercase tracking-widest">
            The Difference
          </span>
          <h2 className="mt-4 text-4xl sm:text-5xl font-bold tracking-tight">
            DIY website vs
            <br />
            <span className="gradient-text">built by slap.</span>
          </h2>
          <p className="mt-4 text-muted text-lg max-w-2xl mx-auto">
            Drag the slider to see what a professional website can do for your business.
          </p>
        </div>

        <div
          ref={containerRef}
          className="relative rounded-2xl overflow-hidden border border-border/50 shadow-2xl shadow-accent/5 select-none cursor-col-resize aspect-[3/4] sm:aspect-[16/10]"
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onMouseMove={(e) => handleMove(e.clientX)}
          onTouchStart={handleMouseDown}
          onTouchEnd={handleMouseUp}
          onTouchMove={(e) => handleMove(e.touches[0].clientX)}
        >
          {/* AFTER (full width, sits behind) */}
          <div className="absolute inset-0">
            <div style={{ background: "#0f172a", width: "100%", height: "100%", fontFamily: "system-ui, sans-serif", overflow: "hidden", position: "relative" }}>
              {/* Background image */}
              <img src="/images/restaurant-pasta.jpg" alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: 0.25 }} />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(15,23,42,0.95) 0%, rgba(15,23,42,0.6) 100%)" }} />
              {/* Modern nav */}
              <div style={{ position: "relative", zIndex: 1, display: "flex", justifyContent: "space-between", alignItems: "center", padding: "clamp(8px,2vw,16px) clamp(12px,3vw,32px)", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
                <span style={{ color: "#fff", fontWeight: 800, fontSize: "clamp(12px,2vw,18px)" }}>FreshBakes</span>
                <span style={{ background: "#6366f1", color: "#fff", fontSize: "clamp(9px,1.2vw,12px)", fontWeight: 600, padding: "clamp(4px,1vw,8px) clamp(8px,1.5vw,18px)", borderRadius: 20 }}>Order Now</span>
              </div>
              {/* Hero content */}
              <div style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", justifyContent: "center", padding: "clamp(16px,4vw,40px) clamp(12px,3vw,40px)", height: "calc(100% - clamp(36px,4vw,53px))" }}>
                <div style={{ fontSize: "clamp(8px,1.2vw,11px)", color: "#6366f1", letterSpacing: 2, textTransform: "uppercase", marginBottom: "clamp(6px,1.5vw,12px)", fontWeight: 600 }}>Artisan Bakery</div>
                <div style={{ fontSize: "clamp(16px, 3.5vw, 42px)", fontWeight: 800, color: "#fff", lineHeight: 1.1, marginBottom: "clamp(8px,1.5vw,16px)" }}>
                  Freshly baked,<br /><span style={{ color: "#6366f1" }}>delivered daily.</span>
                </div>
                <div style={{ fontSize: "clamp(9px, 1.4vw, 15px)", color: "rgba(255,255,255,0.5)", lineHeight: 1.5, maxWidth: 380, marginBottom: "clamp(12px,2vw,24px)" }}>
                  Handcrafted sourdough, pastries and cakes made fresh every morning.
                </div>
                <div style={{ display: "flex", gap: "clamp(6px,1vw,12px)" }}>
                  <span style={{ background: "#6366f1", color: "#fff", fontSize: "clamp(9px, 1.2vw, 14px)", fontWeight: 600, padding: "clamp(6px,1vw,10px) clamp(12px,2vw,24px)", borderRadius: 24 }}>View Menu</span>
                  <span style={{ border: "1px solid rgba(255,255,255,0.15)", color: "#fff", fontSize: "clamp(9px, 1.2vw, 14px)", fontWeight: 600, padding: "clamp(6px,1vw,10px) clamp(12px,2vw,24px)", borderRadius: 24 }}>Our Story</span>
                </div>
                <div style={{ display: "flex", gap: "clamp(8px,2vw,24px)", marginTop: "clamp(12px,2vw,28px)", fontSize: "clamp(8px,1vw,11px)", color: "rgba(255,255,255,0.35)" }}>
                  <span>★★★★★ 4.9 on Google</span>
                </div>
              </div>
            </div>
            {/* AFTER label */}
            <div style={{ position: "absolute", bottom: "clamp(8px,2vw,16px)", right: "clamp(8px,2vw,16px)", background: "#6366f1", color: "#fff", fontSize: "clamp(9px,1vw,11px)", fontWeight: 700, padding: "4px 10px", borderRadius: 8, letterSpacing: 1, zIndex: 2 }}>
              AFTER
            </div>
          </div>

          {/* BEFORE (clipped by slider) */}
          <div className="absolute inset-0 z-10" style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}>
            <div style={{ background: "#ffffff", width: "100%", height: "100%", fontFamily: "Times New Roman, serif", overflow: "hidden" }}>
              {/* Ugly nav */}
              <div style={{ background: "#2e4a1e", padding: "clamp(4px,1vw,8px) clamp(8px,2vw,20px)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ color: "#ffff00", fontWeight: "bold", fontSize: "clamp(12px,2.2vw,20px)", fontFamily: "Comic Sans MS, cursive" }}>🍞 FreshBakes 🍞</span>
                <span style={{ fontSize: "clamp(9px,1.2vw,14px)", color: "#fff", textDecoration: "underline" }}>Contact Us!!</span>
              </div>
              {/* Ugly marquee-style banner */}
              <div style={{ background: "#ff0000", color: "#ffff00", textAlign: "center", padding: "clamp(3px,0.8vw,6px)", fontSize: "clamp(8px,1.3vw,13px)", fontWeight: "bold", fontFamily: "Comic Sans MS, cursive", whiteSpace: "nowrap", overflow: "hidden" }}>
                ⭐ BEST BREAD IN TOWN!!! CALL NOW!! ⭐
              </div>
              {/* Ugly hero */}
              <div style={{ padding: "clamp(12px,3vw,30px) clamp(8px,2vw,20px)", textAlign: "center" }}>
                <div style={{ fontSize: "clamp(14px, 3vw, 48px)", color: "#2e4a1e", fontFamily: "Comic Sans MS, cursive", fontWeight: "bold", textShadow: "2px 2px #ccc" }}>
                  Welcome to FreshBakes!!
                </div>
                <div style={{ fontSize: "clamp(9px, 1.3vw, 16px)", color: "#666", marginTop: "clamp(4px,1vw,8px)", fontStyle: "italic" }}>
                  We sell bread and cakes and stuff. Please buy from us. Thanks!!
                </div>
                <div style={{ marginTop: "clamp(10px,2vw,20px)", display: "flex", justifyContent: "center", gap: "clamp(4px,1vw,12px)" }}>
                  <span style={{ background: "#2e4a1e", color: "#ffff00", fontSize: "clamp(8px, 1.2vw, 15px)", padding: "clamp(4px,1vw,10px) clamp(8px,1.5vw,20px)", fontFamily: "Comic Sans MS, cursive", fontWeight: "bold", border: "3px outset #666" }}>CLICK HERE!!</span>
                  <span style={{ background: "#ff6600", color: "#fff", fontSize: "clamp(8px, 1.2vw, 15px)", padding: "clamp(4px,1vw,10px) clamp(8px,1.5vw,20px)", fontFamily: "Comic Sans MS, cursive", fontWeight: "bold", border: "3px outset #666" }}>ORDER NOW!!!</span>
                </div>
                <div style={{ marginTop: "clamp(10px,2vw,20px)", display: "flex", justifyContent: "center", gap: "clamp(4px,1vw,8px)" }}>
                  <div style={{ width: "28%", aspectRatio: "1", background: "#f0e68c", border: "2px solid #2e4a1e", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "clamp(7px, 1vw, 14px)", color: "#666" }}>📷 bread</div>
                  <div style={{ width: "28%", aspectRatio: "1", background: "#f0e68c", border: "2px solid #2e4a1e", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "clamp(7px, 1vw, 14px)", color: "#666" }}>📷 cake</div>
                  <div style={{ width: "28%", aspectRatio: "1", background: "#f0e68c", border: "2px solid #2e4a1e", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "clamp(7px, 1vw, 14px)", color: "#666" }}>📷 shop</div>
                </div>
                <div style={{ marginTop: "clamp(8px,1.5vw,16px)", padding: "clamp(4px,1vw,10px)", border: "2px dashed #ff0000", display: "inline-block" }}>
                  <div style={{ fontSize: "clamp(7px, 1vw, 14px)", color: "#ff0000", fontWeight: "bold", fontFamily: "Comic Sans MS, cursive" }}>⚠️ Under construction!! ⚠️</div>
                  <div style={{ fontSize: "clamp(6px, 0.8vw, 12px)", color: "#999" }}>Last updated: 2019</div>
                </div>
              </div>
            </div>
            {/* BEFORE label */}
            <div style={{ position: "absolute", bottom: "clamp(8px,2vw,16px)", left: "clamp(8px,2vw,16px)", background: "rgba(0,0,0,0.7)", color: "#fff", fontSize: "clamp(9px,1vw,11px)", fontWeight: 700, padding: "4px 10px", borderRadius: 8, letterSpacing: 1 }}>
              BEFORE
            </div>
          </div>

          {/* Slider handle */}
          <div
            className="absolute top-0 bottom-0 z-20"
            style={{ left: `${sliderPos}%`, transform: "translateX(-50%)" }}
          >
            <div style={{ width: 3, height: "100%", background: "#fff", boxShadow: "0 0 12px rgba(0,0,0,0.5)" }} />
            <div style={{
              position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)",
              width: 44, height: 44, borderRadius: "50%", background: "#fff",
              display: "flex", alignItems: "center", justifyContent: "center",
              boxShadow: "0 2px 12px rgba(0,0,0,0.3)", cursor: "col-resize"
            }}>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M7 4L3 10L7 16" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M13 4L17 10L13 16" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

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
          <div className="mt-12 lg:mt-0 animate-fade-in-up-delay-2">
            <div className="relative">
              {/* Laptop frame */}
              <div className="rounded-xl overflow-hidden shadow-2xl shadow-accent/10 border border-border/50">
                <div className="bg-surface-light px-4 py-2.5 flex items-center gap-2 border-b border-border/50">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/70" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                    <div className="w-3 h-3 rounded-full bg-green-500/70" />
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
              What your site
              <br />
              <span className="gradient-text">could look like</span>
            </h2>
            <p className="mt-4 text-muted text-lg max-w-2xl mx-auto">
              These are demo sites we&apos;ve built to show what&apos;s possible. Each one is a fully designed example — imagine what we could create for your business.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {portfolio.map((project) => (
              <Link
                key={project.title}
                href={project.href}
                className="group relative rounded-2xl overflow-hidden gradient-border"
              >
                {/* Background image + gradient overlay */}
                <div className="relative min-h-[260px] flex flex-col justify-end transition-transform duration-500 group-hover:scale-[1.02]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.color}`} />
                  <div className="relative z-10 p-8 pb-12">
                  {/* Category badge */}
                  <span className="inline-block w-fit px-3 py-1 rounded-full bg-white/15 text-white/80 text-xs font-medium mb-4 backdrop-blur-sm">
                    {project.category}
                  </span>
                  <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                  <p className="text-white/70 mt-2 text-sm">{project.description}</p>

                  </div>
                  {/* Arrow */}
                  <div className="absolute top-6 right-6 z-10 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
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

      {/* ─── Before & After ─── */}
      <BeforeAfterSection />

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
