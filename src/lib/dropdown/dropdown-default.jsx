'use strict';

/** imports */
import React from 'react';

// components
import DropdownContainer from './dropdown-container';
import DropdownGroup from './dropdown-group';

/** DropdownDefault component */
export default function DropdownDefault(props) {
  /** render */
  return (
    <DropdownContainer isOpen={props.isOpen}>
      <DropdownGroup items={props.items} clickHanlder={props.clickHanlder}/>
    </DropdownContainer>
  )
}