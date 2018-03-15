// Site Header
import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import "./Header.css";

class Header extends Component {
  render() {
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
            <button id="login-signup-btn">Login / Signup</button>
          </div>
        ) : (
          <div className="header-right">
            <button id="login-signup-btn">Logout</button>
            <button id="login-signup-btn">Settings</button>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default withRouter(connect(mapStateToProps)(Header));
