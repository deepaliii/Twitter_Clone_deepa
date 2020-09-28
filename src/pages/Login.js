import React from 'react'
import logo from  '../assets/logo.svg';
import '../css/Login.css'
function Login() {
    return (
        <div>
            <div className="Login_page">
            <img src={logo} className="Login_logo" alt="Twiter Logo" /> 
            <h2 className="Login_header">Log in to Twitter</h2>
                <div className="Login_main">
                        <input className="Login_main_content" type="text" placeholder="Phone, email, or username"/>
                        <input className="Login_main_content"  type="password" placeholder="Password"/>
                        <button className="Login_main_button" type="submit">Log in</button>
                </div>
                <div className="Login_anchor">
                <p className="Login_anchor_content"><a href="/">Forgot password?</a></p>
                <p className="Login_anchor_content"><a href="/">.</a></p>
                <p className="Login_anchor_content"><a href="/">Sign up for Twitter</a></p>
                </div>
            </div>
        </div>
    )
}

export default Login
