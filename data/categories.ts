export type ProductCategoryName =
  | "Chocolate Cakes"
  | "Cheesecakes & Specialty Cakes"
  | "Vanilla & Fruit Cakes"
  | "Birthday Cakes"
  | "Pastries, Doughnuts & Brownies"
  | "Cream Buns & Dilpasand"
  | "Puffs, Rolls & Sandwiches"
  | "Tea Cakes, Plum Cakes & Breads"
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
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Rich_Chocolate_Truffle_Cake_by_Ramesh_Bakery_in_Bhopal_Madhya_Pradesh.jpg/960px-Rich_Chocolate_Truffle_Cake_by_Ramesh_Bakery_in_Bhopal_Madhya_Pradesh.jpg",
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
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Rasmalai_Cake_with_Pistachio_Garnish_and_Rasmalai_on_it.jpg/960px-Rasmalai_Cake_with_Pistachio_Garnish_and_Rasmalai_on_it.jpg",
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
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Butterscotch_cake.jpg/960px-Butterscotch_cake.jpg",
    showOnHomepage: true,
    homepageOrder: 3,
    badge: "From ₹350 / ½ kg",
  },
  {
    id: "cat-puffs-rolls-sandwiches",
    name: "Puffs, Rolls & Sandwiches",
    slug: "Puffs, Rolls & Sandwiches",
    tagline: "Veg/Egg/Paneer Puffs, Egg & Paneer Rolls, Aloo Bun & Bread Sandwich",
    description:
      "Hot and flaky bakery Veg Puff, Egg Puff, Paneer Puff, Aloo Bun, Bread Sandwich, Egg Roll, and Paneer Roll.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Chai_and_Veg_Puff.jpg/960px-Chai_and_Veg_Puff.jpg",
    showOnHomepage: true,
    homepageOrder: 4,
    badge: "₹25 – ₹40",
  },
  {
    id: "cat-pastries-doughnuts",
    name: "Pastries, Doughnuts & Brownies",
    slug: "Pastries, Doughnuts & Brownies",
    tagline: "Lava Cake, Brownie, Doughnuts & Butter Cream Cake Slices (₹20 – ₹50)",
    description:
      "Quick bakery indulgences including Choco Lava Cake, Fudgy Brownie, Doughnuts, Mini Doughnuts, and Butter Cream Cake slices.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Chocolate_lava_cake.jpg/960px-Chocolate_lava_cake.jpg",
    showOnHomepage: true,
    homepageOrder: 5,
    badge: "₹20 – ₹50",
  },
  {
    id: "cat-teacakes-breads",
    name: "Tea Cakes, Plum Cakes & Breads",
    slug: "Tea Cakes, Plum Cakes & Breads",
    tagline: "Ghee Cake, Carrot Dry Fruits, Fruit Plum Cake, Crush Cake, Milk & Wheat Bread",
    description:
      "Rich Ghee Cake, Carrot Dry Fruits Cake, Fruit Plum Cake, Crush Cake, and freshly baked Milk Bread, Wheat Bread, and Buns.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Fruit_cake%281%29.jpg/960px-Fruit_cake%281%29.jpg",
    showOnHomepage: true,
    homepageOrder: 6,
    badge: "₹50 – ₹110",
  },
  {
    id: "cat-cream-buns-dilpasand",
    name: "Cream Buns & Dilpasand",
    slug: "Cream Buns & Dilpasand",
    tagline: "Special Dilpasand, Vanilla/Chocolate/Blueberry Cream Buns & Jam Buns",
    description:
      "Bengaluru bakery classics: flaky Dilpasand, Choco Buns, Jam Buns, and freshly filled Cream Buns.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Bun-Maska.jpg/960px-Bun-Maska.jpg",
    showOnHomepage: true,
    homepageOrder: 7,
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
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Cashew_Cookies_-_Oxford_Bookstore_-_Kolkata_2015-08-23_3612.JPG/960px-Cashew_Cookies_-_Oxford_Bookstore_-_Kolkata_2015-08-23_3612.JPG",
    showOnHomepage: true,
    homepageOrder: 8,
    badge: "₹110 / 250g",
  },
  {
    id: "cat-mixtures-namkeen",
    name: "Mixtures & Savoury Namkeen",
    slug: "Mixtures & Savoury Namkeen",
    tagline: "Tomato/Garlic/Butter Murukku, Avarebele, Sev/Garlic/Bombe/Boondi Mixtures",
    description:
      "Crunchy Karnataka murukkus, Avarebele, mixtures, and namkeen packs freshly prepared for evening snacking.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Chakli_%28Indian_snack%29.jpg/960px-Chakli_%28Indian_snack%29.jpg",
    showOnHomepage: true,
    homepageOrder: 9,
    badge: "₹60 – ₹90",
  },
  {
    id: "cat-rusks-traditional",
    name: "Rusks & Traditional Bakes",
    slug: "Rusks & Traditional Bakes",
    tagline: "Rose Cookies, Milk & Stick Rusk, Baked Nippattu, Bombe Kaari & Chikki",
    description:
      "Rose Cookies, Special Milk Rusk, Stick Rusk, oil-free baked Nippattu, Bombe Kaari, Shankarpalya sweet, and Sesame/Peanut Chikki.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Rose_cookies_Achu_Murukku.JPG/960px-Rose_cookies_Achu_Murukku.JPG",
    showOnHomepage: false,
    badge: "₹60 – ₹100",
  },
  {
    id: "cat-chips-peanuts",
    name: "Chips & Roasted Peanuts",
    slug: "Chips & Roasted Peanuts",
    tagline: "Potato & Banana Chips, Congress Peanuts, Chintamani Peanuts & Chana",
    description:
      "Crispy Potato Chips, Banana Chips, Tapioca Chips, Congress Peanuts, Chintamani Peanuts, and Roasted Chana.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Congress_Kadlekai.jpg/960px-Congress_Kadlekai.jpg",
    showOnHomepage: false,
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
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Black_forest_Cake.jpg/960px-Black_forest_Cake.jpg",
    showOnHomepage: false,
  },
];

export const HOMEPAGE_CATEGORIES = CATEGORIES.filter((c) => c.showOnHomepage).sort(
  (a, b) => (a.homepageOrder ?? 99) - (b.homepageOrder ?? 99)
);
