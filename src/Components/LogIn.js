import { connect } from "react-redux";
import React, { useEffect, useState } from "react";
import { authorizeuser } from "../action/auth";
import { Redirect } from "react-router";
import { setTab } from "../action/curtab";
const LogIn = (props) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const onFormSubmit = (e) => {
    e.preventDefault();
    let data = {
      email: email,
      password: pass,
    };
    props.dispatch(authorizeuser(data));
  };
  useEffect(() => {
    props.dispatch(setTab("LogIn"));
  }, []);
  const { user } = props.auth;
  if (user) {
    return <Redirect to="/"></Redirect>;
  }
  return (
    <div className="mainContainer">
      <form class="ui form">
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
        <button class="ui button" type="submit" onClick={onFormSubmit}>
          Log In
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
export default connect(mapStateToProps)(LogIn);
