import React,{useState} from 'react';
import { BsHouseDoor,BsController,BsCollectionPlay,BsCloudDrizzle,BsGeoAlt,BsHandbag, BsMusicPlayer, BsNewspaper, BsFire, BsBook} from "react-icons/bs";
import {TbCricket} from "react-icons/tb";
const Sidebar = ({selectedCategory,setselectedCategory}) => {
  
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
        <p style={{background: eachcatg.name===selectedCategory && 'red',color: selectedCategory===eachcatg.name && 'white'}} onClick={()=>{setselectedCategory(eachcatg.name)}}>
          <span className='sidebar-icon' >{eachcatg.icon}</span><span className='sidebar-name'>{eachcatg.name}</span>
        </p>
    ))}
    </div>  
  )
}

export default Sidebar
