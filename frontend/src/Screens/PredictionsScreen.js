import { useState } from "react";
import Predictions from "../components/PredictionsComponents/Predictions";
import PredictionsSide from "../components/SidebarComponents/PredictionsSide";
// import PredictionsSide from "../components/SidebarComponents/PredictionsSide";

export default function PredictionsScreen() {

  const [sportType, setSportType] = useState('basketball');
  const [league, setLeague] = useState('12');
  const [season, setSeason] = useState('2021-2022');
  const [versionNum, setVersionNum] = useState('1');
  const [reqType, setReqType] = useState('odds');
  const numCalls = 10;
  const numBookmakers = 9;

  return (
    <>
      <div className = 'upcoming-main predictions-full'>
        <div className = 'upcoming-links'>
          <div className = 'upcoming-popular'>
            <h1 className = "predictions-sports-header">All Sports</h1>
            <div className="predictions-sports-options">
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
        </div>
        <Predictions 
          sportType = {sportType}
          league = {league}
          season = {season}
          versionNum = {versionNum}
          reqType = {reqType}
          numCalls = {numCalls}
          numBookmakers = {numBookmakers}
          displayHeader = {true}
        /> 
        <div className="predictions-right"></div>
      </div>
        
      <div className = 'upcoming-main-mobile ml-5 mr-5'> 
        <PredictionsSide className = 'predictions-mobile' numCalls = { 10 } numBookmakers = { 4 } />
      </div>
    </>
  )
}
