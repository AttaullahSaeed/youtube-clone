import React from 'react';
import './Sidebar.css';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SidebarRow from './SidebarRow';
import HomeIcon from '@material-ui/icons/Home';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import HistoryIcon from '@material-ui/icons/History';
import VideoLibraryOutlinedIcon from '@material-ui/icons/VideoLibraryOutlined';
import WatchLaterRoundedIcon from '@material-ui/icons/WatchLaterRounded';
import ThumbUpAltRoundedIcon from '@material-ui/icons/ThumbUpAltRounded';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import SettingsIcon from '@material-ui/icons/Settings';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import FlagSharpIcon from '@material-ui/icons/FlagSharp';
import HelpIcon from '@material-ui/icons/Help';
import FeedbackSharpIcon from '@material-ui/icons/FeedbackSharp';



const Sidebar = () =>{
    return(
        <>
      
      
        <div activeClassName="List">
            
            <SidebarRow selected Icon={HomeIcon}  title="home" />
            <SidebarRow Icon={WhatshotIcon} title="Trending"/>
            <SidebarRow Icon={SubscriptionsIcon } title="subcribtion"/>
            
            <hr className="w-100 mx-auto"/>
            
            <SidebarRow Icon={VideoLibraryIcon} title="Library" />
            <SidebarRow Icon={HistoryIcon} title="History"/>
            <SidebarRow Icon={VideoLibraryOutlinedIcon} title="Your Videos"/>
            <SidebarRow Icon={WatchLaterRoundedIcon} title="Watch later"/>
            <SidebarRow Icon={ThumbUpAltRoundedIcon} title="Liked Videos"/><b/>
            <hr className="w-100 mx-auto"/>
            
                <h5 className="text-center">More from youtube</h5>
                <SidebarRow Icon={SportsEsportsIcon} title="Gaming"/>
                <SidebarRow Icon={ SettingsIcon } title="Settings"/>
                <SidebarRow Icon={ FlagSharpIcon} title="Report History"/>
                <SidebarRow Icon={HelpIcon} title="Help"/>
                <SidebarRow Icon={FeedbackSharpIcon} title="Send feedback"/>
                <hr className="w-100 mx-auto"/>
                <div className="text_p">
                <p >About Press Copyright<br/>Contact us Creators<br/>Advertise Developers</p>
                <br/>
                <p>TermsPrivacyPolicy & Safety<br/>How YouTube works<br/>Test new features</p>
                <p>©2020 Google LLC</p>
                </div>
               
            </div>
            
        </>
    )
}
export default Sidebar;

