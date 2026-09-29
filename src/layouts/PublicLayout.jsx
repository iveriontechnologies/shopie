import React from "react";
import Navbar from "../components/shared/Navbar";
import { Outlet } from "react-router-dom";

const PublicLayout = () => {
  return (
    <div className="flex w-full p-4 min-h-screen">
      <div className="mx-auto flex min-h-[calc(100vh-2rem)] w-full max-w-[1460px] gap-4">
        <Navbar />
        <div className="bg-white rounded-[var(--radius-2xl)] w-full">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default PublicLayout;
