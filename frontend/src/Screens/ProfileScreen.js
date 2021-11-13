// import { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { logout, update } from '../actions/userActions';
// import { listMyPosts } from '../actions/postActions';

import Post from "../components/PostComponents/Post";
import ProfileNav from "../components/ProfileComponents/ProfileNav";
import Sidebar from "../components/SidebarComponents/Sidebar";

function ProfileScreen(props) {

    // const [name, setName] = useState('');
    // const [password, setPassword] = useState('');
    // const [email, setEmail] = useState('');

    // const dispatch = useDispatch();

    // const userSignin = useSelector(state => state.userSignin) 
    // const { userInfo } = userSignin;  

    // const handleLogout = () =>{
    //     dispatch(logout());
    //     props.history.push("/signin");
    // }

    // const submitHandler = (e) => {
    //     e.preventDefault();
    //     dispatch(update({ userId: userInfo._id, email, name, password}));
    // }

    // const userUpdate = useSelector(state => state.userUpdate);
    // const { loading, success, error } = userUpdate;

    // const myPostList = useSelector(state => state.myPostList);
    // const { loading: loadingPosts, posts, error: errorPosts } = myPostList;

    // console.log(myPostList);
    // console.log(posts);
    
    // useEffect(() => {
    //     if(userInfo){
    //         setEmail(userInfo.email);
    //         setName(userInfo.name);
    //         setPassword(userInfo.password);
    //     }
    //     dispatch(listMyPosts());
    //     return () => {
            
    //     }
    // }, [dispatch, userInfo])

  return(
    <div className="">
      <div className = 'profile-nav-container'>
        <ProfileNav />
      </div>
      <div className = 'profile-content-container'>
        <div className="post">
          <Post />
            {/* {
                loadingPosts ? <div>Loading...</div>:
                errorPosts ? <div>{errorPosts}</div> :
                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>DATE</th>
                            <th>TOTAL</th>
                            <th>PAID</th>
                            <th>ACTIONS</th>
                        </tr>
                    </thead>
                    <tbody>
                        {posts.map(post => <tr key={post._id}>
                            <td>{post._id}</td>
                            <td>{post.createdAt.substring(0,10)}</td>
                            <td>{post.totalPrice}</td>
                            <td>{post.isPaid}</td>
                            <td>
                                <Link to={"/post/" + post._id}>DETAILS</Link>
                            </td>
                        </tr>)}
                    </tbody>
                </table>
            } */}
        </div>
        <div className = 'sidebar'>
            <Sidebar />
        </div>
      </div>
    </div>
  )
}

export default ProfileScreen;

