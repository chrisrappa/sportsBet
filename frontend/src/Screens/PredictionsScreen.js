import Predictions from "../components/PredictionsComponents/Predictions";
import PredictionsSide from "../components/SidebarComponents/PredictionsSide";

export default function PredictionsScreen() {

  return (
    <>
      <div className = 'upcoming-main predictions-full'>
        <div className = 'upcoming-links'>
          <div className = 'upcoming-all'>
            <p>NBA</p>
          </div>
        </div>
        <Predictions /> 
      </div>
      <div className = 'upcoming-main-mobile ml-5 mr-5'>
      <PredictionsSide className = 'predictions-mobile' />
    </div>
  </>
  )
}
