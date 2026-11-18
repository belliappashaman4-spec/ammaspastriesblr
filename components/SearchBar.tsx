"use client";

import React, { useState, useMemo, useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Search, X, ArrowRight, Sparkles } from "lucide-react";
import { PRODUCTS } from "@/data/products";
import { formatPrice } from "@/lib/utils";
import { useShop } from "@/lib/cart";

const QUICK_SEARCH_TERMS = [
  "Chocolate cake",
  "Birthday cake",
  "Black Forest",
  "Pastries",
  "Brownies",
  "Custom cakes",
  "Red Velvet",
  "Photo cake",
];

export default function SearchBar() {
  const { isSearchOpen, setIsSearchOpen } = useShop();
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  useEffect(() => {
    if (isSearchOpen) {
      setTimeout(() => inputRef.current?.focus(), 60);
    } else {
      setQuery("");
    }
  }, [isSearchOpen]);

  const matchingProducts = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return PRODUCTS.filter((p) => p.isBestseller).slice(0, 5);

    return PRODUCTS.filter((p) => {
      const haystack = [
        p.name,
        p.category,
        ...(p.secondaryCategories || []),
        p.description,
        ...p.tags,
      ]
        .join(" ")
        .toLowerCase();

      // Match all words or phrase
      const words = q.split(/\s+/);
      return words.every((w) => haystack.includes(w));
    }).slice(0, 8);
  }, [query]);

  if (!isSearchOpen) return null;

  const handleFullSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSearchOpen(false);
    router.push(`/cakes?search=${encodeURIComponent(query.trim())}`);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-12 sm:pt-20 px-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-choco-950/65 backdrop-blur-xs"
        onClick={() => setIsSearchOpen(false)}
      />

      {/* Search Modal */}
      <div className="relative z-10 w-full max-w-2xl rounded-3xl bg-cream-50 border border-cream-300 shadow-elevated overflow-hidden">
        <form
          onSubmit={handleFullSearchSubmit}
          className="p-4 sm:p-5 bg-white border-b border-cream-200 flex items-center gap-3"
        >
          <Search className="w-5 h-5 text-saffron-600 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search Chocolate cake, Birthday cake, Black Forest, Pastries, Brownies..."
            className="w-full text-sm sm:text-base text-choco-900 placeholder:text-choco-400 focus:outline-none bg-transparent"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery("")}
              className="text-xs text-choco-500 hover:text-choco-800 px-2 py-1"
            >
              Clear
            </button>
          )}
          <button
            type="button"
            onClick={() => setIsSearchOpen(false)}
            className="p-2 rounded-full bg-cream-100 hover:bg-cream-200 text-choco-700"
            aria-label="Close search"
          >
            <X className="w-4 h-4" />
          </button>
        </form>

        {/* Popular Search Chips */}
        <div className="px-4 sm:px-5 py-3 bg-cream-100/80 border-b border-cream-200 flex items-center gap-2 overflow-x-auto">
          <span className="text-[11px] font-bold uppercase tracking-wider text-choco-500 shrink-0 flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-saffron-500" />
            Popular:
          </span>
          {QUICK_SEARCH_TERMS.map((term) => (
            <button
              key={term}
              type="button"
              onClick={() => setQuery(term)}
              className={`px-3 py-1 rounded-full text-xs font-medium shrink-0 transition-colors ${
                query.toLowerCase() === term.toLowerCase()
                  ? "bg-choco-900 text-cream-50"
                  : "bg-white hover:bg-cream-200 text-choco-800 border border-cream-300"
              }`}
            >
              {term}
            </button>
          ))}
        </div>

        {/* Instant Results */}
        <div className="max-h-[60vh] overflow-y-auto p-4 sm:p-5 space-y-2.5">
          <div className="flex items-center justify-between text-xs text-choco-600 pb-1">
            <span className="font-semibold">
              {query.trim()
                ? `Matching Products (${matchingProducts.length})`
                : "Popular Bestsellers"}
            </span>
            {query.trim() && (
              <Link
                href={`/cakes?search=${encodeURIComponent(query.trim())}`}
                onClick={() => setIsSearchOpen(false)}
                className="text-saffron-600 hover:underline font-semibold inline-flex items-center gap-1"
              >
                <span>See all in Catalogue</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            )}
          </div>

          {matchingProducts.length === 0 ? (
            <div className="py-8 text-center space-y-2">
              <p className="font-serif text-base font-bold text-choco-900">
                No cakes found matching “{query}”
              </p>
              <p className="text-xs text-choco-600">
                Try searching for Chocolate, Black Forest, Red Velvet, Pastries,
                or Custom Cakes.
              </p>
            </div>
          ) : (
            <div className="divide-y divide-cream-200">
              {matchingProducts.map((product) => (
                <Link
                  key={product.id}
                  href={`/products/${product.id}`}
                  onClick={() => setIsSearchOpen(false)}
                  className="py-2.5 px-2 rounded-2xl hover:bg-white flex items-center justify-between gap-4 transition-colors group"
                >
                  <div className="flex items-center gap-3.5 min-w-0">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-14 h-14 rounded-xl object-cover bg-cream-200 shrink-0"
                    />
                    <div className="min-w-0">
                      <p className="font-serif text-sm sm:text-base font-bold text-choco-900 group-hover:text-saffron-600 truncate">
                        {product.name}
                      </p>
                      <p className="text-xs text-choco-500">
                        {product.category} • {product.sizes[0]?.label}
                      </p>
                    </div>
                  </div>
                  <div className="text-right shrink-0">
                    <p className="text-sm font-bold text-choco-900">
                      {formatPrice(product.price)}
                    </p>
                    <span className="text-[11px] text-saffron-600 font-semibold">
                      View →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
