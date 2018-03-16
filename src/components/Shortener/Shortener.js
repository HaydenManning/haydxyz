import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";

import { originalUrlInputFunc, createNewShort } from "./../../ducks/reducer";
import "./Shortner.css";

class Shortener extends Component {
  constructor(props) {
    super(props);
    this.state = {
      valid: true
    };
  }
  originalUrlInput(e) {
    this.props.originalUrlInputFunc(e);
  }
  createNewShort() {
    if (
      !/^((https?|ftp|smtp):\/\/)?(www.)?[a-zA-Z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_?]+=[a-zA-Z0-9-%]+&?)?$/.test(
        this.props.originalUrlInput
      )
    ) {
      this.setState({ valid: false });
      return;
    }
    this.props.createNewShort(this.props.originalUrlInput);
    setTimeout(() => (document.getElementById("long-input").value = ""), 250);
    this.setState({ valid: true });
  }

  render() {
    let shortTitle = <h1>HDN your links</h1>;
    if (this.state.valid === false) {
      shortTitle = <h1>Please enter a valid URL</h1>;
    } else if (this.props.newShort !== "") {
      shortTitle = <h1>http://hdn.mx/{this.props.newShort}</h1>;
    } else if (
      this.props.newShort === "" ||
      this.props.originalUrlInput === ""
    ) {
      shortTitle = <h1>HDN your links</h1>;
    }
    return (
      <div className="shortener">
        <div className="url-shortener">
          <div className="short-title">{shortTitle}</div>
          <div className="url-input">
            <input
              id="long-input"
              onChange={e => this.originalUrlInput(e.target.value)}
              placeholder="Paste your URL"
              type="url"
            />

            <i
              onClick={() => this.createNewShort()}
              className="fas fa-arrow-alt-circle-right fa-3x"
            />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default withRouter(
  connect(mapStateToProps, {
    originalUrlInputFunc,
    createNewShort
  })(Shortener)
);
