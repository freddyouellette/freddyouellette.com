import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './utilities/registerServiceWorker';

import './custom-bootstrap.scss';
import 'font-awesome/css/font-awesome.min.css'

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();