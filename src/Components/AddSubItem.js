import React, { useState } from "react";
import { connect } from "react-redux";
import { addTocart, fetchcart } from "../action/cart";
const AddSubItem = (props) => {
  const [count, changeCount] = useState(0);
  const addOnClick = () => {
    changeCount(count + 1);
  };

  const subOnClick = (id) => {
    let p = count - 1;
    if (p < 0) {
      p = 0;
    }
    changeCount(p);
  };
  const handleClick = async (id, count) => {
    console.log("add to cart dispatched");
    props.dispatch(addTocart(id, count));
  };

  return (
    <div>
      <div className="AddSubButton">
        <button
          className="ui small primary button"
          onClick={() => subOnClick()}
        >
          -
        </button>
        <div className="countItem">{count}</div>
        <button className="ui small button" onClick={() => addOnClick()}>
          +
        </button>
      </div>
      <div className="CartAndBuy">
        <div className="ui buttons">
          <button
            className="ui button"
            onClick={() => handleClick(props.id, count)}
          >
            Add to Cart
          </button>
          <div className="or"></div>
          <button className="ui positive button">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps)(AddSubItem);
