import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";

import {
  fNameInput,
  lNameInput,
  emailInputFunc,
  updateFirstName,
  updateLastName,
  updateEmail,
  deleteUserAccount,
  getUser
} from "./../../../ducks/reducer";
import "./UserSettings.css";

class USettings extends Component {
  updateInfo(val) {
    if (val === "f_name") {
      this.props.updateFirstName(
        this.props.f_nameInput,
        this.props.user.uniq_user_id
      );
      setTimeout(
        () => (document.getElementById("fname-input").value = ""),
        250
      );
    } else if (val === "l_name") {
      this.props.updateLastName(
        this.props.l_nameInput,
        this.props.user.uniq_user_id
      );
      setTimeout(
        () => (document.getElementById("lname-input").value = ""),
        250
      );
    } else if (val === "email") {
      this.props.updateEmail(
        this.props.emailInput,
        this.props.user.uniq_user_id
      );
      setTimeout(
        () => (document.getElementById("email-input").value = ""),
        250
      );
    } else {
      return;
    }
  }

  updateInput(val, e) {
    console.log(val, e);
    if (val === "f_name") {
      this.props.fNameInput(e);
      console.log(this.props.f_nameInput);
    } else if (val === "l_name") {
      this.props.lNameInput(e);
      console.log(this.props.l_nameInput);
    } else if (val === "email") {
      this.props.emailInputFunc(e);
      console.log(this.props.emailInput, "input");
    } else {
      return;
    }
  }

  deleteAcc() {
    let x = window.confirm(
      "Are you sure you want to delete your user account?"
    );
    if (x === true) {
      this.props.deleteUserAccount(this.props.user.uniq_user_id).then(() => {
        this.props.history.push("/");
      });
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
                  onChange={e => this.updateInput("f_name", e.target.value)}
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
                  onChange={e => this.updateInput("l_name", e.target.value)}
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
                  onChange={e => this.updateInput("email", e.target.value)}
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

const mapStateToProps = state => {
  return {
    user: state.user,
    auth_status: state.auth_status,
    f_nameInput: state.f_nameInput,
    l_nameInput: state.l_nameInput,
    emailInput: state.emailInput
  };
};

export default withRouter(
  connect(mapStateToProps, {
    fNameInput,
    lNameInput,
    emailInputFunc,
    updateFirstName,
    updateLastName,
    updateEmail,
    deleteUserAccount,
    getUser
  })(USettings)
);
