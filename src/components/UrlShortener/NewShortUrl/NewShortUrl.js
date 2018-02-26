// Generate new short URL
import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import {
  newShortUrlInputFunc,
  createNewShortUrl
} from "./../../../ducks/reducer";
import "./NewShortUrl.css";

class NewShortUrl extends Component {
  newShortUrlInput(e) {
    this.props.newShortUrlInputFunc(e);
  }

  createNewShortUrl() {
    this.props.createNewShortUrl(this.props.newShortUrlInput);
  }

  render() {
    return (
      <div className="new-short-url-main">
        <div className="url-shortener">
          <div className="short-content">
            <h1>Simplify your link</h1>
            <div className="url-input">
              <input
                id="long-input"
                onChange={e => this.newShortUrlInput(e.target.value)}
              />
              <button onClick={() => this.createNewShortUrl()}>
                SHORTEN URL
              </button>
            </div>
            <p>
              All hayd.xyz URLs and analytics are public and can be accessed by
              anyone
            </p>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default withRouter(
  connect(mapStateToProps, { newShortUrlInputFunc, createNewShortUrl })(
    NewShortUrl
  )
);

//{this.props.newShortUrl !== ""
// ? `http://localhost:3002/${this.props.newShortUrl}`
// : false}
