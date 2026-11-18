"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Heart,
  ShoppingBag,
  MessageCircle,
  Eye,
  Sparkles,
} from "lucide-react";
import { Product } from "@/data/products";
import { formatPrice } from "@/lib/utils";
import {
  buildWhatsAppUrl,
  generateProductWhatsAppMessage,
} from "@/lib/whatsapp";
import { useShop } from "@/lib/cart";

const FALLBACK_CAKE_IMAGE =
  "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=85";

export default function ProductCard({ product }: { product: Product }) {
  const [selectedSizeIndex, setSelectedSizeIndex] = useState(0);
  const [imgSrc, setImgSrc] = useState(product.image);
  const { addToCart, toggleWishlist, isInWishlist } = useShop();

  const activeSize = product.sizes[selectedSizeIndex] || product.sizes[0];
  const wished = isInWishlist(product.id);

  const whatsappMessage = generateProductWhatsAppMessage({
    productName: product.name,
    weight: activeSize.label,
    quantity: 1,
    eggPreference: product.allowEggSelection ? "Eggless" : "Standard",
    unitPrice: activeSize.price,
  });
  const whatsappUrl = buildWhatsAppUrl(whatsappMessage);

  const handleQuickAddToCart = () => {
    if (!product.isAvailable) return;
    addToCart(
      {
        productId: product.id,
        productName: product.name,
        productImage: imgSrc,
        category: product.category,
        selectedSize: activeSize.label,
        unitPrice: activeSize.price,
        quantity: 1,
        eggPreference: product.allowEggSelection ? "Eggless" : "Standard",
      },
      true
    );
  };

  return (
    <article className="group bg-white rounded-3xl border border-cream-300/90 shadow-soft hover:shadow-elevated transition-all duration-300 flex flex-col overflow-hidden">
      {/* Image Container */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-cream-100">
        <Link href={`/products/${product.id}`} className="block w-full h-full">
          <img
            src={imgSrc}
            alt={product.name}
            loading="lazy"
            onError={() => setImgSrc(FALLBACK_CAKE_IMAGE)}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </Link>

        {/* Top Left Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5 pointer-events-none">
          {product.isBestseller && (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-gold-400 text-choco-950 text-[11px] font-bold shadow-xs">
              <Sparkles className="w-3 h-3 fill-current" />
              Bestseller
            </span>
          )}
          {!product.isAvailable && (
            <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-choco-900/90 text-cream-50 text-[11px] font-semibold">
              Currently Unavailable
            </span>
          )}
        </div>

        {/* Top Right Wishlist Button */}
        <button
          type="button"
          onClick={() => toggleWishlist(product.id)}
          aria-label={
            wished
              ? `Remove ${product.name} from wishlist`
              : `Add ${product.name} to wishlist`
          }
          className={`absolute top-3 right-3 w-9 h-9 rounded-full flex items-center justify-center shadow-xs transition-all ${
            wished
              ? "bg-blush-500 text-white"
              : "bg-white/90 hover:bg-white text-choco-800 hover:text-blush-600"
          }`}
        >
          <Heart className={`w-4 h-4 ${wished ? "fill-current" : ""}`} />
        </button>

        {/* Category Chip */}
        <div className="absolute bottom-3 left-3 pointer-events-none">
          <span className="px-2.5 py-1 rounded-full bg-choco-950/75 backdrop-blur-xs text-cream-50 text-[10px] font-medium tracking-wide">
            {product.category}
          </span>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between gap-4">
        <div className="space-y-2.5">
          <div className="flex items-start justify-between gap-2">
            <Link
              href={`/products/${product.id}`}
              className="font-serif text-base sm:text-lg font-bold text-choco-900 group-hover:text-saffron-600 transition-colors line-clamp-1"
            >
              {product.name}
            </Link>
          </div>

          <p className="text-xs text-choco-600 line-clamp-2 leading-relaxed">
            {product.description}
          </p>

          {/* Weight / Quantity Selector Pills */}
          <div className="pt-1">
            <p className="text-[11px] font-semibold text-choco-500 mb-1.5">
              Weight / Quantity:
            </p>
            <div className="flex flex-wrap gap-1.5">
              {product.sizes.map((size, idx) => (
                <button
                  key={size.label}
                  type="button"
                  onClick={() => setSelectedSizeIndex(idx)}
                  className={`px-2.5 py-1 rounded-lg text-[11px] font-semibold transition-all border ${
                    idx === selectedSizeIndex
                      ? "bg-choco-900 text-cream-50 border-choco-900 shadow-2xs"
                      : "bg-cream-50 text-choco-700 border-cream-300 hover:border-choco-500"
                  }`}
                >
                  {size.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Price & Action Buttons */}
        <div className="pt-3 border-t border-cream-200 space-y-3">
          <div className="flex items-baseline justify-between">
            <div>
              <span className="text-xl font-bold text-choco-900">
                {formatPrice(activeSize.price)}
              </span>
              <span className="text-xs text-choco-500 ml-1.5">
                / {activeSize.label}
              </span>
            </div>
            <Link
              href={`/products/${product.id}`}
              className="inline-flex items-center gap-1 text-xs font-semibold text-saffron-600 hover:text-choco-900 transition-colors"
            >
              <Eye className="w-3.5 h-3.5" />
              <span>View Details</span>
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <button
              type="button"
              disabled={!product.isAvailable}
              onClick={handleQuickAddToCart}
              className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-cream-200/80 hover:bg-choco-900 text-choco-900 hover:text-cream-50 font-semibold text-xs transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ShoppingBag className="w-3.5 h-3.5 shrink-0" />
              <span>Add to Cart</span>
            </button>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-[#25D366] hover:bg-[#1ebe5b] text-white font-semibold text-xs shadow-2xs transition-all"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-current shrink-0" />
              <span>WhatsApp Order</span>
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
