import Advertisement from "./Advertisement";
import PredictionsSide from "./PredictionsSide";
import UpcomingGamesSide from "./UpcomingGamesSide";

export default function Sidebar() {
  return (
    <div className = 'sidebar-container'>
      <div>
        <UpcomingGamesSide />
      </div>
      <div>
        <Advertisement />
      </div>
      <div>
        <PredictionsSide />
      </div>
      <div>
        <Advertisement />
      </div>
    </div>
  )
}
