import React from "react";
import { connect } from "react-redux";
import "../css/Footer.css";
const Footer = (props) => {
  const curtab = props.tab;
  return (
    <div className="Footer">
      <img src="/images/shoplogo.jfif" />
      <div className="mainInfo">
        <div className="copyrightAndName">
          <i class="copyright outline icon big"></i>
          <span className="year">2021 - </span>
          <img
            src={
              curtab != "GraphicCard"
                ? "/images/myname.png"
                : "/images/apoorvlogo.png"
            }
          />
        </div>
        <div className="icons">
          {/* <i class="envelope icon huge"></i> */}
          {/* <i class="facebook icon"></i> */}
          <a href="https://www.facebook.com/ThePiyushSharan" target="_blank">
            <i class="facebook f icon huge"></i>
          </a>
          <a href="https://github.com/pi-sharan" target="_blank">
            <i class="github icon huge"></i>
          </a>
          {/* <i class="instagram icon huge"></i> */}
          <a
            href="https://www.linkedin.com/in/piyush-sharan-16456645/"
            target="_blank"
          >
            <i class="linkedin icon huge"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    tab: state.tab,
  };
}
export default connect(mapStateToProps)(Footer);
