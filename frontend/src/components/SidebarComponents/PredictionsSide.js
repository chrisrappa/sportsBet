import { useEffect } from "react";
import { useState } from "react";
import { gamePredictionsApi } from "../../actions/sportsAPIActions";
import { useDispatch, useSelector } from "react-redux";
import PredictionsInfoSide from './PredictionsInfoSide';

export default function PredictionsSide() {

  const [sportType, 
    // setSportType
  ] = useState('basketball');
  const [league,
    //  setLeague
    ] = useState('12');
  const [season,
    //  setSeason
    ] = useState('2021-2022');
  const dispatch = useDispatch();

  const gamePredictions = useSelector(state => state.gamePredictions);
  const {predictions, loading, error} = gamePredictions;

  useEffect(() => {
    dispatch(gamePredictionsApi(`${league}`, `${season}`, `${sportType}`, 2, 'odds'));
  }, [dispatch, league, season, sportType])

  return (
    <div className = 'predictions-side-container'>
    <div className = 'predictions-side-header'>
      <h3>Predictions</h3>
    </div>
    <div className = 'predictions-side-sports'>
      <p>NBA</p>
    </div>
    <div className = 'predictions-side-day'>
      <div className = 'predictions-side-day-text'>
        <p>Today</p>
      </div>
      <div className = 'predictions-side-day-space'></div>
    </div>
    <div className = 'predictions-side-all-btn'>
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
              <PredictionsInfoSide prediction = {prediction} />
            ))

          }
        </div>

      :

        <div><h1>No Predictions Available</h1></div>
      }

    </div>
  </div>
  )
}
