import React from "react";
import Link from "next/link";
import {
  MessageCircle,
  Sparkles,
  ArrowRight,
  Cake,
  Heart,
  Clock,
} from "lucide-react";
import { BUSINESS_CONFIG } from "@/config/business";
import {
  buildWhatsAppUrl,
  generateGeneralWhatsAppMessage,
} from "@/lib/whatsapp";

export default function Hero() {
  const whatsappUrl = buildWhatsAppUrl(generateGeneralWhatsAppMessage());

  return (
    <section className="relative overflow-hidden bg-cream-100">
      {/* Subtle decorative warm glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 right-0 w-96 h-96 rounded-full bg-blush-200/40 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-10 w-80 h-80 rounded-full bg-gold-200/40 blur-3xl"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 lg:py-14">
        {/* Promotional Highlight Ribbon */}
        <div className="mb-8 rounded-2xl bg-gradient-to-r from-choco-900 via-choco-800 to-choco-900 text-cream-50 px-4 sm:px-6 py-3 shadow-soft border border-gold-400/30 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider bg-saffron-500 text-white">
              Signature Patisserie
            </span>
            <p className="font-serif text-sm sm:text-base font-medium text-gold-200">
              “Make Every Moment Sweeter.”
            </p>
          </div>
          <Link
            href="/cakes"
            className="text-xs sm:text-sm font-semibold text-cream-100 hover:text-gold-300 inline-flex items-center gap-1.5 transition-colors"
          >
            <span>Explore Celebration Cakes</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Main Hero Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Brand Storytelling & CTAs */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blush-100 border border-blush-200 text-choco-800 text-xs font-semibold tracking-wide">
              <Sparkles className="w-3.5 h-3.5 text-blush-600" />
              <span>
                {BUSINESS_CONFIG.name} • {BUSINESS_CONFIG.city}, Karnataka
              </span>
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl lg:text-[54px] font-bold text-choco-900 leading-[1.14] tracking-tight">
              Every Celebration Deserves{" "}
              <span className="text-saffron-600 underline decoration-blush-300 decoration-wavy decoration-2 underline-offset-8">
                Something Sweet.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-choco-700 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Freshly baked happiness, crafted with love at Amma Pastries BLR.
              Discover decadent chocolate truffle cakes, custom birthday
              tiers, classic Black Forest gateaux, and artisanal pastries made
              for your sweetest moments.
            </p>

            {/* Primary CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
              <Link
                href="/cakes"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full bg-choco-900 hover:bg-choco-800 text-cream-50 font-semibold text-sm sm:text-base shadow-card hover:shadow-elevated transition-all"
              >
                <Cake className="w-5 h-5 text-gold-300" />
                <span>Explore Our Cakes</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full bg-[#25D366] hover:bg-[#1ebe5b] text-white font-semibold text-sm sm:text-base shadow-card hover:shadow-elevated transition-all"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>Order on WhatsApp</span>
              </a>
            </div>

            {/* Trust Micro-Highlights */}
            <div className="pt-4 grid grid-cols-3 gap-3 border-t border-cream-300/80 text-left">
              <div className="flex items-start gap-2">
                <div className="w-8 h-8 rounded-lg bg-gold-100 text-gold-600 flex items-center justify-center shrink-0 mt-0.5">
                  <Cake className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-bold text-choco-900">
                    Freshly Baked
                  </p>
                  <p className="text-[11px] text-choco-600">
                    Egg &amp; Eggless options
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-8 h-8 rounded-lg bg-blush-100 text-blush-600 flex items-center justify-center shrink-0 mt-0.5">
                  <Heart className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-bold text-choco-900">
                    Custom Messages
                  </p>
                  <p className="text-[11px] text-choco-600">
                    Personalised for you
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-8 h-8 rounded-lg bg-cream-200 text-choco-800 flex items-center justify-center shrink-0 mt-0.5">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-bold text-choco-900">
                    Direct WhatsApp
                  </p>
                  <p className="text-[11px] text-choco-600">
                    Quick order assistance
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Featured Bakery Showcase Bento */}
          <div className="lg:col-span-6">
            <div className="grid grid-cols-12 gap-4 items-stretch">
              {/* Primary Hero Cake Card */}
              <div className="col-span-12 sm:col-span-7 relative rounded-3xl overflow-hidden shadow-elevated border border-cream-300 bg-choco-900 group min-h-[320px] sm:min-h-[420px]">
                <img
                  src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1000&q=85"
                  alt="Signature Chocolate Truffle Celebration Cake at Amma Pastries"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-choco-950/85 via-choco-950/20 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-gold-400 text-choco-950 text-xs font-bold shadow-sm">
                    ★ Signature Bestseller
                  </span>
                </div>
                <div className="absolute bottom-5 left-5 right-5 text-cream-50">
                  <p className="text-xs uppercase tracking-widest text-gold-300 font-semibold">
                    Rich &amp; Indulgent
                  </p>
                  <h2 className="font-serif text-xl font-bold mt-0.5">
                    Choco Truffle Cake
                  </h2>
                  <div className="mt-2 flex items-center justify-between">
                    <span className="text-sm font-semibold text-cream-100">
                      ₹400 / ½ kg
                    </span>
                    <Link
                      href="/products/choco-truffle-cake"
                      className="text-xs font-semibold px-3 py-1.5 rounded-full bg-cream-50 text-choco-900 hover:bg-gold-300 transition-colors"
                    >
                      View Cake →
                    </Link>
                  </div>
                </div>
              </div>

              {/* Secondary Stacked Cards */}
              <div className="col-span-12 sm:col-span-5 flex flex-col gap-4">
                <Link
                  href="/cakes?category=Cheesecakes+%26+Specialty+Cakes"
                  className="relative flex-1 rounded-3xl overflow-hidden shadow-card border border-cream-300 group min-h-[195px]"
                >
                  <img
                    src="https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=700&q=85"
                    alt="Cheesecakes and Rasmalai Cakes"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-choco-950/80 via-choco-950/15 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-cream-50">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-blush-200">
                      ₹400 – ₹450 / ½ kg
                    </span>
                    <p className="font-serif text-lg font-bold">
                      Cheesecakes &amp; Rasmalai Cakes
                    </p>
                  </div>
                </Link>

                <Link
                  href="/cakes?category=Pastries%2C+Doughnuts+%26+Brownies"
                  className="relative flex-1 rounded-3xl overflow-hidden shadow-card border border-cream-300 group min-h-[195px]"
                >
                  <img
                    src="https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=700&q=85"
                    alt="Lava Cake, Brownies, Doughnuts & Cream Buns"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-choco-950/80 via-choco-950/15 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-cream-50">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-gold-300">
                      Starting at ₹20
                    </span>
                    <p className="font-serif text-lg font-bold">
                      Lava Cake, Brownies &amp; Buns
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
