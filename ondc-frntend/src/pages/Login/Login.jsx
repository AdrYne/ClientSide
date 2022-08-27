import React from 'react'
import './Login.css'

function Login() {
  return (
    <div className="outer-container">
        <h1>Login</h1>
        <div className="login-container">
          <input type="number" className="input" placeholder="Enter your ONDC ID"/>
          <button className="lgn-btn">Generate OTP</button>
        </div>
    </div>
  )
}

export default Login