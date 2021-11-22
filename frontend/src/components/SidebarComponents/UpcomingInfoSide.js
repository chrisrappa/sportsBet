export default function UpcomingInfoSide(props) {
  return (
  <>
    <div className = 'upcoming-side-game'>
      <div className = 'upcoming-side-time'>
        <h6>{props.time}</h6>
      </div>
      <div className = 'upcoming-side-info'>
        <div className = 'upcoming-side-info-title'>
          <h6>{props.date}</h6>
        </div>
        <div className = 'upcoming-side-teams second-result'>
          <div className = 'upcoming-side-team-one'>
            <img src = {props.homeImg} alt = '' />
            <div className = 'upcoming-side-team-name'>
              <h6>{props.home}</h6>
            </div>
          </div>
          <div className = 'upcoming-side-at'>
            <h1>at</h1>
          </div>
          <div className = 'upcoming-side-team-two'>
            <img src = {props.awayImg} alt = '' />
            <div className = 'upcoming-side-team-name'>
              <h6>{props.away}</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
  )
}
