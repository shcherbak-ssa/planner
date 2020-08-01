'use strict';

/** imports */
import React from 'react';
import render from './render';

// assets
import './assets/view/test-lib.html';
import './assets/styles/main.scss';
import './assets/fonts';

// components
import TestContainer from './lib/test-container.jsx';

/** init */
render(<TestContainer />, 'test-lib');