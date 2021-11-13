import UpcomingGames from "../components/UpcomingComponents/UpcomingGames";

export default function UpcomingScreen() {
  return (
    <div className = 'upcoming-main'>
      <div className = 'upcoming-links'>
        <div className = 'upcoming-popular'>
          <p>NBA</p>
          <p>NBA</p>
          <p>NBA</p>
          <p>NBA</p>
          <p>NBA</p>
          <p>NBA</p>
        </div>
        <div className = 'upcoming-all'>
          <p>NBA</p>
          <p>NBA</p>
          <p>NBA</p>
          <p>NBA</p>
          <p>NBA</p>
          <p>NBA</p>
        </div>
      </div>
      <UpcomingGames />
      <div className = 'upcoming-right'>
        <button>Full Predictions</button> 
      </div>
    </div>
  )
}
