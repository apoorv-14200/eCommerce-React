import React, { useEffect } from "react";
import { connect } from "react-redux";
import { setTab } from "../action/curtab.js";
import MyCarousel from "./Carousel.js";

const Home = (props) => {
  useEffect(() => {
    props.dispatch(setTab("Home"));
  }, []);
  return (
    <div>
      <MyCarousel />
    </div>
  );
};

function mapStateToProps(state) {
  return {};
}
export default connect(mapStateToProps)(Home);
