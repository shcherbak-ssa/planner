'use strict';

/** imports */
import React from 'react';
import './button.scss';

// components
import Typography from '../../typography';

/** Button component */
export default function Button(props) {
  /** data */
  const buttonClassName = props.isCircle ? 'button-circle' : 'button';
  const parentClassName = props.name ? ` ${props.name}` : '';
  
  const attributes = {
    className: buttonClassName + parentClassName,
    'data-class': 'mbr bs fc click',
    'data-button-type': props.type || 'primary',
    onClick: props.clickHandler
  };
  const value = getValue(props);

  /** render */
  return (
    <div {...attributes}>
      {value.map((item, index) => <div key={index}>{item}</div>)}
    </div>
  )
}

/** help functions */
function getValue(props) {
  if (props.isCircle) return [props.icon];
  
  const value = [];
  value.push(getLabel(props.label));

  if (props.icon) {
    const {icon} = props;
    props.iconRight ? value.push(icon) : value.unshift(icon);
  }

  return value;
}
function getLabel(label) {
  return <Typography.Paragraph type="2">{label}</Typography.Paragraph>
}