import { useState } from "react";
import UpcomingGames from "../UpcomingComponents/UpcomingGames";

export default function UpcomingGamesSide(props) {
  
  const [sportType, setSportType] = useState('basketball');
  const [league, setLeague] = useState('12');
  const [season, setSeason] = useState('2021-2022');
  const [versionNum, setVersionNum] = useState('1');
  const [reqType, setReqType] = useState('games');
  const numCalls = props.numCalls;

  return (
    <div className = 'upcoming-side-container'>
      <div className = 'upcoming-side-sports'>
        <button onClick = {() => {
          setReqType('games');
          setSportType('baseball'); 
          setLeague('1');
          setSeason('2022')
          setVersionNum('1');
        }}>

          MLB

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

      <UpcomingGames
        sportType = {sportType}
        league = {league} 
        season = {season}
        versionNum = {versionNum}
        reqType = {reqType}
        numCalls = {numCalls}
      />
      
      <div className = 'upcoming-side-all-btn'>

      </div>
    </div>
  )
}
