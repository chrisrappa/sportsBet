import UpcomingInfo from "./UpcomingInfo";

export default function UpcomingGames() {
  return (
    <div className = 'upcoming-container'>
      <div className = 'upcoming-header'>
        <h3>Upcoming Games</h3>
      </div>
      <div className = 'upcoming-day'>
        <div className = 'upcoming-day-text'>
          <p>Today</p>
        </div>
        <div className = 'upcoming-day-space'></div>
      </div>
      <UpcomingInfo />
      <div className = 'upcoming-all-btn'>

      </div>
    </div>
  )
}
