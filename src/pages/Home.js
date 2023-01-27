import React from "react";
import Hero from "../Components/Hero";
import Banner from "../Components/Banner";
import { Link } from "react-router-dom";
import Services from "../Components/Services";
import FeaturedRooms from "./FeaturedRoom";

const Home = () => {
  return (
    <>
      <Hero>
        <Banner title="Luxurios Room" subtitle="Starting as low as $200">
          <Link to="/Rooms" className="btn-primary">
            Rooms
          </Link>
        </Banner>
      </Hero>
      <Services />
      <FeaturedRooms />
    </>
  );
};

export default Home;
