import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-solid-svg-icons';


export default function SubFooter() {


  return (
    <div className="sub-footer">
      <div className="left-sub-footer">
        <a href='/'><h3>Privacy Policy</h3></a>
        <a href='/'><h3>Terms</h3></a>
      </div>
      <div></div>
      <div className="right-sub-footer">
        <FontAwesomeIcon icon = {faCopyright} />
        <h3>Sportsbook Memes</h3>
      </div>       
    </div>
  )
}
