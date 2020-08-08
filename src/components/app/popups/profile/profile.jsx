'use strict';

/** imports */
import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import StorageService from '@service/storage';
import {
  userEventEmitter,
  USER_EDIT_INIT,
  USER_EDIT_SAVE,
  USER_NAME_UPDATE,
  USER_NAME_SAVE,
  USER_USERNAME_UPDATE,
  USER_USERNAME_SAVE,
  USER_EMAIL_UPDATE,
  USER_EMAIL_SAVE,
} from '@module/events/user';

// assets
import {faEdit, faSave} from '@fortawesome/free-solid-svg-icons';
import './profile.scss';

// components
import Button from '@lib/button';
import Form from '@lib/form';

/** Profile component */
export default function Profile(props) {
  /** states */
  const {name, username, email} = useSelector(StorageService.user());
  const [isEditMode, setIsEditMode] = useState(false);
  const [buttonIcon, setButtonIcon] = useState(faEdit);

  /** data */
  const inputNameProps = {
    readOnly: !isEditMode,
    value: name,
    error: '',
    placeholder: 'Your name',
    changeHandler: ({target: {value}}) => {
      userEventEmitter.emit(USER_NAME_UPDATE, value);
    },
    blurHandler: ({target: {value}}) => {
      userEventEmitter.emit(USER_NAME_SAVE, value);
    } 
  };
  const inputUsernameProps = {
    readOnly: !isEditMode,
    value: username,
    error: '',
    placeholder: 'Your username',
    changeHandler: ({target: {value}}) => {
      userEventEmitter.emit(USER_USERNAME_UPDATE, value);
    },
    blurHandler: ({target: {value}}) => {
      userEventEmitter.emit(USER_USERNAME_SAVE, value);
    } 
  };
  const inputEmailProps = {
    readOnly: !isEditMode,
    value: email,
    error: '',
    placeholder: 'Your e-mail',
    changeHandler: ({target: {value}}) => {
      userEventEmitter.emit(USER_EMAIL_UPDATE, value);
    },
    blurHandler: ({target: {value}}) => {
      userEventEmitter.emit(USER_EMAIL_SAVE, value);
    } 
  };
  const buttonProps = {
    icon: buttonIcon,
    clickHandler: () => {
      if (isEditMode) {
        setButtonIcon(faEdit);
        setIsEditMode(false);
        userEventEmitter.emit(USER_EDIT_SAVE);
      } else {
        setButtonIcon(faSave);
        setIsEditMode(true);
        userEventEmitter.emit(USER_EDIT_INIT);
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