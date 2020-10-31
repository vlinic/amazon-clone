import React, {useState } from "react";
import "./payment.css";
import { useStateValue } from "./StateProvider";
import CheckoutProducts from "./CheckoutProducts";
import { Link } from "react-router-dom";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "./reducer";

function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();

  const stripe = useStripe();
  const elements = useElements();

  const [succeeded, setSucceeded] = useState(false)
  const [processing, setProcessing] = useState("")
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);

  const handleSubmit = (e) => {};

  const handleChange = (event) => {
    setDisabled(event.empty);
    setError(event.error ? event.error.massage : "");
  };

  return (
    <div className="payment">
      <div className="payment__container">
        <h1>
          Checkout (<Link to="/checkout"> {basket?.length} items </Link>)
        </h1>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery Address:</h3>
          </div>
          <div className="payment__address">
            <p>{user?.email}</p>
            <p>123 React Lane</p>
            <p>Los Angeles, Ca</p>
          </div>
        </div>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Review items and delivery:</h3>
          </div>
          <div className="payment__items">
            {basket.map((item) => (
              <CheckoutProducts
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>
        <div className="payment__section">
          <h3>Payment Method:</h3>
          <div className="payment__details">
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />
              <div className="payment__priceContainer">
                <CurrencyFormat
                  renderText={(value) => (
                    <>
                      <p>
                        Subtotal ({basket?.length} items):{" "}
                        <strong>{value}</strong>
                      </p>                      
                    </>
                  )}
                  decimalScale={2}
                  value={getBasketTotal(basket)}
                  displayType={"text"}
                  thousandSeparator={true}
                  suffix={"Kn"}
                />
                <button disabled={processing ||disabled || succeeded}><span>{processing ? <p>Processing</p> : "Buy Now"}</span></button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
