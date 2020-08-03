'use strict';

/** imports */
import React from 'react';
import ReactDOM from 'react-dom';
import Cookie from '@module/tools/cookie';

// assets
import './assets/index.html';
import './assets/styles/main.scss';
import './assets/fonts';

// components
import PlannerRouter from './components/planner-router.jsx';

/** init */
const cookie = new Cookie();
const rootMode = cookie.get('root-mode');

ReactDOM.render(
  <PlannerRouter rootMode={rootMode}/>,
  document.getElementById('root')
);