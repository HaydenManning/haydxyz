// Landing Page
import React, { Component } from "react";
import { connect } from "react-redux";
// prevents missing state updates
import { withRouter } from "react-router-dom";

import "./Landing.css";

class Landing extends Component {
  render() {
    return (
      <div className="landing-main">
        <h1> Landing Page </h1>
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default withRouter(connect(mapStateToProps)(Landing));
