'use strict';

/** imports */
import React from 'react';

// assets
import './container.scss';
import './login-bg.jpg';

// components
import Typography from '@lib/typography';

/** Container component */
export default function Container(props) {
  /** render */
  return (
    <div className="container" data-class="full">
      <Typography.Heading name="container-logo" type="5">Planner</Typography.Heading>
      <div className="container-bg-shadow" data-class="full"></div>
    </div>
  )
}