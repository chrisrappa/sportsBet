import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { upcomingGamesApi } from "../../actions/sportsAPIActions";
import UpcomingInfoSide from "./UpcomingInfoSide";

export default function UpcomingGamesSide() {

  const upcomingGames = useSelector(state => state.upcomingGames);
  const { games, loading, error } = upcomingGames;
  const [sportType, setSportType] = useState('basketball');
  const [league, setLeague] = useState('12');
  const [season, setSeason] = useState('2021-2022');
  const [versionNum, setVersionNum] = useState('1')
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(upcomingGamesApi(`${versionNum}`, `${league}`, `${season}`, `${sportType}`, 2, 'games'));
    return () => {
    //
    }
  }, [dispatch, league, sportType, season])

  return (
    <div className = 'upcoming-side-container'>
      <div className = 'upcoming-side-header'>
        <h3>Upcoming Games</h3>
      </div>
      <div className = 'upcoming-side-sports'>
        <button onClick = {() => {
          setSportType('baseball'); 
          setLeague('1');
          setSeason('2022')}
          }>

          MLB

        </button>

        <button onClick = {() => {
          setSportType('basketball'); 
          setLeague('12');
          setSeason('2021-2022')}
          }>

          NBA
        </button>
      </div>
      <div className = 'upcoming-side-day'>
        <div className = 'upcoming-side-day-text'>
          <p>2021</p>
        </div>
        <div className = 'upcoming-side-day-space'></div>
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
        <UpcomingInfoSide 
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
      
      <div className = 'upcoming-side-all-btn'>

      </div>
    </div>
  )
}
