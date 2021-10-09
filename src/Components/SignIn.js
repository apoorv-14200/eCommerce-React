import React, { useEffect, useState } from "react";
import axios from "axios";

import "../css/SignIn.css";
import { connect } from "react-redux";
import { createuser } from "../action/sign_up_auth";
import { Redirect } from "react-router";
import { setTab } from "../action/curtab";
const SignIn = (props) => {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [confirmpass, setConfirm] = useState("");
  useEffect(() => {
    props.dispatch(setTab("SignIn"));
  }, []);
  const formSubmit = async (event) => {
    event.preventDefault();
    let data = {
      name: `${firstname} ${lastname}`,
      email: email,
      password: pass,
      confirmpassword: confirmpass,
    };
    props.dispatch(createuser(data));
  };
  const user = props.auth.user;
  if (user) {
    return <Redirect to="/"></Redirect>;
  }
  return (
    <div className="mainContainer">
      <form class="ui form">
        <div class="field">
          <label>Name</label>
          <div class="two fields">
            <div class="field">
              <input
                type="text"
                value={firstname}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="First Name"
              />
            </div>
            <div class="field">
              <input
                type="text"
                value={lastname}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Last Name"
              />
            </div>
          </div>
        </div>
        <div class="field">
          <label>Email ID</label>
          <input
            type="text"
            value={email}
            placeholder="john@gmail.com"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div class="field">
          <label>Password</label>
          <input
            type="password"
            value={pass}
            placeholder="Enter Password"
            onChange={(e) => setPass(e.target.value)}
          />
        </div>
        <div class="field">
          <label>Confirm-Password</label>
          <input
            type="password"
            value={confirmpass}
            placeholder="Enter Password"
            onChange={(e) => setConfirm(e.target.value)}
          />
        </div>
        <button class="ui button" type="submit" onClick={formSubmit}>
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
export default connect(mapStateToProps)(SignIn);
