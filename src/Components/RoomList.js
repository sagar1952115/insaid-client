import React from "react";
import Room from "../pages/Room";

export default function RoomList({ rooms }) {
  if (rooms.length === 0)
    return (
      <div className="empty-search">
        unfortunately no room matched with your serach criteria
      </div>
    );
  return (
    <section className="roomslist">
      <div className="roomslist-center">
        {rooms.map((item) => {
          return <Room key={item.id} room={item} />;
        })}
      </div>
    </section>
  );
}
