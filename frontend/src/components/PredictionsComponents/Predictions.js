import PredictionsInfo from './PredictionsInfo';

export default function Predictions() {
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
      <PredictionsInfo />
    </div>
  )
}
