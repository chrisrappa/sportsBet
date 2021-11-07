import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFireAlt, faStar, faLevelUpAlt } from '@fortawesome/free-solid-svg-icons'

export default function PostFilter() {
  return (
    <div className = 'post-filter'>
      <div className = 'post-metrics'>
        <div className = 'post-votes'>
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
        </div>
        <div className = 'post-share'>
          <div className = 'post-buttons upload'>
            {/* <FontAwesomeIcon icon = { faShare } /> */}
            <h5>Upload Meme</h5>
          </div>
        </div>
      </div>
    </div>
  )
}
