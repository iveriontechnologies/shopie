import { Heart, House, LayoutGrid, ShoppingBag } from "lucide-react";

export const navigation = [
  { to: "/", icon: House },
  {
    to: "/categories",
    icon: LayoutGrid,
  },
  {
    to: "/shop",
    icon: ShoppingBag,
  },
  {
    to: "/wishlist",
    icon: Heart,
  },
];

export const coverflow_carousel_products = [
  {
    src: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=640&h=640&fit=crop&q=80",
    alt: "White t-shirt",
    title: "Classic White T-Shirt",
    price: "$25.00",
  },
  {
    src: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=640&h=640&fit=crop&q=80",
    alt: "Red sneakers",
    title: "Classic Red Sneakers",
    price: "$89.00",
  },
  {
    src: "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=640&h=640&fit=crop&q=80",
    alt: "Denim jacket",
    title: "Denim Jacket",
    price: "$72.00",
  },
  {
    src: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=640&h=640&fit=crop&q=80",
    alt: "Leather handbag",
    title: "Leather Handbag",
    price: "$110.00",
  },
];
