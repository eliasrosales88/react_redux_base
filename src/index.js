import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// REDUX IMPORTS
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from "./store/reducer";

// REDUX CREATE STORE
const store = createStore(reducer);

ReactDOM.render(<Provider store = {store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
