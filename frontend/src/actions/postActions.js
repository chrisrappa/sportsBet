import axios from 'axios';
import {
  POST_CREATE_FAIL,
  POST_CREATE_REQUEST,
  POST_CREATE_SUCCESS,
  // POST_DETAILS_FAIL,
  // POST_DETAILS_REQUEST,
  // POST_DETAILS_SUCCESS,
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

export const createPost = (post) => async (dispatch, getState) => {
  try {
    dispatch({type: POST_CREATE_REQUEST, payload: post})
    const { userSignin: { userInfo } } = getState();
    const {data} = await axios.post('/api/posts', post, {
      headers: {
        'Authorization' : 'Bearer ' + userInfo.token,
      },
    });
    console.log("Post successfully created!")
    dispatch({type: POST_CREATE_SUCCESS, payload: data})
      
  } catch (error) {
      dispatch({type: POST_CREATE_FAIL, payload: error.message})
  }
};

// export const detailsPost = (postId) => async (dispatch, getState) => {
//   dispatch({ type: POST_DETAILS_REQUEST, payload: postId });
//   const {
//     userSignin: { userInfo },
//   } = getState();
//   try {
//     const { data } = await Axios.get(`/api/POSTs/${postId}`, {
//       headers: { Authorization: `Bearer ${userInfo.token}` },
//     });
//     dispatch({ type: POST_DETAILS_SUCCESS, payload: data });
//   } catch (error) {
//     const message =
//       error.response && error.response.data.message
//         ? error.response.data.message
//         : error.message;
//     dispatch({ type: POST_DETAILS_FAIL, payload: message });
//   }
// };

export const listMyPosts = () => async (dispatch, getState) => {
  
  try {
    dispatch({ type:  MY_POST_LIST_REQUEST });
  const { userSignin: { userInfo } } = getState();
    
    const { data } = await axios.get('/api/posts/mine', {
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

export const listPosts = () => async (dispatch) => {
  
  try {
    dispatch({ type: POST_LIST_REQUEST });
    const { data } = await axios.get('/api/posts');
    dispatch({ type: POST_LIST_SUCCESS, payload: data });
    
  } catch (error) {
    dispatch({ type: POST_LIST_FAIL, payload: error.message });
  }
};

export const deletePost = (postId) => async (
  dispatch,
  getState
) => {
  dispatch({ type: POST_DELETE_REQUEST, payload: postId });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await axios.delete('/api/posts/' + postId, {
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