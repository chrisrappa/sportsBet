export default function ProfileNav(props) {
  return (
    <div>
      <nav className="bg-white shadow-md h-20 z-10">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
            <div className=" ml-3 relative">
              <div className = 'profile-user-info'>
                <h1>{props.username}</h1>
              </div>
            </div>
            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-end">
              <div className="hidden sm:block sm:ml-6">
                <div className="flex space-x-4">
                  <button className="text-gray-400 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-md font-medium" aria-current="page">Latest Posts</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}
