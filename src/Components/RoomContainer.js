import React from "react";
import RoomFilter from "./RoomFilter";
import RoomList from "./RoomList";
import { WithConsumer } from "../Context";
import Loading from "../Components/Loading";

//using higher order components to pass context to functional components
function RoomContainer({ context }) {
  const { rooms, sortedRooms, loading } = context;
  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <RoomFilter rooms={rooms} />
      <RoomList rooms={sortedRooms} />
    </>
  );
}

export default WithConsumer(RoomContainer);

/*using render props
export default function RoomContainer() {
  return (
    <RoomConsumer>
      {(value) => {
        const { rooms, sortedRooms, loading } = value;
        if (loading) {
          return <Loading />;
        }
        return (
          <div>
            <RoomFilter rooms={rooms} />
            <RoomList rooms={sortedRooms} />
          </div>
        );
      }}
    </RoomConsumer>
  );
}
*/
