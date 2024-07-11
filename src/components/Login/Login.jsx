/* eslint-disable no-unused-vars */

import React from "react";
import { auth, provider, providerf } from "../../config.js";
import { signInWithPopup } from "firebase/auth";
import { useState, useEffect } from "react";
import "./Login.css";
function Login() {
  const [value, setValue] = useState([]);
  const handleGoogle = () => {
    signInWithPopup(auth, provider).then((data) => {
      console.log(value);
      setValue(data.user);
      localStorage.setItem("email", data.user);
    });
  };

  const handleFacebook = () => {
    signInWithPopup(auth, providerf).then((data) => {
      console.log(value);
      setValue(data.user);
      localStorage.setItem("email", data.user);
    });
  };

  useEffect(() => {
    setValue(localStorage.getItem("email"));
  }, [setValue]);

  return (
    <div className="Login-section">
      <h1 className="login-title">Login Form</h1>

      <button onClick={handleGoogle}>SignIn with Google</button>
      <button onClick={handleFacebook}>SignIn with Facebook</button>
    </div>
  );
}

export default Login;
