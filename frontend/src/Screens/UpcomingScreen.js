import { useEffect } from "react";
import { useState } from "react";
import UpcomingGames from "../components/UpcomingComponents/UpcomingGames";
import { upcomingGamesApi } from "../actions/sportsAPIActions";
import { useDispatch } from "react-redux";
import UpcomingGamesSide from "../components/SidebarComponents/UpcomingGamesSide";

export default function UpcomingScreen() {

  const [sportType, setSportType] = useState('basketball');
  const [league, setLeague] = useState('12');
  const [season, setSeason] = useState('2021-2022');
  const [versionNum, setVersionNum] = useState('1');
  const [reqType, setReqType] = useState('games');
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(versionNum);
    dispatch(upcomingGamesApi(`${versionNum}`,`${league}`, `${season}`, `${sportType}`, 10, `${reqType}`));
    return () => {
    //
    }
  }, [reqType, versionNum, dispatch, league, sportType, season])
  

  return (
    <>
      <div className = 'upcoming-main upcoming-full'>
        <div className = 'upcoming-links'>
          <div className = 'upcoming-popular'>

            <button onClick = {() => {
              setReqType('games');
              setSportType('baseball'); 
              setLeague('1');
              setSeason('2022');
              setVersionNum('1');
            }}>

            <h3>MLB</h3>
            </button>

            <button onClick = {() => {
              setReqType('games');
              setSportType('basketball'); 
              setLeague('12');
              setSeason('2021-2022');
              setVersionNum('1');
            }}>

            <h3>NBA</h3>
            </button>

            <button onClick = {() => {
              setReqType('fixtures');
              setSportType('football'); 
              setLeague('253');
              setSeason('2021');
              setVersionNum('3');
            }}>

            <h3>Soccer</h3>
            </button>
            <button onClick = {() => {
              setReqType('games');
              setSportType('hockey'); 
              setLeague('57');
              setSeason('2021');
              setVersionNum('1');
            }}>

            <h3>Hockey</h3>
            </button>
            <button onClick = {() => {
              setReqType('games');
              setSportType('volleyball'); 
              setLeague('180');
              setSeason('2021');
              setVersionNum('1');
            }}>

            <h3>Volleyball</h3>
            </button>
            <button onClick = {() => {
              setReqType('games');
              setSportType('rugby'); 
              setLeague('44');
              setSeason('2021');
              setVersionNum('1');
            }}>

            <h3>Rugby</h3>
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
      <div className = 'upcoming-mobile mr-5 ml-5'>
        <UpcomingGamesSide />
      </div>
    </>
  )
}
