"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Search,
  Heart,
  ShoppingBag,
  Menu,
  X,
  MessageCircle,
  Sparkles,
  MapPin,
  ChevronRight,
} from "lucide-react";
import { BUSINESS_CONFIG } from "@/config/business";
import {
  buildWhatsAppUrl,
  generateGeneralWhatsAppMessage,
} from "@/lib/whatsapp";
import { useShop } from "@/lib/cart";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Cakes", href: "/cakes" },
  { label: "Pastries", href: "/cakes?category=Pastries" },
  { label: "Desserts", href: "/cakes?category=Desserts" },
  { label: "Birthday Cakes", href: "/cakes?category=Birthday+Cakes" },
  { label: "Custom Cakes", href: "/cakes?category=Designer+Cakes#custom-order" },
  { label: "About Us", href: "/about" },
];

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const {
    cartCount,
    wishlistIds,
    setIsCartOpen,
    setIsSearchOpen,
    setIsWishlistOpen,
  } = useShop();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 12);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const whatsappHref = buildWhatsAppUrl(generateGeneralWhatsAppMessage());

  return (
    <>
      {/* Elegant Top Promotional Banner */}
      <div className="bg-choco-900 text-cream-100 text-xs sm:text-sm py-2 px-4 border-b border-choco-800">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2 font-medium">
            <Sparkles className="w-3.5 h-3.5 text-gold-300 shrink-0" />
            <span>Make Every Moment Sweeter</span>
            <span className="hidden md:inline text-choco-500">•</span>
            <span className="hidden md:inline text-cream-200/90">
              Freshly Crafted Celebration Cakes &amp; Pastries
            </span>
          </div>
          <div className="flex items-center gap-4 text-xs text-cream-200">
            <span className="flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-saffron-400" />
              {BUSINESS_CONFIG.city}, {BUSINESS_CONFIG.state}
            </span>
            <Link
              href="/contact"
              className="hidden sm:inline hover:text-gold-300 underline underline-offset-4 transition-colors"
            >
              Contact &amp; Custom Orders
            </Link>
          </div>
        </div>
      </div>

      {/* Main Sticky Navigation Bar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-cream-50/95 backdrop-blur-md shadow-soft border-b border-cream-300/80 py-2.5"
            : "bg-cream-50 border-b border-cream-200 py-3.5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-3">
            {/* Left: Mobile Hamburger + Logo & Brand Name */}
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="xl:hidden p-2 rounded-xl text-choco-900 hover:bg-cream-200/70 transition-colors"
                aria-label="Open navigation menu"
              >
                <Menu className="w-6 h-6" />
              </button>

              <Link
                href="/"
                className="flex items-center gap-3 group focus:outline-none"
              >
                <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-xl overflow-hidden bg-choco-950 border border-gold-300/40 shadow-sm flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <img
                    src="/logo/logo.svg"
                    alt="Amma Pastries BLR Logo"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-[11px] font-semibold text-saffron-600 tracking-wide leading-tight">
                    {BUSINESS_CONFIG.kannadaName}
                  </span>
                  <span className="font-serif text-lg sm:text-xl font-bold tracking-tight text-choco-900 group-hover:text-saffron-600 transition-colors leading-none">
                    AMMA PASTRIES BLR
                  </span>
                  <span className="text-[10px] uppercase tracking-widest text-choco-600 mt-0.5 hidden sm:block">
                    Bengaluru • Bakery &amp; Cake Shop
                  </span>
                </div>
              </Link>
            </div>

            {/* Middle: Desktop Navigation Links */}
            <nav
              aria-label="Main Navigation"
              className="hidden xl:flex items-center gap-1 lg:gap-1.5"
            >
              {NAV_LINKS.map((item) => {
                const isActive =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href.split("?")[0]) &&
                      item.href === "/cakes" &&
                      pathname === "/cakes";

                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={`px-3 py-2 rounded-full text-sm font-medium transition-all ${
                      isActive
                        ? "bg-choco-900 text-cream-50 shadow-sm"
                        : "text-choco-800 hover:text-saffron-600 hover:bg-cream-200/60"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            {/* Right: Search, Wishlist, Cart & WhatsApp Order Button */}
            <div className="flex items-center gap-1.5 sm:gap-2.5">
              {/* Search Button */}
              <button
                type="button"
                onClick={() => setIsSearchOpen(true)}
                className="flex items-center gap-2 px-2.5 sm:px-3.5 py-2 rounded-full bg-cream-100 hover:bg-cream-200 text-choco-800 border border-cream-300/80 transition-colors text-sm"
                aria-label="Search cakes and pastries"
              >
                <Search className="w-4 h-4 text-choco-700" />
                <span className="hidden md:inline text-xs text-choco-600 pr-2">
                  Search cakes...
                </span>
              </button>

              {/* Wishlist Button */}
              <button
                type="button"
                onClick={() => setIsWishlistOpen(true)}
                className="relative p-2.5 rounded-full bg-cream-100 hover:bg-blush-100 text-choco-800 hover:text-blush-600 border border-cream-300/80 transition-colors"
                aria-label="Open Wishlist"
              >
                <Heart className="w-4 h-4 sm:w-5 sm:h-5" />
                {wishlistIds.length > 0 && (
                  <span className="absolute -top-1 -right-1 min-w-[18px] h-[18px] px-1 rounded-full bg-blush-500 text-white text-[10px] font-bold flex items-center justify-center">
                    {wishlistIds.length}
                  </span>
                )}
              </button>

              {/* Shopping Bag / Cart Button */}
              <button
                type="button"
                onClick={() => setIsCartOpen(true)}
                className="relative p-2.5 rounded-full bg-cream-100 hover:bg-gold-100 text-choco-900 border border-cream-300/80 transition-colors"
                aria-label="Open Shopping Bag"
              >
                <ShoppingBag className="w-4 h-4 sm:w-5 sm:h-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 min-w-[18px] h-[18px] px-1 rounded-full bg-saffron-500 text-white text-[10px] font-bold flex items-center justify-center shadow-sm">
                    {cartCount}
                  </span>
                )}
              </button>

              {/* WhatsApp Order Button */}
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#25D366] hover:bg-[#1ebe5b] text-white font-semibold text-xs sm:text-sm shadow-sm hover:shadow transition-all"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Order on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Hamburger Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 xl:hidden flex">
          <div
            className="fixed inset-0 bg-choco-950/60 backdrop-blur-xs"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="relative w-full max-w-xs bg-cream-50 h-full shadow-elevated flex flex-col justify-between overflow-y-auto z-10">
            <div>
              {/* Drawer Header */}
              <div className="p-4 border-b border-cream-200 flex items-center justify-between bg-cream-100">
                <Link
                  href="/"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-2.5"
                >
                  <img
                    src="/logo/logo.svg"
                    alt="Amma Pastries BLR"
                    className="w-10 h-10 rounded-lg"
                  />
                  <div>
                    <p className="text-xs font-semibold text-saffron-600">
                      {BUSINESS_CONFIG.kannadaName}
                    </p>
                    <p className="font-serif font-bold text-base text-choco-900">
                      AMMA PASTRIES BLR
                    </p>
                  </div>
                </Link>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-full text-choco-700 hover:bg-cream-200"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Mobile Search Trigger */}
              <div className="p-4 border-b border-cream-200">
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setIsSearchOpen(true);
                  }}
                  className="w-full flex items-center gap-3 px-4 py-3 rounded-xl bg-white border border-cream-300 text-choco-700 text-sm"
                >
                  <Search className="w-4 h-4 text-saffron-500" />
                  <span>Search cakes, pastries, flavours...</span>
                </button>
              </div>

              {/* Mobile Navigation Links */}
              <nav className="p-3 space-y-1" aria-label="Mobile Navigation">
                {NAV_LINKS.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between px-3.5 py-3 rounded-xl text-choco-900 hover:bg-cream-200/70 font-medium text-sm transition-colors"
                  >
                    <span>{item.label}</span>
                    <ChevronRight className="w-4 h-4 text-choco-500" />
                  </Link>
                ))}
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between px-3.5 py-3 rounded-xl text-choco-900 hover:bg-cream-200/70 font-medium text-sm transition-colors"
                >
                  <span>Contact &amp; Store Info</span>
                  <ChevronRight className="w-4 h-4 text-choco-500" />
                </Link>
                <Link
                  href="/cart"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between px-3.5 py-3 rounded-xl text-choco-900 hover:bg-cream-200/70 font-medium text-sm transition-colors"
                >
                  <span>Shopping Bag ({cartCount})</span>
                  <ChevronRight className="w-4 h-4 text-choco-500" />
                </Link>
              </nav>
            </div>

            {/* Mobile Drawer Footer CTA */}
            <div className="p-4 border-t border-cream-200 bg-cream-100 space-y-3">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#1ebe5b] text-white font-semibold text-sm shadow-sm"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Order on WhatsApp</span>
              </a>
              <p className="text-[11px] text-center text-choco-600">
                📍 {BUSINESS_CONFIG.fullLocation}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
