import { ProductCategoryName } from "./categories";

export interface ProductSizeOption {
  label: string;
  price: number;
  servings?: string;
}

export interface Product {
  id: string;
  name: string;
  category: ProductCategoryName;
  secondaryCategories?: ProductCategoryName[];
  description: string;
  image: string;
  gallery: string[];
  price: number;
  sizes: ProductSizeOption[];
  isBestseller: boolean;
  isCustomerFavourite?: boolean;
  isAvailable: boolean;
  allowEggSelection: boolean;
  allowCustomMessage: boolean;
  popularityScore: number;
  tags: string[];
}

function makeCakeSizes(halfKgPrice: number): ProductSizeOption[] {
  return [
    { label: "½ kg (500 g)", price: halfKgPrice, servings: "Serves 4–6" },
    { label: "1 kg", price: halfKgPrice * 2, servings: "Serves 8–10" },
    { label: "2 kg", price: halfKgPrice * 4, servings: "Serves 18–20" },
  ];
}

function makePieceSizes(
  unitPrice: number,
  unitLabel = "1 Piece"
): ProductSizeOption[] {
  return [
    { label: unitLabel, price: unitPrice, servings: "Single Serve" },
    { label: "Pack of 2", price: unitPrice * 2, servings: "2 Pieces" },
    { label: "Box of 4", price: unitPrice * 4, servings: "4 Pieces" },
  ];
}

function makeGramSizes(
  basePrice: number,
  baseGram: "150 g" | "200 g" | "250 g"
): ProductSizeOption[] {
  if (baseGram === "250 g") {
    return [
      { label: "250 g", price: basePrice, servings: "250 g Pack" },
      { label: "500 g", price: basePrice * 2, servings: "500 g Pack" },
      { label: "1 kg", price: basePrice * 4, servings: "1 kg Family Pack" },
    ];
  }
  if (baseGram === "200 g") {
    return [
      { label: "200 g", price: basePrice, servings: "200 g Pack" },
      { label: "400 g (2 Packs)", price: basePrice * 2, servings: "400 g" },
    ];
  }
  return [
    { label: "150 g", price: basePrice, servings: "150 g Pack" },
    { label: "300 g (2 Packs)", price: basePrice * 2, servings: "300 g" },
  ];
}

/**
 * COMPLETE OFFICIAL MENU FOR AMMA PASTRIES BLR (75 PRODUCTS)
 * Every product uses an authentic, real camera food photograph (zero AI-generated images).
 */
