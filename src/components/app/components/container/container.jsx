'use strict';

/** imports */
import React, {useState} from 'react';
import {faBars} from '@fortawesome/free-solid-svg-icons';
import DropdownService from '@service/dropdown';

// assets
import dropdownItems from './dropdown-items';
import './container.scss';

// components
import FrameTitle from '../frame-title';
import Topbar from '@lib/topbar';
import Icons from '@lib/icons';
import Avatar from '@lib/avatar';
import Dropdown from '@lib/dropdown';

/** Container component */
export default function Container(props) {
  /** states */
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
    closeDropdown();
    console.log(type);
  }
  function closeDropdown() {
    setIsDropdownOpen(false);
  }

  /** render */
  return (
    <div className="container" data-class="full">
      <Topbar>
        <div className="container-topbar" data-class="bs full fsb">
          <div className="container-topbar-left" data-class="fac">
            <Icons.ClickIcon icon={faBars} clickHandler={menuClickHandler}/>
            <FrameTitle/>
          </div>
          <div className="container-topbar-right">
            <div className="container-user">
              <Avatar.UserAvatar clickHandler={avatarClickHandler}/>
              <Dropdown.Default {...dropdownProps}/>
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