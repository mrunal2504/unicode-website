import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './scenes/Routing';
import * as serviceWorker from './javascript/serviceWorker';
import {BrowserRouter} from 'react-router-dom';
import axios from 'axios';

axios.defaults.baseURL=''

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
