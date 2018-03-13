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
            <h1>HDN.MX</h1>
          </Link>
          <a href="https://github.com/HaydenManning/hdnmx-url-shortener">
            <h1>GitHub</h1>
          </a>
        </div>
        {/* auth_status needs to be created */}
        {this.props.auth_status !== true ? (
          <div className="header-right">
            <button>Login / Signup</button>
          </div>
        ) : (
          <div className="header-right">
            <button>Logout</button>
            <button>Settings</button>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default withRouter(connect(mapStateToProps)(Header));
