"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Flame,
  Sparkles,
  Award,
  Heart,
  Star,
  Instagram,
  ArrowRight,
  MessageCircle,
  Gift,
  Send,
  CheckCircle2,
} from "lucide-react";
import Hero from "@/components/Hero";
import CategoryGrid from "@/components/CategoryGrid";
import ProductGrid from "@/components/ProductGrid";
import {
  getBestsellerProducts,
  getCustomerFavouriteProducts,
} from "@/data/products";
import { BUSINESS_CONFIG } from "@/config/business";
import {
  buildWhatsAppUrl,
  generateGeneralWhatsAppMessage,
} from "@/lib/whatsapp";

const WHY_CHOOSE_CARDS = [
  {
    title: "Freshly Baked",
    description:
      "Prepared with care for your celebration date so every sponge feels soft, moist, and indulgent.",
    icon: Flame,
    accent: "bg-saffron-500/10 text-saffron-600",
  },
  {
    title: "Quality Ingredients",
    description:
      "Rich cocoa, smooth creams, and thoughtfully selected bakery ingredients in every batch.",
    icon: Award,
    accent: "bg-gold-500/15 text-gold-600",
  },
  {
    title: "Beautifully Crafted",
    description:
      "From delicate pastel rosettes to glossy chocolate truffle drips designed to impress your guests.",
    icon: Sparkles,
    accent: "bg-blush-100 text-blush-600",
  },
  {
    title: "Made with Love",
    description:
      "True to the warmth of our name—Amma Pastries BLR bakes every treat with heartfelt hospitality.",
    icon: Heart,
    accent: "bg-choco-900/10 text-choco-800",
  },
];

const SAMPLE_TESTIMONIALS = [
  {
    id: "sample-1",
    customerName: "Ananya R.",
    neighbourhood: "Bengaluru (Sample Review)",
    occasion: "Birthday Celebration",
    quote:
      "Ordered the Royal Chocolate Truffle Cake via WhatsApp for my mother's birthday. The sponge was super moist and the chocolate ganache was rich without being overly sweet!",
    productOrdered: "Royal Chocolate Truffle Cake (1 kg)",
  },
  {
    id: "sample-2",
    customerName: "Karthik M.",
    neighbourhood: "Bengaluru (Sample Review)",
    occasion: "Anniversary Cake",
    quote:
      "The Crimson Red Velvet cake looked exactly like a boutique patisserie creation. Quick response on WhatsApp and the custom message piping was neat and elegant.",
    productOrdered: "Crimson Red Velvet Celebration Cake",
  },
  {
    id: "sample-3",
    customerName: "Priya & Vivek",
    neighbourhood: "Bengaluru (Sample Review)",
    occasion: "Office Get-Together",
    quote:
      "We ordered a box of Fudgy Walnut Brownies and Truffle Pastries. Everyone in our team loved the packaging and freshness!",
    productOrdered: "Walnut Brownies & Truffle Pastries",
  },
];

const INSTAGRAM_GALLERY = [
  {
    url: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=600&q=80",
    caption: "Glossy dark chocolate truffle swirls ✨",
  },
  {
    url: "https://images.unsplash.com/photo-1558301211-0d8c8ddee6ec?auto=format&fit=crop&w=600&q=80",
    caption: "Pastel birthday drip cake crafted for a sweet milestone 🎂",
  },
  {
    url: "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?auto=format&fit=crop&w=600&q=80",
    caption: "Classic Black Forest gateau topped with cherries 🍒",
  },
  {
    url: "https://images.unsplash.com/photo-1616541823729-00fe0aacd32c?auto=format&fit=crop&w=600&q=80",
    caption: "Velvety crimson Red Velvet layers ❤️",
  },
  {
    url: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=600&q=80",
    caption: "Warm crinkle-top walnut chocolate brownies 🍫",
  },
  {
    url: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&w=600&q=80",
    caption: "Layered dessert jars & patisserie slices 🥄",
  },
];

