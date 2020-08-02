'use strict';

/** imports */
import React from 'react';
import render from './tools/render';

// assets
import './assets/view/login.html';
import './assets/styles/main.scss';
import './assets/fonts';

// components
import Container from './components/login/container';

/** init */
render(<Container/>, 'login');