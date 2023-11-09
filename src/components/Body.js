import React,{useState,useEffect} from 'react';
import Sidebar from './Sidebar';
import VideoContainer from './VideoContainer';
import { getVideosFromApi } from './constants';

const Body = () => {
    const[selectedCategory,setselectedCategory]=useState('Home');
    const[videos,setvideos]=useState([])

    useEffect(()=>{
        getVideosFromApi(`search?part=snippet&q=${selectedCategory}&maxResults=48&regionCode=IN`)
        .then((data)=>{setvideos(data.items);console.log('vvv',data.items)})  
    },[selectedCategory])


  return (
    <div className="body">
        <Sidebar selectedCategory={selectedCategory} setselectedCategory={setselectedCategory}/>
        <VideoContainer selectedCategory={selectedCategory} setselectedCategory={setselectedCategory} videos={videos}/>
    </div>
  )
}

export default Body;