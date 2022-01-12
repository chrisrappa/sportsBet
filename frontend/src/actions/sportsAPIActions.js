import {
  UPCOMING_GAMES_REQUEST, UPCOMING_GAMES_SUCCESS, UPCOMING_GAMES_FAIL,
  GAME_PREDICTIONS_REQUEST, GAME_PREDICTIONS_SUCCESS, GAME_PREDICTIONS_FAIL
} from '../constants/sportsAPIConstants';
import axios from 'axios';

export const upcomingGamesApi = (versionNum, leagueNum, seasonYear, sportType, numCalls, reqType) => async (dispatch) => {

  dispatch({type: UPCOMING_GAMES_REQUEST});

  try {
    const endpoint = `https://v${versionNum}.${sportType}.api-sports.io/${reqType}?league=${leagueNum}&season=${seasonYear}`;
    const apiKey = '29d07cd360f14f8cb6cf216eb9008cee';
    const data = await axios.get(endpoint, { 
      headers: {
        'x-rapidapi-key': apiKey,
        'x-rapidapi-host': `v${versionNum}.${sportType}.api-sports.io`
      }
    });
    
    const games = data.data;

    var objsToArray = [];

    for(let i = 0; i < numCalls; i++){
      const json = (games.response[i]);
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
  
  try {

    const endpoint = `https://v${versionNum}.${sportType}.api-sports.io/${reqType}?league=${leagueNum}&season=${seasonYear}`;
    const apiKey = '29d07cd360f14f8cb6cf216eb9008cee';
    const data = await axios.get(endpoint, { 
      headers: {
        'x-rapidapi-key': apiKey,
        'x-rapidapi-host': `v${versionNum}.${sportType}.api-sports.io`
      }
    });
    
    const games = data.data;

    var objsToArray = [];

    for(let i = 0; i < numCalls; i++){
      const json = (games.response[i]);
      objsToArray.push(json);
    }

    dispatch({type: GAME_PREDICTIONS_SUCCESS, payload: objsToArray});
  } 
  
  catch (error) {
    dispatch({type: GAME_PREDICTIONS_FAIL, payload: error.message});
  }

}