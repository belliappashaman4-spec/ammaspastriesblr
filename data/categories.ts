export type ProductCategoryName =
  | "Birthday Cakes"
  | "Chocolate Cakes"
  | "Black Forest Cakes"
  | "White Forest Cakes"
  | "Red Velvet Cakes"
  | "Butterscotch Cakes"
  | "Photo Cakes"
  | "Designer Cakes"
  | "Anniversary Cakes"
  | "Pastries"
  | "Brownies"
  | "Desserts"
  | "Cookies";

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
    id: "cat-birthday",
    name: "Birthday Cakes",
    slug: "Birthday Cakes",
    tagline: "Showstopper cakes for milestone birthdays",
    description: "Celebrate every birthday with signature layered cakes crafted for joyful moments.",
    image: "https://images.unsplash.com/photo-1558301211-0d8c8ddee6ec?auto=format&fit=crop&w=800&q=85",
    showOnHomepage: true,
    homepageOrder: 1,
    badge: "Most Popular",
  },
  {
    id: "cat-anniversary",
    name: "Anniversary Cakes",
    slug: "Anniversary Cakes",
    tagline: "Romantic tiers, floral swirls & heart cakes",
    description: "Mark special milestones together with elegant anniversary cakes.",
    image: "https://images.unsplash.com/photo-1535254973040-607b474cb50d?auto=format&fit=crop&w=800&q=85",
    showOnHomepage: true,
    homepageOrder: 2,
    badge: "Romantic",
  },
  {
    id: "cat-chocolate",
    name: "Chocolate Cakes",
    slug: "Chocolate Cakes",
    tagline: "Rich truffle, ganache & chocolate indulgences",
    description: "Decadent chocolate sponges layered with smooth ganache and cocoa curls.",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=85",
    showOnHomepage: true,
    homepageOrder: 3,
    badge: "Bestseller",
  },
  {
    id: "cat-photo",
    name: "Photo Cakes",
    slug: "Photo Cakes",
    tagline: "Personalised edible photo print cakes",
    description: "Turn cherished memories into custom photo cakes for birthdays and family events.",
    image: "https://images.unsplash.com/photo-1621303837174-89787a7d4729?auto=format&fit=crop&w=800&q=85",
    showOnHomepage: true,
    homepageOrder: 4,
    badge: "Customisable",
  },
  {
    id: "cat-designer",
    name: "Designer Cakes",
    slug: "Designer Cakes",
    tagline: "Bespoke theme cakes & tiered creations",
    description: "Artisanal theme cakes tailored to your celebration style and colour palette.",
    image: "https://images.unsplash.com/photo-1562440499-64c9a111f713?auto=format&fit=crop&w=800&q=85",
    showOnHomepage: true,
    homepageOrder: 5,
    badge: "Bespoke",
  },
  {
    id: "cat-pastries",
    name: "Pastries",
    slug: "Pastries",
    tagline: "Single-serve layered slices & patisserie classics",
    description: "Delicate pastry slices ideal for evening treats, office boxes, and quick cravings.",
    image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=85",
    showOnHomepage: true,
    homepageOrder: 6,
  },
  {
    id: "cat-brownies",
    name: "Brownies",
    slug: "Brownies",
    tagline: "Fudgy chocolate squares & gift boxes",
    description: "Warm, rich brownies baked with deep cocoa notes and crinkly tops.",
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=800&q=85",
    showOnHomepage: true,
    homepageOrder: 7,
  },
  {
    id: "cat-desserts",
    name: "Desserts",
    slug: "Desserts",
    tagline: "Jar cakes, cheesecakes, tiramisu & mousses",
    description: "Indulgent dessert cups, cheesecakes, and sweet table favourites.",
    image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&w=800&q=85",
    showOnHomepage: true,
    homepageOrder: 8,
  },
  {
    id: "cat-cookies",
    name: "Cookies",
    slug: "Cookies",
    tagline: "Chunky bakery cookies & assorted tins",
    description: "Crisp-edged, soft-centred cookies and festive bakery hampers.",
    image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=800&q=85",
    showOnHomepage: true,
    homepageOrder: 9,
  },
  {
    id: "cat-black-forest",
    name: "Black Forest Cakes",
    slug: "Black Forest Cakes",
    tagline: "Classic chocolate sponge, whipped cream & cherries",
    description: "Timeless German-inspired Black Forest cakes topped with chocolate shavings and cherries.",
    image: "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?auto=format&fit=crop&w=800&q=85",
    showOnHomepage: false,
  },
  {
    id: "cat-white-forest",
    name: "White Forest Cakes",
    slug: "White Forest Cakes",
    tagline: "Snowy white chocolate flakes & vanilla sponge",
    description: "Light vanilla sponge layered with airy cream, cherries, and white chocolate curls.",
    image: "https://images.unsplash.com/photo-1542826438-bd32f43d626f?auto=format&fit=crop&w=800&q=85",
    showOnHomepage: false,
  },
  {
    id: "cat-red-velvet",
    name: "Red Velvet Cakes",
    slug: "Red Velvet Cakes",
    tagline: "Velvety crimson crumb with smooth frosting",
    description: "Signature crimson velvet sponge finished with silky frosting and red velvet crumbs.",
    image: "https://images.unsplash.com/photo-1616541823729-00fe0aacd32c?auto=format&fit=crop&w=800&q=85",
    showOnHomepage: false,
  },
  {
    id: "cat-butterscotch",
    name: "Butterscotch Cakes",
    slug: "Butterscotch Cakes",
    tagline: "Golden caramel drizzle & crunchy praline",
    description: "Soft sponge layered with butterscotch cream and golden caramel praline crunch.",
    image: "https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?auto=format&fit=crop&w=800&q=85",
    showOnHomepage: false,
  },
];

export const HOMEPAGE_CATEGORIES = CATEGORIES.filter((c) => c.showOnHomepage).sort(
  (a, b) => (a.homepageOrder ?? 99) - (b.homepageOrder ?? 99)
);
