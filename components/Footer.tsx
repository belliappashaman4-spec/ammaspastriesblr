import React from "react";
import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Instagram,
  Facebook,
  MessageCircle,
  Heart,
} from "lucide-react";
import { BUSINESS_CONFIG } from "@/config/business";
import {
  buildWhatsAppUrl,
  generateGeneralWhatsAppMessage,
} from "@/lib/whatsapp";

export default function Footer() {
  const whatsappUrl = buildWhatsAppUrl(generateGeneralWhatsAppMessage());

  return (
    <footer className="bg-choco-950 text-cream-100 border-t border-choco-800">
      {/* Top Celebration Callout */}
      <div className="border-b border-choco-800/80 bg-choco-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="text-gold-300 text-xs font-semibold uppercase tracking-widest mb-1">
              Planning a Birthday, Wedding or Office Celebration?
            </p>
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-cream-50">
              Order Fresh Cakes Directly on WhatsApp
            </h3>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#25D366] hover:bg-[#1ebe5b] text-white font-semibold text-sm shadow-md transition-all"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Chat on WhatsApp</span>
            </a>
            <Link
              href="/cakes"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-cream-100/10 hover:bg-cream-100/20 text-cream-50 font-semibold text-sm border border-cream-200/20 transition-all"
            >
              <span>Browse Full Menu</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Column 1: Brand Identity */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <img
                src="/logo/logo.svg"
                alt="Amma Pastries BLR Logo"
                className="w-14 h-14 rounded-xl border border-gold-400/30"
              />
              <div>
                <p className="text-xs font-semibold text-saffron-400">
                  {BUSINESS_CONFIG.kannadaName}
                </p>
                <p className="font-serif text-xl font-bold text-cream-50 tracking-wide">
                  AMMA PASTRIES BLR
                </p>
                <p className="text-xs text-cream-300/80">
                  {BUSINESS_CONFIG.type} • {BUSINESS_CONFIG.city}
                </p>
              </div>
            </Link>
            <p className="text-sm text-cream-200/80 leading-relaxed">
              Freshly baked happiness, crafted with love at Amma Pastries BLR. From
              signature chocolate truffle cakes and classic Black Forest gateaux
              to custom celebration cakes and indulgent pastries in{" "}
              {BUSINESS_CONFIG.fullLocation}.
            </p>
            <div className="flex items-center gap-3 pt-1">
              <a
                href={BUSINESS_CONFIG.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Amma Pastries on Instagram"
                className="w-10 h-10 rounded-full bg-choco-800 hover:bg-saffron-500 text-cream-100 flex items-center justify-center transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={BUSINESS_CONFIG.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Amma Pastries on Facebook"
                className="w-10 h-10 rounded-full bg-choco-800 hover:bg-saffron-500 text-cream-100 flex items-center justify-center transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Amma Pastries on WhatsApp"
                className="w-10 h-10 rounded-full bg-choco-800 hover:bg-[#25D366] text-cream-100 flex items-center justify-center transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Navigation */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-serif text-base font-semibold text-gold-300 tracking-wide">
              Explore
            </h4>
            <ul className="space-y-2.5 text-sm text-cream-200/85">
              <li>
                <Link href="/" className="hover:text-saffron-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/cakes" className="hover:text-saffron-400 transition-colors">
                  All Cakes &amp; Menu
                </Link>
              </li>
              <li>
                <Link
                  href="/cakes?category=Designer+Cakes#custom-order"
                  className="hover:text-saffron-400 transition-colors"
                >
                  Custom Cakes
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-saffron-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-saffron-400 transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/cart" className="hover:text-saffron-400 transition-colors">
                  Shopping Bag
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Popular Categories */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif text-base font-semibold text-gold-300 tracking-wide">
              Cake &amp; Bakery Categories
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2 text-sm text-cream-200/85">
              <li>
                <Link
                  href="/cakes?category=Chocolate+Cakes"
                  className="hover:text-saffron-400 transition-colors"
                >
                  Chocolate &amp; Black Forest Cakes
                </Link>
              </li>
              <li>
                <Link
                  href="/cakes?category=Cheesecakes+%26+Specialty+Cakes"
                  className="hover:text-saffron-400 transition-colors"
                >
                  Cheesecakes &amp; Rasmalai Cakes
                </Link>
              </li>
              <li>
                <Link
                  href="/cakes?category=Vanilla+%26+Fruit+Cakes"
                  className="hover:text-saffron-400 transition-colors"
                >
                  Vanilla, Butterscotch &amp; Fruit Cakes
                </Link>
              </li>
              <li>
                <Link
                  href="/cakes?category=Pastries%2C+Doughnuts+%26+Brownies"
                  className="hover:text-saffron-400 transition-colors"
                >
                  Lava Cake, Brownies &amp; Doughnuts
                </Link>
              </li>
              <li>
                <Link
                  href="/cakes?category=Cream+Buns+%26+Dilpasand"
                  className="hover:text-saffron-400 transition-colors"
                >
                  Dilpasand &amp; Cream Buns
                </Link>
              </li>
              <li>
                <Link
                  href="/cakes?category=Bakery+Biscuits+%26+Cookies"
                  className="hover:text-saffron-400 transition-colors"
                >
                  Bakery Biscuits, Rusks &amp; Mixtures
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Location Details */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif text-base font-semibold text-gold-300 tracking-wide">
              Contact &amp; Location
            </h4>
            <ul className="space-y-3 text-sm text-cream-200/85">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-saffron-400 shrink-0 mt-1" />
                <div>
                  <p className="font-medium text-cream-50">
                    {BUSINESS_CONFIG.city}, {BUSINESS_CONFIG.state}
                  </p>
                  <p className="text-xs text-cream-300/75">
                    {BUSINESS_CONFIG.addressLine1},{" "}
                    {BUSINESS_CONFIG.addressLine2}
                  </p>
                </div>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-saffron-400 shrink-0" />
                <span className="text-xs sm:text-sm">
                  {BUSINESS_CONFIG.phoneDisplay}
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-saffron-400 shrink-0" />
                <span className="text-xs break-all">{BUSINESS_CONFIG.email}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-saffron-400 shrink-0" />
                <span className="text-xs">{BUSINESS_CONFIG.openingHours}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Legal & Copyright Bar */}
      <div className="border-t border-choco-800/80 bg-choco-950 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-cream-300/75">
          <p className="flex items-center gap-1.5">
            <span>
              © {new Date().getFullYear()} {BUSINESS_CONFIG.name} (
              {BUSINESS_CONFIG.kannadaName}). Crafted with
            </span>
            <Heart className="w-3.5 h-3.5 text-blush-400 fill-current" />
            <span>in {BUSINESS_CONFIG.city}, Karnataka.</span>
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="hover:text-cream-50 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="hover:text-cream-50 transition-colors"
            >
              Terms &amp; Conditions
            </Link>
            <Link
              href="/contact"
              className="hover:text-cream-50 transition-colors"
            >
              Store Info
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
