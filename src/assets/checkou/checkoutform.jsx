import React, { useState, useEffect } from "react";
import {loadStripe} from '@stripe/stripe-js';
import { useNavigate } from 'react-router-dom'

import {
  EmbeddedCheckoutProvider,
  EmbeddedCheckout
} from '@stripe/react-stripe-js';
import { useSelector } from "react-redux";

const stripePromise = loadStripe("pk_test_51Out25SCexRHalt0jbS7thuZ5bDrpQJYmPR0EVtCBlTWWiOLJSEI9cIsLcB8KrxL2AVnqykLQV2lJJUqrxZipIzV00Ufk0VJGf");


const CheckoutForm = () => {
    const [clientSecret, setClientSecret] = useState('');
  
    const navigate = useNavigate();
    const cartitems = useSelector((state) => state.cart.cartdata);

    console.log(cartitems);

    useEffect(() => {
      // Create a Checkout Session as soon as the page loads
      fetch(`${import.meta.env.VITE_URL}create-checkout-session`, {
        method: "POST",
        headers:{
            'Accept': 'application/json',
                    'Content-Type': 'application/json',
            "token": localStorage.getItem("token")
        },
        body: JSON.stringify({
            items: cartitems
        })
      })
        .then((res) => {
            // console.log(res);
           return res.json()
        }
        )
        .then((data) => {
            console.log('data',data);
            if(data.name == "JsonWebTokenError" || data.name == "TokenExpiredError"){
              return navigate("/login")
       }
            setClientSecret(data.clientSecret)
        });
    }, []);
  console.log('clientSecret',clientSecret);
    return (
      <div id="checkout">
        {clientSecret && (
          <EmbeddedCheckoutProvider
            stripe={stripePromise}
            options={{clientSecret}}
          >
            <EmbeddedCheckout />
          </EmbeddedCheckoutProvider>
        )}
      </div>
    )
  }


export default CheckoutForm