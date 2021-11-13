import UpcomingInfoSide from "./UpcomingInfoSide";

export default function UpcomingGamesSide() {
  return (
    <div className = 'upcoming-side-container'>
      <div className = 'upcoming-side-header'>
        <h3>Upcoming Games</h3>
      </div>
      <div className = 'upcoming-side-sports'>
        <p>Soccer</p>
        <p>Baseball</p>
        <p>BasketBall</p>
        <p>Boxing</p>
        <p>Cricket</p>
      </div>
      <div className = 'upcoming-side-day'>
        <div className = 'upcoming-side-day-text'>
          <p>Today</p>
        </div>
        <div className = 'upcoming-side-day-space'></div>
      </div>
      <UpcomingInfoSide />
      <div className = 'upcoming-side-all-btn'>

      </div>
    </div>
  )
}
