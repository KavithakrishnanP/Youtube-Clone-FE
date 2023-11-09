import React from 'react';
import { BiDislike } from "react-icons/bi";
import { BiLike } from "react-icons/bi";
import { TbShare3 } from "react-icons/tb";
import { TfiDownload } from "react-icons/tfi";

const VideoDetail = ({videoDetail}) => {

    const date1=videoDetail.snippet.publishedAt;
    const date2=date1.split('T');

  return (
    <div className='video-details'>

        <div className='vd-part1'>{videoDetail?.snippet?.title}</div>

        <div className='vd-part2'>
            <div className='vd-part2-left'>
                <img className='video-icon' src={videoDetail?.snippet.thumbnails.medium.url} width='55px' height='55px'/>
                <div className='channel-subscribers' >
                    <div className='channel' >{videoDetail?.snippet.channelTitle}</div>
                    <div className='subscribers'>{videoDetail?.statistics.commentCount} subscribers</div>
                </div>
                <div className='subscribe-btn'><button>Subscribe</button></div>
            </div>
            
            <div className='vd-part2-right'  style={{display:'flex'}}>
                <div className='like-btn'>
                    <div>
                        <button className='btn1'>
                            <span><BiLike fontSize='23px'/></span>
                            <span className='likecount' style={{paddingLeft:'6px',fontSize:'16px'}}>3.7M</span>
                        </button>
                    </div>
                    <div>
                        <button className='btn2'>< BiDislike fontSize='23px' /></button>
                    </div>   
                </div>
                <div className='share-btn'>
                    <button style={{display:'flex'}}>
                        <span><TbShare3 fontSize='18px'/></span>
                        <span className='share' style={{paddingLeft:'6px'}}>Share</span>
                    </button>
                </div>
                <div className='share-btn'>
                    <button style={{display:'flex'}}>
                        <span><TfiDownload fontSize='15px'/></span>
                        <span className='download' style={{paddingLeft:'7px'}}>Download</span>
                    </button>
                </div>    
            </div> 
        </div>

        <div className="vd-part3">
            <div className='views-date'><span style={{fontWeight:'600'}}>{videoDetail.statistics.viewCount} views {date2[0]}</span> <span style={{color:'blue'}}>{videoDetail.snippet.tags.map((tag)=>('#'+tag))}</span> </div>
            <div className='description'>{videoDetail.snippet.description}</div>
        </div>

    </div>
  )
}

export default VideoDetail