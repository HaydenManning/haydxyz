import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";

import {
  fNameInput,
  lNameInput,
  emailInput,
  updateFirstName,
  updateLastName,
  updateEmail,
  deleteUserAccount
} from "./../../../ducks/reducer";
import "./UserSettings.css";

class USettings extends Component {
  updateInfo(val) {
    //make sure to pass id
    if (val === "f_name") {
      return;
    } else if (val === "l_name") {
      return;
    } else if (val === "email") {
      return;
    } else {
      return;
    }
  }

  deleteAcc() {
    let x = window.confirm(
      "Are you sure you want to delete your user account?"
    );
    if (x === true) {
      return true;
    } else {
      return;
    }
  }
  render() {
    return (
      <div className="settings-wrap">
        {this.props.auth_status === true ? (
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
                <input
                  id="fname-input"
                  onChange={e => this.props.updateFirstName(e.target.value)}
                />
                <button
                  onClick={() => {
                    this.updateInfo("f_name");
                  }}
                >
                  SUBMIT
                </button>
              </div>
              <div className="user-info">
                <h2>Update Last Name</h2>
                <p>
                  {this.props.user.l_name
                    ? `${this.props.user.l_name}`
                    : "No last name on record."}
                </p>
                <input
                  id="lname-input"
                  onChange={e => this.props.updateLastName(e.target.value)}
                />
                <button
                  onClick={() => {
                    this.updateInfo("l_name");
                  }}
                >
                  SUBMIT
                </button>
              </div>
              <div className="user-info">
                <h2>Update Email</h2>
                <p>
                  {this.props.user.email
                    ? `${this.props.user.email}`
                    : "No email on record, input one below."}
                </p>
                <input
                  id="email-input"
                  onChange={e => this.props.updateEmail(e.target.value)}
                />
                <button
                  onClick={() => {
                    this.updateInfo("email");
                  }}
                >
                  SUBMIT
                </button>
              </div>
            </div>
            <div className="delete-user">
              <h2>DELETE ACCOUNT</h2>
              <p>
                Deleting your user account means that we will no longer store
                your information. However any links that you have created will
                still be active and available to any with the link.
              </p>
              <button
                id="delete-user-btn"
                onClick={() => {
                  this.deleteAcc();
                }}
              >
                DELETE ACCOUNT
              </button>
            </div>
          </div>
        ) : (
          <h1>Please Login</h1>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default withRouter(
  connect(mapStateToProps, {
    fNameInput,
    lNameInput,
    emailInput,
    updateFirstName,
    updateLastName,
    updateEmail,
    deleteUserAccount
  })(USettings)
);
