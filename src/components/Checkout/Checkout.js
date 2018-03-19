import React from "react";
import axios from "axios";
import StripeCheckout from "react-stripe-checkout";

const STRIPE_PUBLISHABLE = "pk_test_KPBImuvaHNRIQx4aYLoa8SkS";
const PAYMENT_SERVER_URL = "/pay";
const CURRENCY = "USD";

const fromUsdToCent = amount => amount * 100;

const successPayment = data => {
  alert("Payment Successful");
};

const errorPayment = data => {
  alert("Payment Error");
};

const onToken = (amount, description) => token =>
  axios
    .post(PAYMENT_SERVER_URL, {
      description,
      source: token.id,
      currency: CURRENCY,
      amount: fromUsdToCent(amount)
    })
    .then(successPayment)
    .catch(errorPayment);

const Checkout = ({ name, description, amount }) => (
  <StripeCheckout
    name={name}
    description={description}
    amount={fromUsdToCent(amount)}
    token={onToken(amount, description)}
    currency={CURRENCY}
    stripeKey={STRIPE_PUBLISHABLE}
  />
);

export default Checkout;
