export type ProductCategoryName =
  | "Chocolate Cakes"
  | "Cheesecakes & Specialty Cakes"
  | "Vanilla & Fruit Cakes"
  | "Birthday Cakes"
  | "Pastries, Doughnuts & Brownies"
  | "Cream Buns & Dilpasand"
  | "Bakery Biscuits & Cookies"
  | "Rusks & Traditional Bakes"
  | "Mixtures & Savoury Namkeen"
  | "Chips & Roasted Peanuts";

export interface CategoryInfo {
  id: string;
  name: ProductCategoryName;
  slug: string;
  tagline: string;
  description: string;
  image: string;
  showOnHomepage: boolean;
  homepageOrder?: number;
  badge?: string;
}

export const CATEGORIES: CategoryInfo[] = [
  {
    id: "cat-chocolate-cakes",
    name: "Chocolate Cakes",
    slug: "Chocolate Cakes",
    tagline: "Choco Truffle, Black Forest, Dark Chocolate & more (₹400 – ₹450 / ½ kg)",
    description:
      "Rich half-kg and full-kg chocolate celebration cakes including Choco Truffle, Black Forest, Dark Chocolate, Choco Almond, Choco Butterscotch, and Choco Chips.",
    image:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=85",
    showOnHomepage: true,
    homepageOrder: 1,
    badge: "From ₹400 / ½ kg",
  },
  {
    id: "cat-cheesecakes-specialty",
    name: "Cheesecakes & Specialty Cakes",
    slug: "Cheesecakes & Specialty Cakes",
    tagline: "Red Velvet, Oreo, Rasmalai, Pista, Irish Coffee & Galaxy Cheesecakes",
    description:
      "Signature cheesecakes and fusion celebration cakes including Rasmalai, Pista, Red Velvet Cheesecake, Oreo Cheesecake, Rainbow, Triple Queen, and Galaxy Cheesecake.",
    image:
      "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=800&q=85",
    showOnHomepage: true,
    homepageOrder: 2,
    badge: "₹400 – ₹450 / ½ kg",
  },
  {
    id: "cat-vanilla-fruit-cakes",
    name: "Vanilla & Fruit Cakes",
    slug: "Vanilla & Fruit Cakes",
    tagline: "White Forest, Butterscotch, Pineapple, Blueberry, Mango & Strawberry",
    description:
      "Fresh fruit and classic vanilla celebration cakes starting at ₹350 per ½ kg.",
    image:
      "https://images.unsplash.com/photo-1542826438-bd32f43d626f?auto=format&fit=crop&w=800&q=85",
    showOnHomepage: true,
    homepageOrder: 3,
    badge: "From ₹350 / ½ kg",
  },
  {
    id: "cat-pastries-doughnuts",
    name: "Pastries, Doughnuts & Brownies",
    slug: "Pastries, Doughnuts & Brownies",
    tagline: "Lava Cake, Brownie, Doughnuts & Butter Cream Cake Slices (₹20 – ₹50)",
    description:
      "Quick bakery indulgences including Choco Lava Cake, Fudgy Brownie, Doughnuts, Mini Doughnuts, and Butter Cream Cake slices.",
    image:
      "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=800&q=85",
    showOnHomepage: true,
    homepageOrder: 4,
    badge: "₹20 – ₹50",
  },
  {
    id: "cat-cream-buns-dilpasand",
    name: "Cream Buns & Dilpasand",
    slug: "Cream Buns & Dilpasand",
    tagline: "Special Dilpasand, Vanilla/Chocolate/Blueberry Cream Buns & Jam Buns",
    description:
      "Bengaluru bakery classics: flaky Dilpasand, Choco Buns, Jam Buns, and freshly filled Cream Buns.",
    image:
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=85",
    showOnHomepage: true,
    homepageOrder: 5,
    badge: "Bengaluru Classics",
  },
  {
    id: "cat-bakery-biscuits",
    name: "Bakery Biscuits & Cookies",
    slug: "Bakery Biscuits & Cookies",
    tagline: "Cashew, Almond, Masala Khara, Ragi, Coconut, Butter & Salt Biscuits",
    description:
      "Crisp, freshly baked 250g biscuit packs at ₹110—perfect for tea and filter coffee.",
    image:
      "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=800&q=85",
    showOnHomepage: true,
    homepageOrder: 6,
    badge: "₹110 / 250g",
  },
  {
    id: "cat-rusks-traditional",
    name: "Rusks & Traditional Bakes",
    slug: "Rusks & Traditional Bakes",
    tagline: "Milk & Stick Rusk, Baked Nippattu, Bombe Kaari, Shankarpalya & Chikki",
    description:
      "Special Milk Rusk, Stick Rusk, oil-free baked Nippattu, Bombe Kaari, Shankarpalya sweet, and Sesame/Peanut Chikki.",
    image:
      "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=800&q=85",
    showOnHomepage: true,
    homepageOrder: 7,
    badge: "₹80 – ₹100",
  },
  {
    id: "cat-mixtures-namkeen",
    name: "Mixtures & Savoury Namkeen",
    slug: "Mixtures & Savoury Namkeen",
    tagline: "Sev, Garlic, Bombe, Boondi & Big Mixture, Round Nippattu & Moong Dal",
    description:
      "Crunchy Karnataka mixtures and namkeen packs freshly prepared for evening snacking.",
    image:
      "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=85",
    showOnHomepage: true,
    homepageOrder: 8,
    badge: "₹60 – ₹90",
  },
  {
    id: "cat-chips-peanuts",
    name: "Chips & Roasted Peanuts",
    slug: "Chips & Roasted Peanuts",
    tagline: "Potato & Banana Chips, Congress Peanuts, Chintamani Peanuts & Chana",
    description:
      "Crispy Potato Chips, Banana Chips, Tapioca Chips, Congress Peanuts, Chintamani Peanuts, and Roasted Chana.",
    image:
      "https://images.unsplash.com/photo-1566478989037-eec170784d0b?auto=format&fit=crop&w=800&q=85",
    showOnHomepage: true,
    homepageOrder: 9,
    badge: "₹50 – ₹100",
  },
  {
    id: "cat-birthday-cakes",
    name: "Birthday Cakes",
    slug: "Birthday Cakes",
    tagline: "All 24 Half-Kg & 1-Kg Celebration Cakes",
    description:
      "Browse all 24 flavours of our freshly baked celebration cakes for birthdays and anniversaries.",
    image:
      "https://images.unsplash.com/photo-1558301211-0d8c8ddee6ec?auto=format&fit=crop&w=800&q=85",
    showOnHomepage: false,
  },
];

export const HOMEPAGE_CATEGORIES = CATEGORIES.filter((c) => c.showOnHomepage).sort(
  (a, b) => (a.homepageOrder ?? 99) - (b.homepageOrder ?? 99)
);
