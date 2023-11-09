import React,{useState,useEffect} from 'react';
import {useParams} from 'react-router-dom';
import { getVideosFromApi } from './constants';
import SidebarTwo from './SidebarTwo';
import VideoContainer from './VideoContainer';

const SearchVideos = ({selectedCategory,setselectedCategory}) => {
  
    const[videos,setvideos]=useState([]);
    const params=useParams();
    
    useEffect(()=>{
        getVideosFromApi(`search?part=snippet&q=${params.searchTerm}&maxResults=48&regionCode=IN`)
        .then((data)=>setvideos(data.items))
    },[params.searchTerm])

    
  return (
    <div className="body">
        <SidebarTwo/>
        <VideoContainer videos={videos} setselectedCategory={setselectedCategory}/>
    </div>
  )
}

export default SearchVideos
