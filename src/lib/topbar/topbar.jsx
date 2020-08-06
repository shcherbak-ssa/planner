'use strict';

/** imports */
import React from 'react';
import './topbar.scss';

/** Topbar component */
export default function Topbar(props) {
  /** render */
  return (
    <div className="topbar">
      {props.children}
    </div>
  )
}