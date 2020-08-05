'use strict';

/** imports */
import '@babel/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import initPlanner from './init';

// assets
import './assets/index.html';
import './assets/favicon.ico';
import './assets/styles/main.scss';
import './assets/fonts';

// components
import PlannerRouter from './components/planner-router';

/** init */
runPlanner();

async function runPlanner() {
  const isUserLogged = await initPlanner();
  ReactDOM.render(
    <PlannerRouter isUserLogged={isUserLogged} />,
    document.getElementById('root')
  );  
}