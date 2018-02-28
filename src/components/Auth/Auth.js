import React, { Component } from "react";
import { Link } from "react-router-dom";

class Auth extends Component {
  render() {
    return (
      <div>
        <a href={process.env.REACT_APP_LOGIN}>
          <button>Login</button>
        </a>
      </div>
    );
  }
}

export default Auth;
