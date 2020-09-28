import React from 'react'
import '../css/FirstPage.css'
import logo from  '../assets/logo.svg';
import { useHistory } from 'react-router-dom'

import SearchIcon from '@material-ui/icons/Search';
import PeopleAltOutlinedIcon from '@material-ui/icons/PeopleAltOutlined';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';

function FirstPage() {
    const history=useHistory();
    const login=(e)=>
    {
        e.preventDefault();
        history.push('/login')

    }
    return (
        <div className="main">
                <div className="left_right">
                    <div className="left_div">
                    
                        <div className="left_div_content">
                            <div className="firstpage__contentDataLine"><SearchIcon/><h3>Follow your interests.</h3></div>
                            <div className="firstpage__contentDataLine"><PeopleAltOutlinedIcon/><h3>Hear what people are talking about.</h3></div>
                            <div className="firstpage__contentDataLine"><ChatBubbleOutlineIcon/> <h3>Join the conversation.</h3></div>
                        </div>
                             <img src={logo} className="Twitter_Logo" alt="Twiter Logo" /> 
                    
                        </div>
                <div className="right_div">
                        <div className="right_div_form">
                                <input className="input_name" type="text" placeholder="Phone, email, or username"/>
                                <input className="input_password"  type="password" placeholder="Password"/>
                                <button className="login" type="submit">Log in</button>
                                <p className="forgot"><a href="/">Forgot password?</a></p>
                        </div>
                             <div className="right_form">
                                <img className="img_right" src={logo} alt="image"/>
                                <p className="para1">See what’s happening in<p className="para2"> the world right now</p></p>
                                <p className="para3">Join Twitter today.</p>
                                <button className="sign_up">Sign up</button>
                                <button className="main_login" onClick={login}>Log in</button>
                            </div>
                </div>
        </div>
            <div className="footer">
            <div className="footer_element">
                <span>About</span>
                <span>Help Center</span>
                <span>Terms</span>
                <span>Privacy policy</span>
                <span>Cookies</span>
                <span>Ads info</span>
                <span>Blog</span>
                <span>Status</span>
                <span>Jobs</span>
                <span>Brand</span>
                <span>Advertise</span>
                <span>Marketing</span>
                <span>Businesses</span>
                <span>Developers</span>
                <span>Directory</span>
                <span>Settings</span>
            </div>
            </div>
        </div>
    )
}

export default FirstPage
