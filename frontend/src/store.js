import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import Cookie from 'js-cookie';
import {
  userRegisterReducer, 
  userSigninReducer, 
  userUpdateReducer
} from './reducers/userReducers';
import { 
  postCreateReducer, 
  postListReducer, 
  // postDetailsReducer, 
  // myPostListReducer, 
  // postDeleteReducer 
} from './reducers/postReducers';

const userInfo = Cookie.getJSON("userInfo") || null;
console.log(userInfo);
const initialState = {
    userSignin: { userInfo }
  };

const reducer = combineReducers({
    userSignin: userSigninReducer,
    userRegister: userRegisterReducer,
    userUpdate: userUpdateReducer,
    postCreate: postCreateReducer,
    postList: postListReducer,
    // postDetails: postDetailsReducer,
    // myPostList: myPostListReducer,
    // postDelete: postDeleteReducer,
})



const composeEnhancer = (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({trace: true})) || compose;
const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));
export default store;