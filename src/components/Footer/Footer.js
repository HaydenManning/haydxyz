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
          <h1>CONTACT</h1>
          <h1>TERMS OF SERVICE</h1>
          <h1>THIS IS NOT A REAL COMPANY</h1>
          <h1>PRIVACY POLICY</h1>
        </div>
        <div className="footer-logo">
          <h1>hayd.xyz</h1>
        </div>
        <div className="footer-cc">
          <p>2018 hayd.xyz | Handmade by Hayden Manning in Dallas</p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default withRouter(connect(mapStateToProps)(Footer));
