'use strict';

/** imports */
import React from 'react';
import {useLocation} from 'react-router-dom';

// assets
import './frame-title.scss';

// components
import Typography from '@lib/typography';

/** FrameTitle component */
export default function FrameTitle(props) {
  /** states */
  const location = useLocation();

  /** methods */
  function setTitle() {
    const pathname = location.pathname.split('/');
    pathname[0] = 'Planner';
    return pathname.join(' / ');
  }

  /** render */
  return (
    <div className="frame-title">
      <Typography.Heading type="6">{setTitle()}</Typography.Heading>
    </div>
  )
}