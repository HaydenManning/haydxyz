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
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default withRouter(connect(mapStateToProps)(USettings));
