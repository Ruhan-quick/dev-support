import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { CardElement } from "@stripe/react-stripe-js";
import PayCardForm from "./PayCardForm";

const stripePromise = loadStripe(
  "pk_test_51Ii0zoEtN4QKChuTXIVmi9ATl3a6Mwi7LkSK75IhmkrVXN16aEDleMD9rdQQYb9OcG0WJyvXDFKHbmM2lIsZ4gXV00amGZEqoz"
);

const PayForm = () => {
  return (
    <Elements stripe={stripePromise}>
      <PayCardForm></PayCardForm>
    </Elements>
  );
};

export default PayForm;
