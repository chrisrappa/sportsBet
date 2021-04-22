import React from 'react';
import {Provider} from 'react-redux';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './store';

// Stripe Stuff
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
const stripePromise = loadStripe("pk_test_C2elDiikh0MDGo8p98PWkfAT00M6UAjc7c");

// 

ReactDOM.render(
  <React.StrictMode>
    <Elements stripe={stripePromise}>
      <Provider store={store}>
          <App />
      </Provider>
    </Elements>
  </React.StrictMode>,
  document.getElementById('root')
);

