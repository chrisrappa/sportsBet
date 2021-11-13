import React from 'react';
import Post from '../components/PostComponents/Post';
import PostFilter from '../components/PostComponents/PostFilter';
import Sidebar from '../components/SidebarComponents/Sidebar';

function HomeScreen (){

    return (
    <div className = 'home-container'>
      <div className = 'post'>
        <PostFilter />
        <Post />
      </div>
      <div className = 'sidebar'>
        <Sidebar />
      </div>
    </div>
  )
}

export default HomeScreen;