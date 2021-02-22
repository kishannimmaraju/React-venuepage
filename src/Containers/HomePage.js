import React from "react";
import "./homepage.css";
import Header from "../Components/Header";
import Banner from "../Components/Banner";
import PopularPlaces from "../Components/PopularPlaces";
import FuaturedPlaces from "../Components/FeaturePlaces/FuaturedPlaces";
import Services from "../Components/Services";
import Discover from "../Components/Discover";
import Priceing from "../Components/Priceing";
import Contact from "../Components/Contact";
import LocationMap from "../Components/LocationMap";
import Video from "../Components/Video";

function HomePage() {
  return (
    <>
      <Header />
      <Banner />
      <PopularPlaces />
      <FuaturedPlaces />
      <Services />
      <Discover />
      <Video />
      <Priceing />
      <LocationMap />
      <Contact />
    </>
  );
}
export default HomePage;
