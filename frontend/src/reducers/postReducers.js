import { 
  POST_CREATE_FAIL, POST_CREATE_REQUEST, POST_CREATE_SUCCESS, POST_CREATE_RESET,
  POST_LIST_REQUEST, POST_LIST_SUCCESS, POST_LIST_FAIL,
  // POST_DETAILS_REQUEST, POST_DETAILS_SUCCESS, POST_DETAILS_FAIL,
  // MY_POST_LIST_REQUEST, MY_POST_LIST_SUCCESS, MY_POST_LIST_FAIL,
  // POST_DELETE_REQUEST, POST_DELETE_SUCCESS, POST_DELETE_FAIL,
} from "../constants/postConstants";


export function postCreateReducer(state = {}, action){
  switch (action.type){
    case POST_CREATE_REQUEST:
        return {loading: true};
    case POST_CREATE_SUCCESS:
        return {loading: false, success: true, post: action.payload};
    case POST_CREATE_FAIL:
        return {loading: false, error: action.payload};
    case POST_CREATE_RESET:
        return {};
    default: return state;
  }
}

export function postListReducer(state = { posts: [] }, action) {
  switch (action.type) {
    case POST_LIST_REQUEST:
      return { loading: true };
    case POST_LIST_SUCCESS:
      return { loading: false, posts: action.payload };
    case POST_LIST_FAIL:
      return { loading: false, error: action.payload };
    default: return state;
  }
}

// export function postDetailsReducer(state = { loading: true }, action) {
//   switch (action.type) {
//     case POST_DETAILS_REQUEST:
//       return { loading: true };
//     case POST_DETAILS_SUCCESS:
//       return { loading: false, post: action.payload };
//     case POST_DETAILS_FAIL:
//       return { loading: false, error: action.payload };
//     default: return state;
//   }
// }

// export function myPostListReducer(state = { posts: [] }, action) {
//   switch (action.type) {
//     case MY_POST_LIST_REQUEST:
//       return { loading: true };
//     case MY_POST_LIST_SUCCESS:
//       return { loading: false, POSTs: action.payload };
//     case MY_POST_LIST_FAIL:
//       return { loading: false, error: action.payload };
//     default: return state;
//   }
// }


// export function postDeleteReducer(state = { posts: [] }, action) {
//   switch (action.type) {
//     case POST_DELETE_REQUEST:
//       return { loading: true };
//     case POST_DELETE_SUCCESS:
//       return { loading: false, success: true };
//     case POST_DELETE_FAIL:
//       return { loading: false, error: action.payload };
//     default: return state;
//   }
// }

  