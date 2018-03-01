// Site Footer
import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";

import "./Footer.css";

class Footer extends Component {
  render() {
    return (
      <div className="footer-main">
        <div className="footer-link">
          <Link to="/contact">
            <h1>CONTACT</h1>
          </Link>
          <Link to="/tos">
            <h1>TERMS OF SERVICE</h1>
          </Link>
          <Link to="/disclaimer">
            <h1>THIS IS NOT A REAL COMPANY</h1>
          </Link>
          <Link to="/privacy-policy">
            <h1>PRIVACY POLICY</h1>
          </Link>
          <Link to="/give">
            <h1>DONATE</h1>
          </Link>
        </div>
        <div className="footer-logo">
          <Link to="/">
            <h1>hayd.xyz</h1>
          </Link>
        </div>
        <div className="footer-cc">
          <a href="https://github.com/HaydenManning/haydxyz">
            <p>2018 hayd.xyz | Handmade by Hayden Manning</p>
          </a>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default withRouter(connect(mapStateToProps)(Footer));
