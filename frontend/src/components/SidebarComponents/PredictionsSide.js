import { useState } from "react";
import Predictions from "../PredictionsComponents/Predictions";

export default function PredictionsSide(props) {

  const [sportType, setSportType] = useState('basketball');
  const [league, setLeague] = useState('12');
  const [season, setSeason] = useState('2021-2022');
  const [versionNum, setVersionNum] = useState('1');
  const [reqType, setReqType] = useState('odds');
  const numCalls = props.numCalls;
  const numBookmakers = props.numBookmakers;

  return (
    <div className = 'predictions-side-container'>
      <div className = 'predictions-header side-header'>
        <h3>Predictions</h3>
      </div>
      <div className = 'predictions-side-sports'>
        <button onClick = {() => {
          setSportType('basketball'); 
          setLeague('12');
          setSeason('2021-2022');
          setVersionNum('1');
          setReqType('odds');
          }}>
          <h3>NBA</h3>
        </button>
        <button onClick = {() => {
          setReqType('odds');
          setSportType('baseball'); 
          setLeague('1');
          setSeason('2022');
          setVersionNum('1');
        }}>

        <h3>MLB</h3>
        </button>
        <button onClick = {() => {
          setReqType('odds');
          setSportType('hockey'); 
          setLeague('57');
          setSeason('2021');
          setVersionNum('1');
        }}>

        <h3>Hockey</h3>
        </button>
        <button onClick = {() => {
          setReqType('odds');
          setSportType('volleyball'); 
          setLeague('180');
          setSeason('2021');
          setVersionNum('1');
        }}>

        <h3>Volleyball</h3>
        </button>
        <button onClick = {() => {
          setReqType('odds');
          setSportType('rugby'); 
          setLeague('44');
          setSeason('2021');
          setVersionNum('1');
        }}>

        <h3>Rugby</h3>
        </button>
      </div>
      <div className = 'predictions-side-all-btn'>
        <div>
          <Predictions
          sportType = {sportType}
          league = {league}
          season = {season}
          versionNum = {versionNum}
          reqType = {reqType}
          numCalls = {numCalls}
          numBookmakers = {numBookmakers}
          displayHeader = {false}
          />
          <div className = 'upcoming-side-all-btn'>
            <a href = '/predictions'>
              <button className="all-upcoming-side">
                <h1>See All Predictions</h1>
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
