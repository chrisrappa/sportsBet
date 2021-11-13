import { BrowserRouter, Route } from 'react-router-dom';
import HomeScreen from './Screens/HomeScreen';
import ProfileScreen from './Screens/ProfileScreen';
import Navbar from './components/Navbar';
import PredictionsScreen from './Screens/PredictionsScreen';
import UpcomingScreen from './Screens/UpcomingScreen';
import Register from './components/RegisterSignIn/Register';
import SignIn from './components/RegisterSignIn/SignIn';
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
          <Route path="/signin" component={SignIn} />
          <Route path="/register" component={Register} />
          <Route path="/profile" component={ProfileScreen} />
          <Route path="/upcoming" component={UpcomingScreen} />
          <Route path="/predictions" component={PredictionsScreen} />
      </main>
      <footer className = 'footer'>

      </footer>
    </div>
  </BrowserRouter>
  );
}

export default App;
