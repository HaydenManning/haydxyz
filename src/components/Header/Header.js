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
            <h1>hayd.xyz</h1>
          </Link>
          <Link to="/enterprise">
            <h1>ENTERPRISE</h1>
          </Link>
          <Link to="/contact">
            <h1>CONTACT</h1>
          </Link>
          <Link to="/about-hayd">
            <h1>ABOUT</h1>
          </Link>
        </div>
        <div className="header-right">
          {/*The Login needs to check if a user is currently signed in, if a user is signed in we need to display an option to visit the profile*/}
          <a href={process.env.REACT_APP_LOGIN}>
            <h1>LOGIN</h1>
          </a>
          <Link to="/get-enterprise">
            <button>GET ENTERPRISE</button>
          </Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default withRouter(connect(mapStateToProps)(Header));
