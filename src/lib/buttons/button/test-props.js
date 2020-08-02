'use strict';

/** imports */
import React from 'react';
import Icon from '../../icons/icon';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

/** test props */
const testProps = {
  color: 'flat',
  isCircle: false,
  label: 'label',
  icon: <Icon icon={faPlus}/>,
  clickHandler: () => {
    console.log('buttonClickHandler');
  }
};

/** exports */
export default testProps;