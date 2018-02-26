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
        <div className="url-shortener">
          <div className="short-content">
            <h1>Simplify your link</h1>
            <div className="url-input">
              <input id="long-input" />
              <button>SHORTEN URL</button>
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

export default withRouter(connect(mapStateToProps)(Landing));
