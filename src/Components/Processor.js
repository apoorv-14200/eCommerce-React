import React, { useEffect } from "react";
import Item from "./Item";
import "../css/Motherboard.css";
import { connect } from "react-redux";
import { fetchproducts } from "../action/products";
import { setTab } from "../action/curtab";
const Microprocessor = (props) => {
  useEffect(() => {
    props.dispatch(fetchproducts("Microprocessor"));
    props.dispatch(setTab("Processor"));
  }, []);
  const renderList = props.products.map((product) => {
    return <Item product={product} />;
  });

  return (
    <div className="ItemContainer">
      <div className="ItemGrid">
        {renderList}
        {/* {console.dir(renderList)} */}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};

export default connect(mapStateToProps)(Microprocessor);
