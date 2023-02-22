import React from 'react'
import { Link } from 'react-router-dom';

const SideBar = () => {
  return (

    <div className="sticky top-0 p-3 m-2 shadow-lg bg-white w-screen flex justify-between">
      
    
      <Link to='/'> <div className=" ">Jokes</div></Link>
      
      <Link to='/meditationVideos'><div className="">Meditation Videos</div></Link>
      <Link to='/exercises'><div>Exercises</div></Link>
   
    </div>
  )
}

export default SideBar;