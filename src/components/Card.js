import React from 'react';
import {Link} from 'react-router-dom';

const Card = ({eachvideo}) => {
  console.log('clicked-videoid',eachvideo.id.videoId)
  if(eachvideo.id.videoId!==undefined) 
  return (
    <Link to={`/video/${eachvideo.id.videoId}`}>
    <div className="card">
        <img className="video-thumbnail" src={eachvideo?.snippet?.thumbnails?.medium?.url} alt="thumbnail"/>
        <div className='card-line1'>
            <img className='round-image' src={eachvideo?.snippet?.thumbnails?.medium?.url} width='30px' height='30px' alt="img"/>
            <div className="line1">{eachvideo?.snippet?.title} | {eachvideo?.snippet?.description}</div>
        </div>
        <div className="card-line2">{eachvideo?.snippet?.channelTitle}</div>
    </div>
    </Link>
  )
}

export default Card