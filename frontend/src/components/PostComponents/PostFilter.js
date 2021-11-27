import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFireAlt, faStar, faLevelUpAlt } from '@fortawesome/free-solid-svg-icons'
import { useSelector } from 'react-redux';

export default function PostFilter() {

  const userSignin = useSelector(state => state.userSignin);
  const { userInfo } =  userSignin;

  return (
    <div className = 'post-filter'>
      <div className = 'post-metrics'>
      <div></div>
        {/* <div className = 'post-votes'>
          <div className = 'post-buttons filter'>
            <FontAwesomeIcon icon = { faFireAlt } />
            <h5>Hot</h5>
          </div>
          <div className = 'post-buttons filter'>
            <FontAwesomeIcon icon = { faStar } />
            <h5>Top</h5>
          </div>
          <div className = 'post-buttons filter'>
            <FontAwesomeIcon icon = { faLevelUpAlt } />
            <h5>Rising</h5>
          </div>
        </div> */}
        
        { userInfo 
        
          ?
            <div className = 'post-share'>
              <a href = '/create' className = 'post-buttons upload'>
                {/* <FontAwesomeIcon icon = { faShare } /> */}
                <h5>Upload Meme</h5>
              </a>
            </div>

          : null
        }
        
      </div>
    </div>
  )
}
