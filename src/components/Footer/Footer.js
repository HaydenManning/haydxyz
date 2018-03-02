// Site Footer
import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";

import "./Footer.css";
import { getUser } from "./../../ducks/reducer";

class Footer extends Component {
  componentDidMount() {
    this.props.getUser();
  }

  render() {
    return (
      <div className="footer-main">
        <div className="footer-link">
          <Link to="/c/contact">
            <h1>CONTACT</h1>
          </Link>
          {this.props.user.length > 0 ? (
            <a href={process.env.REACT_APP_LOGIN}>
              <h1>ADMIN</h1>
            </a>
          ) : (
            <Link to="/a/dash">
              <h1>ADMIN</h1>
            </Link>
          )}
          <Link to="/give">
            <h1>DONATE</h1>
          </Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default withRouter(connect(mapStateToProps, { getUser })(Footer));
