'use strict';

/** imports */
import React from 'react';
import DropdownService from '@service/dropdown';

// components
import Container from './components/container';
import AppRouter from './app-router';

/** init */
DropdownService.init();

/** App component */
export default function App(props) {
  /** render */
  return (
    <Container>
      <AppRouter/>
    </Container>
  )
}