import React from "react";
import { connect } from "react-redux";
import "../css/Item.css";
import AddSubItem from "./AddSubItem.js";
// import { makeZero, addItemToCart, getCartItems } from '../action';

const Item = (props) => {
  // const addToCart = async (id) => {
  //     await props.makeZero(id);
  //     await props.addItemToCart(id, props.items[id]);
  //     await props.getCartItems();
  // }

  // console.log(props.cartItems);
  const { user } = props.auth;
  return (
    <div className="fullItem">
      <img src={props.product.img} alt="Not Available" />

      <div className="titleItem">{props.product.title}</div>

      <div className="priceAndButton">
        <div className="priceItem">&#8377;{props.product.price}</div>
      </div>
      {user && <AddSubItem id={props.product._id} />}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

export default connect(mapStateToProps)(Item);
