'use strict';

/** imports */
import React from 'react';
import DropdownItem from '../dropdown-item';

/** DropdownGroup component */
export default function DropdownGroup(props) {
  /** methods */
  function renderDropdownItems() {
    return props.items.map((item, index) => {
      return (
        <DropdownItem
          key={index}
          clickHandler={props.clickHandler}
          {...item}
        />
      )
    });
  }

  /** render */
  return (
    <div className="dropdown-group">
      {renderDropdownItems()}
    </div>
  )
}