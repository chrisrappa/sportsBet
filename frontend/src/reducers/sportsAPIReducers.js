import {
  UPCOMING_GAMES_REQUEST, UPCOMING_GAMES_SUCCESS, UPCOMING_GAMES_FAIL,
  GAME_PREDICTIONS_REQUEST, GAME_PREDICTIONS_SUCCESS, GAME_PREDICTIONS_FAIL
} from '../constants/sportsAPIConstants';

export function upcomingGamesReducer (state = { games: []}, action){
  switch(action.type){
    case UPCOMING_GAMES_REQUEST:
      return {loading: true, games: []};
    case UPCOMING_GAMES_SUCCESS:
      return {loading: false, games: action.payload}
    case UPCOMING_GAMES_FAIL:
      return {loading: false, error: action.payload}
    default: return state;
  }
}

export function gamePredictionsReducer (state = { predictions: []}, action){
  switch(action.type){
    case GAME_PREDICTIONS_REQUEST:
      return {loading: true};
    case GAME_PREDICTIONS_SUCCESS:
      return {loading: false, predictions: action.payload}
    case GAME_PREDICTIONS_FAIL:
      return {loading: false, error: action.payload}
    default: return state;
  }
}