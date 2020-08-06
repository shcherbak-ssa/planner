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

  /** data */
  const headingType = props.isPage ? 6 : 5;

  /** methods */
  function setTitleForPage() {
    if (isRootLocationPathname()) return PLANNER_TITLE;
    const pathname = getPathnameForPage();
    return transformPathname(pathname);
  }
  function isRootLocationPathname() {
    return location.pathname === '/';
  }
  function getPathnameForPage() {
    return location.state && location.state.background
      ? PLANNER_TITLE + location.state.background.pathname
      : getLocationPathname();
  }
  function setTitleForPopup() {
    const pathname = getPathnameForPopup();
    return transformPathname(pathname);
  }
  function getPathnameForPopup() {
    return getLocationPathname();
  }
  function getLocationPathname() {
    return PLANNER_TITLE + location.pathname;
  }
  function transformPathname(pathname) {
    const pathnameParts = pathname.split('/');
    const transformedPathnameParts = transformFirstLettersToUpperCase(pathnameParts);
    return transformedPathnameParts.join(' / ');
  }
  function transformFirstLettersToUpperCase(pathnameParts) {
    return pathnameParts.map((part) => {
      const splitedPart = part.split('');
      splitedPart[0] = splitedPart[0].toUpperCase();
      return splitedPart.join('');
    });
  }

  /** render */
  return (
    <div className="frame-title">
      <Typography.Heading type={headingType}>
        {props.isPage ? setTitleForPage() : setTitleForPopup()}
      </Typography.Heading>
    </div>
  )
}