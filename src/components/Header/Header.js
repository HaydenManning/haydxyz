// Site Header
import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";

import {
  verifyUser,
  logoutUser,
  getUser,
  getAllUserUrl
} from "./../../ducks/reducer";
import "./Header.css";
//
class Header extends Component {
  componentDidMount() {
    console.log("You're Fired");
    this.props.verifyUser();
    this.props
      .getUser()
      .then(() => this.props.getAllUserUrl(this.props.user.uniq_user_id));
    console.log(this.props.user);
  }

  logout() {
    console.log(this.props.user);
    this.props.logoutUser();
  }

  render() {
    console.log(this.props.auth_status);
    return (
      <div className="header-main">
        <div className="header-left">
          <Link to="/">
            <h1 id="logo">HDN.MX</h1>
          </Link>
          <a href="https://github.com/HaydenManning/hdnmx-url-shortener">
            <h1>GitHub</h1>
          </a>
          <Link to="/i/report">
            <h1>Report</h1>
          </Link>
        </div>
        {this.props.auth_status !== true ? (
          <div className="header-right" id="login-sign-btn">
            <a href="http://hdn.mx/auth">
              <button id="login-signup-btn">Login / Signup</button>
            </a>
          </div>
        ) : (
          <div className="header-right">
            <button
              className="margin-r"
              id="login-signup-btn-2"
              onClick={() => this.logout()}
            >
              Logout
            </button>
            <Link to="/u/settings">
              <button id="login-signup-btn-2">Settings</button>
            </Link>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default withRouter(
  connect(mapStateToProps, { verifyUser, logoutUser, getUser, getAllUserUrl })(
    Header
  )
);
