import Shimmer from "./Shimmer";
import React from 'react'

const ShimmerCompOne = () => {
  return (
    <div className="video-container">
        <div className='all-videos'>{
            [...Array(9)].map((eacharray)=><Shimmer/>)
            }
        </div> 
    </div>
  )
}

export default ShimmerCompOne
