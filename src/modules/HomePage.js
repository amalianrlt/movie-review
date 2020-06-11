import React from "react";
import HeaderPage from "../components/HeaderPage";
import FooterPage from "../components/FooterPage";
import CarouselHome from "../components/homepage/CarouselHome";
import HomeTab from "../components/homepage/HomeTab";
import PaginationPage from "../components/homepage/Pagination";

export default function HomePage() {
  return (
    <div>
      <HeaderPage />
      <CarouselHome />
      <HomeTab />
      <PaginationPage />
      <FooterPage />
    </div>
  );
}
