import Comments from "./Comments";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleUp, faArrowAltCircleDown, faComment, faShare } from '@fortawesome/free-solid-svg-icons'

export default function Post() {
  return (
    <div className = 'post-container'>
      <div className = 'post-info'>
        <p>Posted by username</p>
        <p>2hrs Ago</p>
      </div>
      <div className = 'post-header'>
        <h1>Post Header</h1>
      </div>
      <div className = 'post-img'>
        <img src = 'https://res.cloudinary.com/djrbfvpit/image/upload/v1636237484/sportsBook/WIN_20210807_18_52_24_Pro_hv6t3k.jpg' alt = '' />
      </div>
      <div className = 'post-metrics'>
        <div className = 'post-votes'>
          <div className = 'post-buttons'>
            <FontAwesomeIcon icon = { faArrowAltCircleUp } />
            <h5>200</h5>
          </div>
          <div className = 'post-buttons'>
            <FontAwesomeIcon icon = { faArrowAltCircleDown } />
            <h5>200</h5>
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
      <div>
        <Comments />
      </div>
    </div>
  )
}
