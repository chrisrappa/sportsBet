import { useEffect } from "react";
import CreatePost from "../components/PostComponents/CreatePost";
import Sidebar from "../components/SidebarComponents/Sidebar";
import { useHistory } from 'react-router';
import { useSelector } from "react-redux";

export default function CreatePostScreen() {

  const postCreate = useSelector((state) => state.postCreate || {});
  const { success: successCreate } = postCreate;

  const history = useHistory();
  useEffect(() => {
    if(successCreate){
      history.push('/profile');
    }
    return () => {

    }
  }, [history, successCreate])

  return (
    <div className="main-create-container">
      <div className="create-container">
        <CreatePost />
      </div>
      <div className = 'sidebar'>
        <Sidebar />
      </div> 
    </div>
  )
}
