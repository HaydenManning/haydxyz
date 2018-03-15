import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";

import { originalUrlInputFunc, createNewShort } from "./../../ducks/reducer";
import "./HomeConditional.css";

class HomeConditional extends Component {
  render() {
    return (
      <div className="conditional">
        {this.props.auth_status === false ? (
          <div className="not-signed-in">
            <div className="nsi-text" id="login-sign-btn">
              <h1>Manage Links, views stats, and set custom domains.</h1>
              <button id="login-signup-btn2">Login / Signup</button>
            </div>
            <div className="nsi-cta">
              <img src={require("./../../images/callout.png")} />
            </div>
          </div>
        ) : (
          <div className="signed-in">
            <div className="si-title">
              <h1>Recent Short links.</h1>
            </div>
            <div className="si-table">
              <div className="table-header">
                <input placeholder="Search..." />
                <button>Last Page</button>
                <button>Next Page</button>
              </div>
              <div className="table-cats">
                <h2>Original URL</h2>
                <h2>Created</h2>
                <h2>Short URL</h2>
                <h2>Clicks</h2>
              </div>
              <div className="table-row">
                {/* use a map method to show to links and generate data unique to the row*/}
              </div>
              <div className="table-bottom" />
            </div>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default withRouter(connect(mapStateToProps)(HomeConditional));
