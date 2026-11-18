import React from "react";
import Link from "next/link";
import { Cake, ArrowLeft, Search } from "lucide-react";

export default function NotFound() {
  return (
    <div className="py-20 px-4 text-center">
      <div className="max-w-lg mx-auto bg-white rounded-3xl border border-cream-300 p-8 sm:p-12 shadow-soft space-y-5">
        <div className="w-16 h-16 rounded-full bg-cream-100 text-saffron-600 flex items-center justify-center mx-auto">
          <Cake className="w-8 h-8" />
        </div>
        <span className="text-xs font-bold uppercase tracking-widest text-saffron-600">
          404 • Page Not Found
        </span>
        <h1 className="font-serif text-2xl sm:text-4xl font-bold text-choco-900">
          Oops! This Slice Went Missing
        </h1>
        <p className="text-sm text-choco-600 leading-relaxed">
          We could not find the page you were looking for, but our ovens are
          warm and our cake catalogue is full of sweet creations!
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-choco-900 hover:bg-choco-800 text-cream-50 font-semibold text-sm transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Homepage</span>
          </Link>
          <Link
            href="/cakes"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-cream-100 hover:bg-cream-200 text-choco-900 border border-cream-300 font-semibold text-sm transition-colors"
          >
            <Search className="w-4 h-4" />
            <span>Browse All Cakes</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
