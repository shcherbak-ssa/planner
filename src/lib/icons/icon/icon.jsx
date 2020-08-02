'use strict';

/** imports */
import React from 'react';
import './icon.scss';

// components
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

/** Icon component */
export default function Icon(props) {
  return (
    <div className="icon">
      <FontAwesomeIcon icon={props.icon} size="2x" />
    </div>
  )
}