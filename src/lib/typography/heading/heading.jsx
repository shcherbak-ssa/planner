'use strict';

/** imports */
import React from 'react';
import './heading.scss';

/** Heading component */
export default function Heading(props) {
  const headingClassName = 'heading' + props.type;
  return (
    <div className={headingClassName}>{props.heading}</div>
  )
}