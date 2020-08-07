'use strict';

/** imports */
import React from 'react';
import classnames from 'classnames';
import './button-default.scss';

// components
import Typography from '../../typography';
import Icon from '../../icons/icon';

/** ButtonDefault component */
export default function ButtonDefault(props) {
  /** data */  
  const attributes = {
    className: classnames({
      'button': true,
      [props.name]: !!props.name
    }),
    'data-class': 'mbr bs fc click',
    'data-button-type': props.type || 'primary',
    onClick: props.clickHandler
  };
  const value = getValue();

  /** methods */
  function getValue() {
    const value = [];
    value.push(getLabel(props.label));
  
    if (props.icon) {
      const icon = getIcon(props.icon);
      props.iconRight ? value.push(icon) : value.unshift(icon);
    }
  
    return value;
  }
  function getLabel(label) {
    return <Typography.Paragraph type="2">{label}</Typography.Paragraph>
  }
  function getIcon(icon) {
    return <Icon icon={icon}/>
  }

  /** render */
  return (
    <div {...attributes}>
      {value.map((item, index) => <div key={index}>{item}</div>)}
    </div>
  )
}