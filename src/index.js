import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import 'font-awesome/css/font-awesome.min.css';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );
//Strict mode has been added in v16.3 to check potential app problems
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
