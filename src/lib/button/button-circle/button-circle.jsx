'use strict';

/** imports */
import React from 'react';
import './button-circle.scss';

// components
import Icons from '../../icons';

/** ButtonCircle component */
export default function ButtonCircle(props) {
  /** data */
  const attributes = {
    className: 'button-circle',
    'data-class': 'fc circle click',
    'data-button-type': props.type || 'primary',
    onClick: (e) => {
      e.preventDefault();
      props.clickHandler();
    }
  }
  
  /** render */
  return (
    <div {...attributes}>
      <Icons.Icon icon={props.icon}/>
    </div>
  )
}