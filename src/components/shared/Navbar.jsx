import {
  CircleUserRound,
  Heart,
  House,
  LayoutGrid,
  ShoppingBag,
} from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="hidden sm:flex flex-col items-center justify-center py-4 px-2  ">
      <div className="h-full flex flex-col justify-between items-center">
        {/* Logo */}
        <h1 className="text-xl font-bold text-shop-violet">S</h1>

        {/* Navigations */}

        <div className="flex flex-col gap-12">
          <Link to={""}>
            <House
              size={24}
              className="hover:text-shop-violet cursor-pointer transition duration-200"
            />
          </Link>
          <Link to={""}>
            <LayoutGrid
              size={24}
              className="hover:text-shop-violet cursor-pointer transition duration-200"
            />
          </Link>
          <Link to={""}>
            <ShoppingBag
              size={24}
              className="hover:text-shop-violet cursor-pointer transition duration-200"
            />
          </Link>
          <Link to={""}>
            <Heart
              size={24}
              className="hover:text-shop-violet cursor-pointer transition duration-200"
            />
          </Link>
        </div>

        {/* Login */}

        <Link to={"/auth"}>
          <CircleUserRound
            size={24}
            className="hover:text-shop-violet cursor-pointer transition duration-200"
          />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
