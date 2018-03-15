import React, { Component } from "react";
import "./Features.css";

class Features extends Component {
  render() {
    return (
      <div className="features">
        <h1>The HDN Reason</h1>
        <div className="l2r-features">
          <div className="feature">
            <i class="fas fa-money-bill-alt fa-3x" />
            <h2>Free</h2>
            <p>HDN.MX Url Shortening will always be free for the user</p>
          </div>
          <div className="feature">
            <i class="fas fa-check-circle fa-3x" />
            <h2>API</h2>
            <p>
              Use the provided API to create, delete, and get URL's from
              anywhere
            </p>
          </div>
          <div className="feature">
            <i class="fas fa-chart-pie fa-3x" />
            <h2>Management</h2>
            <p>
              Create, protect, and delete your links and monitor them with
              detailed statistics
            </p>
          </div>
          <div className="feature">
            <i class="fas fa-handshake fa-3x" />
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
