import React, { useState } from "react";
import "./CSS/LoginSignup.css";

const LoginSignup = () => {
  const [state, setstate] = useState("Login");
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    password: "",
    phone: "",
  });

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const login = async () => {
    let data = new FormData();
    data.append("data", JSON.stringify(formData));
    let responseData;
    await fetch("https://30ec-117-211-249-155.ngrok-free.app/website/api/sign_in", {
      method: "POST",
      headers: {
        Accept: "application/form-data",
        // "Content-Type": "application/json",
      },
      body: data,
    })
      .then((resp) => resp.json())
      .then((data) => (responseData = data));
    if (responseData.access_token) {
      localStorage.setItem("auth-token", responseData.access_token);
      window.location.replace("/");
    } else {
      alert(responseData.errors);
    }
  };
  const signup = async () => {
    let data = new FormData();
    data.append("data", JSON.stringify(formData));
    let responseData;
    await fetch("https://30ec-117-211-249-155.ngrok-free.app/website/api/sign_up", {
      method: "POST",
      headers: {
        // Accept: "application/form-data",
        // "Content-Type": "application/json",
      },
      body: data,
    })
      .then((resp) => resp.json())
      .then((data) => (responseData = data));
    if (responseData.access_token) {
      localStorage.setItem("auth-token", responseData.access_token);
      window.location.replace("/");
    } else {
      alert(responseData.errors);
    }
  };

  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>{state}</h1>
        <div className="loginsignup-fields">
          {state === "Signup" && (
            <input
              name="full_name"
              value={formData.full_name}
              onChange={changeHandler}
              type="text"
              placeholder="Your Name"
            />
          )}
          <input
            name="email"
            value={formData.email}
            onChange={changeHandler}
            type="email"
            placeholder="Your Email"
          />
          {state === "Signup" && (
            <input
              name="phone"
              value={formData.phone}
              onChange={changeHandler}
              type="phone"
              placeholder="Your Phone"
            />
          )}
          <input
            name="password"
            value={formData.password}
            onChange={changeHandler}
            type="password"
            placeholder="Password"
          />
        </div>
        <button
          onClick={() => {
            state === "Login" ? login() : signup();
          }}
        >
          Continue
        </button>
        {state === "Signup" ? (
          <p className="loginsignup-login">
            Already Have an account?{" "}
            <span
              onClick={() => {
                setstate("Login");
              }}
            >
              {" "}
              Login here
            </span>
          </p>
        ) : (
          <p className="loginsignup-login">
            Create an account?{" "}
            <span
              onClick={() => {
                setstate("Signup");
              }}
            >
              {" "}
              Click here
            </span>
          </p>
        )}

        <div className="loginsignup-agree">
          <input type="checkbox" name="" id="" />
          <p>By continuing, I agrree to the terms of use & privacy policy</p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
