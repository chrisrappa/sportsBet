import UpcomingInfo from "./UpcomingInfo";

import { useSelector } from "react-redux";


export default function UpcomingGames(props) {

  const upcomingGames = useSelector(state => state.upcomingGames);
  const { games, loading, error } = upcomingGames;



  return (
    <>
      
      <div className = 'upcoming-container'>
        <div className = 'upcoming-header'>
          <h3>Upcoming Games</h3>
        </div>
        <div className = 'upcoming-day'>
          <div className = 'upcoming-day-text'>
            <p>2022</p>
          </div>
          <div className = 'upcoming-day-space'></div>
        </div>
        { loading
      
          ? 

            (<div><h1>Loading...</h1></div>)
        
          :

          error

          ?

            (<div><h1>{error}</h1></div>)

          :

          games 

          ?

          <div>
          {games.map((game) => (
            <UpcomingInfo 
            home = {game.teams.home.name}
            homeImg = {game.teams.home.logo} 
            away = {game.teams.away.name}
            awayImg = {game.teams.away.logo}
            time = {game.time}
            date = {game.date}/>
          ))}

          </div>

          :

          <div>No games</div>
        }

        <div className = 'upcoming-all-btn'>
        </div>
      </div>
    </>
  )
}
