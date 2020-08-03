'use strict';

/** imports */
import React from 'react';
import ReactDOM from 'react-dom';

// assets
import './assets/index.html';
import './assets/styles/main.scss';
import './assets/fonts';

// components
import PlannerRouter from './components/planner-router.jsx';

/** init */
window.onbeforeunload = () => {
  document.cookie = `session=${JSON.stringify({active: false})}`;
}
ReactDOM.render(
  <PlannerRouter />,
  document.getElementById('root')
);