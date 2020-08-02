'use strict';

/** imports */
import React from 'react';
import './container.scss';

// assets
import './login-bg.jpg';

// components
import Typography from '@lib/typography';

/** Container component */
export default function Container(props) {
  /** render */
  return (
    <div className="container">
      <div className="container-logo">
        <Typography.Heading type="5">Planner</Typography.Heading>
      </div>
      <div></div>
    </div>
  )
}