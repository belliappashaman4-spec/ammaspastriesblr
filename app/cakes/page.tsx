"use client";

import React, { useState, useMemo, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import {
  Search,
  SlidersHorizontal,
  Sparkles,
  X,
  MessageCircle,
  Clock,
} from "lucide-react";
import { CATEGORIES, ProductCategoryName } from "@/data/categories";
import { PRODUCTS } from "@/data/products";
import ProductGrid from "@/components/ProductGrid";
import {
  buildWhatsAppUrl,
  generateCustomCakeWhatsAppMessage,
} from "@/lib/whatsapp";
import { useShop } from "@/lib/cart";

type PriceRangeFilter =
  | "all"
  | "under-60"
  | "60-120"
  | "350-400"
  | "above-400";
type SortOption = "popularity" | "price-asc" | "price-desc" | "name-asc";

function CatalogueContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") || "All";
  const initialSearch = searchParams.get("search") || "";
  const initialSort = searchParams.get("sort");

  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [searchQuery, setSearchQuery] = useState<string>(initialSearch);
  const [priceFilter, setPriceFilter] = useState<PriceRangeFilter>("all");
  const [sortBy, setSortBy] = useState<SortOption>(
    initialSort === "popular" ? "popularity" : "popularity"
  );
  const [onlyBestsellers, setOnlyBestsellers] = useState(false);

  // Custom Cake Builder state
  const [customName, setCustomName] = useState("");
  const [customOccasion, setCustomOccasion] = useState("Birthday");
  const [customFlavour, setCustomFlavour] = useState("Chocolate Truffle");
  const [customWeight, setCustomWeight] = useState("1.5 kg (12–15 Servings)");
  const [customDate, setCustomDate] = useState("");
  const [customNotes, setCustomNotes] = useState("");

  const { recentlyViewedIds } = useShop();

  useEffect(() => {
    const cat = searchParams.get("category");
    const q = searchParams.get("search");
    if (cat) setSelectedCategory(cat);
    else if (!cat && !q) setSelectedCategory("All");
    if (q !== null) setSearchQuery(q);
  }, [searchParams]);

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      // Category filter (checks primary category + secondaryCategories)
      if (selectedCategory !== "All") {
        const matchesPrimary = product.category === selectedCategory;
        const matchesSecondary = product.secondaryCategories?.includes(
          selectedCategory as ProductCategoryName
        );
        if (!matchesPrimary && !matchesSecondary) return false;
      }

      // Bestsellers filter
      if (onlyBestsellers && !product.isBestseller) {
        return false;
      }

      // Price filter
      if (priceFilter === "under-60" && product.price > 60) return false;
      if (
        priceFilter === "60-120" &&
        (product.price < 60 || product.price > 120)
      )
        return false;
      if (
        priceFilter === "350-400" &&
        (product.price < 350 || product.price > 400)
      )
        return false;
      if (priceFilter === "above-400" && product.price <= 400) return false;

      // Search query filter
      if (searchQuery.trim()) {
        const q = searchQuery.trim().toLowerCase();
        const haystack = [
          product.name,
          product.category,
          ...(product.secondaryCategories || []),
          product.description,
          ...product.tags,
        ]
          .join(" ")
          .toLowerCase();

        const words = q.split(/\s+/);
        if (!words.every((w) => haystack.includes(w))) return false;
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === "price-asc") return a.price - b.price;
      if (sortBy === "price-desc") return b.price - a.price;
      if (sortBy === "name-asc") return a.name.localeCompare(b.name);
      return b.popularityScore - a.popularityScore;
    });
  }, [selectedCategory, onlyBestsellers, priceFilter, searchQuery, sortBy]);

  const recentlyViewedProducts = useMemo(
    () =>
      recentlyViewedIds
        .map((id) => PRODUCTS.find((p) => p.id === id))
        .filter((p): p is NonNullable<typeof p> => Boolean(p))
        .slice(0, 4),
    [recentlyViewedIds]
  );

  const resetFilters = () => {
    setSelectedCategory("All");
    setSearchQuery("");
    setPriceFilter("all");
    setSortBy("popularity");
    setOnlyBestsellers(false);
  };

  const customCakeWhatsAppUrl = buildWhatsAppUrl(
    generateCustomCakeWhatsAppMessage({
      customerName: customName,
      occasion: customOccasion,
      flavourPreference: customFlavour,
      weightEstimate: customWeight,
      preferredDate: customDate,
      notes: customNotes,
    })
  );

  return (
    <div className="py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Page Header Banner */}
        <div className="rounded-3xl bg-gradient-to-r from-choco-900 via-choco-800 to-choco-900 text-cream-50 p-6 sm:p-10 shadow-card border border-gold-400/20">
          <div className="max-w-2xl space-y-2">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-gold-300">
              <Sparkles className="w-3.5 h-3.5" />
              Amma Pastries BLR Catalogue
            </span>
            <h1 className="font-serif text-2xl sm:text-4xl font-bold">
              {selectedCategory === "All"
                ? "Freshly Baked Cakes, Pastries & Desserts"
                : selectedCategory}
            </h1>
            <p className="text-xs sm:text-sm text-cream-200/90 leading-relaxed">
              Explore our complete collection across 13 bakery categories.
              Choose your preferred weight, add a custom cake message, and order
              directly on WhatsApp.
            </p>
          </div>
        </div>

        {/* Category Filter Pills (All 13 Categories) */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h2 className="text-xs font-bold uppercase tracking-wider text-choco-600">
              Filter by Category
            </h2>
            {selectedCategory !== "All" && (
              <button
                type="button"
                onClick={() => setSelectedCategory("All")}
                className="text-xs font-semibold text-saffron-600 hover:underline"
              >
                Show All Categories
              </button>
            )}
          </div>
          <div className="flex items-center gap-2 overflow-x-auto pb-2">
            <button
              type="button"
              onClick={() => setSelectedCategory("All")}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold shrink-0 transition-all ${
                selectedCategory === "All"
                  ? "bg-choco-900 text-cream-50 shadow-xs"
                  : "bg-white hover:bg-cream-200 text-choco-800 border border-cream-300"
              }`}
            >
              All Creations ({PRODUCTS.length})
            </button>
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.name)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold shrink-0 transition-all ${
                  selectedCategory === cat.name
                    ? "bg-choco-900 text-cream-50 shadow-xs"
                    : "bg-white hover:bg-cream-200 text-choco-800 border border-cream-300"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Search, Price Filter & Sort Bar */}
        <div className="p-4 sm:p-5 rounded-3xl bg-white border border-cream-300 shadow-soft space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3.5 items-center">
            {/* Search Input */}
            <div className="md:col-span-5 relative">
              <Search className="w-4 h-4 text-choco-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search Chocolate cake, Black Forest, Pastries..."
                className="w-full pl-10 pr-9 py-2.5 rounded-2xl bg-cream-50 border border-cream-300 text-xs sm:text-sm text-choco-900 placeholder:text-choco-400 focus:outline-none focus:border-choco-800"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  aria-label="Clear search"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-choco-400 hover:text-choco-800"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Price Filter Dropdown */}
            <div className="md:col-span-3">
              <select
                aria-label="Filter by price range"
                value={priceFilter}
                onChange={(e) =>
                  setPriceFilter(e.target.value as PriceRangeFilter)
                }
                className="w-full px-3.5 py-2.5 rounded-2xl bg-cream-50 border border-cream-300 text-xs sm:text-sm font-medium text-choco-800 focus:outline-none focus:border-choco-800"
              >
                <option value="all">All Prices (₹20 – ₹450+ / ½ kg)</option>
                <option value="under-60">
                  ₹20 – ₹60 (Doughnuts, Buns, Lava Cake &amp; Chips)
                </option>
                <option value="60-120">
                  ₹60 – ₹120 (Dilpasand, Biscuits, Rusks &amp; Mixtures)
                </option>
                <option value="350-400">
                  ₹350 – ₹400 (½ kg Classic, Chocolate &amp; Fruit Cakes)
                </option>
                <option value="above-400">
                  ₹450+ (½ kg Cheesecakes &amp; Dark Chocolate)
                </option>
              </select>
            </div>

            {/* Sort By Dropdown */}
            <div className="md:col-span-2">
              <select
                aria-label="Sort products"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as SortOption)}
                className="w-full px-3.5 py-2.5 rounded-2xl bg-cream-50 border border-cream-300 text-xs sm:text-sm font-medium text-choco-800 focus:outline-none focus:border-choco-800"
              >
                <option value="popularity">Sort: Popularity</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="name-asc">Name: A to Z</option>
              </select>
            </div>

            {/* Bestseller Toggle */}
            <div className="md:col-span-2 flex items-center justify-end">
              <button
                type="button"
                onClick={() => setOnlyBestsellers(!onlyBestsellers)}
                className={`w-full py-2.5 px-3 rounded-2xl border text-xs font-semibold flex items-center justify-center gap-1.5 transition-all ${
                  onlyBestsellers
                    ? "bg-gold-400 text-choco-950 border-gold-500"
                    : "bg-cream-50 text-choco-700 border-cream-300 hover:bg-cream-100"
                }`}
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Bestsellers</span>
              </button>
            </div>
          </div>

          {/* Active Filter Status Bar */}
          <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-cream-200 text-xs text-choco-600">
            <div className="flex items-center gap-2">
              <SlidersHorizontal className="w-3.5 h-3.5 text-saffron-600" />
              <span>
                Showing <strong>{filteredProducts.length}</strong>{" "}
                {filteredProducts.length === 1 ? "creation" : "creations"}
                {selectedCategory !== "All" ? ` in ${selectedCategory}` : ""}
              </span>
            </div>
            {(selectedCategory !== "All" ||
              searchQuery ||
              priceFilter !== "all" ||
              onlyBestsellers) && (
              <button
                type="button"
                onClick={resetFilters}
                className="text-saffron-600 hover:text-choco-900 font-semibold underline"
              >
                Reset All Filters
              </button>
            )}
          </div>
        </div>

        {/* Product Grid */}
        <ProductGrid
          products={filteredProducts}
          emptyMessage="No cakes or pastries match your current filters."
        />

        {/* Custom Cake Order Section (#custom-order) */}
        <section
          id="custom-order"
          className="scroll-mt-28 rounded-3xl bg-gradient-to-br from-cream-100 via-blush-50/60 to-gold-50 border border-cream-300 p-6 sm:p-10 shadow-soft"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-choco-900 text-gold-300 text-xs font-bold">
                <Sparkles className="w-3.5 h-3.5" />
                Custom &amp; Theme Cake Studio
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-choco-900">
                Looking for a Bespoke Custom Cake?
              </h2>
              <p className="text-sm text-choco-700 leading-relaxed">
                Have a specific theme, tier design, or flavour combination in
                mind for a birthday, wedding, or baby shower? Fill in your
                preferences below and send your enquiry straight to our
                WhatsApp.
              </p>
            </div>

            <div className="lg:col-span-7 bg-white rounded-2xl p-5 sm:p-6 border border-cream-300 shadow-2xs space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-semibold text-choco-700 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    placeholder="e.g., Rahul Sharma"
                    value={customName}
                    onChange={(e) => setCustomName(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl bg-cream-50 border border-cream-300 text-xs sm:text-sm text-choco-900"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-choco-700 mb-1">
                    Celebration Occasion
                  </label>
                  <select
                    value={customOccasion}
                    onChange={(e) => setCustomOccasion(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl bg-cream-50 border border-cream-300 text-xs sm:text-sm text-choco-900"
                  >
                    <option value="Birthday">Birthday Celebration</option>
                    <option value="1st Birthday Milestone">
                      Kids / 1st Birthday Milestone
                    </option>
                    <option value="Anniversary / Engagement">
                      Anniversary / Engagement
                    </option>
                    <option value="Wedding / Reception">
                      Wedding / Reception
                    </option>
                    <option value="Corporate / Office Event">
                      Corporate / Office Event
                    </option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-choco-700 mb-1">
                    Preferred Flavour
                  </label>
                  <select
                    value={customFlavour}
                    onChange={(e) => setCustomFlavour(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl bg-cream-50 border border-cream-300 text-xs sm:text-sm text-choco-900"
                  >
                    <option value="Chocolate Truffle">Chocolate Truffle</option>
                    <option value="Black Forest">Classic Black Forest</option>
                    <option value="Red Velvet">Crimson Red Velvet</option>
                    <option value="Butterscotch Praline">
                      Butterscotch Praline
                    </option>
                    <option value="White Forest">Snowy White Forest</option>
                    <option value="Fresh Pineapple">Fresh Pineapple</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-choco-700 mb-1">
                    Estimated Weight / Tier Size
                  </label>
                  <select
                    value={customWeight}
                    onChange={(e) => setCustomWeight(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl bg-cream-50 border border-cream-300 text-xs sm:text-sm text-choco-900"
                  >
                    <option value="1 kg (8–10 Servings)">
                      1 kg (8–10 Servings)
                    </option>
                    <option value="1.5 kg (12–15 Servings)">
                      1.5 kg (12–15 Servings)
                    </option>
                    <option value="2.5 kg Two-Tier (20–25 Servings)">
                      2.5 kg Two-Tier (20–25 Servings)
                    </option>
                    <option value="4 kg+ Grand Celebration Cake">
                      4 kg+ Grand Celebration Cake
                    </option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-choco-700 mb-1">
                    Preferred Celebration Date
                  </label>
                  <input
                    type="date"
                    value={customDate}
                    onChange={(e) => setCustomDate(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl bg-cream-50 border border-cream-300 text-xs sm:text-sm text-choco-900"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-choco-700 mb-1">
                    Theme / Message Notes
                  </label>
                  <input
                    type="text"
                    placeholder="e.g., Pastel floral theme, Eggless"
                    value={customNotes}
                    onChange={(e) => setCustomNotes(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl bg-cream-50 border border-cream-300 text-xs sm:text-sm text-choco-900"
                  />
                </div>
              </div>

              <a
                href={customCakeWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-[#25D366] hover:bg-[#1ebe5b] text-white font-semibold text-sm shadow-sm transition-all"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Send Custom Cake Enquiry on WhatsApp</span>
              </a>
            </div>
          </div>
        </section>

        {/* Recently Viewed Products */}
        {recentlyViewedProducts.length > 0 && (
          <section className="pt-6 border-t border-cream-200 space-y-6">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-saffron-600" />
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-choco-900">
                Recently Viewed Creations
              </h2>
            </div>
            <ProductGrid products={recentlyViewedProducts} />
          </section>
        )}
      </div>
    </div>
  );
}

export default function CakesCataloguePage() {
  return (
    <Suspense
      fallback={
        <div className="max-w-7xl mx-auto px-4 py-16 text-center">
          <p className="font-serif text-lg text-choco-700">
            Loading Amma Pastries BLR Catalogue...
          </p>
        </div>
      }
    >
      <CatalogueContent />
    </Suspense>
  );
}
