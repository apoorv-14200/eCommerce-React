import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Navbar from "./Navbar.js";
import Motherboard from "./Motherboard";
import Memory from "./Memory";
import GraphicsCard from "./GraphicsCard";
import Processor from "./Processor";
import Home from "./Home";
import Cart from "./Cart";
import AddProduct from "./AddProduct";
import SignIn from "./SignIn";
import Footer from "./Footer";
import { AuthenticateUser } from "../action/auth.js";
import "../css/App.css";
import LogIn from "./LogIn.js";
import { useEffect } from "react";
import jwt_decode from "jwt-decode";
import { connect } from "react-redux";
import { fetchcart } from "../action/cart.js";
const App = (props) => {
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const user = jwt_decode(token);
      props.dispatch(AuthenticateUser(user));
    }
    setTimeout(() => props.dispatch(fetchcart()), 50);
  }, []);
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <div className="line"></div>
        <div className="mainBody">
          <Route path="/" exact component={Home} />
          <Route path="/motherboard" exact component={Motherboard} />
          <Route path="/memory" exact component={Memory} />
          <Route path="/graphics-card" exact component={GraphicsCard} />
          <Route path="/processor" exact component={Processor} />
          <Route path="/cart" exact component={Cart} />
          <Route path="/add" exact component={AddProduct} />
          <Route path="/sign-in" exact component={SignIn} />
          <Route path="/log-in" exact component={LogIn} />
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

function mapStateToProps(state) {
  return {};
}
export default connect(mapStateToProps)(App);
