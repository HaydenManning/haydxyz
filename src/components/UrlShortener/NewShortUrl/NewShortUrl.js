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
          </div>
        </div>
        <div className="url-shortener-list">
          <div className="table-head">
            <h2 id="table-head-original">Original URL</h2>
            <h2 id="table-head-created">Created</h2>
            <h2 id="table-head-short">Short URL</h2>
            <h2 id="table-head-click">All Clicks</h2>
          </div>
          <h1>
            This will be a list of the last 10 generated url's (either for the
            user of for the entire site) (could also do top visited links
            instead)
          </h1>
        </div>

        {/* conditional rendering for the screen prompt that provides users with the new short link*/}
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
