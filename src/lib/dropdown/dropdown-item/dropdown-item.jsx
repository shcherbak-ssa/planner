'use strict';

/** imports */
import React from 'react';
import './dropdown-item.scss';

// components
import Typography from '../../typography';
import Icons from '../../icons';

/** DropdownItem component */
export default function DropdownItem(props) {
  /** data */
  const attributes = {
    className: 'dropdown-item',
    'data-class': 'bs fsb click',
    onClick: (e) => {
      e.preventDefault();
      props.clickHandler(props.type);
    }
  };
  
  /** render */
  return (
    <div {...attributes}>
      <Typography.Paragraph type="2">{props.text}</Typography.Paragraph>
      <Icons.Icon Icon={props.icon}/>
    </div>
  )
}