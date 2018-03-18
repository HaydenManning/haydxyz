import React, { Component } from "react";
import Checkout from "./../Checkout/Checkout";

class DonateComponent extends Component {
  render() {
    return (
      <div>
        <Checkout
          name={`Donation`}
          description={`Giving money to HDN`}
          amount={5}
        />
      </div>
    );
  }
}

export default DonateComponent;
