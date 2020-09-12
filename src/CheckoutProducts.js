import React from 'react';
import './CheckoutProduct.css'

function CheckoutProducts({id, image, title,price, rating}) {
    return (
        <div className="checkoutProduct">
            <img src={image} alt="" className="checkoutProduct__image"/>
        </div>
    )
}

export default CheckoutProducts
