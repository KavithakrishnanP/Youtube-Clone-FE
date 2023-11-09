import React from 'react';
import {Link} from 'react-router-dom';


const Suggestions = ({eachvideo}) => {

    return (
        <Link to={`/video/${eachvideo.id.videoId}`}>
            <div className="suggestion-card">
                <img className="suggest-thumbnail" src={eachvideo?.snippet?.thumbnails?.medium?.url}/>
                <div className='suggest-content'>
                    <div className="line-1">{eachvideo?.snippet?.title}</div>
                    <div className="line-2">{eachvideo?.snippet?.channelTitle}</div>
                </div>  
            </div>
        </Link>
      )
}

export default Suggestions