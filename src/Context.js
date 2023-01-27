import React, { Component } from "react";
import items from "./data";
const RoomContext = React.createContext();
const RoomConsumer = RoomContext.Consumer;

class RoomProvider extends Component {
  state = {
    rooms: [],
    sortedRooms: [],
    featuredRooms: [],
    loading: true,
    type: "all",
    capacity: 1,
    price: 0,
    minPrice: 0,
    maxPrice: 0,
    minSize: 0,
    maxSize: 0,
    breakfast: false,
    pets: false,
  };

  //getData calls to fetch the data from a database and store it using componentDidMount()
  componentDidMount() {
    //here we are getting data locally
    let rooms = this.formatData(items);
    let featuredRooms = rooms.filter((room) => room.featured);
    let maxPrice = Math.max(...rooms.map((item) => item.price));
    let maxSize = Math.max(...rooms.map((item) => item.size));
    this.setState({
      rooms,
      featuredRooms,
      sortedRooms: rooms,
      loading: false,
      price: maxPrice,
      maxPrice,
      maxSize,
    });
  }

  formatData(items) {
    let tempItems = items.map((item) => {
      let id = item.sys.id;
      let images = item.fields.images.map((image) => image.fields.file.url);
      let room = { ...item.fields, images, id };
      return room;
    });
    return tempItems;
  }

  //data has slug property which i am accessing with roomId name
  getRoom = (roomId) => {
    let tempRooms = [...this.state.rooms];
    const room = tempRooms.find((rm) => rm.slug === roomId);
    return room;
  };

  handleChange = (e) => {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    this.setState(
      {
        [name]: value,
      },
      this.filterRooms
    );
  };

  filterRooms = () => {
    let { rooms, capacity, price, breakfast, pets, type } = this.state;
    let tempRooms = rooms;
    capacity = parseInt(capacity);
    price = parseInt(price);

    if (type !== "all") {
      tempRooms = tempRooms.filter((room) => room.type === type);
    }
    tempRooms = tempRooms.filter((room) => room.price <= price);
    if (capacity !== 1) {
      tempRooms = tempRooms.filter((room) => room.capacity >= capacity);
    }
    if (breakfast) {
      tempRooms = tempRooms.filter((room) => room.breakfast);
    }
    if (pets) {
      tempRooms = tempRooms.filter((room) => room.pets);
    }
    this.setState({
      sortedRooms: tempRooms,
    });
  };
  render() {
    return (
      <RoomContext.Provider
        value={{
          ...this.state,
          getRoom: this.getRoom,
          handleChange: this.handleChange,
        }}
      >
        {this.props.children}
      </RoomContext.Provider>
    );
  }
}

//using HOC to wrap
export function WithConsumer(Component) {
  return function WrappedComponent(props) {
    return (
      <RoomConsumer>
        {(value) => <Component {...props} context={value} />}
      </RoomConsumer>
    );
  };
}

export { RoomProvider, RoomConsumer, RoomContext };
