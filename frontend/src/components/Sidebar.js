import UpcomingGames from "./UpcomingGames";

export default function Sidebar() {
  return (
    <>
      <div className = 'sidebar-container'>
        <UpcomingGames />
      </div>
      <div>
        <h1>Ad Section</h1>
      </div>
      <div>
        <h1>Predictions</h1>
      </div>
      <div>
        <h1>Ad Section</h1>
      </div>
    </>
  )
}
