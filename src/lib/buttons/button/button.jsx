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
    >{buttonValue.map((item, index) => <div key={index}>{item}</div>)}</div>
  )
}

/** help functions */
function getButtonValue(props) {
  if (props.isCircle) return [props.icon];
  
  const value = [];
  value.push(getText(props.label));

  if (props.icon) {
    const {icon} = props;
    props.iconRight ? value.push(icon) : value.unshift(icon);
  }

  return value;
}
function getText(text) {
  const paragraphProps = {type: 2, text, style: {color: 'inherit'}};
  return <Typography.Paragraph {...paragraphProps}/>
}