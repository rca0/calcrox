import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <div>
        <h1>Calculator</h1>
        <App />
    </div>
, document.getElementById('root'));
serviceWorker.unregister();
