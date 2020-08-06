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
  const styles = {
    color: props.color
  };

  /** render */
  return (
    <div
      className="click-icon"
      data-class="click"
      style={styles}
      onClick={props.clickHandler}
    >
      <Icon {...iconProps}/>
    </div>
  )
}