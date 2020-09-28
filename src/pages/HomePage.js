import React from 'react'
import '../css/HomePage.css'
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import ExplicitRoundedIcon from '@material-ui/icons/ExplicitRounded';
import NotificationsRoundedIcon from '@material-ui/icons/NotificationsRounded';
import ChatBubbleRoundedIcon from '@material-ui/icons/ChatBubbleRounded';
import BookmarkBorderRoundedIcon from '@material-ui/icons/BookmarkBorderRounded';
import ListAltRoundedIcon from '@material-ui/icons/ListAltRounded';
import PersonOutlineRoundedIcon from '@material-ui/icons/PersonOutlineRounded';
import MoreHorizRoundedIcon from '@material-ui/icons/MoreHorizRounded';

import TwitterIcon from '@material-ui/icons/Twitter';
import logo from  '../assets/logo.svg';

function HomePage() {
    return (
        <div className="homepage">
        <div className="homepage__left">
                <div className="homepage__leftData">

                    <img src={logo} className="homepage_leftLogo" alt="Twiter Logo" /> 
                    
                    <div className="homepage__leftNav"><div  className="homepage__leftNavBar"><HomeRoundedIcon/><span>Home  </span></div></div>
                    <div className="homepage__leftNav"><div className="homepage__leftNavBar"><ExplicitRoundedIcon/><span>Explore  </span></div></div>
                    <div className="homepage__leftNav"><div  className="homepage__leftNavBar"><NotificationsRoundedIcon/><span>Notification</span></div></div>
                    <div className="homepage__leftNav"><div className="homepage__leftNavBar"><ChatBubbleRoundedIcon/><span>Messages</span></div></div>
                    <div className="homepage__leftNav"><div className="homepage__leftNavBar"><BookmarkBorderRoundedIcon/><span>Bookmarks</span></div></div>
                    <div className="homepage__leftNav"><div className="homepage__leftNavBar"><ListAltRoundedIcon/><span>Lists</span></div></div>
                    <div className="homepage__leftNav"><div className="homepage__leftNavBar"><PersonOutlineRoundedIcon/><span>Profile</span></div></div>
                    <div className="homepage__leftNav"><div className="homepage__leftNavBar" ><MoreHorizRoundedIcon/><span>More</span></div></div>
                   <button><TwitterIcon/><span>Tweet</span></button>
                </div>

            </div>
            </div>
    )
}

export default HomePage

