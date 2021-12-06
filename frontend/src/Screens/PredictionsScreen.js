import { useState, useEffect } from "react";
import Predictions from "../components/PredictionsComponents/Predictions";
import PredictionsSide from "../components/SidebarComponents/PredictionsSide";

export default function PredictionsScreen() {

  const [sportType, setSportType] = useState('basketball');
  const [league, setLeague] = useState('12');
  const [season, setSeason] = useState('2021-2022');
  const [versionNum, setVersionNum] = useState('1');
  const [reqType, setReqType] = useState('odds');
  const numCalls = 10;

  return (
    <>
      <div className = 'upcoming-main predictions-full'>
        <div className = 'upcoming-links'>
          <div className = 'upcoming-popular'>
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
        </div>
        <Predictions 
          sportType = {sportType}
          league = {league}
          season = {season}
          versionNum = {versionNum}
          reqType = {reqType}
          numCalls = {numCalls}
        /> 
      </div>
        
      {/* <div className = 'upcoming-main-mobile ml-5 mr-5'> */}
      {/* <PredictionsSide className = 'predictions-mobile' /> */}
      {/* </div> */}
    </>
  )
}
