import React, { Component } from "react";

class Features extends Component {
  render() {
    return (
      <div className="features">
        <h1>The HDN Reason</h1>
        <div className="l2r-features">
          <div className="feature">
            <h2>Free</h2>
            <p>HDN.MX Url Shortening will always be free for the user</p>
          </div>
          <div className="feature">
            <h2>API</h2>
            <p>
              Use the provided API to crete, delete, and get URL's from anywhere
            </p>
          </div>
          <div className="feature">
            <h2>Management</h2>
            <p>
              Create, protect, and delete your links and monitor them with
              detailed statistics
            </p>
          </div>
          <div className="feature">
            <h2>Enterprise</h2>
            <p>
              Enterprise applications will be coming soon to help you better
              your company
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Features;
