import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar';
import atta1 from './img/atta1.jpg';
import './Header.css';
import { Tooltip } from '@material-ui/core';


const Header = () =>{
    return(
        <>
     <div className="header">
     <div className="header_left ">
     <MenuIcon/>
     <Tooltip title="YouTube home" aria-label="add">
         <img src="data:image/png;base64,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" className="header_logo" alt="youtube"/></Tooltip>
    
     </div>
     <div className="header_input">
            
     <input type="text"  placeholder=" Search"/>
     <Tooltip title="Search" aria-label="add">
     <SearchIcon className="header-input-Button"/>
     </Tooltip>
     </div>
     
     <div className="header_icons">
     <Tooltip title="Create" aria-label="add">
     <VideoCallIcon className="header_icon" />
     </Tooltip>
     <Tooltip title="YouTube apps" aria-label="add">
       <AppsIcon className="header_icon"/>
       </Tooltip>
       <Tooltip title="Notifications" aria-label="add">
       <NotificationsIcon className="header_icon"/>
       </Tooltip>
       <Avatar alt="atta" src={atta1} className="my_pic"/>
     </div>
      
       </div>
        </>
    )
}
export default Header;