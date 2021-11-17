import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listPosts } from '../actions/postActions';
import Post from '../components/PostComponents/Post';
import PostFilter from '../components/PostComponents/PostFilter';
import Sidebar from '../components/SidebarComponents/Sidebar';

function HomeScreen() {

  const postList = useSelector(state => state.postList);
  const {posts, loading, error} = postList;

  // const userSignin = useSelector(state => state.userSignin);
  // const { userInfo } =  userSignin;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listPosts());
    
    return () => {
        //
    }
}, [dispatch]);

  return (
    <div className = 'home-container'>
      <div className = 'post'>
        
        <PostFilter />
        {/* Probably factor filter props here */}
        

        {loading ? <div><h1>Loading...</h1></div>

        : 
          (posts ? posts.map((post) => (

            <Post
              key = {post._id}
              title = {post.title}
              image = {post.image}
              category = {post.category}
              description = {post.description}
              upvotes = {post.upvotes}
              downvotes = {post.downvotes}
              id = {post._id}
              username = {post.username}
              time = {post.time}
              //We'll need to pass in filter props too
            />
            
            ))
            : 
            (error ? <div><h1>There was a problem!</h1></div> 
            : <div><h1>No Posts Yet</h1></div>
            )
          )
        }
        
      </div>
      <div className = 'sidebar'>
        <Sidebar />
      </div>
    </div>
  )
}

export default HomeScreen;