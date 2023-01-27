import React from "react";
import loadingGif from "../images/gif/loading-gear.gif";

export default function Loading() {
  return (
    <div className="loading">
      <h2>Loading...</h2>
      <img src={loadingGif} alt="" />
    </div>
  );
}
