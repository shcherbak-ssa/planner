'use strict';

/** imports */
import React from 'react';
import {useLocation} from 'react-router-dom';

// assets
import './frame-title.scss';

// components
import Typography from '@lib/typography';

/** constants */
const PLANNER_TITLE = 'Planner';

/** FrameTitle component */
export default function FrameTitle(props) {
  /** states */
  const location = useLocation();

  /** methods */
  function setTitle() {
    if (isRootLocationPathname()) return PLANNER_TITLE;
    return getFullLocationPathname().split('/').join(' / ');
  }
  function isRootLocationPathname() {
    return location.pathname === '/';
  }
  function getFullLocationPathname() {
    return PLANNER_TITLE + location.pathname;
  }

  /** render */
  return (
    <div className="frame-title">
      <Typography.Heading type="6">{setTitle()}</Typography.Heading>
    </div>
  )
}