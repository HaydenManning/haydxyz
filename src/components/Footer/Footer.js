// Site Footer
import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";

import "./Footer.css";

class Footer extends Component {
  render() {
    return (
      <div className="footer-main">
        <h1>THIS IS THE FOOTER</h1>
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default withRouter(connect(mapStateToProps)(Footer));
