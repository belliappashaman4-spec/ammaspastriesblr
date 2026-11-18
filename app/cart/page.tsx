"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ShoppingBag,
  Trash2,
  Plus,
  Minus,
  MessageCircle,
  ArrowLeft,
  ArrowRight,
  Info,
  Sparkles,
} from "lucide-react";
import { useShop } from "@/lib/cart";
import { PRODUCTS, getBestsellerProducts } from "@/data/products";
import { formatPrice } from "@/lib/utils";
import {
  buildWhatsAppUrl,
  generateCartWhatsAppMessage,
} from "@/lib/whatsapp";
import ProductGrid from "@/components/ProductGrid";

export default function CartPage() {
  const {
    cart,
    removeFromCart,
    updateQuantity,
    updateItemSize,
    clearCart,
    cartSubtotal,
    cartCount,
  } = useShop();

  const [customerName, setCustomerName] = useState("");
  const [preferredDeliveryDate, setPreferredDeliveryDate] = useState("");
  const [deliveryArea, setDeliveryArea] = useState("");
  const [specialInstructions, setSpecialInstructions] = useState("");
  const [showMessagePreview, setShowMessagePreview] = useState(false);

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
      customerName,
      preferredDeliveryDate,
      deliveryArea,
      specialInstructions,
    }
  );

  const whatsappOrderUrl = buildWhatsAppUrl(whatsappMessage);
  const suggestedProducts = getBestsellerProducts(4);

  return (
    <div className="py-10 sm:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-cream-300 pb-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-saffron-600">
              Amma Pastries BLR • Bengaluru
            </span>
            <h1 className="font-serif text-2xl sm:text-4xl font-bold text-choco-900 mt-1">
              Your Shopping Bag ({cartCount})
            </h1>
          </div>
          <Link
            href="/cakes"
            className="inline-flex items-center gap-2 text-sm font-semibold text-choco-800 hover:text-saffron-600 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Continue Shopping</span>
          </Link>
        </div>

        {cart.length === 0 ? (
          <div className="space-y-12">
            {/* Empty Cart State */}
            <div className="rounded-3xl bg-white border border-cream-300 p-10 sm:p-16 text-center max-w-xl mx-auto shadow-soft space-y-5">
              <div className="w-20 h-20 rounded-full bg-cream-100 text-saffron-600 flex items-center justify-center mx-auto">
                <ShoppingBag className="w-10 h-10" />
              </div>
              <div className="space-y-2">
                <h2 className="font-serif text-2xl font-bold text-choco-900">
                  Your Bakery Bag is Empty
                </h2>
                <p className="text-sm text-choco-600 leading-relaxed">
                  Looks like you have not added any cakes or pastries yet.
                  Explore our freshly baked creations and add your favourites!
                </p>
              </div>
              <div className="pt-2">
                <Link
                  href="/cakes"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-choco-900 hover:bg-choco-800 text-cream-50 font-semibold text-sm shadow-sm transition-all"
                >
                  <span>Explore Cakes &amp; Pastries</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Suggested Bestsellers */}
            <div className="space-y-6">
              <h3 className="font-serif text-2xl font-bold text-choco-900">
                Popular Bestsellers to Start With
              </h3>
              <ProductGrid products={suggestedProducts} />
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Cart Items List */}
            <div className="lg:col-span-7 space-y-4">
              {cart.map((item) => {
                const productConfig = PRODUCTS.find(
                  (p) => p.id === item.productId
                );
                return (
                  <div
                    key={item.cartItemId}
                    className="p-4 sm:p-5 rounded-3xl bg-white border border-cream-300 shadow-soft flex flex-col sm:flex-row gap-4 sm:items-center justify-between"
                  >
                    <div className="flex items-start gap-4">
                      <Link
                        href={`/products/${item.productId}`}
                        className="w-24 h-24 rounded-2xl overflow-hidden bg-cream-100 shrink-0"
                      >
                        <img
                          src={item.productImage}
                          alt={item.productName}
                          className="w-full h-full object-cover"
                        />
                      </Link>
                      <div className="space-y-1.5">
                        <span className="text-[11px] font-semibold uppercase tracking-wider text-saffron-600">
                          {item.category}
                        </span>
                        <Link
                          href={`/products/${item.productId}`}
                          className="block font-serif text-base sm:text-lg font-bold text-choco-900 hover:text-saffron-600"
                        >
                          {item.productName}
                        </Link>

                        {/* Change Selected Size Dropdown */}
                        <div className="flex flex-wrap items-center gap-2 pt-1">
                          <label className="text-xs text-choco-500 font-medium">
                            Size:
                          </label>
                          {productConfig && productConfig.sizes.length > 1 ? (
                            <select
                              aria-label={`Change size for ${item.productName}`}
                              value={item.selectedSize}
                              onChange={(e) =>
                                updateItemSize(item.cartItemId, e.target.value)
                              }
                              className="px-2.5 py-1 rounded-xl bg-cream-100 border border-cream-300 text-xs font-semibold text-choco-900 focus:outline-none focus:border-choco-700"
                            >
                              {productConfig.sizes.map((sizeObj) => (
                                <option
                                  key={sizeObj.label}
                                  value={sizeObj.label}
                                >
                                  {sizeObj.label} — {formatPrice(sizeObj.price)}
                                </option>
                              ))}
                            </select>
                          ) : (
                            <span className="text-xs font-semibold text-choco-800">
                              {item.selectedSize}
                            </span>
                          )}

                          {item.eggPreference !== "Standard" && (
                            <span className="px-2.5 py-0.5 rounded-full bg-blush-50 text-blush-600 text-xs font-semibold">
                              {item.eggPreference}
                            </span>
                          )}
                        </div>

                        {item.messageOnCake && (
                          <p className="text-xs text-choco-600 italic">
                            Message on Cake: “{item.messageOnCake}”
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Quantity & Subtotal Controls */}
                    <div className="flex sm:flex-col items-center sm:items-end justify-between gap-3 pt-3 sm:pt-0 border-t sm:border-t-0 border-cream-200">
                      <div className="flex items-center gap-2">
                        <div className="inline-flex items-center rounded-xl border border-cream-300 bg-cream-50">
                          <button
                            type="button"
                            onClick={() =>
                              updateQuantity(item.cartItemId, item.quantity - 1)
                            }
                            className="p-2 text-choco-700 hover:text-choco-950"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3.5 h-3.5" />
                          </button>
                          <span className="px-3 text-xs sm:text-sm font-bold text-choco-900">
                            {item.quantity}
                          </span>
                          <button
                            type="button"
                            onClick={() =>
                              updateQuantity(item.cartItemId, item.quantity + 1)
                            }
                            className="p-2 text-choco-700 hover:text-choco-950"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3.5 h-3.5" />
                          </button>
                        </div>

                        <button
                          type="button"
                          onClick={() => removeFromCart(item.cartItemId)}
                          className="p-2 rounded-xl text-choco-400 hover:text-blush-600 hover:bg-blush-50 transition-colors"
                          aria-label={`Remove ${item.productName}`}
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>

                      <div className="text-right">
                        <p className="font-serif text-lg font-bold text-choco-900">
                          {formatPrice(item.unitPrice * item.quantity)}
                        </p>
                        <p className="text-[11px] text-choco-500">
                          {formatPrice(item.unitPrice)} each
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}

              <div className="flex items-center justify-between pt-2">
                <Link
                  href="/cakes"
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-choco-800 hover:text-saffron-600"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Add More Cakes or Pastries</span>
                </Link>
                <button
                  type="button"
                  onClick={clearCart}
                  className="text-xs font-semibold text-choco-500 hover:text-blush-600 underline"
                >
                  Clear Entire Bag
                </button>
              </div>
            </div>

            {/* Right Column: Order Summary & WhatsApp Checkout */}
            <div className="lg:col-span-5 bg-white rounded-3xl border border-cream-300 p-6 sm:p-7 shadow-card space-y-6 lg:sticky lg:top-24">
              <div className="flex items-center gap-2 border-b border-cream-200 pb-4">
                <Sparkles className="w-4 h-4 text-saffron-600" />
                <h2 className="font-serif text-xl font-bold text-choco-900">
                  WhatsApp Order Summary
                </h2>
              </div>

              {/* Optional Customer & Delivery Fields */}
              <div className="space-y-3.5">
                <div>
                  <label className="block text-xs font-semibold text-choco-700 mb-1">
                    Your Name (Optional)
                  </label>
                  <input
                    type="text"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    placeholder="e.g., Sneha Rao"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-cream-50 border border-cream-300 text-xs sm:text-sm text-choco-900"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-choco-700 mb-1">
                      Preferred Delivery Date
                    </label>
                    <input
                      type="date"
                      value={preferredDeliveryDate}
                      onChange={(e) => setPreferredDeliveryDate(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-cream-50 border border-cream-300 text-xs sm:text-sm text-choco-900"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-choco-700 mb-1">
                      Bengaluru Locality
                    </label>
                    <input
                      type="text"
                      value={deliveryArea}
                      onChange={(e) => setDeliveryArea(e.target.value)}
                      placeholder="e.g., Koramangala"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-cream-50 border border-cream-300 text-xs sm:text-sm text-choco-900"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-choco-700 mb-1">
                    Special Notes (Candles, Knife, Timing, etc.)
                  </label>
                  <input
                    type="text"
                    value={specialInstructions}
                    onChange={(e) => setSpecialInstructions(e.target.value)}
                    placeholder="e.g., Need birthday candles, evening delivery"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-cream-50 border border-cream-300 text-xs sm:text-sm text-choco-900"
                  />
                </div>
              </div>

              {/* Price Breakdown */}
              <div className="space-y-2 border-t border-cream-200 pt-4 text-sm">
                <div className="flex justify-between text-choco-700">
                  <span>Items ({cartCount})</span>
                  <span className="font-semibold">
                    {formatPrice(cartSubtotal)}
                  </span>
                </div>
                <div className="flex justify-between text-xs text-choco-500">
                  <span>Delivery Charges</span>
                  <span>Confirmed on WhatsApp based on location</span>
                </div>
                <div className="flex justify-between items-baseline pt-2 border-t border-cream-200">
                  <span className="font-bold text-choco-900">
                    Total Estimated Amount
                  </span>
                  <span className="font-serif text-2xl font-bold text-choco-900">
                    {formatPrice(cartSubtotal)}
                  </span>
                </div>
              </div>

              {/* Honest Notice */}
              <div className="p-3.5 rounded-2xl bg-cream-100 border border-cream-300 space-y-2">
                <div className="flex items-start justify-between gap-2">
                  <p className="text-[11px] text-choco-700 flex items-start gap-1.5 leading-relaxed">
                    <Info className="w-4 h-4 text-saffron-600 shrink-0 mt-0.5" />
                    <span>
                      Note: Clicking the button below opens WhatsApp with your
                      complete cart items and estimated total. Your order is
                      confirmed once our bakery team replies on WhatsApp with
                      availability and delivery details.
                    </span>
                  </p>
                  <button
                    type="button"
                    onClick={() => setShowMessagePreview(!showMessagePreview)}
                    className="text-[11px] font-semibold text-saffron-600 hover:underline shrink-0"
                  >
                    {showMessagePreview ? "Hide" : "Preview"}
                  </button>
                </div>

                {showMessagePreview && (
                  <pre className="p-3 rounded-xl bg-white border border-cream-300 text-[11px] text-choco-800 font-sans whitespace-pre-wrap leading-relaxed">
                    {whatsappMessage}
                  </pre>
                )}
              </div>

              <a
                href={whatsappOrderUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 px-6 rounded-2xl bg-[#25D366] hover:bg-[#1ebe5b] text-white font-bold text-sm sm:text-base flex items-center justify-center gap-2.5 shadow-md transition-all"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>Place Complete Order on WhatsApp</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
