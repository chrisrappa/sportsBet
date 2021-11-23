import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import Cookie from 'js-cookie';
import {
  userRegisterReducer, 
  userSigninReducer, 
  userUpdateReducer,
} from './reducers/userReducers';
import { 
  downVoteReducer,
  postCreateReducer, 
  postListReducer, 
  upVoteReducer,
  myPostListReducer, 
  // postDetailsReducer, 
  // postDeleteReducer 
} from './reducers/postReducers';
import { gamePredictionsReducer, upcomingGamesReducer } from './reducers/sportsAPIReducers';

const userInfo = Cookie.getJSON("userInfo") || null;

const initialState = {
  userSignin: { userInfo }
};


const reducer = combineReducers({
    userSignin: userSigninReducer,
    userRegister: userRegisterReducer,
    userUpdate: userUpdateReducer,
    postCreate: postCreateReducer,
    postList: postListReducer,
    upVotes: upVoteReducer,
    downVotes: downVoteReducer,
    myPostList: myPostListReducer,
    upcomingGames: upcomingGamesReducer,
    gamePredictions: gamePredictionsReducer
    // postDetails: postDetailsReducer,
    // postDelete: postDeleteReducer,
})




const composeEnhancer = (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({trace: true})) || compose;
const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));
export default store;