import React from "react";
import defaultImage from "../images/room-1.jpeg";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default function Room({ room }) {
  const { name, images, slug, price } = room;
  return (
    <article className="room">
      <div className="img-container">
        <img src={images[0] || defaultImage} alt="Single Room" />
        <div className="price-top">
          <h2>${price}</h2>
          <p>per night</p>
        </div>
        <Link to={`/Rooms/${slug}`} className="btn-primary room-link">
          Features
        </Link>
      </div>
      <p className="room-info">{name}</p>
    </article>
  );
}

//defines what prop are required and validate if the current prop type is passed in the function Room
Room.propTypes = {
  room: PropTypes.shape({
    name: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    price: PropTypes.number.isRequired,
  }),
};
