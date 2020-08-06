'use strict';

/** imports */
import React from 'react';
import './dropdown-container.scss';

/** DropdownContainer component */
export default function DropdownContainer(props) {
  /** data */
  const isOpenClassName = props.isOpen ? ' is-open' : '';
  const className = `dropdown-container${isOpenClassName}`;
  
  /** render */
  return (
    <div className={className} data-class="mbr">
      {props.children}
    </div>
  )
}