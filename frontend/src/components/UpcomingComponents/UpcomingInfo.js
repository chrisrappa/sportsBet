

export default function UpcomingInfo(props) {

  var newDate = '';

  if(props.date){
    var date = props.date;
    const parseDate = (input) => {
      var parts = input.match(/(\d+)/g);
      const newDate = new Date(parts[0], parts[1]-1, parts[2]); 
      return newDate.toDateString();
    }
  
    newDate = parseDate(date);
  }
  

  return (
    <div className = 'upcoming-game'>
      <div className = 'upcoming-time'>
        <h6>{props.time}</h6>
      </div>
      <div className = 'upcoming-info'>
        <div className = 'upcoming-info-title'>
          <h6>{props.date ? newDate : ''}</h6>
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
