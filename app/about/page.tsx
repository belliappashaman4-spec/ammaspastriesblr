import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  Heart,
  Sparkles,
  Cake,
  Award,
  MessageCircle,
  ArrowRight,
  MapPin,
} from "lucide-react";
import { BUSINESS_CONFIG } from "@/config/business";
import {
  buildWhatsAppUrl,
  generateGeneralWhatsAppMessage,
} from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "About Us – Made with Love, Baked for Happiness",
  description: `Learn about ${BUSINESS_CONFIG.name} (${BUSINESS_CONFIG.kannadaName}), a bakery and cake shop in ${BUSINESS_CONFIG.fullLocation} dedicated to crafting delicious cakes and pastries for everyday moments and special celebrations.`,
};

export default function AboutPage() {
  const whatsappUrl = buildWhatsAppUrl(generateGeneralWhatsAppMessage());

  return (
    <div className="py-10 sm:py-16 space-y-16">
      {/* Hero Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-br from-cream-100 via-blush-50/50 to-gold-50 border border-cream-300 p-8 sm:p-14 shadow-soft">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-cream-300 text-xs font-bold text-saffron-600">
                <Sparkles className="w-3.5 h-3.5" />
                <span>
                  {BUSINESS_CONFIG.name} • {BUSINESS_CONFIG.kannadaName}
                </span>
              </div>

              <h1 className="font-serif text-3xl sm:text-5xl font-bold text-choco-900 leading-tight">
                “Made with Love, Baked for Happiness.”
              </h1>

              <p className="text-base sm:text-lg text-choco-700 leading-relaxed">
                Welcome to <strong>{BUSINESS_CONFIG.name}</strong> in{" "}
                {BUSINESS_CONFIG.fullLocation}. We are a neighbourhood and
                celebration bakery focused on creating delicious, freshly baked
                treats for everyday moments and life’s sweetest milestones.
              </p>

              <p className="text-sm sm:text-base text-choco-600 leading-relaxed">
                Whether you are gathering family around a classic Black Forest
                cake, surprising a loved one with a rich Chocolate Truffle
                gateau, planning a custom theme birthday cake, or sharing a box
                of warm brownies over evening coffee—our goal is to make every
                bite feel warm, welcoming, and memorable.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-3.5">
                <Link
                  href="/cakes"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-choco-900 hover:bg-choco-800 text-cream-50 font-semibold text-sm transition-colors"
                >
                  <span>Explore Our Cakes</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#25D366] hover:bg-[#1ebe5b] text-white font-semibold text-sm shadow-sm transition-colors"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Authentic Brand Mark & Bakery Photography */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-4 items-center">
              <div className="rounded-3xl overflow-hidden border border-cream-300 shadow-card bg-choco-950 aspect-square flex items-center justify-center">
                <img
                  src="/logo/amma-pastries-box-logo.jpg"
                  alt="Amma Pastries Authentic Brand Emblem"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-4">
                <div className="rounded-3xl overflow-hidden border border-cream-300 shadow-card aspect-[4/3]">
                  <img
                    src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=700&q=80"
                    alt="Chocolate Cake Artistry at Amma Pastries"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-3xl overflow-hidden border border-cream-300 shadow-card aspect-[4/3]">
                  <img
                    src="https://images.unsplash.com/photo-1558301211-0d8c8ddee6ec?auto=format&fit=crop&w=700&q=80"
                    alt="Celebration Birthday Cakes"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Philosophy Pillars */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-saffron-600">
            What Guides Our Ovens
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl font-bold text-choco-900 mt-1">
            Crafted for Everyday Moments &amp; Grand Celebrations
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-3xl bg-white p-7 border border-cream-300 shadow-soft space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-saffron-500/10 text-saffron-600 flex items-center justify-center">
              <Cake className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-xl font-bold text-choco-900">
              Celebration-Ready Variety
            </h3>
            <p className="text-sm text-choco-600 leading-relaxed">
              From timeless Black Forest, White Forest, and Butterscotch cakes
              to modern Photo Cakes, Red Velvet tiers, and Designer theme
              creations tailored to your occasion.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-7 border border-cream-300 shadow-soft space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-blush-100 text-blush-600 flex items-center justify-center">
              <Heart className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-xl font-bold text-choco-900">
              Thoughtful Customisation
            </h3>
            <p className="text-sm text-choco-600 leading-relaxed">
              We offer multiple cake weights, egg and eggless preferences where
              applicable, personalised cake messages, and direct WhatsApp
              communication so ordering is personal and stress-free.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-7 border border-cream-300 shadow-soft space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-gold-100 text-gold-600 flex items-center justify-center">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-xl font-bold text-choco-900">
              Rooted in {BUSINESS_CONFIG.city}
            </h3>
            <p className="text-sm text-choco-600 leading-relaxed">
              Proudly serving cake lovers across {BUSINESS_CONFIG.fullLocation}{" "}
              with warm hospitality and a passion for honest, delicious baking.
            </p>
          </div>
        </div>
      </section>

      {/* Visit / Order CTA */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-choco-900 text-cream-50 p-8 sm:p-12 text-center space-y-5 shadow-card">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-gold-300">
            <MapPin className="w-4 h-4 text-saffron-400" />
            <span>{BUSINESS_CONFIG.fullLocation}</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-4xl font-bold">
            Ready to Order Something Sweet?
          </h2>
          <p className="text-sm sm:text-base text-cream-200 max-w-xl mx-auto">
            Browse our cake and pastry catalogue or message us directly on
            WhatsApp to discuss your upcoming celebration.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              href="/cakes"
              className="px-7 py-3.5 rounded-full bg-saffron-500 hover:bg-saffron-600 text-white font-semibold text-sm transition-colors"
            >
              Browse Catalogue
            </Link>
            <Link
              href="/contact"
              className="px-7 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-cream-50 border border-cream-200/30 font-semibold text-sm transition-colors"
            >
              Contact &amp; Location Details
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
