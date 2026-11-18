/**
 * Central Business Configuration for Amma Pastries BLR
 * Edit this single file to update WhatsApp number, contact details,
 * social links, and store details across the entire website.
 */

export const WHATSAPP_NUMBER = "918861459597";

export const BUSINESS_CONFIG = {
  name: "Amma Pastries BLR",
  kannadaName: "ಅಮ್ಮ ಪೇಸ್ಟ್ರೀಸ್",
  tagline: "Every Celebration Deserves Something Sweet.",
  subheadline: "Freshly baked happiness, crafted with love at Amma Pastries BLR.",
  type: "Bakery and Cake Shop",
  neighbourhood: "Electronic City",
  city: "Bengaluru",
  state: "Karnataka",
  postalCode: "560105",
  country: "India",
  fullLocation: "Electronic City, Bengaluru, Karnataka 560105",
  websiteUrl: "https://ammapastriesblr.in",

  // Central WhatsApp Configuration
  whatsappNumber: WHATSAPP_NUMBER,
  whatsappDisplay: "+91 88614 59597",

  // Verified Address & Hours from Google Business Profile
  addressLine1: "Ground Floor, JP Complex, 156/35, Hulimangala Main Rd",
  addressLine2: "Vinayaka Layout, Electronic City, Bengaluru, Karnataka 560105",
  fullAddress:
    "Ground Floor, JP Complex, 156/35, Hulimangala Main Rd, Vinayaka Layout, Electronic City, Bengaluru, Karnataka 560105",
  openingHours: "Open Daily · Closes 11:00 PM (Delivery until 10:00 PM)",
  googleMapsEmbedUrl:
    "https://www.google.com/maps?q=Ground+Floor,+JP+Complex,+156/35,+Hulimangala+Main+Rd,+Vinayaka+Layout,+Electronic+City,+Bengaluru,+Karnataka+560105&output=embed",
  googleMapsLink:
    "https://www.google.com/maps/search/?api=1&query=Amma+Pastries+BLR+Ground+Floor+JP+Complex+156%2F35+Hulimangala+Main+Rd+Vinayaka+Layout+Electronic+City+Bengaluru+Karnataka+560105",

  // Verified Contact Details
  phoneDisplay: "+91 88614 59597",
  phoneHref: "tel:+918861459597",
  email: "hello@ammapastriesblr.in",

  // Social Media Links
  social: {
    instagram: "https://instagram.com/",
    instagramHandle: "@ammapastriesblr",
    facebook: "https://facebook.com/",
    whatsappPrompt: "Chat with us on WhatsApp for cake availability & custom orders",
  },

  // Currency
  currencySymbol: "₹",
  currencyCode: "INR",
} as const;
