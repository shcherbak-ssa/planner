'use strict';

/** imports */
import React from 'react';
import './button.scss';

// components
import Typography from '../../typography';

/** Button component */
export default function Button(props) {
  const dataButtonColor = props.color || 'primary';
  const buttonClassName = props.isCircle ? 'button-circle' : 'button';
  const buttonValue = getButtonValue(props);
  return (
    <div
      className={buttonClassName}
      data-class="mbr bs fc click"
      data-button-color={dataButtonColor}
    >{buttonValue}</div>
  )
}

/** help functions */
function getButtonValue(props) {
  if (props.isCircle) return props.icon;
  
  return <Typography.Paragraph />
}