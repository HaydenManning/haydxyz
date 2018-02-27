// Landing Page
import React, { Component } from "react";
import { connect } from "react-redux";
// prevents missing state updates
import { withRouter } from "react-router-dom";

import "./Landing.css";
import Header from "./../Header/Header";
import Footer from "./../Footer/Footer";
import { newShortUrlInputFunc, createNewShortUrl } from "./../../ducks/reducer";

class Landing extends Component {
  newShortUrlInput(e) {
    this.props.newShortUrlInputFunc(e);
  }

  createNewShortUrl() {
    this.props.createNewShortUrl(this.props.newShortUrlInput);
    document.getElementById("long-input").value = "";
  }

  render() {
    return (
      <div>
        <Header />
        <div className="url-shortener">
          <div className="short-content">
            <h1>Simplify your link</h1>
            <div className="url-input">
              <input
                id="long-input"
                onChange={e => this.newShortUrlInput(e.target.value)}
                placeholder="Your original URL here"
                type="url"
              />
              <button onClick={() => this.createNewShortUrl()}>
                SHORTEN URL
              </button>
            </div>
            <p>
              All hayd.xyz URLs and analytics are public and can be accessed by
              anyone
            </p>
            {this.props.newShortUrl !== ""
              ? `http://localhost:3002/${this.props.newShortUrl}`
              : false}
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default withRouter(
  connect(mapStateToProps, { newShortUrlInputFunc, createNewShortUrl })(Landing)
);
