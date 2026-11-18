# Amma Pastries (ಅಮ್ಮ ಪೇಸ್ಟ್ರೀಸ್) – Premium Bakery & Cake Shop Website

A modern, mobile-first bakery and cake shop website crafted for **Amma Pastries** in **Bengaluru, Karnataka, India**, designed to showcase freshly baked celebration cakes, pastries, brownies, desserts, and cookies with direct **WhatsApp click-to-chat ordering**.

---

## 1. Quick Configuration Guide

### Update WhatsApp Number & Store Details (`config/business.ts`)
All business contact information, social links, and the single central WhatsApp number are stored in one file:
- Open `config/business.ts`
- Update `WHATSAPP_NUMBER = "91XXXXXXXXXX"` with your verified 10-digit Indian WhatsApp number prefixed by `91` (for example: `"919876543210"`).
- Update the clearly marked placeholders (`phoneDisplay`, `addressLine1`, `addressLine2`, `openingHours`, `googleMapsEmbedUrl`, and `social` links).

### Manage Products & Prices (`data/products.ts`)
All products are stored centrally in `data/products.ts`:
- **Add a new cake/pastry:** Add a new object to the `PRODUCTS` array.
- **Edit prices or weights:** Update the `price` and `sizes` array (`label`, `price`, `servings`).
- **Feature on Homepage:** Set `isBestseller: true` or `isCustomerFavourite: true`.
- **Temporarily disable a product:** Set `isAvailable: false`.

---

## 2. Features Included

- **Homepage:** Hero banner, 9 image-based category cards, Bestsellers grid, Special Offers section, *"Life is Better with Cake."* promotional banner, *"Why Choose Amma Pastries?"* 4 benefit cards, Customer Favourites, clearly labelled Sample Testimonials, Instagram-inspired gallery, and Newsletter UI.
- **Product Catalogue (`/cakes` & `/products`):** 13 bakery categories, instant search, price range filter, popularity & price sorting, Bestseller toggle, and a Custom Cake WhatsApp Enquiry studio.
- **Product Detail Pages (`/products/[id]`):** Interactive multi-image gallery, dynamic size/weight selector that updates pricing in real time, quantity selector, Egg/Eggless selector, custom cake message field, preferred delivery date picker, live WhatsApp message preview, Related Products, and Recently Viewed products.
- **Shopping Bag & Wishlist (`/cart` & Slide-out Drawers):** Persistent `localStorage` cart and wishlist, in-cart weight/size switcher with automatic price updates, and full-cart WhatsApp ordering.
- **SEO & Structured Data:** Page-specific metadata, Open Graph tags, `LocalBusiness` (`Bakery`) and `Product` JSON-LD structured data, `sitemap.xml`, and `robots.txt`.

---

## 3. Running Locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000` in your browser.
