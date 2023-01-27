import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";
import Error from "./pages/Error";
import Navbar from "./Components/Navbar";
import ContactUs from "./pages/ContactUs";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/rooms" component={Rooms} />
        <Route exact path="/contact" component={ContactUs} />
        <Route exact path="/rooms/:roomId" component={SingleRoom} />
        <Route component={Error} />
      </Switch>
    </>
  );
}

export default App;
