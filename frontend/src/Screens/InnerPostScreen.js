import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { detailsPost } from "../actions/postActions";
import Post from "../components/PostComponents/Post";
import Sidebar from "../components/SidebarComponents/Sidebar";

export default function InnerPostScreen(props) {

  const postDetails = useSelector(state => state.postDetails);
  const { post } = postDetails;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(detailsPost(props.match.params.id))
  }, [dispatch, props])

  return (
    <div className = 'home-container'>
      <div className = 'post'>

      { post
      
        ?
      
          <Post
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
          displayedComments = {post.numComments}
          />

        :

          <div></div>
      }
      
      

      </div>
      <div className = 'sidebar'>
        <Sidebar />
      </div>
    </div>
  )
}
