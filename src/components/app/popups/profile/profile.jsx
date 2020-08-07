'use strict';

/** imports */
import React, {useState} from 'react';
import {faEdit, faSave} from '@fortawesome/free-solid-svg-icons';
import './profile.scss';

// components
import Button from '@lib/button';
import Form from '@lib/form';

/** Profile component */
export default function Profile(props) {
  /** states */
  const [isEditMode, setIsEditMode] = useState(false);
  const [buttonIcon, setButtonIcon] = useState(faEdit);

  /** data */
  const inputNameProps = {
    readOnly: !isEditMode,
    value: '',
    error: '',
    placeholder: 'Your name',
    changeHandler: () => {}
  };
  const inputUsernameProps = {
    readOnly: !isEditMode,
    value: '',
    error: '',
    placeholder: 'Your username',
    changeHandler: () => {}
  };
  const inputEmailProps = {
    readOnly: !isEditMode,
    value: '',
    error: '',
    placeholder: 'Your e-mail',
    changeHandler: () => {}
  };
  const buttonProps = {
    icon: buttonIcon,
    clickHandler: () => {
      if (isEditMode) {
        setButtonIcon(faEdit);
        setIsEditMode(false)
      } else {
        setButtonIcon(faSave);
        setIsEditMode(true);
      }
    }
  }

  /** render */
  return (
    <div className="profile">
      <Button.Circle {...buttonProps}/>
    </div>
  )
}