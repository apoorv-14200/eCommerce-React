import React, { useState, useEffect } from "react";
import axios from "axios";

import "../css/AddProduct.css";
import { connect } from "react-redux";
import { addproduct } from "../action/products";
import { setTab } from "../action/curtab";

const AddProduct = (props) => {
  // const [Id, setId] = useState('');
  useEffect(() => {
    props.dispatch(setTab("ADD"));
  }, []);
  const [Title, setTitle] = useState("");
  const [Price, setPrice] = useState("");
  const [Type, setType] = useState("");
  // const [Desc, setDesc] = useState('');
  const [Img, setImg] = useState("");
  const user = props.auth.user;
  const saveToDB = (event) => {
    event.preventDefault();
    let product = {
      title: Title,
      price: Price,
      type: Type,
      img: Img,
      user: user._id,
    };
    props.dispatch(addproduct(product));
    setTitle("");
    setPrice("");
    setType("");
    setImg("");
  };

  return (
    <div className="mainContainer">
      <form class="ui form">
        <div class="field">
          <label>Title</label>
          <input
            type="text"
            name="Product-Name"
            value={Title}
            placeholder="Product Name"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        {/* <div class="field">
                    <label>Product Description</label>
                    <input type="text" name="product-desc" value={Desc} placeholder="Product Description" onChange={e => setDesc(e.target.value)} />
                </div> */}
        <div class="field">
          <label>Type</label>
          <input
            type="text"
            name="type"
            value={Type}
            placeholder="Motherboard, Processor, etc."
            onChange={(e) => setType(e.target.value)}
          />
        </div>
        <div class="field">
          <label>Price</label>
          <input
            type="text"
            name="price"
            value={Price}
            placeholder="Price in Rupees"
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div class="field">
          <label>Image</label>
          <input
            type="text"
            name="image"
            value={Img}
            placeholder="Location of image"
            onChange={(e) => setImg(e.target.value)}
          />
        </div>

        <button class="ui button" type="submit" onClick={saveToDB}>
          Submit
        </button>
      </form>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    auth: state.auth,
  };
}
export default connect(mapStateToProps)(AddProduct);
