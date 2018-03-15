// URL Redirect for when someone is using a short URL
import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";

class UrlRedirect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: "",
      base10: 0
    };
  }

  originalUrl() {
    let loc = window.location.pathname;
    loc = loc.substring(1);
    axios
      .get(`http://localhost:3001/api/url/${loc}`)
      .then(response => {
        let x = response.data[0].orig_url;
        if (x.startsWith("https://") || x.startsWith("http://")) {
          this.setState({ url: x });
        } else if (typeof x === "undefined") {
          return;
        } else {
          this.setState({ url: `https://${x}` });
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
          <h1>ERROR PLEASE TRY AGAIN LATER</h1>
        )}
      </div>
    );
  }
}

export default UrlRedirect;
