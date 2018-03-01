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
          <Link to="/c/contact">
            <h1>CONTACT</h1>
          </Link>
          <Link to="/a/dashboard">
            <h1>ADMIN</h1>
          </Link>
          <Link to="/give">
            <h1>DONATE</h1>
          </Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default withRouter(connect(mapStateToProps)(Footer));
