import React, { Component } from "react";

import Header from "./../components/Header/Header";
import Footer from "./../components/Footer/Footer";
import Shortener from "./../components/Shortener/Shortener";

class Homepage extends Component {
  render() {
    return (
      <div className="homepage">
        <Header />
        <Shortener />
        <Footer />
      </div>
    );
  }
}

export default Homepage;
