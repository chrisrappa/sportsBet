
export default function PredictionsInfoSide(props) {

  // Entire response from API
  const predictions = props.prediction;

  // Get only the first nine bookmakers in the response
  const bookmakers = predictions.bookmakers.slice(0, 4);

  // Grab the bets array from each object in the bookmakers array
  const bets = bookmakers.map((i) => i.bets);
 
  const homeOdds = [];
  const awayOdds = [];

  // Iterate through bets for all bookkeepers that come through predictions
  for(let i = 0; i < bets.length; i++){

    // Lots of different kinds of bets, we only want index 3 which is home/away bet
    let filteredByBets = bets[i].filter(bet => bet.id === 2);
    let homeAwayValues;

    // Check to see if we get an actual value back
    if(filteredByBets.length !== 0){

      // Isolate values array from bets array
      homeAwayValues = filteredByBets[0].values;

    } else {

      // If the value we get back is an empty array...
      homeAwayValues = [{value: 'Home', odd: 0},{value: 'Away', odd: 0}]
    }
    
    // Filter the values in to }home teams and away teams, then push to their own member variables
    const homeValues = homeAwayValues.filter(team => team.value === "Home" );
    const awayValues = homeAwayValues.filter(team => team.value === "Away" );
    homeOdds.push(homeValues[0]);
    awayOdds.push(awayValues[0]);
    
  }

  return (
    <>
      <div className = 'predictions-side-game'>
        <div className = 'predictions-side-time'>
          <div className = 'predictions-side-teams'>
            <div className = 'predictions-side-team-one'>
              <img src = {predictions.game.teams.home.logo} alt = '' />
              <div className = 'predictions-side-team-name'>
                <h6>{predictions.game.teams.home.name}</h6>
              </div>
            </div>
            <div className = 'predictions-side-team-one'>
              <img src = {predictions.game.teams.away.logo} alt = '' />
              <div className = 'predictions-side-team-name'>
                <h6>{predictions.game.teams.away.name}</h6>
              </div>
            </div>
          </div>
        </div>
        <div className = 'predictions-side-info'>
          <div className = 'providers'>
            {
              bookmakers.slice(0, 4).map((bookmaker) => (
                <div>
                <p>{bookmaker.name}</p>
                </div>
              ))
            }
          </div>
          <div className = 'team-one-odds'>
            { 
              homeOdds.slice(0, 4).map((home) => (
                <p>{home.odd}</p>
              ))
            }
          </div>
          <div className = 'team-two-odds'>
            {
              awayOdds.slice(0, 4).map((away) => (
                <p>{away.odd}</p>
              ))
            }
          </div>
        </div>
        
      </div>
  </>
  )
}
