'use strict';

/** imports */
import React, {useState} from 'react';
import {useLocation} from 'react-router-dom';
import {faBars} from '@fortawesome/free-solid-svg-icons';
import DropdownService from '@service/dropdown';
import {
  DROPDOWN_TYPE_PROFILE,
  DROPDOWN_TYPE_SETTINGS,
  DROPDOWN_TYPE_LOGOUT,
} from './constants';

// assets
import dropdownItems from './dropdown-items';
import './page.scss';

// components
import FrameTitle from '../frame-title';
import Topbar from '@lib/topbar';
import Icons from '@lib/icons';
import Avatar from '@lib/avatar';
import Dropdown from '@lib/dropdown';

/** Page component */
export default function Page(props) {
  /** states */
  const location = useLocation();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  /** data */
  const dropdownProps = {
    isOpen: isDropdownOpen,
    items: dropdownItems,
    clickHandler: dropdownClickHandler
  };

  /** methods */
  function menuClickHandler() {
    console.log('menu-click');
  }
  function avatarClickHandler({target}) {
    const currentIsDropdownOpen = !isDropdownOpen;
    setIsDropdownOpen(currentIsDropdownOpen);
    if (currentIsDropdownOpen) saveDropdownToService(target);
  }
  function saveDropdownToService(target) {
    DropdownService.saveActiveDropdown(target, closeDropdown);
  }
  function dropdownClickHandler(type) {
    //closeDropdown();
    switch(type) {
      case DROPDOWN_TYPE_PROFILE: return;
      case DROPDOWN_TYPE_SETTINGS: return;
      case DROPDOWN_TYPE_LOGOUT: return;
    }
  }
  function closeDropdown() {
    setIsDropdownOpen(false);
  }

  /** render */
  return (
    <div className="page" data-class="full">
      <Topbar>
        <div className="page-topbar" data-class="bs full fsb">
          <div className="page-topbar-left" data-class="fac">
            <Icons.ClickIcon icon={faBars} clickHandler={menuClickHandler}/>
            <FrameTitle/>
          </div>
          <div className="page-topbar-right">
            <div className="page-user">
              <Avatar.UserAvatar clickHandler={avatarClickHandler}/>
              <Dropdown.Default {...dropdownProps}/>
            </div>
          </div>
        </div>
      </Topbar>
      <div className="page-content" data-class="bs">
        {props.children}
      </div>
    </div>
  )
}