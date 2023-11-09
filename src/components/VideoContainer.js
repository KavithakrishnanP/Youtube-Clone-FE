import React from 'react';
import Card from './Card';

const VideoContainer = ({videos}) => {

  if(videos) 
    
  return (
    <div className="video-container">
        <div className='all-videos'>
            {videos.map((eachvideo)=>(
               <Card eachvideo={eachvideo}/>    
            ))}  
        </div>
    </div>
  )
}

export default VideoContainer
