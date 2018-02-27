// URL Redirect for when someone is using a short URL
import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, Redirect } from "react-router-dom";
import axios from "axios";

class UrlRedirect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: ""
    };
  }

  originalUrl() {
    axios
      .get(`http://localhost:3001/api/url/test${window.location.pathname}`)
      .then(response => {
        let x = response.data[0].orig_url;
        if (x.startsWith("https://") || x.startsWith("http://")) {
          this.setState({ url: x });
        } else {
          this.setState({
            url: `https://${x}`
          });
        }
        console.log(this.state.url);
      })
      .catch(console.log);
  }

  componentDidMount() {
    this.originalUrl();
  }

  render() {
    return (
      <div>
        {this.state.url !== "" ? (
          window.location.assign(this.state.url)
        ) : (
          <h1>{this.state.url}</h1>
        )}
      </div>
    );
  }
}

export default UrlRedirect;
