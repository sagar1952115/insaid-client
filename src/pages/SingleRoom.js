import React, { Component } from "react";
import DefaultBcg from "../images/room-1.jpeg";
import { RoomContext } from "../Context";
import { Link } from "react-router-dom";
import Banner from "../Components/Banner";
import StyledHero from "../Components/StyledHero";

export default class SingleRoom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      roomId: this.props.match.params.roomId,
      DefaultBcg,
    };
  }
  static contextType = RoomContext;
  render() {
    const { getRoom } = this.context;
    const room = getRoom(this.state.roomId);
    if (!room) {
      return (
        <div className="error">
          <h3>No Such Rooms Could be Found</h3>
          <Link to="/Rooms" className="btn-primary">
            Back to Rooms
          </Link>
        </div>
      );
    }
    const {
      name,
      description,
      capacity,
      price,
      size,
      extras,
      breakfast,
      pets,
      images,
    } = room;
    const [mainImg, ...defaultImg] = images;
    return (
      <>
        <StyledHero img={mainImg || DefaultBcg}>
          <Banner title={`${name} room`}>
            <Link to="/Rooms" className="btn-primary">
              Back to Rooms
            </Link>
          </Banner>
        </StyledHero>
        <section className="single-room">
          <div className="single-room-images">
            {defaultImg.map((item, index) => (
              <img key={index} src={item} alt={name} />
            ))}
          </div>
          <div className="single-room-info">
            <article className="desc">
              <h3>Details</h3>
              <p>{description}</p>
            </article>
            <article className="info">
              <h3>Info</h3>
              <h6>Price : {price}</h6>
              <h6>size : {size} sqft</h6>
              <h6>
                Max capacity : {capacity} {capacity > 1 ? `people` : `person`}
              </h6>
              <h6>{pets ? "Pets Allowed" : "Pets are not allowed"}</h6>
              <h6>{breakfast && "free breakfast included"}</h6>
            </article>
          </div>
        </section>
        <section className="room-extras">
          <h3>Extras</h3>
          <ul className="extras">
            {extras.map((item, index) => {
              return <li key={index}>-{item}</li>;
            })}
          </ul>
        </section>
      </>
    );
  }
}
