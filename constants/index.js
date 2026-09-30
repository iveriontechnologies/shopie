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
