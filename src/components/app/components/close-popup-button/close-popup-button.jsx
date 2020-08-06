'use strict';

/** imports */
import React from 'react';
import {faTimes} from '@fortawesome/free-solid-svg-icons';

// assets
import './close-popup-button.scss';

// components
import Icons from '@lib/icons';

/** ClosePopupButton component */
export default function ClosePopupButton(props) {
  /** data */
  const attributes = {
    className: 'close-popup-button',
    'data-class': 'fc white circle click',
    onClick: props.clickHandler
  };
  
  /** render */
  return (
    <div {...attributes}>
      <Icons.Icon icon={faTimes}/>
    </div>
  )
}