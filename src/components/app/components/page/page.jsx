'use strict';

/** imports */
import React, {useState} from 'react';
import {faBars} from '@fortawesome/free-solid-svg-icons';
import DropdownService from '@service/dropdown';

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