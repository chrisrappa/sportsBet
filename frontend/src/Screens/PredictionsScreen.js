import Predictions from "../components/PredictionsComponents/Predictions";

export default function PredictionsScreen() {

  return (
    <div className = 'upcoming-main'>
      <div className = 'upcoming-links'>
        <div className = 'upcoming-popular'>
          <p>NBA</p>
          <p>NBA</p>
          <p>NBA</p>
          <p>NBA</p>
          <p>NBA</p>
          <p>NBA</p>
        </div>
        <div className = 'upcoming-all'>
          <p>NBA</p>
          <p>NBA</p>
          <p>NBA</p>
          <p>NBA</p>
          <p>NBA</p>
          <p>NBA</p>
        </div>
      </div>
      
      <Predictions />
    </div>
  )
}
