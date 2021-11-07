import Axios from 'axios';
import {
  POST_CREATE_FAIL,
  POST_CREATE_REQUEST,
  POST_CREATE_SUCCESS,
  POST_DETAILS_FAIL,
  POST_DETAILS_REQUEST,
  POST_DETAILS_SUCCESS,
  MY_POST_LIST_REQUEST,
  MY_POST_LIST_SUCCESS,
  MY_POST_LIST_FAIL,
  POST_LIST_REQUEST,
  POST_LIST_SUCCESS,
  POST_LIST_FAIL,
  POST_DELETE_SUCCESS,
  POST_DELETE_REQUEST,
  POST_DELETE_FAIL,

} from '../constants/postConstants';

export const createPOST = (post) => async (dispatch, getState) => {
  dispatch({ type: POST_CREATE_REQUEST, payload: post });
  try {
    const { userSignin: { userInfo }} = getState();
    const { data: { data: newPost } } = await Axios.post('/api/POSTs', post, {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    });
    
    dispatch({ type: POST_CREATE_SUCCESS, payload: newPost });
    localStorage.removeItem('cartItems');
  } catch (error) {
    dispatch({
      type: POST_CREATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const detailsPost = (postId) => async (dispatch, getState) => {
  dispatch({ type: POST_DETAILS_REQUEST, payload: postId });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.get(`/api/POSTs/${postId}`, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({ type: POST_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: POST_DETAILS_FAIL, payload: message });
  }
};

export const listMyPosts = () => async (dispatch, getState) => {
  
  try {
    dispatch({ type:  MY_POST_LIST_REQUEST });
  const { userSignin: { userInfo } } = getState();
    
    const { data } = await Axios.get('/api/posts/mine', {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({ type: MY_POST_LIST_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: MY_POST_LIST_FAIL, payload: message });
  }
};

export const listPosts = () => async (dispatch, getState) => {
  
  try {
    dispatch({ type: POST_LIST_REQUEST });
  const { userSignin: { userInfo } } = getState();
    
    const { data } = await Axios.get('/api/POSTs', {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({ type: POST_LIST_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: POST_LIST_FAIL, payload: message });
  }
};

export const deletePOST = (postId) => async (
  dispatch,
  getState
) => {
  dispatch({ type: POST_DELETE_REQUEST, payload: postId });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.delete('/api/POSTs/' + postId, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({ type: POST_DELETE_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: POST_DELETE_FAIL, payload: message });
  }
};