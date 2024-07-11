/* eslint-disable no-unused-vars */

import React from "react"
import { auth, provider,providerf} from "../../config.js"
import { signInWithPopup } from "firebase/auth"
import {useState,useEffect} from "react"
import "./Login.css"
function Login() {
    const [value,setValue]=useState("")
    const handleClick = () => {
        signInWithPopup(auth,provider)((data) => {
            setValue(data.user.email)
            localStorage.setItem("email",data.user.email)
        })
    }
    const handleFacebook = () => {
        signInWithPopup(auth,providerf)((data) => {
            setValue(data.user.email)
            localStorage.setItem("email",data.user.email)
        })
    }

    useEffect(() => {
        setValue(localStorage.getItem("email"))
    })
    console.log(value )
    console.log(value)
    return (
        <div className="Login-section">
            <h1 className="login-title">Login Form</h1>
           
            <button onClick={handleClick}>SignIn with Google</button>
            <button onClick={handleFacebook}>SignIn with Facebook</button>
            
        </div>
    )
}

export default Login;