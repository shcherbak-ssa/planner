'use strict';

/** imports */
import React from 'react';
import './framebar.scss';

/** Framebar component */
export default function Framebar(props) {
  /** render */
  return (
    <div className="framebar" data-class="bs fac">
      {props.children}
    </div>
  )
}