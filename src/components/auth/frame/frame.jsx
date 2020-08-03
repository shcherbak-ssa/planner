'use strict';

/** imports */
import React from 'react';
import './frame.scss';

// components
import Typography from '@lib/typography';

/** Frame component */
export default function Frame(props) {
  /** render */
  return (
    <div className="frame" data-class="bs bsh fbr pc white">
      <Typography.Heading type="4" name="frame-heading">{props.heading}</Typography.Heading>
      {props.children}
    </div>
  )
}