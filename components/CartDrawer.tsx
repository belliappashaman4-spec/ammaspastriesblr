"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  X,
  ShoppingBag,
  Trash2,
  Plus,
  Minus,
  MessageCircle,
  ArrowRight,
  Calendar,
  Info,
} from "lucide-react";
import { useShop } from "@/lib/cart";
import { PRODUCTS } from "@/data/products";
import { formatPrice } from "@/lib/utils";
import {
  buildWhatsAppUrl,
  generateCartWhatsAppMessage,
} from "@/lib/whatsapp";

export default function CartDrawer() {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateQuantity,
    updateItemSize,
    cartSubtotal,
    cartCount,
  } = useShop();

  const [preferredDate, setPreferredDate] = useState("");
  const [deliveryArea, setDeliveryArea] = useState("");

  if (!isCartOpen) return null;

  const whatsappMessage = generateCartWhatsAppMessage(
    cart.map((item) => ({
      productName: item.productName,
      weight: item.selectedSize,
      quantity: item.quantity,
      eggPreference: item.eggPreference,
      messageOnCake: item.messageOnCake,
      unitPrice: item.unitPrice,
    })),
    {
      preferredDeliveryDate: preferredDate,
      deliveryArea,
    }
  );
  const whatsappCheckoutUrl = buildWhatsAppUrl(whatsappMessage);

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-choco-950/60 backdrop-blur-xs"
        onClick={() => setIsCartOpen(false)}
      />

      {/* Drawer Panel */}
      <div className="relative z-10 w-full max-w-md bg-cream-50 h-full shadow-elevated flex flex-col justify-between">
        {/* Header */}
        <div className="px-5 py-4 bg-cream-100 border-b border-cream-200 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-full bg-choco-900 text-gold-300 flex items-center justify-center">
              <ShoppingBag className="w-4 h-4" />
            </div>
            <div>
              <h2 className="font-serif text-lg font-bold text-choco-900">
                Your Bakery Bag
              </h2>
              <p className="text-xs text-choco-600">
                {cartCount} {cartCount === 1 ? "item" : "items"} selected
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => setIsCartOpen(false)}
            className="p-2 rounded-full text-choco-700 hover:bg-cream-200 transition-colors"
            aria-label="Close bag"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        {cart.length === 0 ? (
          <div className="flex-1 p-8 flex flex-col items-center justify-center text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-cream-200 text-choco-600 flex items-center justify-center">
              <ShoppingBag className="w-8 h-8" />
            </div>
            <div className="space-y-1">
              <h3 className="font-serif text-xl font-bold text-choco-900">
                Your Bag is Empty
              </h3>
              <p className="text-sm text-choco-600 max-w-xs">
                Explore our freshly baked cakes, pastries, brownies, and
                desserts to start your celebration order.
              </p>
            </div>
            <Link
              href="/cakes"
              onClick={() => setIsCartOpen(false)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-choco-900 hover:bg-choco-800 text-cream-50 font-semibold text-sm transition-colors"
            >
              <span>Browse Cakes &amp; Pastries</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4">
              {cart.map((item) => {
                const productConfig = PRODUCTS.find(
                  (p) => p.id === item.productId
                );
                return (
                  <div
                    key={item.cartItemId}
                    className="p-3.5 rounded-2xl bg-white border border-cream-300 shadow-2xs flex gap-3.5"
                  >
                    <Link
                      href={`/products/${item.productId}`}
                      onClick={() => setIsCartOpen(false)}
                      className="w-20 h-20 rounded-xl overflow-hidden bg-cream-100 shrink-0"
                    >
                      <img
                        src={item.productImage}
                        alt={item.productName}
                        className="w-full h-full object-cover"
                      />
                    </Link>

                    <div className="flex-1 min-w-0 space-y-1.5">
                      <div className="flex items-start justify-between gap-2">
                        <Link
                          href={`/products/${item.productId}`}
                          onClick={() => setIsCartOpen(false)}
                          className="font-serif text-sm font-bold text-choco-900 hover:text-saffron-600 line-clamp-1"
                        >
                          {item.productName}
                        </Link>
                        <button
                          type="button"
                          onClick={() => removeFromCart(item.cartItemId)}
                          className="text-choco-400 hover:text-blush-600 p-1"
                          aria-label={`Remove ${item.productName}`}
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>

                      {/* Size Selector inside Cart */}
                      <div className="flex flex-wrap items-center gap-2 text-xs">
                        {productConfig && productConfig.sizes.length > 1 ? (
                          <select
                            aria-label={`Select size for ${item.productName}`}
                            value={item.selectedSize}
                            onChange={(e) =>
                              updateItemSize(item.cartItemId, e.target.value)
                            }
                            className="px-2 py-1 rounded-lg bg-cream-100 border border-cream-300 text-choco-800 font-medium text-xs focus:outline-none focus:border-choco-700"
                          >
                            {productConfig.sizes.map((s) => (
                              <option key={s.label} value={s.label}>
                                {s.label} ({formatPrice(s.price)})
                              </option>
                            ))}
                          </select>
                        ) : (
                          <span className="px-2 py-0.5 rounded bg-cream-100 text-choco-700 font-medium">
                            {item.selectedSize}
                          </span>
                        )}

                        {item.eggPreference !== "Standard" && (
                          <span className="px-2 py-0.5 rounded-full bg-blush-50 text-blush-600 font-semibold text-[11px]">
                            {item.eggPreference}
                          </span>
                        )}
                      </div>

                      {item.messageOnCake && (
                        <p className="text-[11px] text-choco-600 italic truncate">
                          Message: “{item.messageOnCake}”
                        </p>
                      )}

                      <div className="pt-1 flex items-center justify-between">
                        {/* Quantity Counter */}
                        <div className="inline-flex items-center rounded-lg border border-cream-300 bg-cream-50">
                          <button
                            type="button"
                            onClick={() =>
                              updateQuantity(item.cartItemId, item.quantity - 1)
                            }
                            className="p-1.5 text-choco-700 hover:text-choco-950"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="px-2.5 text-xs font-bold text-choco-900">
                            {item.quantity}
                          </span>
                          <button
                            type="button"
                            onClick={() =>
                              updateQuantity(item.cartItemId, item.quantity + 1)
                            }
                            className="p-1.5 text-choco-700 hover:text-choco-950"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>

                        <span className="text-sm font-bold text-choco-900">
                          {formatPrice(item.unitPrice * item.quantity)}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}

              {/* Quick Delivery Preference Fields */}
              <div className="p-3.5 rounded-2xl bg-cream-100 border border-cream-300 space-y-2.5">
                <p className="text-xs font-bold text-choco-800 flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-saffron-600" />
                  <span>Optional Delivery Preferences</span>
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <div>
                    <label className="block text-[10px] font-semibold text-choco-600 mb-1">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      value={preferredDate}
                      onChange={(e) => setPreferredDate(e.target.value)}
                      className="w-full px-2.5 py-1.5 rounded-lg bg-white border border-cream-300 text-xs text-choco-900 focus:outline-none focus:border-choco-700"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-semibold text-choco-600 mb-1">
                      Bengaluru Area / Locality
                    </label>
                    <input
                      type="text"
                      placeholder="e.g., Indiranagar, Jayanagar"
                      value={deliveryArea}
                      onChange={(e) => setDeliveryArea(e.target.value)}
                      className="w-full px-2.5 py-1.5 rounded-lg bg-white border border-cream-300 text-xs text-choco-900 focus:outline-none focus:border-choco-700"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Footer Checkout Actions */}
            <div className="p-4 sm:p-5 bg-white border-t border-cream-300 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-choco-700">
                  Estimated Subtotal
                </span>
                <span className="font-serif text-xl font-bold text-choco-900">
                  {formatPrice(cartSubtotal)}
                </span>
              </div>

              <div className="flex items-start gap-2 p-2.5 rounded-xl bg-cream-100 text-[11px] text-choco-700">
                <Info className="w-4 h-4 text-saffron-600 shrink-0 mt-0.5" />
                <span>
                  Clicking below opens WhatsApp with your complete bag details
                  so Amma Pastries BLR can confirm availability and delivery.
                </span>
              </div>

              <a
                href={whatsappCheckoutUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-[#25D366] hover:bg-[#1ebe5b] text-white font-semibold text-sm shadow-md transition-all"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Place Cart Order on WhatsApp</span>
              </a>

              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setIsCartOpen(false)}
                  className="py-2.5 px-3 rounded-xl border border-cream-300 text-choco-800 hover:bg-cream-100 font-semibold text-xs transition-colors"
                >
                  Continue Shopping
                </button>
                <Link
                  href="/cart"
                  onClick={() => setIsCartOpen(false)}
                  className="py-2.5 px-3 rounded-xl bg-choco-900 hover:bg-choco-800 text-cream-50 font-semibold text-xs text-center transition-colors"
                >
                  View Full Bag Page
                </Link>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
