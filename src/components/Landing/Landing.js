// Landing Page
import React, { Component } from "react";
import { connect } from "react-redux";
// prevents missing state updates
import { withRouter } from "react-router-dom";

import "./Landing.css";
import Header from "./../Header/Header";
import Footer from "./../Footer/Footer";

class Landing extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="landing-main">
          <h1> Landing Page </h1>
        </div>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default withRouter(connect(mapStateToProps)(Landing));
