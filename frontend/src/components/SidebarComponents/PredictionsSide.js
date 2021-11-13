import PredictionsInfoSide from "./PredictionsInfoSide";

export default function PredictionsSide() {
  return (
    <div className = 'predictions-side-container'>
    <div className = 'predictions-side-header'>
      <h3>Prediction Lines</h3>
    </div>
    <div className = 'predictions-side-sports'>
      <p>Soccer</p>
      <p>Baseball</p>
      <p>BasketBall</p>
      <p>Boxing</p>
      <p>Cricket</p>
    </div>
    <div className = 'predictions-side-day'>
      <div className = 'predictions-side-day-text'>
        <p>Today</p>
      </div>
      <div className = 'predictions-side-day-space'></div>
    </div>
    <PredictionsInfoSide />
    <div className = 'predictions-side-all-btn'>

    </div>
  </div>
  )
}
