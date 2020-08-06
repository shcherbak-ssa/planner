'use strict';

/** imports */
import React from 'react';
import classnames from 'classnames';
import './dropdown-container.scss';

/** DropdownContainer component */
export default function DropdownContainer(props) {
  /** data */
  const className = classnames({
    'dropdown-container': true,
    'is-open': props.isOpen
  });
  
  /** render */
  return (
    <div className={className} data-class="mbr bsh white">
      {props.children}
    </div>
  )
}