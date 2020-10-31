import React from "react";
import "./checkout.css";
import CheckoutProducts from "./CheckoutProducts";
import Subtotal from "./Subtotal";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./reducer";
import { useHistory } from "react-router-dom";

function Checkout() {
  const history = useHistory();
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
          className="checkout__ad"
        />
        <div>
          <h3 className="checkout__title"> Hello , {user?.email}</h3>
          <h2 className="checkout__subtitle">Your shopping basket</h2>

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
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
