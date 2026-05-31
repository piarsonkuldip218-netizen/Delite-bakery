import {
  Cake,
  Cookie,
  Croissant,
  Gift,
  Heart,
  CalendarHeart,
  Star,
  Truck,
  Sparkles,
  Wheat,
  Clock,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";

/**
 * Centralized business data for Delite Bakery.
 * Update values here and they propagate across every section of the site.
 */

export const business = {
  name: "Delite Bakery",
  tagline: "Freshly Baked Happiness",
  shortDescription:
    "Artisan cakes, pastries and bakes — crafted fresh every day in Margherita, Assam.",
  longDescription:
    "For years, Delite Bakery has been the sweet heart of Margherita. We bake everything fresh with premium ingredients — from celebration cakes that steal the show to flaky pastries that disappear in seconds. Custom designs, honest pricing, and warm hospitality on every order.",
  rating: 4.8,
  reviewCount: 83,
  priceRange: "\u20B9200 \u2013 \u20B91,200",
  phoneDisplay: "060036 86505",
  phoneRaw: "06003686505",
  whatsapp: "916003686505",
  email: "hello@delitebakery.in",
  address:
    "7PP6+78 Delite Bakery, Charali, Baragolai Main Rd, Chariali, Margherita, Ledo, Assam 786182",
  shortAddress: "Baragolai Main Rd, Chariali, Margherita, Assam",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Delite+Bakery+Margherita+Assam",
  category: "Bakery & Cake Shop",
} as const;

export const hours = [
  { day: "Monday", time: "8:00 AM \u2013 8:30 PM" },
  { day: "Tuesday", time: "8:00 AM \u2013 8:30 PM" },
  { day: "Wednesday", time: "8:00 AM \u2013 8:30 PM" },
  { day: "Thursday", time: "8:00 AM \u2013 8:30 PM" },
  { day: "Friday", time: "8:00 AM \u2013 8:30 PM" },
  { day: "Saturday", time: "8:00 AM \u2013 8:30 PM" },
  { day: "Sunday", time: "8:00 AM \u2013 8:30 PM" },
];

export type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
  tint: string;
};

export const services: Service[] = [
  {
    icon: Cake,
    title: "Celebration Cakes",
    description:
      "Show-stopping birthday and theme cakes, baked moist and decorated to your vision.",
    tint: "from-rose-bakery/80 to-caramel/70",
  },
  {
    icon: CalendarHeart,
    title: "Custom & Anniversary",
    description:
      "Personalised designs for weddings, anniversaries and every milestone that matters.",
    tint: "from-caramel/80 to-honey/70",
  },
  {
    icon: Croissant,
    title: "Fresh Pastries",
    description:
      "Flaky croissants, puffs and patties baked through the day — never sitting overnight.",
    tint: "from-honey/80 to-caramel-light/70",
  },
  {
    icon: Cookie,
    title: "Cookies & Bakes",
    description:
      "Buttery cookies, brownies and tea-time treats made with real butter and care.",
    tint: "from-pistachio/80 to-honey/60",
  },
  {
    icon: Gift,
    title: "Gift Hampers",
    description:
      "Curated boxes of sweets and bakes — the perfect ready-to-gift surprise.",
    tint: "from-rose-light/80 to-rose-bakery/70",
  },
  {
    icon: Heart,
    title: "Eggless Options",
    description:
      "Pure-veg and eggless cakes available for every recipe, with no compromise on taste.",
    tint: "from-caramel-light/80 to-rose-light/70",
  },
];

export type MenuItem = {
  name: string;
  price: string;
  note: string;
  emoji: string;
};

export const menuHighlights: MenuItem[] = [
  { name: "Classic Black Forest", price: "\u20B9450", note: "per 500g", emoji: "\uD83C\uDF70" },
  { name: "Custom Theme Cake", price: "\u20B9700+", note: "design-based", emoji: "\uD83C\uDF82" },
  { name: "Truffle Chocolate", price: "\u20B9550", note: "per 500g", emoji: "\uD83C\uDF6B" },
  { name: "Red Velvet", price: "\u20B9600", note: "per 500g", emoji: "\u2764\uFE0F" },
  { name: "Assorted Pastries", price: "\u20B940+", note: "per piece", emoji: "\uD83E\uDD50" },
  { name: "Photo / Doll Cake", price: "\u20B9900+", note: "custom order", emoji: "\uD83D\uDC78" },
];

export type Feature = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const whyUs: Feature[] = [
  {
    icon: Wheat,
    title: "Baked Fresh Daily",
    description: "Nothing pre-made. Every order is baked the day it's served.",
  },
  {
    icon: Sparkles,
    title: "Premium Ingredients",
    description: "Real butter, fresh cream and quality cocoa in every recipe.",
  },
  {
    icon: ShieldCheck,
    title: "Honest Pricing",
    description: "Loved by locals for fair rates — quality that fits your budget.",
  },
  {
    icon: Truck,
    title: "Local Delivery",
    description: "Quick delivery across Margherita & Ledo for your big day.",
  },
];

export type Testimonial = {
  name: string;
  initial: string;
  quote: string;
  rating: number;
};

export const testimonials: Testimonial[] = [
  {
    name: "S. Gogoi",
    initial: "S",
    quote:
      "The cream was light and tasty, and the design gave it a perfect birthday vibe. Absolutely loved it!",
    rating: 5,
  },
  {
    name: "W. Borah",
    initial: "W",
    quote: "Their cakes are always moist and flavorful. My family's favourite bakery in town.",
    rating: 5,
  },
  {
    name: "R. Das",
    initial: "R",
    quote: "The price was also very reasonable for the quality. Great service and warm hospitality.",
    rating: 5,
  },
];

export const stats = [
  { icon: Star, value: "4.8", label: "Google Rating" },
  { icon: Heart, value: "83+", label: "Happy Reviews" },
  { icon: Cake, value: "500+", label: "Cakes a Month" },
  { icon: Clock, value: "Daily", label: "Fresh Bakes" },
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Menu", href: "#menu" },
  { label: "About", href: "#about" },
  { label: "Why Us", href: "#why" },
  { label: "Reviews", href: "#reviews" },
  { label: "Visit", href: "#contact" },
];
