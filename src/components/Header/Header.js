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
          <h1>hayd.xyz</h1>
          <h1>ENTERPRISE</h1>
          <h1>CONTACT</h1>
          <h1>ABOUT</h1>
        </div>
        <div className="header-right">
          <a href={process.env.REACT_APP_LOGIN}>
            <h1>LOGIN</h1>
          </a>
          <button>GET ENTERPRISE</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default withRouter(connect(mapStateToProps)(Header));
