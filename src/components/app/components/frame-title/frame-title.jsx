'use strict';

/** imports */
import React, {useState} from 'react';
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
  const [currentTitle, setCurrentTitle] = useState('');

  /** methods */
  function setTitle() {
    if (isRootLocationPathname()) return PLANNER_TITLE;
    const fullLocationPathname = getFullLocationPathname().split('/');
    const transformedFullLocationPathname = transformeFirstLettersToUpperCase(fullLocationPathname);
    return transformedFullLocationPathname.join(' / ');
  }
  function isRootLocationPathname() {
    return location.pathname === '/';
  }
  function getFullLocationPathname() {
    return PLANNER_TITLE + location.pathname;
  }
  function transformeFirstLettersToUpperCase(fullLocationPathname) {
    return fullLocationPathname.map((part) => {
      const splitedPart = part.split('');
      splitedPart[0] = splitedPart[0].toUpperCase();
      return splitedPart.join('');
    });
  }

  /** render */
  return (
    <div className="frame-title">
      <Typography.Heading type="6">{setTitle()}</Typography.Heading>
    </div>
  )
}