import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";

// IF AUTH_STATUS === FALSE RENDER LOGIN BUTTON ELSE RENDER NORMAL

class USettings extends Component {
  render() {
    return (
      <div className="settings-wrap">
        <div className="settings-welcome">
          <h1>
            Welcome,{" "}
            {this.props.user.f_name
              ? `${this.props.user.f_name} ${this.props.user.l_name}`
              : "feel free to input some information."}
          </h1>
          <div className="uinfo-three">
            <div className="user-info">
              <h2>Update First Name</h2>
              <p>
                {this.props.user.f_name
                  ? `${this.props.user.f_name}`
                  : "No first name on record."}
              </p>
              <input />
              <button>SUBMIT</button>
            </div>
            <div className="user-info">
              <h2>Update Last Name</h2>
              <p>
                {this.props.user.l_name
                  ? `${this.props.user.l_name}`
                  : "No last name on record."}
              </p>
              <input />
              <button>SUBMIT</button>
            </div>
            <div className="user-info">
              <h2>Update Email</h2>
              <p>
                {this.props.user.email
                  ? `${this.props.user.email}`
                  : "No email on record, input one below."}
              </p>
              <input />
              <button>SUBMIT</button>
            </div>
          </div>
          <div className="delete-user">
            <h2>DELETE ACCOUNT</h2>
            <p>
              Deleting your user account means that we will no longer store your
              information. However any links that you have created will still be
              active and available to any with the link.
            </p>
            <button id="delete-user-btn">DELETE ACCOUNT</button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default withRouter(connect(mapStateToProps)(USettings));
