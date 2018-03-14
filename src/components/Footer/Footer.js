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
          <Link to="/i/tos">Terms of Service</Link> |{" "}
          <Link to="/i/report">
            <h1>Report</h1>
          </Link>
        </p>
        <p className="disclaimer">
          All hdn.mx URLs are public and can be accessed by anyone
        </p>
      </div>
    );
  }
}

export default Footer;
