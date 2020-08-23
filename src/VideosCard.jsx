import React from 'react'
import Avatar from '@material-ui/core/Avatar';
import VideoCard from './VideoCard.css';


const VideosCard = ({image,title,chanel,views,timestamp,chanelImg}) => {
    return (
        <div>
      
                   
                   <div className="videoCard">
            
            <img className="video-card" src={image} alt="atta" />
            <div className="videoCard_info">
            <Avatar className="video_avatar" alt={chanel} src={chanelImg} />
            <div className="video_text">
                <h5>{title}</h5>
                <p>{chanel}
                <p>{views}.{timestamp}</p>
                    </p>
               
            </div>

            </div>
            </div>
            </div>
            
       
    )
}

export default VideosCard;
