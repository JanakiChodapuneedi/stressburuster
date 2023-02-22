import React from 'react'
import { Outlet } from 'react-router-dom';
import Jokes from './Jokes';
import SideBar from './SideBar';

const MainContainer = () => {
  return (
    <div>   
    <Jokes/>
    </div>
  )
}

export default MainContainer;