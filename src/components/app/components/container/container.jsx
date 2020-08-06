'use strict';

/** imports */
import React, {useState} from 'react';
import {faHamburger} from '@fortawesome/free-solid-svg-icons';

// assets
import './container.scss';

// components
import Topbar from '@lib/topbar';
import Icons from '@lib/icons';
import Avatar from '@lib/avatar';
import Dropdown from '@lib/dropdown';

/** Container component */
export default function Container(props) {
  /** states */
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  /** methods */
  function avatarClickHandler() {
    console.log('avata-click')
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
              <Avatar.UserAvatar clickHandler={avatarClickHandler}/>
              <Dropdown.Default isOpen={isDropdownOpen}/>
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