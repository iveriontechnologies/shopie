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

export const categories = [
  {
    id: 1,
    name: "Women",
    slug: "women",
    image:
      "https://images.unsplash.com/photo-1636308600707-e19abecd6246?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    name: "Men",
    slug: "men",
    image:
      "https://plus.unsplash.com/premium_photo-1671656349296-9355f2d91565?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    name: "Kids",
    slug: "kids",
    image:
      "https://plus.unsplash.com/premium_photo-1755534537492-931baf15863a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    name: "Shoes",
    slug: "shoes",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 5,
    name: "Accessories",
    slug: "accessories",
    image:
      "https://images.unsplash.com/photo-1723802205505-2f88b2227718?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];
