import React, { Component } from "react";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";
import Title from "./Title";

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "free Cocktails",
        info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur, ipsam?",
      },
      {
        icon: <FaHiking />,
        title: "Endleass Hiking",
        info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur, ipsam?",
      },
      {
        icon: <FaShuttleVan />,
        title: "free Shuttle",
        info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur, ipsam?",
      },
      {
        icon: <FaBeer />,
        title: "Strong as a coke",
        info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur, ipsam?",
      },
    ],
  };
  render() {
    return (
      <section className="services">
        <Title title="Services" />
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article className="service" key={index}>
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
