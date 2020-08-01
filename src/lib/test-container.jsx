'use strict';

/** imports */
import React from 'react';
import './test-container.scss';

/** TestContainer component */
export default function TestContainer(props) {
  return (
    <div className="test-container">{props.children}</div>
  )
}