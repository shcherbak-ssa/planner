'use strict';

/** imports */
import {faUser, faCog, faSignOutAlt} from '@fortawesome/free-solid-svg-icons';

/** dropdownItems */
const dropdownItems = [
  {
    type: 'profile',
    text: 'Profile',
    icon: faUser
  },
  {
    type: 'settings',
    text: 'Settings',
    icon: faCog
  },
  {
    type: 'log-out',
    text: 'Log out',
    icon: faSignOutAlt
  }
];

/** export */
export default dropdownItems;