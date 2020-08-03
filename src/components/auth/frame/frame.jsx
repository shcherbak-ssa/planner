'use strict';

/** imports */
import React from 'react';
import './frame.scss';

/** Frame component */
export default function Frame(props) {
  /** render */
  return (
    <div className="frame" data-class="bs bsh fbr pc white">
      {props.children}
    </div>
  )
}