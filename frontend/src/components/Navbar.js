import { useSelector, useDispatch } from "react-redux";
import { logout } from "../actions/userActions";
import  Signin  from './RegisterSignIn/SignIn';
import  Register  from './RegisterSignIn/Register';
import { useState } from "react";


function Navbar(props) {

  const userSignin = useSelector(state => state.userSignin);
  const { userInfo } =  userSignin;

  const [register, setRegister] = useState(false);
  const [signin, setSignin] = useState(false);

  const [menuVisible, setMenuVisible] = useState(false);

  const dispatch = useDispatch();

  const toggleMenu = () => {
    if(menuVisible === false){
      document.querySelector(".mobile-menu").classList.add("open");
    } else {
      document.querySelector(".mobile-menu").classList.remove("open");
    }

    setMenuVisible(!menuVisible);
  }

  const submitHandler = () => {
    dispatch(logout())
  }

  const signinPopup = () => {
    setRegister(false);
    toggleMenu();
    setSignin(!signin);
  }

  const registerPopup = () => {
    setRegister(!register);
    toggleMenu();
    setSignin(false);
  }


  return (
    <div>
    <nav className="bg-gray-800 z-10">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          
          {/* Mobile Menu Button */}
          <button onClick = {() => toggleMenu()} type="button" className="w-20 h-full inline-flex items-center justify-center p-2 rounded-md text-gray-400 md:hidden lg:hidden xl:hidden cursor-pointer">
            <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none"  stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          
          <div className="flex-1 flex sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0 flex items-center w-50">
              <img className="block lg:hidden h-8 w-auto" src="https://res.cloudinary.com/djrbfvpit/image/upload/v1636235242/sportsBook/SportsbookMemes_Web_v2__0_1x_vovnuc.png" alt="" />
              <img className="hidden lg:block h-8 w-auto" src="https://res.cloudinary.com/djrbfvpit/image/upload/v1636235242/sportsBook/SportsbookMemes_Web_v2__0_1x_vovnuc.png" alt="" />
            </div>
            <div className="hidden md:block lg:block sm:ml-6">
              <div className="flex space-x-4">
                {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
                <a href="/" className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium" aria-current="page">Memes</a>

                <a href="/predictions" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Predictions</a>

                <a href="/upcoming" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Upcoming Games</a>
              </div>
            </div>
          </div>

          {/* <!-- Profile dropdown --> */}
          { userInfo ? 
            // Work out profile picture laterz

            // <div className="absolute justify-between inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            //   <div className=" ml-3 relative">
            //     <div>
            //       <button type="button" className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
            //         <span className="sr-only"></span>
            //         <a href='/profile'>
            //           <img className="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
            //         </a>
            //       </button>
            //     </div>
            //   </div>

              <div className="absolute justify-between inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <div className=" ml-3 relative">
                <div>
                  <button type="button" className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                    <span className="sr-only"></span>
                    <a href='/profile'>
                      <h1 className = 'hidden md:block lg:block xl:block text-white text-lg'>{userInfo.name}</h1>
                    </a>
                  </button>
                </div>
              </div>
              
              <div className=" ml-3 relative">
                <div>
                  <button onClick = {submitHandler} type="button" className="text-white flex m-8 text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                    Log Out
                  </button>
                </div>
              </div>
            </div>

            : 

              <div className="absolute justify-between inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <div className= "ml-3 relative invisible md:visible lg:visible xl:visible ">
                  <div>
                    <button type= "button" onClick = {signinPopup} className="login text-white flex w-28 h-9 justify-center align-bottom m-8 text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                        <h3>
                          Login
                        </h3>
                    </button>
                  </div>
                </div>
                <div className= "ml-3 relative invisible md:visible lg:visible xl:visible ">
                  <div>
                      <button type="button" onClick = {registerPopup} className="register flex w-28 h-9 justify-center m-8 text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                        Register
                      </button>
                  </div>
                </div>
              </div>
            }

            <aside className="register-signin-popup"> 
            { register

             ? 
                <div className = "register-popup">
                  <button onClick = {registerPopup} className = 'exit-register'>X</button>
                  <div className = 'register-container'>
                    <div className = 'register-img' />
                    <Register />
                  </div>
                </div> 
              : 

              signin 
              
              ? 
                <div className = "signin-popup">
                  <button onClick = {signinPopup} className = 'exit-register'>X</button>
                  <Signin />
                </div> 
              
              : null
          
            }
          
            
            
            
          </aside>
        </div>
      </div>

      {/* <!-- Mobile menu, show/hide based on menu state. --> */}
      <div className="mobile-menu" id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1">
          {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
          <a href="/" className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium" aria-current="page">Memes</a>

          <a href="/predictions" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Predictions</a>

          <a href="/upcoming" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Upcoming Games</a>
          
          { userInfo ? 
            
            <div>
              <a href='/profile'>
                <h1 className = 'text-black text-lg pl-5'>{userInfo.name}</h1>
              </a>
            </div>


            : 

            <div className = 'register-mobile-container'>
              <button type="button" onClick = {signinPopup} className="register-mobile flex w-28 h-9 justify-center m-8 text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                Login
              </button>
              <button type="button" onClick = {registerPopup} className="register-mobile flex w-28 h-9 justify-center m-8 text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                Register
              </button>
            </div>
          }

        </div>
      </div>
    </nav>
    </div>
  )
}

export default Navbar


