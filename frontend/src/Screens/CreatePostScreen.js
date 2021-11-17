import CreatePost from "../components/PostComponents/CreatePost";
import Sidebar from "../components/SidebarComponents/Sidebar";

export default function CreatePostScreen() {
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
