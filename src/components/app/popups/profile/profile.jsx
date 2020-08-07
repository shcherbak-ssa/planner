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
    changeHandler: (e) => {}
  };
  const inputUsernameProps = {
    readOnly: !isEditMode,
    value: '',
    error: '',
    placeholder: 'Your username',
    changeHandler: (e) => {}
  };
  const inputEmailProps = {
    readOnly: !isEditMode,
    value: '',
    error: '',
    placeholder: 'Your e-mail',
    changeHandler: (e) => {}
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
    <div className="profile" data-class="bs">
      <Button.Circle {...buttonProps}/>
      <div className="profile-container">
        <Form.Input {...inputNameProps}/>
        <Form.Input {...inputUsernameProps}/>
        <Form.Input {...inputEmailProps}/>
      </div>
    </div>
  )
}