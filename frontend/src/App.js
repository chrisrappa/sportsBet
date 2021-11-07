import { BrowserRouter, Route } from 'react-router-dom';
import HomeScreen from './Screens/HomeScreen';
import SigninScreen from './Screens/SigninScreen';
import RegisterScreen from './Screens/RegisterScreen';
import ProfileScreen from './Screens/ProfileScreen';
import Navbar from './components/Navbar';
// import { useSelector } from 'react-redux';
// import { useState } from 'react';


function App() {

  // const userSignin = useSelector(state => state.userSignin);
  // const { userInfo } =  userSignin;

  return (
  <BrowserRouter>
    <div className = 'grid-container'>
      <Navbar />
      <main className = 'main'>
        <div className="content" />
          <Route path="/" exact={true} component={HomeScreen} />
          <Route path="/category/:id"  component={HomeScreen} />
          <Route path="/signin" component={SigninScreen} />
          <Route path="/register" component={RegisterScreen} />
          <Route path="/profile" component={ProfileScreen} />
      </main>
      <footer className = 'footer'>

      </footer>
    </div>
  </BrowserRouter>
  );
}

export default App;
