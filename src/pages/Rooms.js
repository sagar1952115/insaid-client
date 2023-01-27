import React from "react";
import Hero from "../Components/Hero";
import { Link } from "react-router-dom";
import Banner from "../Components/Banner";
import RoomContainer from "../Components/RoomContainer";

const Rooms = () => {
  return (
    <>
      <Hero hero="roomsHero">
        <Banner
          title="Our Rooms "
          subtitle="We have excelled in the state of  art of serving the needs"
        >
          <Link to="/" className="btn-primary">
            Back to Home
          </Link>
        </Banner>
      </Hero>
      <RoomContainer />
    </>
  );
};

export default Rooms;
