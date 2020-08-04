'use strict';

/** imports */
import React from 'react';
import './icon.scss';

// components
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

/** Icon component */
export default function Icon(props) {
  /** data */
  const size = props.size || 'sm';
  const className = 'icon' + (props.name ? ` ${props.name}` : '');

  /** render */
  return (
    <div className={className}>
      <FontAwesomeIcon icon={props.icon} size={size} />
    </div>
  )
}