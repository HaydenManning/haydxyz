import React, { Component } from "react";

import "./Report.css";

export default class Report extends Component {
  render() {
    return (
      <div className="report">
        <h2>Report Abuse</h2>
        <p>
          Report abuse, malware, phishing links to the below email address. The
          links will be removed within 72 hours.
        </p>
        <email>thaydenmanning[at]gmail.com</email>
      </div>
    );
  }
}
