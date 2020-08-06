'use strict';

/** imports */
import React from 'react';
import classnames from 'classnames';
import './heading.scss';

/** Heading component */
export default function Heading(props) {
  /** data */
  const className = classnames({
    ['heading' + props.type]: true,
    [props.name]: !!props.name
  });

  /** render */
  return (
    <div className={className}>
      {props.children}
    </div>
  )
}