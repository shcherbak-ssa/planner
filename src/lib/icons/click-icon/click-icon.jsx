'use strict';

/** imports */
import React from 'react';
import './click-icon.scss';

// components
import Icon from '../icon';

/** ClickIcon component */
export default function ClickIcon(props) {
  /** data */
  const iconProps = {
    icon: props.icon
  };

  /** methods */
  function clickHandler(e) {
    e.preventDefault();
    props.clickHandler();
  }

  /** render */
  return (
    <div
      className="click-icon"
      data-class="click"
      onClick={clickHandler}
    >
      <Icon {...iconProps}/>
    </div>
  )
}