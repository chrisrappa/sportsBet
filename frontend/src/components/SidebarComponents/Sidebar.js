// import Adsense from 'react-adsense';
import PredictionsSide from "./PredictionsSide";
import UpcomingGamesSide from "./UpcomingGamesSide";

export default function Sidebar() {
  return (
    <div className = 'sidebar-container'>
      <div>
        <UpcomingGamesSide numCalls = { 2 } />
      </div>
      {/* <div>
        <Adsense.Google 
          client = 'ca-pub-7486514602731792'
          slot = '9215095216'
          style={{ display: 'block' }}
          format='auto'
          responsive='true'
          layoutKey='-gw-1+2a-9x+5c'
        />
      </div> */}
      <div>
        <PredictionsSide numCalls = { 2 } numBookmakers = { 4 }/>
      </div>
      {/* <div>
        <Adsense.Google
          client = 'ca-pub-7486514602731792'
          slot = '6196381333'
          style={{ display: 'block' }}
          format='auto'
          responsive='true'
          layoutKey='-gw-1+2a-9x+5c'
        />
      </div> */}
    </div>
  )
}
