'use strict';

/** imports */
import React from 'react';
import './user-avatar.scss';

/** UserAvatar component */
export default function UserAvatar(props) {
  /** data */
  const attributes = {
    className: 'user-avatar',
    'data-class': 'bs circle click',
    onClick: props.clickHandler,
    style: {
      backgroundImage: `url('${props.image}')`
    }
  };

  /** render */
  return (
    <div {...attributes}></div>
  )
}