import Comments from "./Comments";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleUp, faArrowAltCircleDown, faComment, faShare } from '@fortawesome/free-solid-svg-icons'
import { downVotes, upVotes } from "../../actions/postActions";
import { useDispatch } from "react-redux";
import { useState } from "react";

export default function Post(props) {

  var [upvote, setUpvote] = useState(props.upvotes);
  var [downvote, setDownvote] = useState(props.downvotes);
  const postId = props.id;
  const dispatch = useDispatch();

  const handleUpvote = () => {
    setUpvote(upvote += 1);
    dispatch(upVotes(upvote, postId));
  }

  const handleDownvote = () => {
    setDownvote(downvote += 1)
    dispatch(downVotes(downvote, postId));
  }


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
