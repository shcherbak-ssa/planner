'use strict';

/** imports */
import React from 'react';
import './dropdown-container.scss';

/** DropdownContainer component */
export default function DropdownContainer(props) {
  /** render */
  return (
    <div className="dropdown-container" data-class="mbr">
      {props.children}
    </div>
  )
}