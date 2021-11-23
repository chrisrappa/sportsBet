import { useEffect } from "react";
import { useState } from "react";
import { gamePredictionsApi } from "../../actions/sportsAPIActions";
import { useDispatch, useSelector } from "react-redux";
import PredictionsInfo from './PredictionsInfo';

export default function Predictions() {

  const [sportType, setSportType] = useState('basketball');
  const [league, setLeague] = useState('12');
  const [season, setSeason] = useState('2021-2022');
  const dispatch = useDispatch();

  const gamePredictions = useSelector(state => state.gamePredictions);
  const {predictions, loading, error} = gamePredictions;

  useEffect(() => {
    dispatch(gamePredictionsApi(`${league}`, `${season}`, `${sportType}`, 10, 'odds'));

    return () => {
    //
    }
  }, [dispatch, league, sportType, season])

  return (
    <div className = 'upcoming-container'>
      <div className = 'upcoming-header'>
        <h3>Predictions</h3>
      </div>
      <div className = 'upcoming-day'>
        <div className = 'upcoming-day-text'>
          <p>Today</p>
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

        predictions

        ?

        <div>
        {
          predictions.map((prediction) => (
            <PredictionsInfo prediction = {prediction} />
          ))

        }
        </div>

        :

        <div><h1>No Predictions Available</h1></div>
        }
      
    </div>
  )
}
