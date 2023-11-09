import React,{useState} from 'react';
import {useNavigate,Link} from 'react-router-dom';
import { BsCameraVideo,BsBell } from "react-icons/bs";
import { BiUserCircle } from "react-icons/bi";


const Header = () => {
  
    const[searchinput,setsearchinput]=useState('');
    const navigate=useNavigate();

    const handleSearch=(e)=>{
        e.preventDefault();
        if(searchinput){
            navigate(`/search/${searchinput}`)
            setsearchinput('');
        }
    }

  return (
    <div className="header">
      <div><Link to="/"><img className="youtube-icon" src="https://lh3.googleusercontent.com/3zkP2SYe7yYoKKe47bsNe44yTgb4Ukh__rBbwXwgkjNRe4PykGG409ozBxzxkrubV7zHKjfxq6y9ShogWtMBMPyB3jiNps91LoNH8A=s500" /></Link></div>
      <div style={{display:'flex'}} className="head-mid">
        <input placeholder="Search" onChange={(e)=>{setsearchinput(e.target.value)}}/>
        <button onClick={(e)=>{handleSearch(e)}}> <img src="https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/search-512.png"/></button>
      </div>
      <div className="head-right">
            <span className="head-right-span" ><BsCameraVideo className='header-icon1' fontSize='30px'/></span>
            <span className="head-right-span" ><BsBell className='header-icon2' fontSize='27px'/></span>
            <span className="head-right-span" ><BiUserCircle className='header-icon3' fontSize='30px'/></span>
        </div>
    </div>
  )
}

export default Header