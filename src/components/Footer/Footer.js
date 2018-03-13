// Site Footer
import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./Footer.css";

class Footer extends Component {
  render() {
    return (
      <div className="footer-main">
        <p>
          Made with love by{" "}
          <a href="https://www.linkedin.com/in/thaydenmanning/">
            Hayden Manning
          </a>{" "}
          | <a href="https://github.com/HaydenManning">GitHub</a> |{" "}
          <Link to="/i/tos">Terms of Service</Link>
        </p>
      </div>
    );
  }
}

export default Footer;
