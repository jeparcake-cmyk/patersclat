import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Reviews | slap.",
  description: "See what our clients say about working with slap.. Real testimonials from small businesses we've helped.",
};

const reviews = [
  {
    name: "Sarah Mitchell",
    business: "Mitchell's Bakery",
    text: "Jake and Tom completely transformed our online presence. We went from having no website to a beautiful one that actually brings in new customers every week. Worth every penny. The whole process was smooth and they were always available when I had questions.",
    stars: 5,
  },
  {
    name: "David Chen",
    business: "Chen Plumbing & Heating",
    text: "As someone who knows nothing about websites, Tom made the whole process painless. He explained everything clearly and Jake delivered a site that looks way more expensive than it was. Our enquiries have gone up massively since launch.",
    stars: 5,
  },
  {
    name: "Emma Thompson",
    business: "Bloom Floral Design",
    text: "Our bookings have doubled since the new site went live. The design is gorgeous and our customers always comment on how easy it is to use. Highly recommend slap. to any small business looking to get online.",
    stars: 5,
  },
  {
    name: "Marcus Wright",
    business: "Wright Fitness Studio",
    text: "They built us an online booking system and a clean, modern website in under two weeks. The ongoing support has been brilliant too - always quick to help when we need changes. Can't fault them.",
    stars: 5,
  },
  {
    name: "Lisa Greenwood",
    business: "Greenwood Interiors",
    text: "I'd been putting off getting a website for years because I thought it would be too complicated and expensive. Tom and Jake proved me completely wrong. They made it easy, affordable, and the end result is stunning.",
    stars: 5,
  },
  {
    name: "James Hartley",
    business: "Hartley & Sons Roofing",
    text: "We needed a website that showed off our work and made it easy for customers to request quotes. slap. nailed it. Professional, fast, and great value. We've already recommended them to other tradespeople.",
    stars: 5,
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function ReviewsPage() {
  return (
    <>
      {/* Header */}
      <section className="py-24 relative overflow-hidden">
        <div className="hero-glow bg-pink-600 top-0 -right-48 animate-float" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <span className="text-accent-light text-sm font-mono uppercase tracking-widest">
            Testimonials
          </span>
          <h1 className="mt-4 text-5xl sm:text-6xl font-bold tracking-tight">
            What our clients
            <br />
            <span className="gradient-text">say about us</span>
          </h1>
          <p className="mt-6 text-muted text-lg max-w-2xl mx-auto">
            Don&apos;t just take our word for it. Here&apos;s what the businesses
            we&apos;ve worked with have to say.
          </p>
        </div>
      </section>

      {/* Reviews grid */}
      <section className="pb-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-6">
            {reviews.map((review) => (
              <div key={review.name} className="rounded-2xl bg-surface p-8 gradient-border">
                <StarRating count={review.stars} />
                <p className="mt-4 text-muted leading-relaxed italic">
                  &ldquo;{review.text}&rdquo;
                </p>
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
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-surface/50 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-3xl sm:text-4xl font-bold">
            Ready to join them? <span className="gradient-text">Let&apos;s go.</span>
          </h2>
          <p className="mt-4 text-muted text-lg">
            Your business could be our next success story.
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="px-8 py-4 bg-accent hover:bg-accent-dark text-white rounded-full font-medium transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(99,102,241,0.3)]"
            >
              Start Your Project
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
