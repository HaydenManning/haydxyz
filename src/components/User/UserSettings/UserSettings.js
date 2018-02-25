// Allow User to edit Profile Settings
import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";

class UserSettings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userID: ""
    };
  }

  componentDidMount() {
    let uid = window.location.pathname;
    let userID = uid.split("").slice(3);
    for (let i = 0; i < 9; i++) userID.pop();
    userID = userID.join("");

    this.setState({
      userID
    });

    console.log(userID);
    //axios call to get user information from db
  }

  render() {
    return (
      <div>
        <h1> This is the User Settings for uniq_id {this.state.userID}</h1>
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default withRouter(connect(mapStateToProps)(UserSettings));
