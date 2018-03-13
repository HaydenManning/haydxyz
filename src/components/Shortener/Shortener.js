import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";

import { originalUrlInputFunc, createNewShort } from "./../../ducks/reducer";

class Shortener extends Component {
  originalUrlInput(e) {
    this.props.originalUrlInputFunc(e);
  }
  createNewShort() {
    this.props.createNewShort(this.props.originalUrlInput);
    document.getElementById("long-input").value = "";
  }

  render() {
    return (
      <div className="shortener">
        <div className="url-shortener">
          <div className="short-content">
            {this.props.newShortUrl !== "" ? (
              `http://hdn.mx/${this.props.newShortUrl}`
            ) : (
              <h1>SIMPLIFY</h1>
            )}
            <div className="url-input">
              <input
                id="long-input"
                onChange={e => this.originalUrlInput(e.target.value)}
                placeholder="Paste your URL"
                type="url"
              />
              <button onClick={() => this.createNewShort()}>SHORTEN URL</button>
            </div>
            <p>All hdn.mx URLs are public and can be accessed by anyone</p>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default withRouter(
  connect(mapStateToProps, {
    originalUrlInputFunc,
    createNewShort
  })(Shortener)
);
