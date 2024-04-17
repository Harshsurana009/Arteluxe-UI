import React, { useState } from "react";
import "./Address.css";
import { useParams } from 'react-router-dom';
import navlogo from '../Assets/brand-logo.png'

const Address = () => {
  const { order_ref } = useParams();
  const [formData, setFormData] = useState({
    address: "",
    city: "",
    state: "",
    country: "",
    zip_code: ""
  });

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const address_api = async () => {
    let data = new FormData();
    data.append("data", JSON.stringify(formData));
    let responseData;
    await fetch(`https://arteluxe.onrender.com/website/api/orders/${order_ref}/add_address`, {
      method: "POST",
      headers: {
        Accept: "application/form-data",
        "auth-token": `${localStorage.getItem("auth-token")}`
      },
      body: data,
    })
      .then((resp) => resp.json())
      .then((data) => (responseData = data));
    if (responseData.status === "ok") {
      create_payment();
    } else {
      alert(responseData.errors);
    }
  };

  const create_payment = async () => {
    let responseData;
    await fetch(`https://arteluxe.onrender.com/website/api/orders/${order_ref}/create_payment`, {
      method: "POST",
      headers: {
        Accept: "application/form-data",
        "auth-token": `${localStorage.getItem("auth-token")}`
      },
      body: "",
    })
      .then((resp) => resp.json())
      .then((data) => (responseData = data));
    if (responseData.pg_transaction_id) {
      payment_modal(responseData);
    } else {
      alert(responseData.errors);
    }
  };

  const payment_modal = (responseData) => {
     const options = {
      "key": responseData.key_id,
      "amount": responseData.amount,
      "currency": "INR",
      "name": "Arteluxe",
      "image": navlogo,
      "order_id": responseData.pg_transaction_id,
      "handler": function (response){
          alert(response.razorpay_payment_id);
          alert(response.razorpay_order_id);
          alert(response.razorpay_signature)
      },
      "callback_url":  window.location.origin,
      "prefill": {
          "name": responseData.customer_details.name,
          "email": responseData.customer_details.email, 
          "contact": responseData.customer_details.phone
      },
      "theme": {
          "color": "#3399cc"
      }
    };

    const razorpayModal = new window.Razorpay(options);
    razorpayModal.open();
  }

  return (
    <div className="address">
      <div className="address-container">
        <h1>Delivering Address</h1>
        <div className="address-fields">
          <div>
            <input
              name="address"
              value={formData.address}
              onChange={changeHandler}
              type="text"
              placeholder="Address"
            />
            </div>
          <div>
            <input
              name="city"
              value={formData.city}
              onChange={changeHandler}
              type="text"
              placeholder="City"
            />
            <input
              name="state"
              value={formData.state}
              onChange={changeHandler}
              type="text"
              placeholder="State"
            />
          </div>
          <div>
            <input
              name="country"
              value={formData.country}
              onChange={changeHandler}
              type="text"
              placeholder="Country"
            />
            <input
              name="zip_code"
              value={formData.zip_code}
              onChange={changeHandler}
              type="text"
              placeholder="Zip Code"
            />
          </div>
        </div>
        <button onClick={() => {address_api()}}>
          Continue To Payment
        </button>
      </div>
    </div>
  );
};

export default Address;
