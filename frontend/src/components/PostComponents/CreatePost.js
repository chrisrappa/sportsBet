import { useSelector, useDispatch } from 'react-redux';
import React, { useState } from 'react';
import { createPost } from '../../actions/postActions';


export default function CreatePost () {

  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');

  const dispatch = useDispatch();

  const postCreate = useSelector((state) => state.postCreate || {});
  const { loading: loadingCreate, error: errorCreate } = postCreate;

  const userSignin = useSelector(state => state.userSignin);
  const { userInfo } =  userSignin;
  const username = userInfo.name;

  const submitHandler = (e) => {
      e.preventDefault();
      dispatch(createPost({
          title, 
          image, 
          category, 
          description,
          username
      })
    );

  };

  return(
    <div className="form create">
      <div className="post-header">
          <h3>Create Post</h3>
      </div>
      <form onSubmit={submitHandler}>
        <ul className="form-container">
          <li>
            {loadingCreate && <div>Loading...</div>}
            {errorCreate && <div>{errorCreate}</div>}
          </li>
          <li>
            <label htmlFor="title">Title</label>
            <input 
            type="text"
            placeholder="Required" 
            name="title"
            value={title} 
            id="title" 
            onChange={(e) => setTitle(e.target.value)}>
            </input>
          </li>
          <li>
            <label htmlFor="image">Image</label>
            <input 
            type="text"
            placeholder="Required" 
            name="image"
            value={image} 
            id="image" 
            onChange={(e) => setImage(e.target.value)}>
            </input>
          </li>
          <li>
            <label htmlFor="category">Category</label>
            <input 
            type="text" 
            placeholder="Required"
            name="category"
            value={category} 
            id="category" 
            onChange={(e) => setCategory(e.target.value)}>
            </input>
          </li>
          <li>
              <label htmlFor="description">Description</label>
              <textarea 
              name="description"
              placeholder="Required"
              value={description} 
              id="description" 
              onChange={(e) => setDescription(e.target.value)}> 
              </textarea>
          </li>
          <li>
            <button type="submit" className="button primary">Create</button>
          </li>
        </ul>
      </form>
    </div>
  )
}
