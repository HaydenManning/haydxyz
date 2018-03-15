import React, { Component } from "react";

import Header from "./../components/Header/Header";
import Footer from "./../components/Footer/Footer";
import Shortener from "./../components/Shortener/Shortener";
import Features from "../components/Features/Features";
import HomeConditional from "../components/HomeConditional/HomeConditional";

class Homepage extends Component {
  render() {
    return (
      <div className="homepage">
        <Header />
        <Shortener />
        <HomeConditional />
        <Features />
        <Footer />
      </div>
    );
  }
}

export default Homepage;
