import React from "react";
import { Link, NavLink } from "react-router-dom";
import { navigation } from "../../../constants";
import { CircleUserRound } from "lucide-react";

const Navbar = () => {
  return (
    <div className="hidden sm:flex flex-col items-center justify-center py-4 px-2  ">
      <div className="h-full flex flex-col justify-between items-center">
        {/* Logo */}
        {/* <h1 className="text-xl font-bold text-shop-violet">S</h1> */}
        <img src="/navbar_logo.png" alt="navbar_logo" className="w-10" />

        {/* Navigations */}

        <div className="flex flex-col gap-12">
          {navigation.map(({ to, icon: Icon }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `transition duration-200 ${isActive ? "text-shop-violet" : "text-gray-500 hover:text-shop-violet"}`
              }
            >
              <Icon size={24} />
            </NavLink>
          ))}
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
