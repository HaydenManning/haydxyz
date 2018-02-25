// Generate new short URL
import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import {
  newShortUrlInputFunc,
  createNewShortUrl
} from "./../../../ducks/reducer";

class NewShortUrl extends Component {
  newShortUrlInput(e) {
    this.props.newShortUrlInputFunc(e);
  }

  createNewShortUrl() {
    this.props.createNewShortUrl();
  }

  render() {
    console.log(this.props.newShortUrlInput);
    return (
      <div>
        <h1> New Short Url </h1>
        <input onChange={e => this.newShortUrlInput(e.target.value)} />
        <button onClick={() => this.createNewShortUrl()}>CLICK ME</button>
        <h1>
          {this.props.newShortUrl !== ""
            ? this.props.newShortUrl
            : `create a url`}
        </h1>
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
