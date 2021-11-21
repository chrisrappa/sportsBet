import axios from 'axios';
import Axios from 'axios';
import Cookie from 'js-cookie';

import {
  USER_SIGNIN_REQUEST, USER_SIGNIN_SUCCESS, USER_SIGNIN_FAIL,
  USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS, USER_REGISTER_FAIL,
  USER_LOGOUT, 
  USER_UPDATE_FAIL, USER_UPDATE_SUCCESS, USER_UPDATE_REQUEST,
} from '../constants/userConstants';


export const signin = (email, password) => async (dispatch) => {
  dispatch({type: USER_SIGNIN_REQUEST, payload: {email, password}})
  try {
    const {data} = await Axios.post("/api/users/signin", {email, password})
    dispatch({type: USER_SIGNIN_SUCCESS, payload: data});
    Cookie.set('userInfo', JSON.stringify(data));
  } catch (error){
    dispatch({type: USER_SIGNIN_FAIL, payload: error.message});
  }
}

export const register = (username, email, password, name, dob, gender, zipCode ) => async (dispatch) => {
  dispatch({type: USER_REGISTER_REQUEST, payload: {username, email, password,name, dob, gender, zipCode}})
  try {
    const {data} = await Axios.post("/api/users/register", {username, email, password, name, dob, gender, zipCode})
    dispatch({type: USER_REGISTER_SUCCESS, payload: data});
    Cookie.set('userInfo', JSON.stringify(data));
  } catch (error){
    dispatch({type: USER_REGISTER_FAIL, payload: error.message});
  }
}

export const logout = () => (dispatch) =>{
  Cookie.remove("userInfo");
  dispatch({ type: USER_LOGOUT});
}

export const update = ({userId, name, email, password}) => async (dispatch, getState) => {
  // const { userSignin: { userInfo } } = getState();
  dispatch({type: USER_UPDATE_REQUEST, payload: {userId, name, email, password}})
  try {
    const { data } = await Axios.put("/api/users/" + userId, 
    {name, email, password}, 
      // {
      // headers:
      //     {
      //         Authorization : 'Bearer ' + userInfo.token
      //     }
      // }
    );
    dispatch({type: USER_UPDATE_SUCCESS, payload: data});
    Cookie.set('userInfo', JSON.stringify(data));
  } catch (error){
    dispatch({type: USER_UPDATE_FAIL, payload: error.message});
  }
}

export const vote = (userId, postId, type) => async (dispatch) => {

  dispatch({type: USER_UPDATE_REQUEST, payload: {userId, postId, type}});

  try {

  const { data } = await axios.put('api/users/' + userId, {postId, type});
  dispatch({type: USER_UPDATE_SUCCESS, payload: data});
  Cookie.set('userInfo', JSON.stringify(data));

  } catch (error) {
    dispatch({type: USER_UPDATE_FAIL, payload: error.message});
  }
  
}