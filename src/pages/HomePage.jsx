import React from "react";
import { coverflow_carousel_products } from "../../constants";
import CoverflowCarousel from "../components/ui/CoverflowCarousel";

const HomePage = () => {
  return (
    <section className="w-full">
      <CoverflowCarousel
        slides={coverflow_carousel_products}
        showCaption
        showNavigation
        showPagination
      />
    </section>
  );
};

export default HomePage;
