import UpcomingInfo from "./UpcomingInfo";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { upcomingGamesApi } from "../../actions/sportsAPIActions";
import { useDispatch } from "react-redux";


export default function UpcomingGames(props) {

  const sportType = props.sportType;
  const league= props.league;
  const season = props.season;
  const versionNum = props.versionNum;
  const reqType = props.reqType;
  const numCalls = props.numCalls;

  const dispatch = useDispatch();

  const upcomingGames = useSelector(state => state.upcomingGames);
  const { games, loading, error } = upcomingGames;

  useEffect(() => {
    dispatch(upcomingGamesApi(`${versionNum}`,`${league}`, `${season}`, `${sportType}`, numCalls, `${reqType}`));
    
  }, [reqType, versionNum, dispatch, league, sportType, season, numCalls])

  return (
    <>
      
      <div className = 'upcoming-container'>
        <div className = 'upcoming-header'>
          <h3>Upcoming Games</h3>
        </div>
        <div className = 'upcoming-day'>
          <div className = 'upcoming-day-text'>
            <p>{props.sportType}</p>
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

          games[0] !== undefined 

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
