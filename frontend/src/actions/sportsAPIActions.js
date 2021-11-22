import {
  UPCOMING_GAMES_REQUEST, UPCOMING_GAMES_SUCCESS, UPCOMING_GAMES_FAIL,
  // GAME_PREDICTIONS_REQUEST, GAME_PREDICTIONS_SUCCESS, GAME_PREDICTIONS_FAIL
} from '../constants/sportsAPIConstants';
import axios from 'axios';

export const upcomingGamesApi = (leagueNum, seasonYear, sportType) => async (dispatch) => {

  dispatch({type: UPCOMING_GAMES_REQUEST});

  try {
    const params = `${sportType}/${leagueNum}/${seasonYear}`;
    const {data} = await axios.get('http://localhost:5000/api/sportsApi/' + params, 
      { 
        mode: 'cors' 
      }
    );

    var games = [];

    for(let i = 0; i < 10; i++){
      const json = (data.response[i]);
      games.push(json);
    }


    dispatch({type: UPCOMING_GAMES_SUCCESS, payload: games});
  } 
  
  catch (error) {
    dispatch({type: UPCOMING_GAMES_FAIL, payload: error.message});
  }

}

// export const gamePredictions = (leagueNum, seasonYear, sportType) => async (dispatch) => {

//   dispatch({type: GAME_PREDICTIONS_REQUEST});
//   const apiKey = '3f0e7a4b1daa7be241ac12e59e43f8a5';
//   const url = `https://v1.${sportType}.api-sports.io/games?league=${leagueNum}&season=${seasonYear}`;

//   try {
//     const { data } = await axios.get(`${url}`, 
//       {
//         headers:
//         {
//           Authorization: apiKey
//         }

//       }
//     );

//     dispatch({type: GAME_PREDICTIONS_SUCCESS, payload: data});
//   } 
  
//   catch (error) {
//     dispatch({type: GAME_PREDICTIONS_FAIL, payload: error.message});
//   }

// }