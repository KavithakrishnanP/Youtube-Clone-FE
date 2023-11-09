import React,{useState,useEffect} from 'react';
import {useParams} from 'react-router-dom';
import ReactPlayer from 'react-player';
import { getVideosFromApi } from './constants';
import Suggestions from './Suggestions';
import VideoDetail from './VideoDetail';
import CommentComp from './CommentComp';


const WatchPage = () => {
  const {id}=useParams();
  const[videoDetail,setvideoDetail]=useState('');
  const[suggestvideos,setsuggestvideos]=useState([]);
  const[comments,setcomments]=useState([]);


  useEffect(()=>{

    getVideosFromApi(`videos?part=snippet,statistics&id=${id}`)
    .then((data)=>{setvideoDetail(data.items[0]);console.log('v-details',data.items[0]);})
    getVideosFromApi(`search?part=snippet&relatedToVideoId=${id}&type=video&maxResults=50`)
    .then((data)=>{setsuggestvideos(data?.items)})
    getVideosFromApi(`commentThreads?part=snippet&videoId=${id}&maxResults=40`)
    .then((commentdata)=>{setcomments(commentdata.items);console.log('comments',commentdata.items)})

  },[id])

  if(videoDetail) 

  return (
    <div className="watch-page">

      <div className="player">
        <div className='react-player'><ReactPlayer url={`https://www.youtube.com/watch?v=${id}`}   width='100%' height='500px' controls/></div>
        <VideoDetail videoDetail={videoDetail}/>
        <CommentComp comments={comments}/>
      </div>

      <div className="suggest-videos">
         {suggestvideos.map((eachvideo)=><Suggestions eachvideo={eachvideo}/>)}
         {suggestvideos.map((eachvideo)=><Suggestions eachvideo={eachvideo}/>)}
         {suggestvideos.map((eachvideo)=><Suggestions eachvideo={eachvideo}/>)}
      </div>

    </div>
  )
}

export default WatchPage;
