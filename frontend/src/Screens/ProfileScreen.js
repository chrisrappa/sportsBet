import { useEffect } from 'react';
import { listMyPosts } from '../actions/postActions';
import { useDispatch, useSelector } from 'react-redux';
import Post from "../components/PostComponents/Post";
import ProfileNav from "../components/ProfileComponents/ProfileNav";
import Sidebar from "../components/SidebarComponents/Sidebar";
// import { Link } from 'react-router-dom';
// import { logout, update } from '../actions/userActions';

function ProfileScreen(props) {

    const dispatch = useDispatch();

    const userSignin = useSelector(state => state.userSignin) 
    const { userInfo } = userSignin;  

    const myPostList = useSelector(state => state.myPostList);
    const { loading: loadingPosts, posts, error: errorPosts } = myPostList;

    useEffect(() => {
        
        dispatch(listMyPosts());
        return () => {
            
        }
    }, [dispatch])

  return(
    <div className="">
      <div className = 'profile-nav-container'>
        <ProfileNav username = {userInfo.name} />
      </div>
      <div className = 'profile-content-container'>
        <div className="post">
          {
            loadingPosts ? <div><h1>Loading...</h1></div> :
            errorPosts ? <div><h1>There was a problem!</h1></div> :

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
                comments = {post.comments}
                numComments = {post.numComments}
                displayedComments = { 3 }
                //We'll need to pass in filter props too
              />

            ))

            : <div><h1>No Posts Yet</h1></div>

            )
          }
        </div>
        <div className = 'sidebar'>
            <Sidebar />
        </div>
      </div>
    </div>
  )
}

export default ProfileScreen;

