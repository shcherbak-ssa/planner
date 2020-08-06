'use strict';

/** imports */
import {faUser, faCog, faSignOutAlt} from '@fortawesome/free-solid-svg-icons';
import {
  DROPDOWN_TYPE_PROFILE,
  DROPDOWN_TYPE_SETTINGS,
  DROPDOWN_TYPE_LOGOUT,
} from './constants';

/** dropdownItems */
const dropdownItems = [
  {
    type: DROPDOWN_TYPE_PROFILE,
    text: 'Profile',
    icon: faUser
  },
  {
    type: DROPDOWN_TYPE_SETTINGS,
    text: 'Settings',
    icon: faCog
  },
  {
    type: DROPDOWN_TYPE_LOGOUT,
    text: 'Log out',
    icon: faSignOutAlt
  }
];

/** export */
export default dropdownItems;