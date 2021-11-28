import { BrowserRouter, Route } from 'react-router-dom';
import HomeScreen from './Screens/HomeScreen';
import ProfileScreen from './Screens/ProfileScreen';
import Navbar from './components/Navbar';
import PredictionsScreen from './Screens/PredictionsScreen';
import UpcomingScreen from './Screens/UpcomingScreen';
import Register from './components/RegisterSignIn/Register';
import SignIn from './components/RegisterSignIn/SignIn';
import CreatePostScreen from './Screens/CreatePostScreen';
import InnerPostScreen from './Screens/InnerPostScreen';

// import { useState } from 'react';


function App() {

  return (
  <BrowserRouter>
    <div className = 'grid-container'>
      <Navbar />
      <main className = 'main'>
        <div className="content" />
          <Route path="/" exact={true} component={HomeScreen} />
          <Route path="/signin" component={SignIn} />
          <Route path="/register" component={Register} />
          <Route path="/profile" component={ProfileScreen} />
          <Route path="/upcoming" component={UpcomingScreen} />
          <Route path="/predictions" component={PredictionsScreen} />
          <Route path="/post/:id" component={InnerPostScreen} />
          <Route path="/create" component={CreatePostScreen} />
      </main>
      <footer className = 'footer'>

      </footer>
    </div>
  </BrowserRouter>
  );
}

export default App;
