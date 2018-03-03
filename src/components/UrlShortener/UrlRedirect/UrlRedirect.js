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

  decodeUrl(str) {
    const base58 = "gC4cWTpDEwmGoBjqkfbaszAMrFe3PhKLVXxdQY96iR5t1SUNnv7Jy8ZHu2";
    let decode = 0;
    while (str) {
      let index = base58.indexOf(str[0]);
      let power = str.length - 1;
      decode += index * Math.pow(base58.length, power);
      str = str.substring(1);
    }
    this.setState({
      base10: decode
    });
    return decode;
  }

  componentDidMount() {
    // need to set backend/db up for this
    // this.decodeUrl(window.location.pathname);
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
