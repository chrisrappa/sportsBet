

export default function UpcomingInfo(props) {
  return (
    <div className = 'upcoming-game'>
      <div className = 'upcoming-time'>
        <h6>{props.time}</h6>
      </div>
      <div className = 'upcoming-info'>
        <div className = 'upcoming-info-title'>
          <h6>{props.date}</h6>
        </div>
        <div className = 'upcoming-teams'>
          <div className = 'upcoming-team-one'>
            <img src = {props.homeImg} alt = '' />
            <div className = 'upcoming-team-name'>
              <h6>{props.home}</h6>
            </div>
          </div>
          <div className = 'upcoming-at'>
            <h1>at</h1>
          </div>
          <div className = 'upcoming-team-two'>
            <img src = {props.awayImg} alt = '' />
            <div className = 'upcoming-team-name'>
              <h6>{props.away}</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
