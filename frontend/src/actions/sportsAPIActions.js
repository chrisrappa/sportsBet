import {
  UPCOMING_GAMES_REQUEST, UPCOMING_GAMES_SUCCESS, UPCOMING_GAMES_FAIL,
  GAME_PREDICTIONS_REQUEST, GAME_PREDICTIONS_SUCCESS, GAME_PREDICTIONS_FAIL
} from '../constants/sportsAPIConstants';
import axios from 'axios';

export const upcomingGamesApi = (versionNum, leagueNum, seasonYear, sportType, numCalls, reqType) => async (dispatch) => {

  dispatch({type: UPCOMING_GAMES_REQUEST});

  try {
    const params = `${versionNum}/${sportType}/${leagueNum}/${seasonYear}/${reqType}`;
    const {data} = await axios.get('http://localhost:5000/api/sportsApi/' + params, 
      { 
        mode: 'cors' 
      }
    );

    var objsToArray = [];

    for(let i = 0; i < numCalls; i++){
      const json = (data.response[i]);
      objsToArray.push(json);
    }

    dispatch({type: UPCOMING_GAMES_SUCCESS, payload: objsToArray});
  } 
  
  catch (error) {
    dispatch({type: UPCOMING_GAMES_FAIL, payload: error.message});
  }

}

export const gamePredictionsApi = (versionNum, leagueNum, seasonYear, sportType, numCalls, reqType) => async (dispatch) => {

  dispatch({type: GAME_PREDICTIONS_REQUEST});
  const params = `${versionNum}/${sportType}/${leagueNum}/${seasonYear}/${reqType}`;
  console.log(params);
  try {
    const {data} = await axios.get('http://localhost:5000/api/sportsApi/' + params, 
      { 
        mode: 'cors' 
      }
    );

    console.log(data);

    // I'm hitting a weird endpoint here because the postman response gives me bookmakers
    // but this response is giving me "fixtures" for some reason when passing soccer predictions

    var objsToArray = [];

    for(let i = 0; i < numCalls; i++){
      const json = (data.response[i]);
      objsToArray.push(json);
    }

    dispatch({type: GAME_PREDICTIONS_SUCCESS, payload: objsToArray});
  } 
  
  catch (error) {
    dispatch({type: GAME_PREDICTIONS_FAIL, payload: error.message});
  }

}