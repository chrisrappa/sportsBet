import { useEffect } from "react";
import { gamePredictionsApi } from "../../actions/sportsAPIActions";
import { useDispatch, useSelector } from "react-redux";
import PredictionsInfo from './PredictionsInfo';

export default function Predictions(props) {

  const sportType = props.sportType;
  const league= props.league;
  const season = props.season;
  const versionNum = props.versionNum;
  const reqType = props.reqType;
  const numCalls = props.numCalls;
  const numBookmakers = props.numBookmakers;

  const dispatch = useDispatch();

  const gamePredictions = useSelector(state => state.gamePredictions);
  const {predictions, loading, error} = gamePredictions;

  useEffect(() => {
    dispatch(gamePredictionsApi(`${versionNum}`,`${league}`, `${season}`, `${sportType}`, numCalls, `${reqType}`));
  }, [versionNum, dispatch, league, season, sportType, reqType, numCalls])

  return (
    <div className = 'upcoming-container'>
      <div className = 'upcoming-header'>
        <h3>Predictions</h3>
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

        predictions[0] !== undefined

        ?

        <div>
        {
          predictions.map((prediction) => (
            <PredictionsInfo prediction = {prediction} numBookmakers = {numBookmakers} />
          ))

        }
        </div>

        :

        <div><h1>No Predictions Available</h1></div>
        }
      
    </div>
  )
}
