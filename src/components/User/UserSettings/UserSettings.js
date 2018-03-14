import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";

// IF AUTH_STATUS === FALSE RENDER LOGIN BUTTON ELSE RENDER NORMAL

class UserSettings extends Component {
  render() {
    let dynamicWelcome = "";
    if (this.props.f_name !== "" && this.props.l_name !== "") {
      dynamicWelcome = `${this.props.f_name} ${this.props.l_name}.`;
    } else if (this.props.f_name !== "") {
      `${this.props.f_name}.`;
    } else if (this.props.email !== "") {
      `${this.props.email}.`;
    } else {
      dynamicWelcome = "feel free to input some information.";
    }

    return (
      <div className="settings-wrap">
        <div className="settings-welcome">
          <h1>Welcome, {dynamicWelcome}</h1>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default withRouter(connect(mapStateToProps)(UserSettings));
