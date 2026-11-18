import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { HOMEPAGE_CATEGORIES } from "@/data/categories";

export default function CategoryGrid() {
  return (
    <section className="py-14 sm:py-18 bg-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-saffron-600">
              Shop By Category
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl font-bold text-choco-900 mt-1">
              What Are We Celebrating Today?
            </h2>
            <p className="text-sm sm:text-base text-choco-600 mt-1.5">
              Handcrafted cakes, pastries, and bakery favourites for every occasion.
            </p>
          </div>
          <Link
            href="/cakes"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-saffron-600 hover:text-choco-900 transition-colors"
          >
            <span>View Full Catalogue (13 Categories)</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 9 Image-Based Category Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4 sm:gap-6">
          {HOMEPAGE_CATEGORIES.map((category) => (
            <Link
              key={category.id}
              href={`/cakes?category=${encodeURIComponent(category.name)}`}
              className="group relative rounded-2xl sm:rounded-3xl overflow-hidden bg-cream-100 border border-cream-300/80 shadow-soft hover:shadow-elevated transition-all duration-300 flex flex-col"
            >
              <div className="relative aspect-[16/11] w-full overflow-hidden bg-choco-900">
                <img
                  src={category.image}
                  alt={category.name}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-choco-950/75 via-choco-950/20 to-transparent" />
                {category.badge && (
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-cream-50/95 text-choco-900 text-[11px] font-bold shadow-xs">
                    {category.badge}
                  </span>
                )}
                <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between text-cream-50">
                  <div>
                    <h3 className="font-serif text-base sm:text-xl font-bold leading-snug group-hover:text-gold-300 transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-[11px] sm:text-xs text-cream-200/90 line-clamp-1 hidden sm:block">
                      {category.tagline}
                    </p>
                  </div>
                  <span className="w-8 h-8 rounded-full bg-cream-50/20 backdrop-blur-xs group-hover:bg-saffron-500 text-white flex items-center justify-center shrink-0 transition-colors">
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
