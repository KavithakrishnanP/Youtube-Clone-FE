import React,{useState} from 'react';
import { BsHouseDoor,BsController,BsCollectionPlay,BsCloudDrizzle,BsGeoAlt,BsHandbag, BsMusicPlayer, BsNewspaper, BsFire, BsBook} from "react-icons/bs";
import {TbCricket} from "react-icons/tb";

const SidebarTwo = () => {
    const categoriesArray=["Home","Computer","Music","Movies","Travel","Food","Drinks","Dogs","BMW"];
    const categoriesArr=[
      {icon:<BsHouseDoor/>,name:'Home'},
      {icon:<BsFire/>,name:'Trending'},
      {icon:<BsController/>,name:'Gaming'},
      {icon:<BsCollectionPlay/>,name:'Movies'},
      {icon:<BsCloudDrizzle/>,name:'Weather'},
      {icon:<BsBook/>,name:'Learning'},
      {icon:<TbCricket/>,name:'Cricket'}, 
      {icon:<BsNewspaper/>,name:'News'},
      {icon:<BsMusicPlayer/>,name:'Music'},
      {icon:<BsGeoAlt/>,name:'Tourism'},
      {icon:<BsHandbag/>,name:'Shopping'},
    ]
  return (
    <div className="sidebar">
    {categoriesArr.map((eachcatg)=>(
        <p>
          <span style={{marginRight:'25px'}}>{eachcatg.icon}</span><span >{eachcatg.name}</span>
        </p>
    ))}
    </div>
  )
}

export default SidebarTwo