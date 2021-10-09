import React, { useEffect } from "react";
import { connect } from "react-redux";

import "../css/Cart.css";
import CartItem from "../Components/CartItem";
import { fetchcart } from "../action/cart";
import { setTab } from "../action/curtab";

const Cart = (props) => {
  useEffect(() => {
    props.dispatch(fetchcart());
    props.dispatch(setTab("Cart"));
  }, []);
  const cart = props.cart;
  return (
    <div className="CartItems">
      {cart.map((item) => {
        return <CartItem item={item} />;
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    cart: state.cart,
  };
};

export default connect(mapStateToProps)(Cart);
