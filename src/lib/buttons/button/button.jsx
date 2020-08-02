'use strict';

/** imports */
import React from 'react';
import './button.scss';

// components
import Typography from '../../typography';

/** Button component */
export default function Button(props) {
  const attributes = {
    className: props.isCircle ? 'button-circle' : 'button',
    'data-class': 'mbr bs fc click',
    'data-button-color': props.color || 'primary',
    onClick: props.clickHandler
  };
  const value = getValue(props);

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
  value.push(getText(props.label));

  if (props.icon) {
    const {icon} = props;
    props.iconRight ? value.push(icon) : value.unshift(icon);
  }

  return value;
}
function getText(text) {
  const paragraphProps = {type: 2, text};
  return <Typography.Paragraph {...paragraphProps}/>
}