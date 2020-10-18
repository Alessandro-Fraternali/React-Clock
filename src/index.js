import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

function renderApp(){
  ReactDOM.render(<App />, document.getElementById('root'));
}

setInterval(renderApp, 1000); //Ogni secondo renderApp ricarica alcuni elementi di App.js

serviceWorker.unregister();
