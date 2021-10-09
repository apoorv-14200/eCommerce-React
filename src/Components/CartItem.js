import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchcart, removeFromCart } from "../action/cart";

import "../css/CartItem.css";

const CartItem = (props) => {
  const remove = async () => {
    props.dispatch(removeFromCart(props.item._id));
  };
  useEffect(() => {}, [props.dispatch]);
  return (
    <div className="cartItem">
      <div onClick={remove}>
        <i class="window close icon cross"></i>
      </div>
      <div className="itemImage">
        <img src={props.item.product.img} />
      </div>
      <div className="itemInfo">
        <div className="itemTitle">{props.item.product.title}</div>
        <div className="Price">
          Price : <span className="spaceIt">{props.item.product.price}</span>
        </div>
        <div>
          Quantity : <span className="spaceIt">{props.item.qty}</span>
        </div>
        <div>
          Total ={" "}
          <span className="spaceIt">
            {(
              parseInt(props.item.product.price.replace(/,/g, "")) *
              props.item.qty
            ).toLocaleString()}
          </span>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps)(CartItem);
