import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";
import { useState } from "react";
import styles from "./styles.module.scss";
export default function Form({ total, order_id }) {
  const [errorMessage, setErrorMessage] = useState(null);
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });
    if (error) {
      setErrorMessage(error.message);
    } else {
      // send the paymentMethod id to your server for processing
      console.log(paymentMethod.id);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Credit or debit card
        <CardElement />
      </label>
      {errorMessage && <div className="error">{errorMessage}</div>}
      <button disabled={!stripe}>Pay ${total}</button>
    </form>
  );
}
