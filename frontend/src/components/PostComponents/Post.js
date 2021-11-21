import Comments from "./Comments";
import Cookie from 'js-cookie';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleUp, faArrowAltCircleDown, faComment, faShare } from '@fortawesome/free-solid-svg-icons'
import { downVotes, upVotes } from "../../actions/postActions";
import { useDispatch, useSelector} from "react-redux";
import { useState, useEffect } from "react";
import { vote } from "../../actions/userActions";

export default function Post(props) {

  const userSignin = useSelector(state => state.userSignin);
  const { userInfo } =  userSignin;

  var [upvote, setUpvote] = useState(props.upvotes);
  var [downvote, setDownvote] = useState(props.downvotes);
  const [currentUserInfo, setCurrentUserInfo] = useState({});

  const postId = props.id;
  const dispatch = useDispatch();
 

  const handleUpvote = () => {
    if(userInfo){
      const userId = userInfo._id;
    
      if(currentUserInfo.postUpvotes.length === 0){
        setUpvote(upvote += 1);
        dispatch(upVotes(upvote, postId));
        dispatch(vote(userId, postId, 'upvote'));
      } 

      if (currentUserInfo.postUpvotes.filter(e => e.postId === postId).length > 0) {
        setUpvote(upvote);
        console.log('Post already upvoted');
      } else {
        setUpvote(upvote += 1);
        dispatch(upVotes(upvote, postId));
        dispatch(vote(userId, postId, 'upvote'));
      }
       
    }
      
  }

  const handleDownvote = () => {
    if(userInfo){
      const userId = userInfo._id;

      if(currentUserInfo.postDownvotes.length === 0){
        setDownvote(downvote += 1);
        dispatch(downVotes(downvote, postId));
        dispatch(vote(userId, postId, 'downvote'));
      } 

      if (currentUserInfo.postDownvotes.filter(e => e.postId === postId).length > 0) {
        setDownvote(downvote);
        console.log('Post already downvoted');
      } else {
        setDownvote(downvote += 1);
        dispatch(downVotes(downvote, postId));
        dispatch(vote(userId, postId, 'downvote'));
      }
    }
    
  }

  useEffect(() => {
    setCurrentUserInfo(Cookie.getJSON("userInfo"));
  }, [currentUserInfo])


  return (
    <div className = 'post-container'>
      <div className = 'post-info'>
        <p>Posted by {props.username}</p>
        <p>{props.time}</p>
      </div>
      <div className = 'post-header'>
        <h1>{props.title}</h1>
      </div>
      <div className = 'post-img'>
        <img src = {props.image} alt = '' />
      </div>
      <div className = 'post-metrics'>
        <div className = 'post-votes'>
          <button className = 'post-buttons' onClick = {handleUpvote}>
            <FontAwesomeIcon icon = { faArrowAltCircleUp } />
            <h5>{upvote}</h5>
          </button>
          <div className = 'post-buttons' onClick = {handleDownvote}>
            <FontAwesomeIcon icon = { faArrowAltCircleDown } />
            <h5>{downvote}</h5>
          </div>
          <div className = 'post-buttons'>
            <FontAwesomeIcon icon = { faComment } />
            <h5>200</h5>
          </div>
        </div>
        <div className = 'post-share'>
          <div className = 'post-buttons share'>
            <FontAwesomeIcon icon = { faShare } />
            <h5>Share</h5>
          </div>
        </div>
        
      </div>
      <div className = 'post-description'>
        <p>{props.description}</p>
      </div>
      <div>
        <Comments />
      </div>
    </div>
  )
}
