import React from "react";
import { categories, coverflow_carousel_products } from "../../constants";
import CoverflowCarousel from "../components/ui/CoverflowCarousel";
import SearchInput from "../components/ui/SearchInput";
import PillButton from "../components/ui/PillButton";

const HomePage = () => {
  return (
    <section className="w-full">
      <CoverflowCarousel
        slides={coverflow_carousel_products}
        showCaption
        showNavigation
        showPagination
      />
      <div className="mx-auto w-full max-w-lg -mt-6">
        <SearchInput placeholder="What are you shopping for today?" />
      </div>

      {/* Categories */}
      <div className="mx-auto mt-6 flex items-center justify-center">
        <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-none">
          {categories.map((category) => (
            <PillButton
              key={category.id}
              image={category.image}
              name={category.name}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomePage;
