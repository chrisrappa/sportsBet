import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import '../src/styles/index.css';
import '../src/styles/global.css';
import '../src/styles/homeScreen.css';
import '../src/styles/postComponent.css';
import '../src/styles/postFilter.css';
import App from './App';
import store from './store';


// 

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
          <App />
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

