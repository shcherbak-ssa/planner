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
runTest();

/** run test */
async function runTest() {
  const TestComponent = await import(`./lib/${TEST_COMPONENT}/index`);
  const testProps = await import(`./lib/${TEST_COMPONENT}/test-props`);
  const component = (
    <TestContainer>
      <TestComponent {...testProps}/>
    </TestContainer>
  );
  
  render(component, 'test-lib');
}