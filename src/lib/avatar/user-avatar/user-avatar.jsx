'use strict';

/** imports */
import React from 'react';
import './user-avatar.scss';

/** UserAvatar component */
export default function UserAvatar(props) {
  /** data */
  const styles = props.image ? {backgroundImage: `url('${props.image}')`} : false;
  const attributes = {
    className: 'user-avatar',
    'data-class': 'bs circle click',
    onClick: (e) => {
      e.preventDefault();
      props.clickHandler();
    },
    style: styles || {}
  };

  /** render */
  return (
    <div {...attributes}></div>
  )
}