export const PRODUCTS: Product[] = [
  // ============================================================================
  // 1. CHOCOLATE CAKES (7 Cakes: ₹400 – ₹450 per ½ kg)
  // ============================================================================
  {
    id: "choco-truffle-cake",
    name: "Choco Truffle Cake",
    category: "Chocolate Cakes",
    secondaryCategories: ["Birthday Cakes"],
    description:
      "Rich chocolate sponge layered with smooth chocolate truffle ganache. Freshly prepared at Amma Pastries BLR for birthdays and special celebrations.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Rich_Chocolate_Truffle_Cake_by_Ramesh_Bakery_in_Bhopal_Madhya_Pradesh.jpg/960px-Rich_Chocolate_Truffle_Cake_by_Ramesh_Bakery_in_Bhopal_Madhya_Pradesh.jpg",
    gallery: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Rich_Chocolate_Truffle_Cake_by_Ramesh_Bakery_in_Bhopal_Madhya_Pradesh.jpg/960px-Rich_Chocolate_Truffle_Cake_by_Ramesh_Bakery_in_Bhopal_Madhya_Pradesh.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Chocolate_truffle_cake.jpg/960px-Chocolate_truffle_cake.jpg",
    ],
    price: 400,
    sizes: makeCakeSizes(400),
    isBestseller: true,
    isCustomerFavourite: true,
    isAvailable: true,
    allowEggSelection: true,
    allowCustomMessage: true,
    popularityScore: 100,
    tags: ["chocolate cake", "choco truffle", "birthday cake", "half kg"],
  },
  {
    id: "black-forest-cake",
    name: "Black Forest Cake",
    category: "Chocolate Cakes",
    secondaryCategories: ["Birthday Cakes"],
    description:
      "Classic chocolate sponge layered with whipped cream, cherry filling, and generous chocolate shavings on top.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Black_forest_Cake.jpg/960px-Black_forest_Cake.jpg",
    gallery: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Black_forest_Cake.jpg/960px-Black_forest_Cake.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Black_Forest_gateau.jpg/960px-Black_Forest_gateau.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Black_Forest_cake_4.jpg/960px-Black_Forest_cake_4.jpg",
    ],
    price: 400,
    sizes: makeCakeSizes(400),
    isBestseller: true,
    isCustomerFavourite: true,
    isAvailable: true,
    allowEggSelection: true,
    allowCustomMessage: true,
    popularityScore: 99,
    tags: ["black forest", "block forest", "chocolate cake", "birthday cake"],
  },
  {
    id: "dark-chocolate-cake",
    name: "Dark Chocolate Cake",
    category: "Chocolate Cakes",
    secondaryCategories: ["Birthday Cakes"],
    description:
      "Indulgent dark chocolate celebration cake finished with deep cocoa frosting and dark chocolate curls.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Chocolate_cake_iced_with_melted_dark_chocolate.jpg/960px-Chocolate_cake_iced_with_melted_dark_chocolate.jpg",
    gallery: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Chocolate_cake_iced_with_melted_dark_chocolate.jpg/960px-Chocolate_cake_iced_with_melted_dark_chocolate.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Brown_Chocolate_Cake.jpg/960px-Brown_Chocolate_Cake.jpg",
    ],
    price: 450,
    sizes: makeCakeSizes(450),
    isBestseller: true,
    isCustomerFavourite: true,
    isAvailable: true,
    allowEggSelection: true,
    allowCustomMessage: true,
    popularityScore: 97,
    tags: ["dark chocolate cake", "chocolate cake", "birthday cake"],
  },
  {
    id: "choco-butterscotch-cake",
    name: "Choco Butterscotch Cake",
    category: "Chocolate Cakes",
    secondaryCategories: ["Birthday Cakes"],
    description:
      "Moist chocolate cake paired with golden butterscotch cream and crunchy caramel praline.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Chocolate_Butterscotch_cake.jpg/960px-Chocolate_Butterscotch_cake.jpg",
    gallery: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Chocolate_Butterscotch_cake.jpg/960px-Chocolate_Butterscotch_cake.jpg",
    ],
    price: 400,
    sizes: makeCakeSizes(400),
    isBestseller: false,
    isCustomerFavourite: true,
    isAvailable: true,
    allowEggSelection: true,
    allowCustomMessage: true,
    popularityScore: 92,
    tags: ["choco butterscotch", "chocolate cake", "butterscotch", "birthday cake"],
  },
  {
    id: "choco-almond-cake",
    name: "Choco Almond Cake",
    category: "Chocolate Cakes",
    secondaryCategories: ["Birthday Cakes"],
    description:
      "Smooth chocolate cream cake topped and layered with roasted almond flakes.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Almond_chocolate_cake.jpg/960px-Almond_chocolate_cake.jpg",
    gallery: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Almond_chocolate_cake.jpg/960px-Almond_chocolate_cake.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/IKEA_chocolate_almond_cake.jpg/960px-IKEA_chocolate_almond_cake.jpg",
    ],
    price: 400,
    sizes: makeCakeSizes(400),
    isBestseller: false,
    isCustomerFavourite: false,
    isAvailable: true,
    allowEggSelection: true,
    allowCustomMessage: true,
    popularityScore: 90,
    tags: ["choco almond", "almond cake", "chocolate cake", "birthday cake"],
  },
  {
    id: "choco-fruits-and-nuts-cake",
    name: "Choco Fruits & Nuts Cake",
    category: "Chocolate Cakes",
    secondaryCategories: ["Birthday Cakes"],
    description:
      "Rich chocolate celebration cake studded with mixed fruits and crunchy nuts in every slice.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Mocha_almond_fudge_avocado_cake_%284673005762%29.jpg/960px-Mocha_almond_fudge_avocado_cake_%284673005762%29.jpg",
    gallery: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Mocha_almond_fudge_avocado_cake_%284673005762%29.jpg/960px-Mocha_almond_fudge_avocado_cake_%284673005762%29.jpg",
    ],
    price: 400,
    sizes: makeCakeSizes(400),
    isBestseller: false,
    isCustomerFavourite: false,
    isAvailable: true,
    allowEggSelection: true,
    allowCustomMessage: true,
    popularityScore: 89,
    tags: ["choco fruits and nuts", "chocolate cake", "birthday cake"],
  },
  {
    id: "choco-chips-cake",
    name: "Choco Chips Cake",
    category: "Chocolate Cakes",
    secondaryCategories: ["Birthday Cakes"],
    description:
      "Soft chocolate sponge frosted with rich cream and loaded with crunchy chocolate chips.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Chocolate_Truffle_Cake_%285354498813%29.jpg/960px-Chocolate_Truffle_Cake_%285354498813%29.jpg",
    gallery: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Chocolate_Truffle_Cake_%285354498813%29.jpg/960px-Chocolate_Truffle_Cake_%285354498813%29.jpg",
    ],
    price: 400,
    sizes: makeCakeSizes(400),
    isBestseller: false,
    isCustomerFavourite: true,
    isAvailable: true,
    allowEggSelection: true,
    allowCustomMessage: true,
    popularityScore: 91,
    tags: ["choco chips", "chocolate cake", "birthday cake"],
  },

  // ============================================================================
  // 2. CHEESECAKES & SPECIALTY CAKES (10 Cakes: ₹400 – ₹450 per ½ kg)
  // ============================================================================
  {
    id: "rasmalai-cake",
    name: "Rasmalai Cake",
    category: "Cheesecakes & Specialty Cakes",
    secondaryCategories: ["Birthday Cakes"],
    description:
      "Signature Indian fusion celebration cake infused with aromatic cardamom, saffron milk notes, and pistachio garnish.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Rasmalai_Cake_with_Pistachio_Garnish_and_Rasmalai_on_it.jpg/960px-Rasmalai_Cake_with_Pistachio_Garnish_and_Rasmalai_on_it.jpg",
    gallery: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Rasmalai_Cake_with_Pistachio_Garnish_and_Rasmalai_on_it.jpg/960px-Rasmalai_Cake_with_Pistachio_Garnish_and_Rasmalai_on_it.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Rasamalai_Cake.jpg/960px-Rasamalai_Cake.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/f/f7/RASMALAI_CHEESE_CAKE.jpg",
    ],
    price: 400,
    sizes: makeCakeSizes(400),
    isBestseller: true,
    isCustomerFavourite: true,
    isAvailable: true,
    allowEggSelection: true,
    allowCustomMessage: true,
    popularityScore: 98,
    tags: ["rasmalai cake", "specialty cake", "birthday cake", "fusion cake"],
  },
  {
    id: "pista-cake",
    name: "Pista Cake",
    category: "Cheesecakes & Specialty Cakes",
    secondaryCategories: ["Birthday Cakes"],
    description:
      "Delicate pistachio-flavoured sponge layered with creamy pista frosting and crushed pistachios.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Pistachio_Cake.jpg/960px-Pistachio_Cake.jpg",
    gallery: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Pistachio_Cake.jpg/960px-Pistachio_Cake.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Pistachio_cake_-_Garden_Caf%C3%A9_Brighton_2023-12-30.jpg/960px-Pistachio_cake_-_Garden_Caf%C3%A9_Brighton_2023-12-30.jpg",
    ],
    price: 400,
    sizes: makeCakeSizes(400),
    isBestseller: false,
    isCustomerFavourite: false,
    isAvailable: true,
    allowEggSelection: true,
    allowCustomMessage: true,
    popularityScore: 88,
    tags: ["pista cake", "pistachio", "birthday cake"],
  },
  {
    id: "red-velvet-cheesecake",
    name: "Red Velvet Cheesecake",
    category: "Cheesecakes & Specialty Cakes",
    secondaryCategories: ["Birthday Cakes"],
    description:
      "Crimson red velvet layers paired with smooth, creamy cheesecake frosting for birthdays and anniversaries.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Red_Velvet_Cake_Waldorf_Astoria.jpg/960px-Red_Velvet_Cake_Waldorf_Astoria.jpg",
    gallery: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Red_Velvet_Cake_Waldorf_Astoria.jpg/960px-Red_Velvet_Cake_Waldorf_Astoria.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Red_velvet_cake_slice.jpg/960px-Red_velvet_cake_slice.jpg",
    ],
    price: 450,
    sizes: makeCakeSizes(450),
    isBestseller: true,
    isCustomerFavourite: true,
    isAvailable: true,
    allowEggSelection: true,
    allowCustomMessage: true,
    popularityScore: 98,
    tags: ["red velvet cheesecake", "red velvet", "cheesecake", "birthday cake"],
  },
  {
    id: "oreo-cheesecake",
    name: "Oreo Cheesecake",
    category: "Cheesecakes & Specialty Cakes",
    secondaryCategories: ["Birthday Cakes"],
    description:
      "Creamy cheesecake celebration cake topped with crushed Oreo cookies and chocolate drizzle.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Cheesecake_Chocolate_Oreo_Desert_at_Chip%27d.jpg/960px-Cheesecake_Chocolate_Oreo_Desert_at_Chip%27d.jpg",
    gallery: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Cheesecake_Chocolate_Oreo_Desert_at_Chip%27d.jpg/960px-Cheesecake_Chocolate_Oreo_Desert_at_Chip%27d.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/f/f0/Oreo_mini_cheesecake.jpg",
    ],
    price: 450,
    sizes: makeCakeSizes(450),
    isBestseller: true,
    isCustomerFavourite: true,
    isAvailable: true,
    allowEggSelection: true,
    allowCustomMessage: true,
    popularityScore: 96,
    tags: ["oreo cheesecake", "cheesecake", "chocolate", "birthday cake"],
  },
  {
    id: "rainbow-cheesecake",
    name: "Rainbow Cheesecake",
    category: "Cheesecakes & Specialty Cakes",
    secondaryCategories: ["Birthday Cakes"],
    description:
      "Vibrant pastel rainbow cheesecake crafted to brighten birthdays and kids' celebrations.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Rainbow_Cake_Cutting.jpg/960px-Rainbow_Cake_Cutting.jpg",
    gallery: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Rainbow_Cake_Cutting.jpg/960px-Rainbow_Cake_Cutting.jpg",
    ],
    price: 450,
    sizes: makeCakeSizes(450),
    isBestseller: false,
    isCustomerFavourite: true,
    isAvailable: true,
    allowEggSelection: true,
    allowCustomMessage: true,
    popularityScore: 91,
    tags: ["rainbow cheesecake", "cheesecake", "birthday cake"],
  },
  {
    id: "triple-queen-cake",
    name: "Triple Queen Cake",
    category: "Cheesecakes & Specialty Cakes",
    secondaryCategories: ["Birthday Cakes"],
    description:
      "Amma Pastries BLR specialty Triple Queen three-layered celebration cake with trio flavour indulgence.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Three-layer_chocolate_and_raspberry_cake.jpg/960px-Three-layer_chocolate_and_raspberry_cake.jpg",
    gallery: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Three-layer_chocolate_and_raspberry_cake.jpg/960px-Three-layer_chocolate_and_raspberry_cake.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Three_layer_gourmet_birthday_cake.jpg/960px-Three_layer_gourmet_birthday_cake.jpg",
    ],
    price: 450,
    sizes: makeCakeSizes(450),
    isBestseller: false,
    isCustomerFavourite: true,
    isAvailable: true,
    allowEggSelection: true,
    allowCustomMessage: true,
    popularityScore: 90,
    tags: ["triple queen", "specialty cake", "birthday cake"],
  },
  {
    id: "classic-cheesecake",
    name: "Classic Cheesecake",
    category: "Cheesecakes & Specialty Cakes",
    secondaryCategories: ["Birthday Cakes"],
    description:
      "Smooth, velvety classic cheesecake crafted for cheesecake lovers.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Baked_New_York_Cheesecake%2C_The_Griffins_Hotel%2C_2024_%2801%29.jpg/960px-Baked_New_York_Cheesecake%2C_The_Griffins_Hotel%2C_2024_%2801%29.jpg",
    gallery: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Baked_New_York_Cheesecake%2C_The_Griffins_Hotel%2C_2024_%2801%29.jpg/960px-Baked_New_York_Cheesecake%2C_The_Griffins_Hotel%2C_2024_%2801%29.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Home_Made_Cheesecake.jpg/960px-Home_Made_Cheesecake.jpg",
    ],
    price: 450,
    sizes: makeCakeSizes(450),
    isBestseller: false,
    isCustomerFavourite: false,
    isAvailable: true,
    allowEggSelection: true,
    allowCustomMessage: true,
    popularityScore: 89,
    tags: ["cheesecake", "classic cheesecake", "birthday cake"],
  },
  {
    id: "irish-coffee-cheesecake",
    name: "Irish Coffee Cheesecake",
    category: "Cheesecakes & Specialty Cakes",
    secondaryCategories: ["Birthday Cakes"],
    description:
      "Aromatic coffee-infused cheesecake finished with smooth cream and cocoa dusting.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Coffee_walnut_cake_%286886305509%29.jpg/960px-Coffee_walnut_cake_%286886305509%29.jpg",
    gallery: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Coffee_walnut_cake_%286886305509%29.jpg/960px-Coffee_walnut_cake_%286886305509%29.jpg",
    ],
    price: 450,
    sizes: makeCakeSizes(450),
    isBestseller: false,
    isCustomerFavourite: false,
    isAvailable: true,
    allowEggSelection: true,
    allowCustomMessage: true,
    popularityScore: 88,
    tags: ["irish coffee cheesecake", "iris coffee cheesecake", "coffee cake", "cheesecake"],
  },
  {
    id: "galaxy-cheesecake",
    name: "Galaxy Cheesecake",
    category: "Cheesecakes & Specialty Cakes",
    secondaryCategories: ["Birthday Cakes"],
    description:
      "Showstopper glazed Galaxy Cheesecake designed for memorable celebrations.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Blueberry_cheesecake_from_Pepper_Stone_Bakery.jpg/960px-Blueberry_cheesecake_from_Pepper_Stone_Bakery.jpg",
    gallery: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Blueberry_cheesecake_from_Pepper_Stone_Bakery.jpg/960px-Blueberry_cheesecake_from_Pepper_Stone_Bakery.jpg",
    ],
    price: 450,
    sizes: makeCakeSizes(450),
    isBestseller: false,
    isCustomerFavourite: false,
    isAvailable: true,
    allowEggSelection: true,
    allowCustomMessage: true,
    popularityScore: 89,
    tags: ["galaxy cheesecake", "cheesecake", "birthday cake"],
  },
  {
    id: "chocolate-cheesecake",
    name: "Chocolate Cheesecake",
    category: "Cheesecakes & Specialty Cakes",
    secondaryCategories: ["Chocolate Cakes", "Birthday Cakes"],
    description:
      "Decadent blend of rich chocolate ganache and creamy cheesecake layers.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Chocolate_cheesecake_with_decoration.jpg/960px-Chocolate_cheesecake_with_decoration.jpg",
    gallery: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Chocolate_cheesecake_with_decoration.jpg/960px-Chocolate_cheesecake_with_decoration.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/0/05/04672_Chocolate_Cheesecake%2C_Sanok.JPG",
    ],
    price: 450,
    sizes: makeCakeSizes(450),
    isBestseller: false,
    isCustomerFavourite: true,
    isAvailable: true,
    allowEggSelection: true,
    allowCustomMessage: true,
    popularityScore: 92,
    tags: ["chocolate cheesecake", "cheesecake", "chocolate cake"],
  },

  // ============================================================================
  // 3. VANILLA & FRUIT CAKES (7 Cakes: ₹350 – ₹380 per ½ kg)
  // ============================================================================
  {
    id: "vanilla-white-forest-cake",
    name: "Vanilla White Forest Cake",
    category: "Vanilla & Fruit Cakes",
    secondaryCategories: ["Birthday Cakes"],
    description:
      "Soft vanilla sponge layered with whipped cream, sweet cherries, and snowy white chocolate flakes.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Black_and_White_Forest.jpg/960px-Black_and_White_Forest.jpg",
    gallery: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Black_and_White_Forest.jpg/960px-Black_and_White_Forest.jpg",
    ],
    price: 350,
    sizes: makeCakeSizes(350),
    isBestseller: true,
    isCustomerFavourite: true,
    isAvailable: true,
    allowEggSelection: true,
    allowCustomMessage: true,
    popularityScore: 96,
    tags: ["vanilla white forest", "white forest", "birthday cake", "vanilla cake"],
  },
  {
    id: "vanilla-butterscotch-cake",
    name: "Vanilla Butterscotch Cake",
    category: "Vanilla & Fruit Cakes",
    secondaryCategories: ["Birthday Cakes"],
    description:
      "Classic vanilla sponge layered with golden butterscotch cream, caramel drizzle, and crunchy praline.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Butterscotch_cake.jpg/960px-Butterscotch_cake.jpg",
    gallery: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Butterscotch_cake.jpg/960px-Butterscotch_cake.jpg",
    ],
    price: 380,
    sizes: makeCakeSizes(380),
    isBestseller: true,
    isCustomerFavourite: true,
    isAvailable: true,
    allowEggSelection: true,
    allowCustomMessage: true,
    popularityScore: 95,
    tags: ["vanilla butterscotch", "butterscotch cake", "birthday cake"],
  },
  {
    id: "fresh-pineapple-cake",
    name: "Fresh Pineapple Cake",
    category: "Vanilla & Fruit Cakes",
    secondaryCategories: ["Birthday Cakes"],
    description:
      "Light and airy sponge layered with freshly whipped cream and juicy pineapple compote.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Pineapple_Pastry.JPG/960px-Pineapple_Pastry.JPG",
    gallery: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Pineapple_Pastry.JPG/960px-Pineapple_Pastry.JPG",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Pineapple_cakes.jpg/960px-Pineapple_cakes.jpg",
    ],
    price: 380,
    sizes: makeCakeSizes(380),
    isBestseller: true,
    isCustomerFavourite: true,
    isAvailable: true,
    allowEggSelection: true,
    allowCustomMessage: true,
    popularityScore: 95,
    tags: ["fresh pineapple", "pineapple cake", "fruit cake", "birthday cake"],
  },
  {
    id: "vanilla-almond-cake",
    name: "Vanilla Almond Cake",
    category: "Vanilla & Fruit Cakes",
    secondaryCategories: ["Birthday Cakes"],
    description:
      "Smooth vanilla cream sponge generously garnished with toasted almond flakes.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Damp_lemon_and_almond_cake.jpg/960px-Damp_lemon_and_almond_cake.jpg",
    gallery: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Damp_lemon_and_almond_cake.jpg/960px-Damp_lemon_and_almond_cake.jpg",
    ],
    price: 380,
    sizes: makeCakeSizes(380),
    isBestseller: false,
    isCustomerFavourite: false,
    isAvailable: true,
    allowEggSelection: true,
    allowCustomMessage: true,
    popularityScore: 87,
    tags: ["vanilla almond", "almond cake", "birthday cake"],
  },
  {
    id: "blueberry-cake",
    name: "Blueberry Cake",
    category: "Vanilla & Fruit Cakes",
    secondaryCategories: ["Birthday Cakes"],
    description:
      "Soft vanilla sponge layered with berry cream and glossy blueberry compote.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Blueberry_cheesecake_at_the_Queen_of_Tarts_Cafe.jpg/960px-Blueberry_cheesecake_at_the_Queen_of_Tarts_Cafe.jpg",
    gallery: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Blueberry_cheesecake_at_the_Queen_of_Tarts_Cafe.jpg/960px-Blueberry_cheesecake_at_the_Queen_of_Tarts_Cafe.jpg",
    ],
    price: 380,
    sizes: makeCakeSizes(380),
    isBestseller: false,
    isCustomerFavourite: true,
    isAvailable: true,
    allowEggSelection: true,
    allowCustomMessage: true,
    popularityScore: 90,
    tags: ["blueberry", "blueberry cake", "fruit cake", "birthday cake"],
  },
  {
    id: "strawberry-cake",
    name: "Strawberry Cake",
    category: "Vanilla & Fruit Cakes",
    secondaryCategories: ["Birthday Cakes"],
    description:
      "Pretty pink strawberry cream cake with sweet strawberry crush layers.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Strawberry_Cake.JPG/960px-Strawberry_Cake.JPG",
    gallery: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Strawberry_Cake.JPG/960px-Strawberry_Cake.JPG",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Strawberry_cake%2C_Ehrenbach.jpg/960px-Strawberry_cake%2C_Ehrenbach.jpg",
    ],
    price: 380,
    sizes: makeCakeSizes(380),
    isBestseller: false,
    isCustomerFavourite: false,
    isAvailable: true,
    allowEggSelection: true,
    allowCustomMessage: true,
    popularityScore: 88,
    tags: ["strawberry", "strawberry cake", "fruit cake", "birthday cake"],
  },
  {
    id: "mango-cake",
    name: "Mango Cake",
    category: "Vanilla & Fruit Cakes",
    secondaryCategories: ["Birthday Cakes"],
    description:
      "Tropical mango glaze and mango cream layered over soft vanilla sponge.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Peach_Mango_Symphony_%28Red_Ribbon%29_-_Mango_cake_%28Philippines%29.jpg/960px-Peach_Mango_Symphony_%28Red_Ribbon%29_-_Mango_cake_%28Philippines%29.jpg",
    gallery: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Peach_Mango_Symphony_%28Red_Ribbon%29_-_Mango_cake_%28Philippines%29.jpg/960px-Peach_Mango_Symphony_%28Red_Ribbon%29_-_Mango_cake_%28Philippines%29.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Mango_Passion_cake_%28Red_Ribbon%2C_Philippines%29.jpg/960px-Mango_Passion_cake_%28Red_Ribbon%2C_Philippines%29.jpg",
    ],
    price: 380,
    sizes: makeCakeSizes(380),
    isBestseller: false,
    isCustomerFavourite: false,
    isAvailable: true,
    allowEggSelection: true,
    allowCustomMessage: true,
    popularityScore: 88,
    tags: ["mango", "mango cake", "fruit cake", "birthday cake"],
  },

  // ============================================================================
  // 4. PASTRIES, DOUGHNUTS & BROWNIES (7 Items: ₹20 – ₹50)
  // ============================================================================
  {
    id: "lava-cake",
    name: "Lava Cake",
    category: "Pastries, Doughnuts & Brownies",
    description:
      "Warm chocolate lava cake with a rich, molten chocolate centre.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Chocolate_lava_cake.jpg/960px-Chocolate_lava_cake.jpg",
    gallery: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Chocolate_lava_cake.jpg/960px-Chocolate_lava_cake.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Vegan_Flourless_Swiss_Chocolate_Molten_Lava_Cake_%284865230786%29.jpg/960px-Vegan_Flourless_Swiss_Chocolate_Molten_Lava_Cake_%284865230786%29.jpg",
    ],
    price: 50,
    sizes: makePieceSizes(50),
    isBestseller: true,
    isCustomerFavourite: true,
    isAvailable: true,
    allowEggSelection: false,
    allowCustomMessage: false,
    popularityScore: 97,
    tags: ["lava cake", "choco lava", "pastries", "brownies", "chocolate"],
  },
  {
    id: "brownie",
    name: "Brownie",
    category: "Pastries, Doughnuts & Brownies",
    description:
      "Fudgy chocolate brownie square baked fresh with deep cocoa richness.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Chocolate_brownies_without_table.jpg/960px-Chocolate_brownies_without_table.jpg",
    gallery: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Chocolate_brownies_without_table.jpg/960px-Chocolate_brownies_without_table.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Brownie_Crust.jpg/960px-Brownie_Crust.jpg",
    ],
    price: 50,
    sizes: makePieceSizes(50),
    isBestseller: true,
    isCustomerFavourite: true,
    isAvailable: true,
    allowEggSelection: false,
    allowCustomMessage: false,
    popularityScore: 96,
    tags: ["brownie", "brownies", "chocolate brownie", "pastries"],
  },
  {
    id: "doughnut",
    name: "Doughnut",
    category: "Pastries, Doughnuts & Brownies",
    description:
      "Soft, fluffy bakery doughnut dipped in glossy chocolate glaze.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Chocolate-glazed_doughnut_%281236451%29.jpg/960px-Chocolate-glazed_doughnut_%281236451%29.jpg",
    gallery: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Chocolate-glazed_doughnut_%281236451%29.jpg/960px-Chocolate-glazed_doughnut_%281236451%29.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Chocolate-glazed_doughnut_with_sprinkles_%287429937320%29.jpg/960px-Chocolate-glazed_doughnut_with_sprinkles_%287429937320%29.jpg",
    ],
    price: 40,
    sizes: makePieceSizes(40),
    isBestseller: true,
    isCustomerFavourite: true,
    isAvailable: true,
    allowEggSelection: false,
    allowCustomMessage: false,
    popularityScore: 94,
    tags: ["doughnut", "donut", "pastries", "chocolate"],
  },
  {
    id: "mini-doughnut",
    name: "Mini Doughnut",
    category: "Pastries, Doughnuts & Brownies",
    description:
      "Bite-sized glazed mini doughnut—ideal for kids and quick sweet cravings.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Mini_Donuts_-_panoramio.jpg/960px-Mini_Donuts_-_panoramio.jpg",
    gallery: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Mini_Donuts_-_panoramio.jpg/960px-Mini_Donuts_-_panoramio.jpg",
    ],
    price: 20,
    sizes: makePieceSizes(20),
    isBestseller: false,
    isCustomerFavourite: true,
    isAvailable: true,
    allowEggSelection: false,
    allowCustomMessage: false,
    popularityScore: 90,
    tags: ["mini doughnut", "donut", "pastries"],
  },
  {
    id: "butter-cream-cake-vanilla",
    name: "Butter Cream Cake Vanilla",
    category: "Pastries, Doughnuts & Brownies",
    description:
      "Classic bakery-style vanilla butter cream cake slice.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/0/04/Pound_layer_cake.jpg",
    gallery: [
      "https://upload.wikimedia.org/wikipedia/commons/0/04/Pound_layer_cake.jpg",
    ],
    price: 30,
    sizes: makePieceSizes(30, "1 Slice"),
    isBestseller: false,
    isCustomerFavourite: false,
    isAvailable: true,
    allowEggSelection: false,
    allowCustomMessage: false,
    popularityScore: 86,
    tags: ["butter cream cake vanilla", "pastries", "pastry slice", "vanilla"],
  },
  {
    id: "butter-cream-chocolate-cake",
    name: "Butter Cream Chocolate Cake",
    category: "Pastries, Doughnuts & Brownies",
    description:
      "Nostalgic chocolate butter cream cake slice topped with smooth cocoa frosting.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Vegan_Mocha_Almond_Fudge_Avocado_Cake_%284673005754%29.jpg/960px-Vegan_Mocha_Almond_Fudge_Avocado_Cake_%284673005754%29.jpg",
    gallery: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Vegan_Mocha_Almond_Fudge_Avocado_Cake_%284673005754%29.jpg/960px-Vegan_Mocha_Almond_Fudge_Avocado_Cake_%284673005754%29.jpg",
    ],
    price: 30,
    sizes: makePieceSizes(30, "1 Slice"),
    isBestseller: false,
    isCustomerFavourite: true,
    isAvailable: true,
    allowEggSelection: false,
    allowCustomMessage: false,
    popularityScore: 88,
    tags: ["butter cream chocolate cake", "pastries", "pastry slice", "chocolate"],
  },
  {
    id: "butter-cream-choco-fruits-and-nuts",
    name: "Butter Cream Choco Fruits & Nuts",
    category: "Pastries, Doughnuts & Brownies",
    description:
      "Chocolate butter cream cake slice topped with mixed fruit and nut bits.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/TortaPompadour.jpg/960px-TortaPompadour.jpg",
    gallery: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/TortaPompadour.jpg/960px-TortaPompadour.jpg",
    ],
    price: 30,
    sizes: makePieceSizes(30, "1 Slice"),
    isBestseller: false,
    isCustomerFavourite: false,
    isAvailable: true,
    allowEggSelection: false,
    allowCustomMessage: false,
    popularityScore: 85,
    tags: ["butter cream choco fruits and nuts", "pastries", "pastry slice"],
  },

  // ============================================================================
  // 5. CREAM BUNS & DILPASAND (6 Items: ₹30 – ₹100)
  // ============================================================================
  {
    id: "dilpasand",
    name: "Dilpasand",
    category: "Cream Buns & Dilpasand",
    description:
      "Iconic Bengaluru bakery special—flaky golden pastry filled with sweetened coconut, tutti-frutti, and dry fruits.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Danish_pastry.JPG/960px-Danish_pastry.JPG",
    gallery: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Danish_pastry.JPG/960px-Danish_pastry.JPG",
    ],
    price: 100,
    sizes: [
      { label: "1 Piece (Full Round)", price: 100, servings: "Shares 3–4" },
      { label: "Pack of 2", price: 200, servings: "2 Rounds" },
    ],
    isBestseller: true,
    isCustomerFavourite: true,
    isAvailable: true,
    allowEggSelection: false,
    allowCustomMessage: false,
    popularityScore: 98,
    tags: ["dilpasand", "dil pasand", "bengaluru bakery", "buns"],
  },
  {
    id: "vanilla-cream-bun",
    name: "Vanilla Cream Bun",
    category: "Cream Buns & Dilpasand",
    description:
      "Pillow-soft bakery bun generously filled with smooth vanilla cream.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Bun-Maska.jpg/960px-Bun-Maska.jpg",
    gallery: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Bun-Maska.jpg/960px-Bun-Maska.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Cream_bread_2.jpg/960px-Cream_bread_2.jpg",
    ],
    price: 30,
    sizes: makePieceSizes(30),
    isBestseller: false,
    isCustomerFavourite: true,
    isAvailable: true,
    allowEggSelection: false,
    allowCustomMessage: false,
    popularityScore: 91,
    tags: ["vanilla cream bun", "cream bun", "buns"],
  },
  {
    id: "chocolate-cream-bun",
    name: "Chocolate Cream Bun",
    category: "Cream Buns & Dilpasand",
    description:
      "Freshly baked soft bun filled with rich chocolate cream.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Bun-Bar-Line-Split.jpg/960px-Bun-Bar-Line-Split.jpg",
    gallery: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Bun-Bar-Line-Split.jpg/960px-Bun-Bar-Line-Split.jpg",
    ],
    price: 30,
    sizes: makePieceSizes(30),
    isBestseller: false,
    isCustomerFavourite: true,
    isAvailable: true,
    allowEggSelection: false,
    allowCustomMessage: false,
    popularityScore: 92,
    tags: ["chocolate cream bun", "cream bun", "buns"],
  },
  {
    id: "blueberry-cream-bun",
    name: "Blueberry Cream Bun",
    category: "Cream Buns & Dilpasand",
    description:
      "Soft bakery bun filled with fruity blueberry cream.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Maritozzo_con_panna.jpg/960px-Maritozzo_con_panna.jpg",
    gallery: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Maritozzo_con_panna.jpg/960px-Maritozzo_con_panna.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Freshly_baked_Roman_maritozzo.jpg/960px-Freshly_baked_Roman_maritozzo.jpg",
    ],
    price: 30,
    sizes: makePieceSizes(30),
    isBestseller: false,
    isCustomerFavourite: false,
    isAvailable: true,
    allowEggSelection: false,
    allowCustomMessage: false,
    popularityScore: 87,
    tags: ["blue berry cream bun", "blueberry cream bun", "cream bun"],
  },
  {
    id: "choco-bun",
    name: "Choco Bun",
    category: "Cream Buns & Dilpasand",
    description:
      "Soft chocolate-filled bakery bun freshly baked every day.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Chocolate_dirty_pastry_buns.jpg/960px-Chocolate_dirty_pastry_buns.jpg",
    gallery: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Chocolate_dirty_pastry_buns.jpg/960px-Chocolate_dirty_pastry_buns.jpg",
    ],
    price: 40,
    sizes: makePieceSizes(40),
    isBestseller: false,
    isCustomerFavourite: false,
    isAvailable: true,
    allowEggSelection: false,
    allowCustomMessage: false,
    popularityScore: 86,
    tags: ["choco bun", "chocolate bun", "buns"],
  },
  {
    id: "jam-bun",
    name: "Jam Bun",
    category: "Cream Buns & Dilpasand",
    description:
      "Classic bakery jam bun filled with sweet mixed fruit jam.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/c/cf/Bean-jam-bun%2Canpan%2Ckatori-city%2Cjapan.JPG",
    gallery: [
      "https://upload.wikimedia.org/wikipedia/commons/c/cf/Bean-jam-bun%2Canpan%2Ckatori-city%2Cjapan.JPG",
    ],
    price: 30,
    sizes: makePieceSizes(30),
    isBestseller: false,
    isCustomerFavourite: false,
    isAvailable: true,
    allowEggSelection: false,
    allowCustomMessage: false,
    popularityScore: 88,
    tags: ["jam bun", "buns"],
  },

  // ============================================================================
  // 6. BAKERY BISCUITS & COOKIES (11 Items: ₹110 per 250g)
  // ============================================================================
  {
    id: "cashew-biscuit",
    name: "Cashew Biscuit",
    category: "Bakery Biscuits & Cookies",
    description:
      "Crisp, golden bakery biscuits studded with roasted cashew bits.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Cashew_Cookies_-_Oxford_Bookstore_-_Kolkata_2015-08-23_3612.JPG/960px-Cashew_Cookies_-_Oxford_Bookstore_-_Kolkata_2015-08-23_3612.JPG",
    gallery: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Cashew_Cookies_-_Oxford_Bookstore_-_Kolkata_2015-08-23_3612.JPG/960px-Cashew_Cookies_-_Oxford_Bookstore_-_Kolkata_2015-08-23_3612.JPG",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Cashew_Cookies_-_Oxford_Bookstore_-_Kolkata_2015-08-23_3613.JPG/960px-Cashew_Cookies_-_Oxford_Bookstore_-_Kolkata_2015-08-23_3613.JPG",
    ],
    price: 110,
    sizes: makeGramSizes(110, "250 g"),
    isBestseller: true,
    isCustomerFavourite: true,
    isAvailable: true,
    allowEggSelection: false,
    allowCustomMessage: false,
    popularityScore: 93,
    tags: ["cashew biscuit", "cookies", "biscuits", "250g"],
  },
  {
    id: "masala-khara-biscuit",
    name: "Masala Khara Biscuit",
    category: "Bakery Biscuits & Cookies",
    description:
      "Traditional Karnataka spiced savoury khara biscuits—aromatic with curry leaves, chillies, and spices.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/5/57/Salt_%26_Pepper_%28UNNG-BBG-8%29_2.jpg",
    gallery: [
      "https://upload.wikimedia.org/wikipedia/commons/5/57/Salt_%26_Pepper_%28UNNG-BBG-8%29_2.jpg",
    ],
    price: 110,
    sizes: makeGramSizes(110, "250 g"),
    isBestseller: true,
    isCustomerFavourite: true,
    isAvailable: true,
    allowEggSelection: false,
    allowCustomMessage: false,
    popularityScore: 95,
    tags: ["masala khara biscuit", "khara biscuit", "cookies", "biscuits"],
  },
  {
    id: "ragi-biscuit",
    name: "Ragi Biscuit",
    category: "Bakery Biscuits & Cookies",
    description:
      "Wholesome finger-millet (ragi) bakery biscuits with a crisp, nutty crunch.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Ragi_Chocolate_Cookies.jpg/960px-Ragi_Chocolate_Cookies.jpg",
    gallery: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Ragi_Chocolate_Cookies.jpg/960px-Ragi_Chocolate_Cookies.jpg",
    ],
    price: 110,
    sizes: makeGramSizes(110, "250 g"),
    isBestseller: false,
    isCustomerFavourite: true,
    isAvailable: true,
    allowEggSelection: false,
    allowCustomMessage: false,
    popularityScore: 89,
    tags: ["ragi biscuit", "cookies", "biscuits"],
  },
  {
    id: "chocolate-biscuit",
    name: "Chocolate Biscuit",
    category: "Bakery Biscuits & Cookies",
    description:
      "Crunchy cocoa bakery biscuits baked for chocolate lovers.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Chocolate_cookie.jpg/960px-Chocolate_cookie.jpg",
    gallery: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Chocolate_cookie.jpg/960px-Chocolate_cookie.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/6cookies.JPG/960px-6cookies.JPG",
    ],
    price: 110,
    sizes: makeGramSizes(110, "250 g"),
    isBestseller: false,
    isCustomerFavourite: false,
    isAvailable: true,
    allowEggSelection: false,
    allowCustomMessage: false,
    popularityScore: 88,
    tags: ["chocolate biscuit", "cookies", "biscuits"],
  },
  {
    id: "dry-coconut-biscuit",
    name: "Dry Coconut Biscuit",
    category: "Bakery Biscuits & Cookies",
    description:
      "Crisp bakery biscuits baked with roasted desiccated coconut.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Coconut_cookies-.jpg/960px-Coconut_cookies-.jpg",
    gallery: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Coconut_cookies-.jpg/960px-Coconut_cookies-.jpg",
    ],
    price: 110,
    sizes: makeGramSizes(110, "250 g"),
    isBestseller: false,
    isCustomerFavourite: false,
    isAvailable: true,
    allowEggSelection: false,
    allowCustomMessage: false,
    popularityScore: 86,
    tags: ["dry coconut", "coconut biscuit", "cookies", "biscuits"],
  },
  {
    id: "fresh-coconut-biscuit",
    name: "Fresh Coconut Biscuit",
    category: "Bakery Biscuits & Cookies",
    description:
      "Aromatic biscuits crafted with freshly grated coconut for a rich tropical crunch.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Coconut_Cookies.jpg/960px-Coconut_Cookies.jpg",
    gallery: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Coconut_Cookies.jpg/960px-Coconut_Cookies.jpg",
    ],
    price: 110,
    sizes: makeGramSizes(110, "250 g"),
    isBestseller: false,
    isCustomerFavourite: true,
    isAvailable: true,
    allowEggSelection: false,
    allowCustomMessage: false,
    popularityScore: 89,
    tags: ["fresh coconut biscuit", "coconut biscuit", "cookies", "biscuits"],
  },
  {
    id: "salt-biscuit",
    name: "Salt Biscuit",
    category: "Bakery Biscuits & Cookies",
    description:
      "Light, flaky salted tea-time bakery biscuits.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Salted_Biscuits_-_Kolkata_2011-11-17_7129.JPG/960px-Salted_Biscuits_-_Kolkata_2011-11-17_7129.JPG",
    gallery: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Salted_Biscuits_-_Kolkata_2011-11-17_7129.JPG/960px-Salted_Biscuits_-_Kolkata_2011-11-17_7129.JPG",
    ],
    price: 110,
    sizes: makeGramSizes(110, "250 g"),
    isBestseller: false,
    isCustomerFavourite: false,
    isAvailable: true,
    allowEggSelection: false,
    allowCustomMessage: false,
    popularityScore: 87,
    tags: ["salt biscuit", "cookies", "biscuits"],
  },
  {
    id: "butter-biscuit",
    name: "Butter Biscuit",
    category: "Bakery Biscuits & Cookies",
    description:
      "Melt-in-the-mouth golden butter biscuits baked fresh at Amma Pastries BLR.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Nankhatai.jpg/960px-Nankhatai.jpg",
    gallery: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Nankhatai.jpg/960px-Nankhatai.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/9/9b/Nankhatai_biscuits.jpg",
    ],
    price: 110,
    sizes: makeGramSizes(110, "250 g"),
    isBestseller: false,
    isCustomerFavourite: true,
    isAvailable: true,
    allowEggSelection: false,
    allowCustomMessage: false,
    popularityScore: 91,
    tags: ["butter biscuit", "cookies", "biscuits"],
  },
  {
    id: "milk-biscuit",
    name: "Milk Biscuit",
    category: "Bakery Biscuits & Cookies",
    description:
      "Classic sweet milk bakery biscuits—ideal with evening tea or coffee.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Nankhatais.jpg/960px-Nankhatais.jpg",
    gallery: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Nankhatais.jpg/960px-Nankhatais.jpg",
    ],
    price: 110,
    sizes: makeGramSizes(110, "250 g"),
    isBestseller: false,
    isCustomerFavourite: false,
    isAvailable: true,
    allowEggSelection: false,
    allowCustomMessage: false,
    popularityScore: 85,
    tags: ["milk biscuit", "cookies", "biscuits"],
  },
  {
    id: "baby-cashew-biscuit",
    name: "Baby Cashew Biscuit",
    category: "Bakery Biscuits & Cookies",
    description:
      "Bite-sized cashew butter biscuits baked to a golden crunch.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Cashew_Cookies_-_Oxford_Bookstore_-_Kolkata_2015-08-23_3613.JPG/960px-Cashew_Cookies_-_Oxford_Bookstore_-_Kolkata_2015-08-23_3613.JPG",
    gallery: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Cashew_Cookies_-_Oxford_Bookstore_-_Kolkata_2015-08-23_3613.JPG/960px-Cashew_Cookies_-_Oxford_Bookstore_-_Kolkata_2015-08-23_3613.JPG",
    ],
    price: 110,
    sizes: makeGramSizes(110, "250 g"),
    isBestseller: false,
    isCustomerFavourite: false,
    isAvailable: true,
    allowEggSelection: false,
    allowCustomMessage: false,
    popularityScore: 86,
    tags: ["baby cashew biscuit", "cashew biscuit", "cookies", "biscuits"],
  },
  {
    id: "almond-biscuit",
    name: "Almond Biscuit",
    category: "Bakery Biscuits & Cookies",
    description:
      "Crisp bakery shortbread biscuits topped with toasted almond slices.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Almond_Biscuit_Bakery.JPG/960px-Almond_Biscuit_Bakery.JPG",
    gallery: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Almond_Biscuit_Bakery.JPG/960px-Almond_Biscuit_Bakery.JPG",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Almond_cookies_%2842274624115%29.jpg/960px-Almond_cookies_%2842274624115%29.jpg",
    ],
    price: 110,
    sizes: makeGramSizes(110, "250 g"),
    isBestseller: false,
    isCustomerFavourite: true,
    isAvailable: true,
    allowEggSelection: false,
    allowCustomMessage: false,
    popularityScore: 90,
    tags: ["almond biscuit", "cookies", "biscuits"],
  },

  // ============================================================================
  // 7. RUSKS & TRADITIONAL BAKES (8 Items: ₹80 – ₹100)
  // ============================================================================
  {
    id: "milk-rusk-special",
    name: "Milk Rusk (Special)",
    category: "Rusks & Traditional Bakes",
    description:
      "Twice-baked crispy special milk rusks crafted for dipping into hot filter coffee or masala chai.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Rusk_from_India.jpg/960px-Rusk_from_India.jpg",
    gallery: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Rusk_from_India.jpg/960px-Rusk_from_India.jpg",
    ],
    price: 100,
    sizes: makeGramSizes(100, "250 g"),
    isBestseller: true,
    isCustomerFavourite: true,
    isAvailable: true,
    allowEggSelection: false,
    allowCustomMessage: false,
    popularityScore: 93,
    tags: ["milk rusk", "special rusk", "rusk", "tea time"],
  },
  {
    id: "stick-rusk-special",
    name: "Stick Rusk (Special)",
    category: "Rusks & Traditional Bakes",
    description:
      "Crunchy golden stick rusks freshly baked in our ovens.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Zwieback-1.jpg/960px-Zwieback-1.jpg",
    gallery: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Zwieback-1.jpg/960px-Zwieback-1.jpg",
    ],
    price: 80,
    sizes: makeGramSizes(80, "250 g"),
    isBestseller: false,
    isCustomerFavourite: false,
    isAvailable: true,
    allowEggSelection: false,
    allowCustomMessage: false,
    popularityScore: 88,
    tags: ["stick rusk", "rusk", "tea time"],
  },
  {
    id: "nippattu-without-oil-baking",
    name: "Nippattu (Without Oil Baking)",
    category: "Rusks & Traditional Bakes",
    description:
      "Special oven-baked Nippattu prepared without oil frying—crispy, spiced, and guilt-free.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Nippattu_%28Rice_crackers%29.jpg/960px-Nippattu_%28Rice_crackers%29.jpg",
    gallery: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Nippattu_%28Rice_crackers%29.jpg/960px-Nippattu_%28Rice_crackers%29.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Nippattu_%28Rice_crackers%29_2.jpg/960px-Nippattu_%28Rice_crackers%29_2.jpg",
    ],
    price: 100,
    sizes: makeGramSizes(100, "250 g"),
    isBestseller: true,
    isCustomerFavourite: true,
    isAvailable: true,
    allowEggSelection: false,
    allowCustomMessage: false,
    popularityScore: 95,
    tags: ["nippattu", "without oil baking", "baked nippattu", "snacks"],
  },
  {
    id: "bombe-kaari",
    name: "Bombe Kaari",
    category: "Rusks & Traditional Bakes",
    description:
      "Flaky, crispy bakery Bombe Kaari (khari puff biscuits) perfect with hot tea.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Palmiers_from_Zhongguancun_Pastry_%2820221019155059%29.jpg/960px-Palmiers_from_Zhongguancun_Pastry_%2820221019155059%29.jpg",
    gallery: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Palmiers_from_Zhongguancun_Pastry_%2820221019155059%29.jpg/960px-Palmiers_from_Zhongguancun_Pastry_%2820221019155059%29.jpg",
    ],
    price: 80,
    sizes: makeGramSizes(80, "250 g"),
    isBestseller: false,
    isCustomerFavourite: true,
    isAvailable: true,
    allowEggSelection: false,
    allowCustomMessage: false,
    popularityScore: 89,
    tags: ["bombe kaari", "khari", "puff biscuit", "rusk"],
  },
  {
    id: "shankarpalya-sweet",
    name: "Shankarpalya Sweet",
    category: "Rusks & Traditional Bakes",
    description:
      "Crunchy diamond-cut traditional sweet Shankarpalya (Shankarpali) snacks.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Shankarpali_sweets_mithai_Western_India_2012.jpg/960px-Shankarpali_sweets_mithai_Western_India_2012.jpg",
    gallery: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Shankarpali_sweets_mithai_Western_India_2012.jpg/960px-Shankarpali_sweets_mithai_Western_India_2012.jpg",
    ],
    price: 80,
    sizes: makeGramSizes(80, "200 g"),
    isBestseller: false,
    isCustomerFavourite: false,
    isAvailable: true,
    allowEggSelection: false,
    allowCustomMessage: false,
    popularityScore: 86,
    tags: ["shankarpalya sweet", "shankarpali", "traditional sweets"],
  },
  {
    id: "chikki-round",
    name: "Chikki Round",
    category: "Rusks & Traditional Bakes",
    description:
      "Traditional crunchy jaggery and roasted peanut Chikki rounds.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Peanut_chikki%2C_a_popular_foodstuff_of_jaggery_and_peanut_is_available_commercially_all_over_India.jpg/960px-Peanut_chikki%2C_a_popular_foodstuff_of_jaggery_and_peanut_is_available_commercially_all_over_India.jpg",
    gallery: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Peanut_chikki%2C_a_popular_foodstuff_of_jaggery_and_peanut_is_available_commercially_all_over_India.jpg/960px-Peanut_chikki%2C_a_popular_foodstuff_of_jaggery_and_peanut_is_available_commercially_all_over_India.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Peanut_Chikki.JPG/960px-Peanut_Chikki.JPG",
    ],
    price: 80,
    sizes: makeGramSizes(80, "200 g"),
    isBestseller: false,
    isCustomerFavourite: false,
    isAvailable: true,
    allowEggSelection: false,
    allowCustomMessage: false,
    popularityScore: 85,
    tags: ["chikki round", "peanut chikki", "sweets"],
  },
  {
    id: "black-sesame",
    name: "Black Sesame",
    category: "Rusks & Traditional Bakes",
    description:
      "Traditional black sesame (ellu) sweet crunch pack.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Black_sesame_Malipot_Albay_Pilinut_CandyB.jpg/960px-Black_sesame_Malipot_Albay_Pilinut_CandyB.jpg",
    gallery: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Black_sesame_Malipot_Albay_Pilinut_CandyB.jpg/960px-Black_sesame_Malipot_Albay_Pilinut_CandyB.jpg",
    ],
    price: 80,
    sizes: makeGramSizes(80, "200 g"),
    isBestseller: false,
    isCustomerFavourite: false,
    isAvailable: true,
    allowEggSelection: false,
    allowCustomMessage: false,
    popularityScore: 83,
    tags: ["black sesame", "block sesame", "sesame chikki"],
  },
  {
    id: "white-sesame",
    name: "White Sesame",
    category: "Rusks & Traditional Bakes",
    description:
      "Crisp white sesame seed sweet Chikki pack.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Till_Chikki.JPG/960px-Till_Chikki.JPG",
    gallery: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Till_Chikki.JPG/960px-Till_Chikki.JPG",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Tilkut_~_Sweet_savoury_made_from_jaggery_paste_and_sesame_seeds.jpg/960px-Tilkut_~_Sweet_savoury_made_from_jaggery_paste_and_sesame_seeds.jpg",
    ],
    price: 80,
    sizes: makeGramSizes(80, "200 g"),
    isBestseller: false,
    isCustomerFavourite: false,
    isAvailable: true,
    allowEggSelection: false,
    allowCustomMessage: false,
    popularityScore: 83,
    tags: ["white sesame", "sesame chikki"],
  },

  // ============================================================================
  // 8. MIXTURES & SAVOURY NAMKEEN (10 Items: ₹60 – ₹90)
  // ============================================================================
  {
    id: "sev-mixture",
    name: "Sev Mixture",
    category: "Mixtures & Savoury Namkeen",
    description:
      "Crunchy gram-flour sev mixture tossed with roasted peanuts, curry leaves, and mild spices.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/SevMamra.jpg/960px-SevMamra.jpg",
    gallery: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/SevMamra.jpg/960px-SevMamra.jpg",
    ],
    price: 90,
    sizes: makeGramSizes(90, "250 g"),
    isBestseller: false,
    isCustomerFavourite: true,
    isAvailable: true,
    allowEggSelection: false,
    allowCustomMessage: false,
    popularityScore: 90,
    tags: ["sev mixture", "mixture", "namkeen", "snacks"],
  },
  {
    id: "garlic-mixture",
    name: "Garlic Mixture",
    category: "Mixtures & Savoury Namkeen",
    description:
      "Zesty, aromatic garlic-flavoured Karnataka savoury mixture.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Bhuja_mix_in_preperation.jpg/960px-Bhuja_mix_in_preperation.jpg",
    gallery: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Bhuja_mix_in_preperation.jpg/960px-Bhuja_mix_in_preperation.jpg",
    ],
    price: 90,
    sizes: makeGramSizes(90, "250 g"),
    isBestseller: false,
    isCustomerFavourite: true,
    isAvailable: true,
    allowEggSelection: false,
    allowCustomMessage: false,
    popularityScore: 91,
    tags: ["garlic mixture", "mixture", "namkeen", "snacks"],
  },
  {
    id: "bombe-mixture",
    name: "Bombe Mixture",
    category: "Mixtures & Savoury Namkeen",
    description:
      "Classic Bombay/Bombe style crunchy savoury mixture.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/c/c6/Bombaymix.jpg",
    gallery: [
      "https://upload.wikimedia.org/wikipedia/commons/c/c6/Bombaymix.jpg",
    ],
    price: 90,
    sizes: makeGramSizes(90, "250 g"),
    isBestseller: false,
    isCustomerFavourite: false,
    isAvailable: true,
    allowEggSelection: false,
    allowCustomMessage: false,
    popularityScore: 87,
    tags: ["bombe mixture", "mixture", "namkeen"],
  },
  {
    id: "boondi-mixture",
    name: "Boondi Mixture",
    category: "Mixtures & Savoury Namkeen",
    description:
      "Crisp spiced kara boondi mixed with roasted peanuts and curry leaves.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Boondi_2.jpg/960px-Boondi_2.jpg",
    gallery: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Boondi_2.jpg/960px-Boondi_2.jpg",
    ],
    price: 90,
    sizes: makeGramSizes(90, "250 g"),
    isBestseller: false,
    isCustomerFavourite: false,
    isAvailable: true,
    allowEggSelection: false,
    allowCustomMessage: false,
    popularityScore: 88,
    tags: ["boondi mixture", "mixture", "namkeen"],
  },
  {
    id: "big-mixture",
    name: "Big Mixture",
    category: "Mixtures & Savoury Namkeen",
    description:
      "Chunky special mixture with thick sev, avalakki, peanuts, and roasted gram.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Mixture_%28the_Indian_snack%29_in_Chennai.JPG/960px-Mixture_%28the_Indian_snack%29_in_Chennai.JPG",
    gallery: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Mixture_%28the_Indian_snack%29_in_Chennai.JPG/960px-Mixture_%28the_Indian_snack%29_in_Chennai.JPG",
    ],
    price: 90,
    sizes: makeGramSizes(90, "250 g"),
    isBestseller: false,
    isCustomerFavourite: false,
    isAvailable: true,
    allowEggSelection: false,
    allowCustomMessage: false,
    popularityScore: 86,
    tags: ["big mixture", "mixture", "namkeen"],
  },
  {
    id: "corn-flakes-mixture",
    name: "Corn Flakes Mixture",
    category: "Mixtures & Savoury Namkeen",
    description:
      "Light and extra-crispy seasoned corn flakes namkeen mix.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Corn_Flakes_Mixture.JPG/960px-Corn_Flakes_Mixture.JPG",
    gallery: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Corn_Flakes_Mixture.JPG/960px-Corn_Flakes_Mixture.JPG",
    ],
    price: 60,
    sizes: makeGramSizes(60, "150 g"),
    isBestseller: false,
    isCustomerFavourite: false,
    isAvailable: true,
    allowEggSelection: false,
    allowCustomMessage: false,
    popularityScore: 87,
    tags: ["corn flakes", "corn flakes mixture", "namkeen"],
  },
  {
    id: "round-nippattu",
    name: "Round Nippattu",
    category: "Mixtures & Savoury Namkeen",
    description:
      "Crispy traditional Karnataka round rice crackers spiced with peanuts, sesame, and curry leaves.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/d/d2/Nippat.jpg",
    gallery: [
      "https://upload.wikimedia.org/wikipedia/commons/d/d2/Nippat.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Nippattu_%28Rice_crackers%29_3.jpg/960px-Nippattu_%28Rice_crackers%29_3.jpg",
    ],
    price: 80,
    sizes: makeGramSizes(80, "200 g"),
    isBestseller: false,
    isCustomerFavourite: true,
    isAvailable: true,
    allowEggSelection: false,
    allowCustomMessage: false,
    popularityScore: 90,
    tags: ["round nippattu", "nippattu", "snacks"],
  },
  {
    id: "moong-dal",
    name: "Moong Dal",
    category: "Mixtures & Savoury Namkeen",
    description:
      "Lightly salted, golden-roasted crispy moong dal snack pack.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Dal_Moong_Nimko.JPG/960px-Dal_Moong_Nimko.JPG",
    gallery: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Dal_Moong_Nimko.JPG/960px-Dal_Moong_Nimko.JPG",
    ],
    price: 80,
    sizes: makeGramSizes(80, "200 g"),
    isBestseller: false,
    isCustomerFavourite: false,
    isAvailable: true,
    allowEggSelection: false,
    allowCustomMessage: false,
    popularityScore: 85,
    tags: ["moong dal", "namkeen", "snacks"],
  },
  {
    id: "moong-dal-spicy",
    name: "Moong Dal Spicy",
    category: "Mixtures & Savoury Namkeen",
    description:
      "Crispy fried moong dal tossed in a zesty chilli-spice masala.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Dal_Moong_Nimko_For_Frying.JPG/960px-Dal_Moong_Nimko_For_Frying.JPG",
    gallery: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Dal_Moong_Nimko_For_Frying.JPG/960px-Dal_Moong_Nimko_For_Frying.JPG",
    ],
    price: 80,
    sizes: makeGramSizes(80, "200 g"),
    isBestseller: false,
    isCustomerFavourite: false,
    isAvailable: true,
    allowEggSelection: false,
    allowCustomMessage: false,
    popularityScore: 85,
    tags: ["moong dal spicy", "namkeen", "snacks"],
  },
  {
    id: "ok-ring-masala",
    name: "OK Ring Masala",
    category: "Mixtures & Savoury Namkeen",
    description:
      "Crunchy spiced masala rings—a popular evening snack for all ages.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/A_Traditional_Tamil_Snack_Murukku.jpg/960px-A_Traditional_Tamil_Snack_Murukku.jpg",
    gallery: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/A_Traditional_Tamil_Snack_Murukku.jpg/960px-A_Traditional_Tamil_Snack_Murukku.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Benne_Mucchore.jpg/960px-Benne_Mucchore.jpg",
    ],
    price: 80,
    sizes: makeGramSizes(80, "200 g"),
    isBestseller: false,
    isCustomerFavourite: false,
    isAvailable: true,
    allowEggSelection: false,
    allowCustomMessage: false,
    popularityScore: 84,
    tags: ["ok ring masala", "ring masala", "snacks"],
  },

  // ============================================================================
  // 9. CHIPS & ROASTED PEANUTS (9 Items: ₹50 – ₹100)
  // ============================================================================
  {
    id: "potato-spicy-chips",
    name: "Potato Spicy Chips",
    category: "Chips & Roasted Peanuts",
    description:
      "Thinly sliced, kettle-crisp bakery potato chips tossed in spicy chilli seasoning.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/A_pile_of_All_Dressed_potato_chips_on_a_paper_towel.jpg/960px-A_pile_of_All_Dressed_potato_chips_on_a_paper_towel.jpg",
    gallery: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/A_pile_of_All_Dressed_potato_chips_on_a_paper_towel.jpg/960px-A_pile_of_All_Dressed_potato_chips_on_a_paper_towel.jpg",
    ],
    price: 50,
    sizes: makePieceSizes(50, "1 Pack"),
    isBestseller: true,
    isCustomerFavourite: true,
    isAvailable: true,
    allowEggSelection: false,
    allowCustomMessage: false,
    popularityScore: 93,
    tags: ["potato spicy chips", "patato specie chips", "chips", "snacks"],
  },
  {
    id: "potato-salt-chips",
    name: "Potato Salt Chips",
    category: "Chips & Roasted Peanuts",
    description:
      "Classic golden, crispy salted bakery potato wafers.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Potato-Chips.jpg/960px-Potato-Chips.jpg",
    gallery: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Potato-Chips.jpg/960px-Potato-Chips.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/4/45/073_Potato_chips%2C_Sanok.JPG",
    ],
    price: 50,
    sizes: makePieceSizes(50, "1 Pack"),
    isBestseller: false,
    isCustomerFavourite: true,
    isAvailable: true,
    allowEggSelection: false,
    allowCustomMessage: false,
    popularityScore: 91,
    tags: ["potato salt chips", "patato salt chips", "chips", "snacks"],
  },
  {
    id: "banana-chips",
    name: "Banana Chips",
    category: "Chips & Roasted Peanuts",
    description:
      "Crisp, golden thinly sliced raw banana chips lightly seasoned with salt.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Kerala_banana_chips_Upperi_varuthath.jpg/960px-Kerala_banana_chips_Upperi_varuthath.jpg",
    gallery: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Kerala_banana_chips_Upperi_varuthath.jpg/960px-Kerala_banana_chips_Upperi_varuthath.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Homemade_4_Cut_Banana_Chips.jpg/960px-Homemade_4_Cut_Banana_Chips.jpg",
    ],
    price: 100,
    sizes: makeGramSizes(100, "200 g"),
    isBestseller: false,
    isCustomerFavourite: true,
    isAvailable: true,
    allowEggSelection: false,
    allowCustomMessage: false,
    popularityScore: 92,
    tags: ["banana chips", "chips", "snacks"],
  },
  {
    id: "tapioca-chips",
    name: "Tapioca Chips",
    category: "Chips & Roasted Peanuts",
    description:
      "Crunchy spiced tapioca (maravalli kizhangu) wafer chips.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Tapioca_Chips.jpg/960px-Tapioca_Chips.jpg",
    gallery: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Tapioca_Chips.jpg/960px-Tapioca_Chips.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Spicy_and_Non_Spicy_Tapioca_Chips.jpeg/960px-Spicy_and_Non_Spicy_Tapioca_Chips.jpeg",
    ],
    price: 60,
    sizes: makeGramSizes(60, "150 g"),
    isBestseller: false,
    isCustomerFavourite: false,
    isAvailable: true,
    allowEggSelection: false,
    allowCustomMessage: false,
    popularityScore: 85,
    tags: ["tapioca chips", "chips", "snacks"],
  },
  {
    id: "congress-peanut",
    name: "Congress Peanut",
    category: "Chips & Roasted Peanuts",
    description:
      "Famous Bengaluru-style split roasted peanuts tossed with hing, curry leaves, turmeric, and chilli spice.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Congress_Kadlekai.jpg/960px-Congress_Kadlekai.jpg",
    gallery: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Congress_Kadlekai.jpg/960px-Congress_Kadlekai.jpg",
    ],
    price: 80,
    sizes: makeGramSizes(80, "200 g"),
    isBestseller: true,
    isCustomerFavourite: true,
    isAvailable: true,
    allowEggSelection: false,
    allowCustomMessage: false,
    popularityScore: 94,
    tags: ["congress peanut", "kadlekai", "peanuts", "snacks"],
  },
  {
    id: "chintamani-peanuts",
    name: "Chintamani Peanuts",
    category: "Chips & Roasted Peanuts",
    description:
      "Iconic Karnataka Chintamani-style crunchy roasted spiced peanuts.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Spicy_peanut1.jpg/960px-Spicy_peanut1.jpg",
    gallery: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Spicy_peanut1.jpg/960px-Spicy_peanut1.jpg",
    ],
    price: 80,
    sizes: makeGramSizes(80, "200 g"),
    isBestseller: false,
    isCustomerFavourite: true,
    isAvailable: true,
    allowEggSelection: false,
    allowCustomMessage: false,
    popularityScore: 91,
    tags: ["chintamani peanuts", "peanuts", "snacks"],
  },
  {
    id: "masala-peanut",
    name: "Masala Peanut",
    category: "Chips & Roasted Peanuts",
    description:
      "Crunchy gram-flour coated spicy masala peanuts.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Fried_Masala_Ground_Nut.jpg/960px-Fried_Masala_Ground_Nut.jpg",
    gallery: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Fried_Masala_Ground_Nut.jpg/960px-Fried_Masala_Ground_Nut.jpg",
    ],
    price: 80,
    sizes: makeGramSizes(80, "200 g"),
    isBestseller: false,
    isCustomerFavourite: false,
    isAvailable: true,
    allowEggSelection: false,
    allowCustomMessage: false,
    popularityScore: 88,
    tags: ["masala peanut", "peanuts", "snacks"],
  },
  {
    id: "roasted-chana",
    name: "Roasted Chana",
    category: "Chips & Roasted Peanuts",
    description:
      "Crunchy spiced roasted chana (hurigadale) snack pack.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Roasted_Chickpea_Chana_with_Salt_and_Turmeric.jpg/960px-Roasted_Chickpea_Chana_with_Salt_and_Turmeric.jpg",
    gallery: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Roasted_Chickpea_Chana_with_Salt_and_Turmeric.jpg/960px-Roasted_Chickpea_Chana_with_Salt_and_Turmeric.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Roasted_Chana.JPG/960px-Roasted_Chana.JPG",
    ],
    price: 80,
    sizes: makeGramSizes(80, "200 g"),
    isBestseller: false,
    isCustomerFavourite: false,
    isAvailable: true,
    allowEggSelection: false,
    allowCustomMessage: false,
    popularityScore: 85,
    tags: ["roasted chana", "rosted chana", "snacks"],
  },
  {
    id: "kabul-chana",
    name: "Kabul Chana",
    category: "Chips & Roasted Peanuts",
    description:
      "Crisp fried and seasoned Kabuli chickpeas tossed in tangy masala.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Restaurant_style_Crunchy_Chickpeas_or_Chana_Chilli_-_Gujarat_-_SHAILI_007.jpg/960px-Restaurant_style_Crunchy_Chickpeas_or_Chana_Chilli_-_Gujarat_-_SHAILI_007.jpg",
    gallery: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Restaurant_style_Crunchy_Chickpeas_or_Chana_Chilli_-_Gujarat_-_SHAILI_007.jpg/960px-Restaurant_style_Crunchy_Chickpeas_or_Chana_Chilli_-_Gujarat_-_SHAILI_007.jpg",
    ],
    price: 80,
    sizes: makeGramSizes(80, "200 g"),
    isBestseller: false,
    isCustomerFavourite: false,
    isAvailable: true,
    allowEggSelection: false,
    allowCustomMessage: false,
    popularityScore: 86,
    tags: ["kabul chana", "chickpeas", "snacks"],
  },

  // ============================================================================
  // 10. PUFFS, ROLLS & SANDWICHES (7 Items: ₹25 – ₹40)
  // ============================================================================
  {
    id: "veg-puff",
    name: "Veg Puff",
    category: "Puffs, Rolls & Sandwiches",
    description:
      "Hot, flaky golden puff pastry stuffed with spiced mixed vegetable masala.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Chai_and_Veg_Puff.jpg/960px-Chai_and_Veg_Puff.jpg",
    gallery: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Chai_and_Veg_Puff.jpg/960px-Chai_and_Veg_Puff.jpg",
    ],
    price: 25,
    sizes: makePieceSizes(25),
    isBestseller: true,
    isCustomerFavourite: true,
    isAvailable: true,
    allowEggSelection: false,
    allowCustomMessage: false,
    popularityScore: 98,
    tags: ["veg puff", "veg pueff", "puff", "puffs", "snacks"],
  },
  {
    id: "egg-puff",
    name: "Egg Puff",
    category: "Puffs, Rolls & Sandwiches",
    description:
      "Crisp multi-layered bakery puff pastry filled with seasoned onion masala and boiled egg.",
    image: "https://upload.wikimedia.org/wikipedia/commons/c/ca/Egg_Puff1.jpg",
    gallery: [
      "https://upload.wikimedia.org/wikipedia/commons/c/ca/Egg_Puff1.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/0/0c/Egg_Puff2.jpg",
    ],
    price: 30,
    sizes: makePieceSizes(30),
    isBestseller: true,
    isCustomerFavourite: true,
    isAvailable: true,
    allowEggSelection: false,
    allowCustomMessage: false,
    popularityScore: 97,
    tags: ["egg puff", "egg pueff", "puff", "puffs", "snacks"],
  },
  {
    id: "paneer-puff",
    name: "Paneer Puff",
    category: "Puffs, Rolls & Sandwiches",
    description:
      "Golden flaky bakery puff filled with spiced paneer bhurji and herbs.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Curry_puffs_%281862141216%29.jpg/960px-Curry_puffs_%281862141216%29.jpg",
    gallery: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Curry_puffs_%281862141216%29.jpg/960px-Curry_puffs_%281862141216%29.jpg",
    ],
    price: 30,
    sizes: makePieceSizes(30),
    isBestseller: false,
    isCustomerFavourite: true,
    isAvailable: true,
    allowEggSelection: false,
    allowCustomMessage: false,
    popularityScore: 93,
    tags: ["paneer puff", "paneer pueff", "puff", "puffs", "snacks"],
  },
  {
    id: "aloo-bun",
    name: "Aloo Bun",
    category: "Puffs, Rolls & Sandwiches",
    secondaryCategories: ["Cream Buns & Dilpasand"],
    description:
      "Soft baked bakery bun stuffed with savoury spiced potato palya filling.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Baked_bun_with_better.jpg/960px-Baked_bun_with_better.jpg",
    gallery: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Baked_bun_with_better.jpg/960px-Baked_bun_with_better.jpg",
    ],
    price: 30,
    sizes: makePieceSizes(30),
    isBestseller: false,
    isCustomerFavourite: true,
    isAvailable: true,
    allowEggSelection: false,
    allowCustomMessage: false,
    popularityScore: 91,
    tags: ["aloo bun", "aalu ban", "bun", "snacks"],
  },
  {
    id: "bread-sandwich",
    name: "Bread Sandwich",
    category: "Puffs, Rolls & Sandwiches",
    description:
      "Fresh bakery bread sandwich layered with spiced vegetables and green chutney.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Masala_Bread_Sandwich.jpg/960px-Masala_Bread_Sandwich.jpg",
    gallery: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Masala_Bread_Sandwich.jpg/960px-Masala_Bread_Sandwich.jpg",
    ],
    price: 25,
    sizes: makePieceSizes(25),
    isBestseller: false,
    isCustomerFavourite: false,
    isAvailable: true,
    allowEggSelection: false,
    allowCustomMessage: false,
    popularityScore: 89,
    tags: ["bread sandwich", "sandwich", "snacks"],
  },
  {
    id: "egg-roll",
    name: "Egg Roll",
    category: "Puffs, Rolls & Sandwiches",
    description:
      "Warm, savoury bakery egg roll filled with seasoned egg and onions.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Egg_roll_%21.jpg/960px-Egg_roll_%21.jpg",
    gallery: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Egg_roll_%21.jpg/960px-Egg_roll_%21.jpg",
    ],
    price: 40,
    sizes: makePieceSizes(40),
    isBestseller: false,
    isCustomerFavourite: true,
    isAvailable: true,
    allowEggSelection: false,
    allowCustomMessage: false,
    popularityScore: 92,
    tags: ["egg roll", "roll", "snacks"],
  },
  {
    id: "paneer-roll",
    name: "Paneer Roll",
    category: "Puffs, Rolls & Sandwiches",
    description:
      "Delicious bakery paneer roll stuffed with spiced paneer filling.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Paneer_kathi_roll_homemade.jpg/960px-Paneer_kathi_roll_homemade.jpg",
    gallery: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Paneer_kathi_roll_homemade.jpg/960px-Paneer_kathi_roll_homemade.jpg",
    ],
    price: 40,
    sizes: makePieceSizes(40),
    isBestseller: false,
    isCustomerFavourite: true,
    isAvailable: true,
    allowEggSelection: false,
    allowCustomMessage: false,
    popularityScore: 93,
    tags: ["paneer roll", "roll", "snacks"],
  },

  // ============================================================================
  // 11. TEA CAKES, PLUM CAKES & BREADS (7 Items: ₹50 – ₹110)
  // ============================================================================
  {
    id: "ghee-cake",
    name: "Ghee Cake",
    category: "Tea Cakes, Plum Cakes & Breads",
    description:
      "Rich, aromatic traditional bakery Ghee Cake baked to golden perfection.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Home_made_Mawa_Cake.jpg/960px-Home_made_Mawa_Cake.jpg",
    gallery: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Home_made_Mawa_Cake.jpg/960px-Home_made_Mawa_Cake.jpg",
    ],
    price: 110,
    sizes: makeGramSizes(110, "250 g"),
    isBestseller: true,
    isCustomerFavourite: true,
    isAvailable: true,
    allowEggSelection: false,
    allowCustomMessage: false,
    popularityScore: 96,
    tags: ["ghee cake", "gee cake", "tea cake", "sponge cake"],
  },
  {
    id: "carrot-dry-fruits-cake",
    name: "Carrot Dry Fruits Cake",
    category: "Tea Cakes, Plum Cakes & Breads",
    description:
      "Wholesome carrot tea cake loaded with roasted cashews, almonds, and raisins.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Choco_Chip_Mawa_Cake.jpg/960px-Choco_Chip_Mawa_Cake.jpg",
    gallery: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Choco_Chip_Mawa_Cake.jpg/960px-Choco_Chip_Mawa_Cake.jpg",
    ],
    price: 110,
    sizes: makeGramSizes(110, "250 g"),
    isBestseller: false,
    isCustomerFavourite: true,
    isAvailable: true,
    allowEggSelection: false,
    allowCustomMessage: false,
    popularityScore: 93,
    tags: ["carrot dry fruits", "carrot cake", "tea cake"],
  },
  {
    id: "fruit-plum-cake",
    name: "Fruit Plum Cake",
    category: "Tea Cakes, Plum Cakes & Breads",
    description:
      "Classic rich bakery Fruit Plum Cake packed with candied fruits, raisins, and warm spices.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Fruit_cake%281%29.jpg/960px-Fruit_cake%281%29.jpg",
    gallery: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Fruit_cake%281%29.jpg/960px-Fruit_cake%281%29.jpg",
    ],
    price: 100,
    sizes: makeGramSizes(100, "250 g"),
    isBestseller: true,
    isCustomerFavourite: true,
    isAvailable: true,
    allowEggSelection: false,
    allowCustomMessage: false,
    popularityScore: 95,
    tags: ["fruit plum cake", "plum cake", "fruit cake"],
  },
  {
    id: "crush-cake",
    name: "Crush Cake",
    category: "Tea Cakes, Plum Cakes & Breads",
    description:
      "Soft bakery sponge layered with sweet fruit crush and cream.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Sliced_fruit_on_a_cream_cake.jpg/960px-Sliced_fruit_on_a_cream_cake.jpg",
    gallery: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Sliced_fruit_on_a_cream_cake.jpg/960px-Sliced_fruit_on_a_cream_cake.jpg",
    ],
    price: 100,
    sizes: makePieceSizes(100, "1 Pack"),
    isBestseller: false,
    isCustomerFavourite: false,
    isAvailable: true,
    allowEggSelection: false,
    allowCustomMessage: false,
    popularityScore: 88,
    tags: ["crush cake", "tea cake"],
  },
  {
    id: "milk-bread",
    name: "Milk Bread",
    category: "Tea Cakes, Plum Cakes & Breads",
    description:
      "Freshly baked, pillowy-soft sliced bakery Milk Bread loaf.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Sliced_sandwich_breads_2021-8-28.jpg/960px-Sliced_sandwich_breads_2021-8-28.jpg",
    gallery: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Sliced_sandwich_breads_2021-8-28.jpg/960px-Sliced_sandwich_breads_2021-8-28.jpg",
    ],
    price: 50,
    sizes: makePieceSizes(50, "1 Loaf"),
    isBestseller: false,
    isCustomerFavourite: true,
    isAvailable: true,
    allowEggSelection: false,
    allowCustomMessage: false,
    popularityScore: 92,
    tags: ["milk bread", "bread", "loaf"],
  },
  {
    id: "wheat-bread",
    name: "Wheat Bread",
    category: "Tea Cakes, Plum Cakes & Breads",
    description:
      "Wholesome, freshly baked sliced whole Wheat Bread loaf.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Vegan_no-knead_whole_wheat_bread_loaf%2C_sliced%2C_September_2010.jpg/960px-Vegan_no-knead_whole_wheat_bread_loaf%2C_sliced%2C_September_2010.jpg",
    gallery: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Vegan_no-knead_whole_wheat_bread_loaf%2C_sliced%2C_September_2010.jpg/960px-Vegan_no-knead_whole_wheat_bread_loaf%2C_sliced%2C_September_2010.jpg",
    ],
    price: 60,
    sizes: makePieceSizes(60, "1 Loaf"),
    isBestseller: false,
    isCustomerFavourite: false,
    isAvailable: true,
    allowEggSelection: false,
    allowCustomMessage: false,
    popularityScore: 90,
    tags: ["wheat bread", "brown bread", "bread"],
  },
  {
    id: "bakery-bun",
    name: "Bun",
    category: "Tea Cakes, Plum Cakes & Breads",
    secondaryCategories: ["Cream Buns & Dilpasand"],
    description:
      "Freshly baked, soft golden bakery buns—ideal with tea, butter, or jam.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Tray_of_Sweet_Buns.jpg/960px-Tray_of_Sweet_Buns.jpg",
    gallery: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Tray_of_Sweet_Buns.jpg/960px-Tray_of_Sweet_Buns.jpg",
    ],
    price: 50,
    sizes: makePieceSizes(50, "1 Pack"),
    isBestseller: false,
    isCustomerFavourite: false,
    isAvailable: true,
    allowEggSelection: false,
    allowCustomMessage: false,
    popularityScore: 89,
    tags: ["bun", "sweet bun", "bread"],
  },

  // ============================================================================
  // 12. MURUKKU, ROSE COOKIES & AVAREBELE (6 Items: ₹60 – ₹90)
  // ============================================================================
  {
    id: "tomato-murukku",
    name: "Tomato Murukku",
    category: "Mixtures & Savoury Namkeen",
    description:
      "Crunchy spiral murukku seasoned with tangy tomato and mild chilli spices.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Chakli_%28Indian_snack%29.jpg/960px-Chakli_%28Indian_snack%29.jpg",
    gallery: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Chakli_%28Indian_snack%29.jpg/960px-Chakli_%28Indian_snack%29.jpg",
    ],
    price: 90,
    sizes: makeGramSizes(90, "250 g"),
    isBestseller: true,
    isCustomerFavourite: true,
    isAvailable: true,
    allowEggSelection: false,
    allowCustomMessage: false,
    popularityScore: 94,
    tags: ["tomato murkh", "tomato murukku", "murukku", "chakli"],
  },
  {
    id: "garlic-murukku",
    name: "Garlic Murukku",
    category: "Mixtures & Savoury Namkeen",
    description:
      "Crisp, aromatic garlic-flavoured murukku freshly prepared in our kitchen.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Murukku_variety_02.jpg/960px-Murukku_variety_02.jpg",
    gallery: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Murukku_variety_02.jpg/960px-Murukku_variety_02.jpg",
    ],
    price: 80,
    sizes: makeGramSizes(80, "250 g"),
    isBestseller: false,
    isCustomerFavourite: true,
    isAvailable: true,
    allowEggSelection: false,
    allowCustomMessage: false,
    popularityScore: 92,
    tags: ["garlic murkh", "garlic murukku", "murukku", "chakli"],
  },
  {
    id: "butter-white-murukku",
    name: "Butter White Murukku",
    category: "Mixtures & Savoury Namkeen",
    description:
      "Melt-in-the-mouth Karnataka Benne (Butter White) Murukku with sesame and cumin.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Benne_Mucchore.jpg/960px-Benne_Mucchore.jpg",
    gallery: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Benne_Mucchore.jpg/960px-Benne_Mucchore.jpg",
    ],
    price: 90,
    sizes: makeGramSizes(90, "250 g"),
    isBestseller: true,
    isCustomerFavourite: true,
    isAvailable: true,
    allowEggSelection: false,
    allowCustomMessage: false,
    popularityScore: 95,
    tags: ["butter white murkh", "butter white murukku", "benne murukku", "murukku"],
  },
  {
    id: "butter-masala-murukku",
    name: "Butter Masala Murukku",
    category: "Mixtures & Savoury Namkeen",
    description:
      "Crispy butter murukku tossed in a savoury spice masala blend.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Chakli_in_a_bowl.jpg/960px-Chakli_in_a_bowl.jpg",
    gallery: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Chakli_in_a_bowl.jpg/960px-Chakli_in_a_bowl.jpg",
    ],
    price: 90,
    sizes: makeGramSizes(90, "250 g"),
    isBestseller: false,
    isCustomerFavourite: true,
    isAvailable: true,
    allowEggSelection: false,
    allowCustomMessage: false,
    popularityScore: 93,
    tags: ["butter masala murkh", "butter masala murukku", "murukku", "chakli"],
  },
  {
    id: "rose-cookies",
    name: "Rose Cookies",
    category: "Rusks & Traditional Bakes",
    secondaryCategories: ["Bakery Biscuits & Cookies"],
    description:
      "Traditional crispy flower-shaped Rose Cookies (Achappam) with a delicate sesame and coconut crunch.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Rose_cookies_Achu_Murukku.JPG/960px-Rose_cookies_Achu_Murukku.JPG",
    gallery: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Rose_cookies_Achu_Murukku.JPG/960px-Rose_cookies_Achu_Murukku.JPG",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Achappam_Rose_Cookie_Achu_Murukku_%282%29.jpg/960px-Achappam_Rose_Cookie_Achu_Murukku_%282%29.jpg",
    ],
    price: 60,
    sizes: makePieceSizes(60, "1 Pack"),
    isBestseller: false,
    isCustomerFavourite: true,
    isAvailable: true,
    allowEggSelection: false,
    allowCustomMessage: false,
    popularityScore: 91,
    tags: ["rose cookies", "achappam", "cookies", "traditional sweets"],
  },
  {
    id: "avarebele",
    name: "Avarebele",
    category: "Mixtures & Savoury Namkeen",
    description:
      "Bengaluru favourite crispy fried spiced Avarebele (hyacinth beans) tossed with curry leaves and chilli.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Sprouts_fried.jpg/960px-Sprouts_fried.jpg",
    gallery: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Sprouts_fried.jpg/960px-Sprouts_fried.jpg",
    ],
    price: 80,
    sizes: makeGramSizes(80, "200 g"),
    isBestseller: true,
    isCustomerFavourite: true,
    isAvailable: true,
    allowEggSelection: false,
    allowCustomMessage: false,
    popularityScore: 94,
    tags: ["avarebel", "avarebele", "avarekalu", "namkeen", "snacks"],
  },
];

export function getProductById(id: string): Product | undefined {
  return PRODUCTS.find((p) => p.id === id);
}

export function getBestsellerProducts(limit = 8): Product[] {
  return PRODUCTS.filter((p) => p.isBestseller && p.isAvailable).slice(0, limit);
}

export function getCustomerFavouriteProducts(limit = 8): Product[] {
  return PRODUCTS.filter((p) => p.isCustomerFavourite && p.isAvailable).slice(0, limit);
}

export function getRelatedProducts(product: Product, limit = 4): Product[] {
  return PRODUCTS.filter(
    (p) =>
      p.id !== product.id &&
      p.isAvailable &&
      (p.category === product.category ||
        p.secondaryCategories?.includes(product.category) ||
        product.secondaryCategories?.includes(p.category))
  ).slice(0, limit);
}
