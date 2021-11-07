import React from 'react';
import Post from '../components/Post';
import PostFilter from '../components/PostFilter';
import Sidebar from '../components/Sidebar';

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