'use strict';

/** imports */
import React from 'react';
import './heading.scss';

/** Heading component */
export default function Heading(props) {
  let headingClassName = 'heading' + props.type;
  headingClassName += props.name ? ` ${props.name}` : '';
  return (
    <div className={headingClassName}>
      {props.children}
    </div>
  )
}