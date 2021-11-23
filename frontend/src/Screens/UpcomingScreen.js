import { useEffect } from "react";
import { useState } from "react";
import UpcomingGames from "../components/UpcomingComponents/UpcomingGames";
import { upcomingGamesApi } from "../actions/sportsAPIActions";
import { useDispatch } from "react-redux";

export default function UpcomingScreen() {

  const [sportType, setSportType] = useState('basketball');
  const [league, setLeague] = useState('12');
  const [season, setSeason] = useState('2021-2022');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(upcomingGamesApi(`${league}`, `${season}`, `${sportType}`, 10, 'games'));
    return () => {
    //
    }
  }, [dispatch, league, sportType, season])
  

  return (
    <div className = 'upcoming-main'>
      <div className = 'upcoming-links'>
        <div className = 'upcoming-popular'>

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
      </div>
      <UpcomingGames 
      sport = {sportType}
      league = {league} />
      <div className = 'upcoming-right'>
        <button>Full Predictions</button> 
      </div>
    </div>
  )
}
