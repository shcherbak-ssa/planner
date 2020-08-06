'use strict';

/** imports */
import React from 'react';
import './container.scss';

// components
import Topbar from '@lib/topbar';
import Icons from '@lib/icons';
import Avatar from '@lib/avatar';

/** Container component */
export default function Container(props) {
  /** methods */
  function avatarClickHandler() {

  }
  
  /** render */
  return (
    <div className="container" data-class="full">
      <Topbar>
        <div className="container-topbar" data-class="full fsb">
          <div className="container-topbar-left">

          </div>
          <div className="container-topbar-right">
            <div className="container-user">
              <Avatar.UserAvatar/>
            </div>
          </div>
        </div>
      </Topbar>
      <div className="container-content" data-class="bs">
        {props.children}
      </div>
    </div>
  )
}