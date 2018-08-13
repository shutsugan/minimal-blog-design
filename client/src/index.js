import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import App from './components/App';

import './css/index.css';

const container = document.querySelector('.app');
ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, container);
