'use strict';

/** imports */
import React from 'react';
import DropdownService from '@service/dropdown';

// components
import Container from './components/container';

/** init */
DropdownService.init();

/** App component */
export default function App(props) {
  /** render */
  return (
    <Container>
      <h1>App</h1>
    </Container>
  )
}