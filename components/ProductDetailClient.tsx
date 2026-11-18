"use client";

import React, { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import {
  Heart,
  ShoppingBag,
  MessageCircle,
  Sparkles,
  Check,
  Plus,
  Minus,
  Calendar,
  PenLine,
  ChevronRight,
  Info,
  Clock,
} from "lucide-react";
import { Product, PRODUCTS, getRelatedProducts } from "@/data/products";
import { formatPrice } from "@/lib/utils";
import {
  buildWhatsAppUrl,
  generateProductWhatsAppMessage,
} from "@/lib/whatsapp";
import { useShop } from "@/lib/cart";
import ProductGrid from "@/components/ProductGrid";

const FALLBACK_IMAGE =
  "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=900&q=85";

export default function ProductDetailClient({ product }: { product: Product }) {
  const [selectedSizeIndex, setSelectedSizeIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [eggPreference, setEggPreference] = useState<
    "Eggless" | "With Egg" | "Standard"
  >(product.allowEggSelection ? "Eggless" : "Standard");
  const [messageOnCake, setMessageOnCake] = useState("");
  const [preferredDeliveryDate, setPreferredDeliveryDate] = useState("");
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [showMessagePreview, setShowMessagePreview] = useState(false);

  const {
    addToCart,
    toggleWishlist,
    isInWishlist,
    addRecentlyViewed,
    recentlyViewedIds,
  } = useShop();

  useEffect(() => {
    addRecentlyViewed(product.id);
  }, [product.id, addRecentlyViewed]);

  const galleryImages =
    product.gallery && product.gallery.length > 0
      ? product.gallery
      : [product.image];

  const activeSize = product.sizes[selectedSizeIndex] || product.sizes[0];
  const unitPrice = activeSize.price;
  const totalPrice = unitPrice * quantity;
  const wished = isInWishlist(product.id);

  const whatsappText = useMemo(
    () =>
      generateProductWhatsAppMessage({
        productName: product.name,
        weight: activeSize.label,
        quantity,
        eggPreference,
        messageOnCake,
        preferredDeliveryDate,
        unitPrice,
      }),
    [
      product.name,
      activeSize.label,
      quantity,
      eggPreference,
      messageOnCake,
      preferredDeliveryDate,
      unitPrice,
    ]
  );

  const whatsappUrl = buildWhatsAppUrl(whatsappText);

  const handleAddToCart = () => {
    if (!product.isAvailable) return;
    addToCart(
      {
        productId: product.id,
        productName: product.name,
        productImage: galleryImages[0] || FALLBACK_IMAGE,
        category: product.category,
        selectedSize: activeSize.label,
        unitPrice,
        quantity,
        eggPreference,
        messageOnCake: messageOnCake.trim() || undefined,
        preferredDeliveryDate: preferredDeliveryDate || undefined,
      },
      true
    );
  };

  const relatedProducts = useMemo(
    () => getRelatedProducts(product, 4),
    [product]
  );

  const recentlyViewedProducts = useMemo(
    () =>
      recentlyViewedIds
        .filter((id) => id !== product.id)
        .map((id) => PRODUCTS.find((p) => p.id === id))
        .filter((p): p is Product => Boolean(p))
        .slice(0, 4),
    [recentlyViewedIds, product.id]
  );

  return (
    <div className="py-6 sm:py-12 pb-28 sm:pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        {/* Breadcrumb Navigation */}
        <nav
          aria-label="Breadcrumb"
          className="flex flex-wrap items-center gap-1.5 text-xs sm:text-sm text-choco-600"
        >
          <Link href="/" className="hover:text-saffron-600">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-choco-400" />
          <Link href="/cakes" className="hover:text-saffron-600">
            Cakes &amp; Menu
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-choco-400" />
          <Link
            href={`/cakes?category=${encodeURIComponent(product.category)}`}
            className="hover:text-saffron-600"
          >
            {product.category}
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-choco-400" />
          <span className="font-semibold text-choco-900 truncate max-w-[220px] sm:max-w-none">
            {product.name}
          </span>
        </nav>

        {/* Main Product Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Product Gallery */}
          <div className="lg:col-span-6 space-y-4 lg:sticky lg:top-24">
            <div className="relative aspect-[4/3] sm:aspect-square rounded-3xl overflow-hidden bg-white border border-cream-300 shadow-card">
              <img
                src={galleryImages[activeImageIndex] || FALLBACK_IMAGE}
                alt={`${product.name} – View ${activeImageIndex + 1}`}
                className="w-full h-full object-cover"
              />

              {/* Badges */}
              <div className="absolute top-4 left-4 flex flex-col gap-2">
                {product.isBestseller && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold-400 text-choco-950 text-xs font-bold shadow-sm">
                    <Sparkles className="w-3.5 h-3.5 fill-current" />
                    Bestseller
                  </span>
                )}
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-choco-950/80 backdrop-blur-xs text-cream-50 text-xs font-medium">
                  {product.category}
                </span>
              </div>

              {/* Wishlist Toggle */}
              <button
                type="button"
                onClick={() => toggleWishlist(product.id)}
                aria-label={
                  wished ? "Remove from Wishlist" : "Save to Wishlist"
                }
                className={`absolute top-4 right-4 w-11 h-11 rounded-full flex items-center justify-center shadow-md transition-all ${
                  wished
                    ? "bg-blush-500 text-white"
                    : "bg-white/95 hover:bg-white text-choco-800 hover:text-blush-600"
                }`}
              >
                <Heart className={`w-5 h-5 ${wished ? "fill-current" : ""}`} />
              </button>
            </div>

            {/* Thumbnail Strip */}
            {galleryImages.length > 1 && (
              <div className="flex items-center gap-3 overflow-x-auto pb-1">
                {galleryImages.map((imgUrl, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveImageIndex(idx)}
                    className={`relative w-20 h-20 rounded-2xl overflow-hidden border-2 transition-all shrink-0 ${
                      idx === activeImageIndex
                        ? "border-saffron-500 shadow-sm scale-105"
                        : "border-cream-300 opacity-75 hover:opacity-100"
                    }`}
                  >
                    <img
                      src={imgUrl}
                      alt={`${product.name} thumbnail ${idx + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right Column: Product Configuration & WhatsApp Ordering */}
          <div className="lg:col-span-6 bg-white rounded-3xl border border-cream-300 p-6 sm:p-8 shadow-soft space-y-6">
            {/* Title & Availability */}
            <div className="space-y-2 border-b border-cream-200 pb-5">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-widest text-saffron-600">
                  {product.category}
                </span>
                <span className="text-choco-300">•</span>
                {product.isAvailable ? (
                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#1f9d55]">
                    <Check className="w-3.5 h-3.5" />
                    Available for Order Enquiry
                  </span>
                ) : (
                  <span className="text-xs font-semibold text-blush-600">
                    Currently Unavailable
                  </span>
                )}
              </div>

              <h1 className="font-serif text-2xl sm:text-4xl font-bold text-choco-900">
                {product.name}
              </h1>

              {/* Dynamic Price Display */}
              <div className="pt-2 flex items-baseline gap-3">
                <span className="font-serif text-3xl sm:text-4xl font-bold text-choco-900">
                  {formatPrice(totalPrice)}
                </span>
                <span className="text-sm text-choco-600">
                  ({formatPrice(unitPrice)} for {activeSize.label}
                  {activeSize.servings ? ` • ${activeSize.servings}` : ""})
                </span>
              </div>
            </div>

            {/* Description */}
            <p className="text-sm sm:text-base text-choco-700 leading-relaxed">
              {product.description}
            </p>

            {/* 1. Weight / Size Selector */}
            <div className="space-y-2.5">
              <label className="block text-xs font-bold uppercase tracking-wider text-choco-700">
                Select Weight / Size
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {product.sizes.map((sizeOption, idx) => {
                  const isSelected = idx === selectedSizeIndex;
                  return (
                    <button
                      key={sizeOption.label}
                      type="button"
                      onClick={() => setSelectedSizeIndex(idx)}
                      className={`p-3 rounded-2xl border text-left transition-all ${
                        isSelected
                          ? "bg-choco-900 text-cream-50 border-choco-900 shadow-xs"
                          : "bg-cream-50 hover:bg-cream-100 text-choco-900 border-cream-300"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs sm:text-sm font-bold">
                          {sizeOption.label}
                        </span>
                        <span
                          className={`text-xs font-bold ${
                            isSelected ? "text-gold-300" : "text-saffron-600"
                          }`}
                        >
                          {formatPrice(sizeOption.price)}
                        </span>
                      </div>
                      {sizeOption.servings && (
                        <p
                          className={`text-[11px] mt-0.5 ${
                            isSelected ? "text-cream-200/80" : "text-choco-500"
                          }`}
                        >
                          {sizeOption.servings}
                        </p>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 2. Egg Preference & Quantity Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {product.allowEggSelection && (
                <div className="space-y-2">
                  <label className="block text-xs font-bold uppercase tracking-wider text-choco-700">
                    Egg Preference
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {(["Eggless", "With Egg"] as const).map((pref) => (
                      <button
                        key={pref}
                        type="button"
                        onClick={() => setEggPreference(pref)}
                        className={`py-2.5 px-3 rounded-xl border text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                          eggPreference === pref
                            ? pref === "Eggless"
                              ? "bg-[#1f9d55] text-white border-[#1f9d55]"
                              : "bg-choco-900 text-cream-50 border-choco-900"
                            : "bg-cream-50 text-choco-800 border-cream-300 hover:bg-cream-100"
                        }`}
                      >
                        <span
                          className={`w-2 h-2 rounded-full ${
                            pref === "Eggless"
                              ? eggPreference === "Eggless"
                                ? "bg-white"
                                : "bg-[#1f9d55]"
                              : "bg-saffron-500"
                          }`}
                        />
                        <span>{pref}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Quantity Selector */}
              <div className="space-y-2">
                <label className="block text-xs font-bold uppercase tracking-wider text-choco-700">
                  Quantity
                </label>
                <div className="inline-flex items-center rounded-xl border border-cream-300 bg-cream-50 p-1">
                  <button
                    type="button"
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="w-9 h-9 rounded-lg bg-white hover:bg-cream-200 text-choco-900 flex items-center justify-center transition-colors"
                    aria-label="Decrease quantity"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-12 text-center font-bold text-sm text-choco-900">
                    {quantity}
                  </span>
                  <button
                    type="button"
                    onClick={() => setQuantity((q) => q + 1)}
                    className="w-9 h-9 rounded-lg bg-white hover:bg-cream-200 text-choco-900 flex items-center justify-center transition-colors"
                    aria-label="Increase quantity"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* 3. Custom Message on Cake & Delivery Date */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
              {product.allowCustomMessage && (
                <div className="space-y-1.5">
                  <label
                    htmlFor="cake-message"
                    className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-choco-700"
                  >
                    <span className="flex items-center gap-1.5">
                      <PenLine className="w-3.5 h-3.5 text-saffron-600" />
                      Message on Cake
                    </span>
                    <span className="text-[10px] text-choco-400 font-normal">
                      {messageOnCake.length}/40
                    </span>
                  </label>
                  <input
                    id="cake-message"
                    type="text"
                    maxLength={40}
                    value={messageOnCake}
                    onChange={(e) => setMessageOnCake(e.target.value)}
                    placeholder="e.g., Happy Birthday Amma!"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-cream-50 border border-cream-300 text-xs sm:text-sm text-choco-900 placeholder:text-choco-400 focus:outline-none focus:border-choco-800"
                  />
                </div>
              )}

              <div className="space-y-1.5">
                <label
                  htmlFor="delivery-date"
                  className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-choco-700"
                >
                  <Calendar className="w-3.5 h-3.5 text-saffron-600" />
                  Preferred Delivery Date
                </label>
                <input
                  id="delivery-date"
                  type="date"
                  value={preferredDeliveryDate}
                  onChange={(e) => setPreferredDeliveryDate(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-cream-50 border border-cream-300 text-xs sm:text-sm text-choco-900 focus:outline-none focus:border-choco-800"
                />
              </div>
            </div>

            {/* Primary Desktop/Tablet Action Buttons */}
            <div className="pt-3 space-y-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  type="button"
                  disabled={!product.isAvailable}
                  onClick={handleAddToCart}
                  className="w-full py-4 px-5 rounded-2xl bg-choco-900 hover:bg-choco-800 text-cream-50 font-bold text-sm flex items-center justify-center gap-2 shadow-sm transition-all disabled:opacity-50"
                >
                  <ShoppingBag className="w-4 h-4 text-gold-300" />
                  <span>Add to Cart • {formatPrice(totalPrice)}</span>
                </button>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 px-5 rounded-2xl bg-[#25D366] hover:bg-[#1ebe5b] text-white font-bold text-sm flex items-center justify-center gap-2 shadow-md transition-all"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Order on WhatsApp</span>
                </a>
              </div>

              {/* Honest Order Confirmation Disclaimer & Prefilled Message Preview */}
              <div className="rounded-2xl bg-cream-100 border border-cream-300 p-3.5 space-y-2">
                <div className="flex items-start justify-between gap-2">
                  <p className="text-[11px] text-choco-700 flex items-start gap-1.5 leading-relaxed">
                    <Info className="w-4 h-4 text-saffron-600 shrink-0 mt-0.5" />
                    <span>
                      Clicking <strong>Order on WhatsApp</strong> opens a chat
                      with your selected weight, message, and date pre-filled so
                      Amma Pastries BLR can confirm availability and delivery
                      details.
                    </span>
                  </p>
                  <button
                    type="button"
                    onClick={() => setShowMessagePreview(!showMessagePreview)}
                    className="text-[11px] font-semibold text-saffron-600 hover:underline shrink-0"
                  >
                    {showMessagePreview ? "Hide Preview" : "Preview Message"}
                  </button>
                </div>

                {showMessagePreview && (
                  <pre className="p-3 rounded-xl bg-white border border-cream-300 text-[11px] text-choco-800 font-sans whitespace-pre-wrap leading-relaxed">
                    {whatsappText}
                  </pre>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Related Products Section */}
        {relatedProducts.length > 0 && (
          <section className="pt-8 border-t border-cream-200 space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-saffron-600">
                More From Amma Pastries BLR
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-choco-900 mt-1">
                You May Also Love
              </h2>
            </div>
            <ProductGrid products={relatedProducts} />
          </section>
        )}

        {/* Recently Viewed Products Section */}
        {recentlyViewedProducts.length > 0 && (
          <section className="pt-8 border-t border-cream-200 space-y-6">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-saffron-600" />
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-choco-900">
                Recently Viewed
              </h2>
            </div>
            <ProductGrid products={recentlyViewedProducts} />
          </section>
        )}
      </div>

      {/* Sticky Mobile Shopping Action Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-30 sm:hidden bg-white/95 backdrop-blur-md border-t border-cream-300 p-3 shadow-elevated">
        <div className="flex items-center gap-2.5">
          <div className="pr-1">
            <p className="text-[10px] text-choco-500 font-semibold">
              {activeSize.label} × {quantity}
            </p>
            <p className="font-serif text-base font-bold text-choco-900">
              {formatPrice(totalPrice)}
            </p>
          </div>
          <button
            type="button"
            disabled={!product.isAvailable}
            onClick={handleAddToCart}
            className="flex-1 py-3 px-3 rounded-xl bg-choco-900 text-cream-50 font-bold text-xs flex items-center justify-center gap-1.5"
          >
            <ShoppingBag className="w-3.5 h-3.5 text-gold-300" />
            <span>Add to Bag</span>
          </button>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 py-3 px-3 rounded-xl bg-[#25D366] text-white font-bold text-xs flex items-center justify-center gap-1.5"
          >
            <MessageCircle className="w-3.5 h-3.5 fill-current" />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
}
