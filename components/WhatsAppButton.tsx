"use client";

import React from "react";
import Link from "next/link";
import {
  MessageCircle,
  Heart,
  X,
  Trash2,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import {
  buildWhatsAppUrl,
  generateGeneralWhatsAppMessage,
} from "@/lib/whatsapp";
import { useShop } from "@/lib/cart";
import { PRODUCTS } from "@/data/products";
import { formatPrice } from "@/lib/utils";

export default function WhatsAppButton() {
  const {
    toastMessage,
    isWishlistOpen,
    setIsWishlistOpen,
    wishlistIds,
    toggleWishlist,
  } = useShop();

  const whatsappUrl = buildWhatsAppUrl(generateGeneralWhatsAppMessage());
  const wishedProducts = PRODUCTS.filter((p) => wishlistIds.includes(p.id));

  return (
    <>
      {/* Floating Toast Notification */}
      {toastMessage && (
        <div
          role="status"
          aria-live="polite"
          className="fixed bottom-24 right-4 sm:right-6 z-50 max-w-sm bg-choco-900 text-cream-50 px-4 py-3 rounded-2xl shadow-elevated border border-gold-400/40 flex items-center gap-2.5 text-xs sm:text-sm font-medium animate-bounce"
        >
          <CheckCircle2 className="w-4 h-4 text-[#25D366] shrink-0" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Floating WhatsApp Click-to-Chat Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Order on WhatsApp"
        className="fixed bottom-5 right-4 sm:right-6 z-40 group flex items-center gap-2.5 bg-[#25D366] hover:bg-[#1ebe5b] text-white pl-4 pr-4 sm:pr-5 py-3.5 rounded-full shadow-elevated transition-all duration-300 hover:scale-105"
      >
        <MessageCircle className="w-6 h-6 fill-current" />
        <div className="flex flex-col text-left leading-tight">
          <span className="text-[10px] uppercase tracking-wider font-semibold text-white/90 hidden sm:block">
            Quick Cake Order
          </span>
          <span className="text-xs sm:text-sm font-bold">WhatsApp Us</span>
        </div>
      </a>

      {/* Wishlist Drawer */}
      {isWishlistOpen && (
        <div className="fixed inset-0 z-50 flex justify-end">
          <div
            className="fixed inset-0 bg-choco-950/60 backdrop-blur-xs"
            onClick={() => setIsWishlistOpen(false)}
          />
          <div className="relative z-10 w-full max-w-md bg-cream-50 h-full shadow-elevated flex flex-col justify-between">
            <div className="px-5 py-4 bg-cream-100 border-b border-cream-200 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-full bg-blush-100 text-blush-600 flex items-center justify-center">
                  <Heart className="w-4 h-4 fill-current" />
                </div>
                <div>
                  <h2 className="font-serif text-lg font-bold text-choco-900">
                    Saved Favourites
                  </h2>
                  <p className="text-xs text-choco-600">
                    {wishedProducts.length} saved{" "}
                    {wishedProducts.length === 1 ? "item" : "items"}
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setIsWishlistOpen(false)}
                className="p-2 rounded-full text-choco-700 hover:bg-cream-200"
                aria-label="Close wishlist"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {wishedProducts.length === 0 ? (
              <div className="flex-1 p-8 flex flex-col items-center justify-center text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-blush-50 text-blush-500 flex items-center justify-center">
                  <Heart className="w-8 h-8" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-serif text-xl font-bold text-choco-900">
                    No Saved Cakes Yet
                  </h3>
                  <p className="text-sm text-choco-600 max-w-xs">
                    Tap the heart icon on any cake or pastry to save it here for
                    upcoming birthdays and celebrations.
                  </p>
                </div>
                <Link
                  href="/cakes"
                  onClick={() => setIsWishlistOpen(false)}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-choco-900 text-cream-50 font-semibold text-sm"
                >
                  <span>Explore Cakes</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ) : (
              <div className="flex-1 overflow-y-auto p-4 space-y-3">
                {wishedProducts.map((product) => (
                  <div
                    key={product.id}
                    className="p-3 rounded-2xl bg-white border border-cream-300 flex items-center justify-between gap-3"
                  >
                    <Link
                      href={`/products/${product.id}`}
                      onClick={() => setIsWishlistOpen(false)}
                      className="flex items-center gap-3 min-w-0 flex-1"
                    >
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-16 h-16 rounded-xl object-cover shrink-0"
                      />
                      <div className="min-w-0">
                        <p className="font-serif text-sm font-bold text-choco-900 truncate">
                          {product.name}
                        </p>
                        <p className="text-xs text-choco-500">
                          {product.category}
                        </p>
                        <p className="text-sm font-bold text-saffron-600 mt-0.5">
                          From {formatPrice(product.price)}
                        </p>
                      </div>
                    </Link>
                    <button
                      type="button"
                      onClick={() => toggleWishlist(product.id)}
                      className="p-2 text-choco-400 hover:text-blush-600"
                      aria-label={`Remove ${product.name} from wishlist`}
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
