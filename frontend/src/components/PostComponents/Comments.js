// import { useState } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addComments } from '../../actions/postActions';

export default function Comments(props) {


  const dispatch = useDispatch();
  const comments = props.commentArray;
  
  const userSignin = useSelector(state => state.userSignin);
  const { userInfo } =  userSignin;

  const [userComment, setUserComment] = useState('');
  console.log(userComment);

  const addComment = () => {
    dispatch(addComments({
      user: {userInfo},
      comment: userComment
    }, props.postId))
  }

  return (
    <div>

      { comments 
      
        ?
      
        comments.map((comment) => (
          <div className = 'user-comment'>
            <p className = 'comment-by'>{comment.user.userInfo.username}</p>
            <p className = 'comment-text'>{comment.comment}</p>
          </div>
        ))  

        :

        <div><h3>No comments yet...</h3></div>
      }

      <form onSubmit = {() => addComment()}>
        <input onChange = {(e) => setUserComment(e.target.value)} placeholder = "Add comment..." type="comment" name="commnet" id="comment" className = 'h-full py-0 pl-2 pr-7 bg-gray-100 text-gray-500 sm:text-sm rounded-md'></input>
        <div className = 'comment-btn-container'>
          <div></div>
          <button type = 'submit' className="button primary">Submit</button>
        </div>
      </form>
    </div>
  )
}
