import Predictions from "../components/PredictionsComponents/Predictions";

export default function PredictionsScreen() {

  return (
    <div className = 'upcoming-main'>
      <div className = 'upcoming-links'>
        <div className = 'upcoming-all'>
          <p>NBA</p>
        </div>
      </div>
      
      <Predictions />
    </div>
  )
}
