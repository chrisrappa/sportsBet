export default function ProfileNav(props) {
  return (
    <div>
      <nav className="bg-white shadow-md h-20 z-10">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
            <div className=" ml-3 relative">
              <div className = 'profile-user-info'>
                <button type="button" className="bg-white flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                  <span className="sr-only">Open user menu</span>
                  <img className="h-14 w-14 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                </button>
                <h1>{props.username}</h1>
              </div>
            </div>
            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-end">
              <div className="hidden sm:block sm:ml-6">
                <div className="flex space-x-4">
                  <button className="text-gray-400 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-md font-medium" aria-current="page">Latest Posts</button>

                  <button className="text-gray-400 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-md font-medium">Best Posts</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}
