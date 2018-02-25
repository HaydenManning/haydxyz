// Landing Page
import React, { Component } from "react";
import { connect } from "react-redux";
// prevents missing state updates
import { withRouter } from "react-router-dom";

import Header from "./../Header/Header";
import Footer from "./../Footer/Footer";

class Landing extends Component {
  componentDidMount() {
    console.log(`Ayy we mounted`);
  }

  render() {
    return (
      <div>
        <Header />
        <h1> This is the Landing </h1>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default withRouter(connect(mapStateToProps)(Landing));
