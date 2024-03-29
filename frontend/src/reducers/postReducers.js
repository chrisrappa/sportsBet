import { 
  POST_CREATE_FAIL, POST_CREATE_REQUEST, POST_CREATE_SUCCESS, POST_CREATE_RESET,
  POST_LIST_REQUEST, POST_LIST_SUCCESS, POST_LIST_FAIL,
  POST_UPVOTE_REQUEST, POST_UPVOTE_SUCCESS, POST_UPVOTE_FAIL,
  POST_DOWNVOTE_REQUEST, POST_DOWNVOTE_SUCCESS, POST_DOWNVOTE_FAIL,
  POST_COMMENT_REQUEST, POST_COMMENT_SUCCESS, POST_COMMENT_FAIL,
  MY_POST_LIST_REQUEST, MY_POST_LIST_SUCCESS, MY_POST_LIST_FAIL,
  POST_DETAILS_REQUEST, POST_DETAILS_SUCCESS, POST_DETAILS_FAIL,
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

export function upVoteReducer(state = {}, action) {
  switch (action.type) {
    case POST_UPVOTE_REQUEST:
      return { loading: true };
    case POST_UPVOTE_SUCCESS:
      return { loading: false, upvotes: action.payload };
    case POST_UPVOTE_FAIL:
      return { loading: false, error: action.payload };
    default: return state;
  }
}

export function downVoteReducer(state = {}, action) {
  switch (action.type) {
    case POST_DOWNVOTE_REQUEST:
      return { loading: true };
    case POST_DOWNVOTE_SUCCESS:
      return { loading: false, downvotes: action.payload };
    case POST_DOWNVOTE_FAIL:
      return { loading: false, error: action.payload };
    default: return state;
  }
}

export function commentReducer(state = {comments: []}, action) {
  switch (action.type) {
    case POST_COMMENT_REQUEST:
      return { loading: true };
    case POST_COMMENT_SUCCESS:
      return { loading: false, comments: action.payload };
    case POST_COMMENT_FAIL:
      return { loading: false, error: action.payload };
    default: return state;
  }
}

export function myPostListReducer(state = { posts: [] }, action) {
  switch (action.type) {
    case MY_POST_LIST_REQUEST:
      return { loading: true };
    case MY_POST_LIST_SUCCESS:
      return { loading: false, posts: action.payload };
    case MY_POST_LIST_FAIL:
      return { loading: false, error: action.payload };
    default: return state;
  }
}


export function postDetailsReducer(state = { loading: true }, action) {
  switch (action.type) {
    case POST_DETAILS_REQUEST:
      return { loading: true };
    case POST_DETAILS_SUCCESS:
      return { loading: false, post: action.payload };
    case POST_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default: return state;
  }
}


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

  