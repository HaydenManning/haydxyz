import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";

import { getAllUserUrl } from "./../../ducks/reducer";
import "./HomeConditional.css";

class HomeConditional extends Component {
  componentDidMount() {
    console.log(this.props.usersUrl);
  }
  render() {
    return (
      <div className="conditional">
        {this.props.auth_status !== true && !this.props.usersUrl ? (
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
              <div className="table-cats">
                <h2>Original URL</h2>
                <h2>Created</h2>
                <h2>Short URL</h2>
                <h2>Auth ID</h2>
              </div>
              <div className="table-row-content">
                {this.props.usersUrl != undefined
                  ? this.props.usersUrl.map((obj, i) => {
                      return (
                        <div className="table-row">
                          <a
                            href={
                              this.props.usersUrl[i].orig_url.startsWith("http")
                                ? this.props.usersUrl[i].orig_url
                                : `https://${this.props.usersUrl[i].orig_url}`
                            }
                          >
                            <p>{this.props.usersUrl[i].orig_url}</p>
                          </a>
                          <p>{this.props.usersUrl[i].created}</p>
                          <a
                            href={
                              this.props.usersUrl[i].orig_url.startsWith("http")
                                ? this.props.usersUrl[i].orig_url
                                : `https://${this.props.usersUrl[i].orig_url}`
                            }
                          >
                            <p>{`https://hdn.mx/${
                              this.props.usersUrl[i].short_url
                            }`}</p>
                          </a>
                          <p>{this.props.usersUrl[i].auth_id}</p>
                        </div>
                      );
                    })
                  : false}
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

export default withRouter(
  connect(mapStateToProps, { getAllUserUrl })(HomeConditional)
);