export default function HomePage() {
  const bestsellers = getBestsellerProducts(8);
  const customerFavourites = getCustomerFavouriteProducts(4);
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail.trim()) return;
    setNewsletterSubmitted(true);
    setNewsletterEmail("");
  };

  return (
    <div className="space-y-4">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Category Section (9 Image-Based Cards) */}
      <CategoryGrid />

      {/* 3. Bestsellers Section */}
      <section className="py-14 sm:py-16 bg-cream-100/70 border-y border-cream-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold-200/70 text-choco-900 text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-saffron-600" />
                Most Loved Creations
              </span>
              <h2 className="font-serif text-2xl sm:text-4xl font-bold text-choco-900 mt-2">
                Our Bestseller Cakes &amp; Treats
              </h2>
              <p className="text-sm sm:text-base text-choco-600 mt-1">
                Select your preferred weight and order seamlessly via WhatsApp
                or add to your bag.
              </p>
            </div>
            <Link
              href="/cakes"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-choco-900 hover:bg-choco-800 text-cream-50 text-xs sm:text-sm font-semibold transition-colors self-start sm:self-auto"
            >
              <span>Explore All 22+ Creations</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <ProductGrid products={bestsellers} />
        </div>
      </section>

      {/* 4. Special Offers & Custom Cake Callout Section */}
      <section className="py-12 sm:py-16 bg-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Offer Card 1: Custom & Designer Cakes */}
            <div className="rounded-3xl bg-gradient-to-br from-blush-50 via-cream-100 to-blush-100 border border-blush-200 p-6 sm:p-8 flex flex-col justify-between gap-6 shadow-soft">
              <div className="space-y-3">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blush-500 text-white text-xs font-bold">
                  <Gift className="w-3.5 h-3.5" />
                  Bespoke Celebrations
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-choco-900">
                  Custom Theme &amp; Photo Cakes
                </h3>
                <p className="text-sm text-choco-700 leading-relaxed max-w-md">
                  Planning a milestone 1st birthday, engagement, or corporate
                  event in Bengaluru? Share your reference design or photo on
                  WhatsApp for a custom quote.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <Link
                  href="/cakes?category=Designer+Cakes#custom-order"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-choco-900 hover:bg-choco-800 text-cream-50 text-xs sm:text-sm font-semibold transition-colors"
                >
                  <span>Custom Cake Enquiry</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/cakes?category=Photo+Cakes"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white hover:bg-cream-100 text-choco-900 border border-cream-300 text-xs sm:text-sm font-semibold transition-colors"
                >
                  <span>Browse Photo Cakes</span>
                </Link>
              </div>
            </div>

            {/* Offer Card 2: Party Box & Dessert Combos */}
            <div className="rounded-3xl bg-gradient-to-br from-gold-50 via-cream-100 to-gold-100 border border-gold-200 p-6 sm:p-8 flex flex-col justify-between gap-6 shadow-soft">
              <div className="space-y-3">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-saffron-500 text-white text-xs font-bold">
                  <Sparkles className="w-3.5 h-3.5" />
                  Celebration Boxes
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-choco-900">
                  Brownie Gift Boxes &amp; Pastry Packs
                </h3>
                <p className="text-sm text-choco-700 leading-relaxed max-w-md">
                  Pair your celebration cake with boxes of fudgy walnut
                  brownies, dessert jars, or assorted pastry slices for house
                  parties and festive gifting.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <Link
                  href="/cakes?category=Brownies"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-choco-900 hover:bg-choco-800 text-cream-50 text-xs sm:text-sm font-semibold transition-colors"
                >
                  <span>Explore Brownies</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/cakes?category=Desserts"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white hover:bg-cream-100 text-choco-900 border border-cream-300 text-xs sm:text-sm font-semibold transition-colors"
                >
                  <span>Explore Dessert Jars</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Full-Width Promotional Banner: "Life is Better with Cake." */}
      <section className="py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto relative rounded-3xl overflow-hidden bg-choco-900 text-cream-50 shadow-elevated">
          <img
            src="https://images.unsplash.com/photo-1571115177098-24ec42ed204d?auto=format&fit=crop&w=1400&q=85"
            alt="Life is Better with Cake at Amma Pastries"
            className="absolute inset-0 w-full h-full object-cover opacity-35"
          />
          <div className="relative z-10 px-6 py-14 sm:px-14 sm:py-20 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
            <div className="max-w-xl space-y-3">
              <span className="inline-block px-3.5 py-1 rounded-full bg-gold-400 text-choco-950 text-xs font-bold uppercase tracking-widest">
                {BUSINESS_CONFIG.name} • {BUSINESS_CONFIG.kannadaName}
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl font-bold text-cream-50 leading-tight">
                “Life is Better with Cake.”
              </h2>
              <p className="text-sm sm:text-base text-cream-200 leading-relaxed">
                Whether it is a midnight birthday surprise, a golden
                anniversary, or an evening craving for chocolate truffle pastry—we
                are ready to make it memorable.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-3.5 shrink-0">
              <Link
                href="/cakes"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-saffron-500 hover:bg-saffron-600 text-white font-bold text-sm sm:text-base shadow-lg transition-all"
              >
                <span>Shop Now</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={buildWhatsAppUrl(generateGeneralWhatsAppMessage())}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-xs text-cream-50 border border-cream-100/30 font-semibold text-sm sm:text-base transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Order on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Why Choose Amma Pastries? (4 Benefit Cards) */}
      <section className="py-14 sm:py-16 bg-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-saffron-600">
              Our Bakery Promise
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl font-bold text-choco-900 mt-1">
              Why Choose Amma Pastries BLR?
            </h2>
            <p className="text-sm sm:text-base text-choco-600 mt-2">
              Thoughtfully baked treats that bring families and friends together
              across Bengaluru.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {WHY_CHOOSE_CARDS.map((card) => {
              const IconComponent = card.icon;
              return (
                <div
                  key={card.title}
                  className="rounded-3xl bg-white p-6 sm:p-7 border border-cream-300 shadow-soft hover:shadow-card transition-all flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center ${card.accent}`}
                    >
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <h3 className="font-serif text-xl font-bold text-choco-900">
                      {card.title}
                    </h3>
                    <p className="text-sm text-choco-600 leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7. Customer Favourites Section */}
      <section className="py-14 sm:py-16 bg-cream-100/60 border-t border-cream-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-blush-600">
                Curated Picks
              </span>
              <h2 className="font-serif text-2xl sm:text-4xl font-bold text-choco-900 mt-1">
                Customer Favourites
              </h2>
              <p className="text-sm sm:text-base text-choco-600 mt-1">
                Popular celebration cakes, cheesecakes, and bakery treats for
                every sweet tooth.
              </p>
            </div>
            <Link
              href="/cakes?sort=popular"
              className="text-sm font-semibold text-saffron-600 hover:text-choco-900 inline-flex items-center gap-1.5"
            >
              <span>See All Popular Items</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <ProductGrid products={customerFavourites} />
        </div>
      </section>

      {/* 8. Testimonials Section (Clearly labelled as Sample Testimonials) */}
      <section className="py-14 sm:py-16 bg-cream-50 border-t border-cream-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cream-200 text-choco-800 text-xs font-semibold">
                Sample Testimonials Preview
              </span>
              <h2 className="font-serif text-2xl sm:text-4xl font-bold text-choco-900 mt-2">
                Sweet Words for Sweet Moments
              </h2>
              <p className="text-xs sm:text-sm text-choco-600 mt-1">
                Note: The cards below are sample testimonials for layout preview
                until verified customer reviews are added.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SAMPLE_TESTIMONIALS.map((item) => (
              <div
                key={item.id}
                className="rounded-3xl bg-white p-6 sm:p-7 border border-cream-300 shadow-soft flex flex-col justify-between gap-5"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-gold-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded bg-cream-100 text-choco-600 font-semibold">
                      Sample Testimonial
                    </span>
                  </div>
                  <p className="text-sm text-choco-800 leading-relaxed italic">
                    “{item.quote}”
                  </p>
                </div>

                <div className="pt-4 border-t border-cream-200">
                  <p className="font-serif text-sm font-bold text-choco-900">
                    {item.customerName}
                  </p>
                  <p className="text-xs text-choco-500">
                    {item.occasion} • {item.neighbourhood}
                  </p>
                  <p className="text-[11px] font-semibold text-saffron-600 mt-1">
                    {item.productOrdered}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Instagram-Inspired Gallery Section */}
      <section className="py-14 sm:py-16 bg-cream-100/50 border-t border-cream-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-saffron-600">
                Fresh From Our Bakery Table
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-choco-900 mt-1">
                Follow Our Sweet Journey on Instagram
              </h2>
              <p className="text-sm text-choco-600 mt-1">
                Tag us in your celebration moments{" "}
                <span className="font-semibold text-choco-900">
                  {BUSINESS_CONFIG.social.instagramHandle}
                </span>
              </p>
            </div>
            <a
              href={BUSINESS_CONFIG.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white hover:bg-choco-900 text-choco-900 hover:text-cream-50 border border-cream-300 text-xs sm:text-sm font-semibold transition-colors self-start sm:self-auto"
            >
              <Instagram className="w-4 h-4" />
              <span>Visit Instagram</span>
            </a>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
            {INSTAGRAM_GALLERY.map((photo, index) => (
              <a
                key={index}
                href={BUSINESS_CONFIG.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative aspect-square rounded-2xl overflow-hidden bg-choco-900 border border-cream-300"
              >
                <img
                  src={photo.url}
                  alt={photo.caption}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-choco-950/60 opacity-0 group-hover:opacity-100 transition-opacity p-3 flex flex-col items-center justify-center text-center text-cream-50">
                  <Instagram className="w-5 h-5 mb-1.5 text-gold-300" />
                  <p className="text-[11px] line-clamp-3">{photo.caption}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 10. Newsletter & Celebration Reminder UI */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-cream-50">
        <div className="max-w-4xl mx-auto rounded-3xl bg-cream-200/70 border border-cream-300 p-6 sm:p-10 text-center space-y-4">
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-choco-900">
            Never Miss a Sweet Seasonal Special
          </h3>
          <p className="text-sm text-choco-700 max-w-lg mx-auto">
            Sign up to hear about festive cake boxes, seasonal fruit gateaux,
            and special celebration offers from Amma Pastries BLR.
          </p>

          {newsletterSubmitted ? (
            <div className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white text-choco-900 border border-cream-300 text-sm font-semibold">
              <CheckCircle2 className="w-4 h-4 text-[#25D366]" />
              <span>
                Thank you for subscribing! You can also message us anytime on
                WhatsApp.
              </span>
            </div>
          ) : (
            <form
              onSubmit={handleNewsletterSubmit}
              className="max-w-md mx-auto flex flex-col sm:flex-row gap-2.5 pt-2"
            >
              <input
                type="email"
                required
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-full bg-white border border-cream-300 text-sm text-choco-900 focus:outline-none focus:border-choco-800"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-choco-900 hover:bg-choco-800 text-cream-50 font-semibold text-sm transition-colors"
              >
                <Send className="w-4 h-4" />
                <span>Subscribe</span>
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
