import React, { Component } from "react";

import Report from "./../components/Report/Report.js";
import Header from "./../components/Header/Header";

class Reports extends Component {
  render() {
    return (
      <div className="report">
        <Header />
        <Report />
      </div>
    );
  }
}

export default Reports;
