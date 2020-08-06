'use strict';

/** imports */
import React from 'react';
import classnames from 'classnames';
import './icon.scss';

// components
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

/** Icon component */
export default function Icon(props) {
  /** data */
  const size = props.size || 'sm';
  const className = classnames({
    'icon': true,
    [props.name]: !!props.name
  });

  /** render */
  return (
    <div className={className} data-class="fc">
      <FontAwesomeIcon icon={props.icon} size={size} />
    </div>
  )
}