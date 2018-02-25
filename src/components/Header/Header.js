// Site Header
import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <div className="header-main">
        <h1>THIS IS THE HEADER</h1>
        <Link to="/new">
          <button>Create New Short Url</button>
        </Link>
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default withRouter(connect(mapStateToProps)(Header));
