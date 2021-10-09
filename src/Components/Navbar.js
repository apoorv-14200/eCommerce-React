import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../action/auth";
import "../css/Navbar.css";
import { AuthenticateUser } from "../action/auth.js";
import jwt_decode from "jwt-decode";
// import { getCartItems } from '../action';

const Navbar = (props) => {
  const { user } = props.auth;
  const cart = props.cart;
  const logOut = () => {
    localStorage.removeItem("token");
    props.dispatch(logout());
  };
  const curtab = props.tab;
  return (
    <div className="Navbar">
      <div className="ui secondary pointing menu">
        <Link
          to="/"
          className="item"
          style={{
            backgroundColor: curtab == "Home" ? "yellowgreen" : "unset",
          }}
        >
          Home
        </Link>
        <Link
          to="/motherboard"
          className="item"
          style={{
            backgroundColor: curtab == "Motherboard" ? "yellowgreen" : "unset",
          }}
        >
          Motherboard
        </Link>
        <Link
          to="/memory"
          className="item"
          style={{
            backgroundColor: curtab == "Memory" ? "yellowgreen" : "unset",
          }}
        >
          Memory
        </Link>
        <Link
          to="/processor"
          className="item"
          style={{
            backgroundColor: curtab == "Processor" ? "yellowgreen" : "unset",
          }}
        >
          Processor
        </Link>
        <Link
          to="/graphics-card"
          className="item"
          style={{
            backgroundColor: curtab == "GraphicCard" ? "yellowgreen" : "unset",
          }}
        >
          Graphics Card
        </Link>
        <Link
          to="/add"
          className="item"
          style={{ backgroundColor: curtab == "ADD" ? "yellowgreen" : "unset" }}
        >
          Add Item
        </Link>
        <div className="right menu temp">
          {user && (
            <Link to="/cart" className="item">
              <i class="shopping cart large icon cartIcon"></i>
            </Link>
          )}
          {user && <div className="circle">{cart.length}</div>}
          {user && <div className="ui item">{user.name}</div>}
          {!user && (
            <Link to="/sign-in" className="ui item">
              Sign In
            </Link>
          )}
          {!user && (
            <Link to="/log-in" className="ui item">
              Log In
            </Link>
          )}
          {user && (
            <button className="ui item" onClick={logOut}>
              Log Out
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  // console.log(state.cartItems);
  return {
    auth: state.auth,
    cart: state.cart,
    tab: state.tab,
  };
};

export default connect(mapStateToProps)(Navbar);
