'use strict';

/** imports */
import React from 'react';
import {Link} from 'react-router-dom';

// assets
import './container.scss';
import './login.jpg';

// components
import Typography from '@lib/typography';

/** Container component */
export default function Container(props) {
  return (
    <div className="login-container" data-class="full">
      <Link to="/">
        <Typography.Heading type="5" name="login-logo">Planner</Typography.Heading>
      </Link>
      {props.children}
      <div className="login-shadow" data-class="full"></div>
    </div>
  )
}