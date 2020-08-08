'use strict';

/** imports */
import EventEmitter from './emitter';
import UserDataUpdater from '../user/data-updater';
import UserDataSave from '../user/data-save';

/** constants */
const USER_EDIT_INIT: string = 'user-edit-init';
const USER_EDIT_SAVE: string = 'user-edit-save';
const USER_NAME_UPDATE: string = 'user-name-update';
const USER_NAME_SAVE: string = 'user-name-save';
const USER_USERNAME_UPDATE: string = 'user-username-update';
const USER_USERNAME_SAVE: string = 'user-username-save';
const USER_EMAIL_UPDATE: string = 'user-email-update';
const USER_EMAIL_SAVE: string = 'user-email-save';

/** init */
const userEventEmitter: EventEmitter = new EventEmitter();
userEventEmitter.on(USER_EDIT_INIT, userEditInitHandler);

function userEditInitHandler() {
  const userDataUpdater: UserDataUpdater = new UserDataUpdater();
  const userDataSave: UserDataSave = new UserDataSave();

  const updateName = userDataUpdater.updateName.bind(userDataUpdater);
  const updateUsername = userDataUpdater.updateUsername.bind(userDataUpdater);
  const updateEmail = userDataUpdater.updateEmail.bind(userDataUpdater);
  const saveName = userDataSave.saveName.bind(userDataSave);
  const saveUsername = userDataSave.saveUsername.bind(userDataSave);
  const saveEmail = userDataSave.saveEmail.bind(userDataSave);
  
  userEventEmitter
    .on(USER_NAME_UPDATE, updateName)
    .on(USER_NAME_SAVE, saveName)
    .on(USER_USERNAME_UPDATE, updateUsername)
    .on(USER_USERNAME_SAVE, saveUsername)
    .on(USER_EMAIL_UPDATE, updateEmail)
    .on(USER_EMAIL_SAVE, saveEmail)
    .on(USER_EDIT_SAVE, userEditSaveHandler);

  function userEditSaveHandler() {
    userEventEmitter
      .off(USER_NAME_UPDATE, updateName)
      .off(USER_NAME_SAVE, saveName)
      .off(USER_USERNAME_UPDATE, updateUsername)
      .off(USER_USERNAME_SAVE, saveUsername)
      .off(USER_EMAIL_UPDATE, updateEmail)
      .off(USER_EMAIL_SAVE, saveEmail)
      .off(USER_EDIT_SAVE, userEditSaveHandler);
  }
}

/** export */
export {
  userEventEmitter,
  USER_EDIT_INIT,
  USER_EDIT_SAVE,
  USER_NAME_UPDATE,
  USER_NAME_SAVE,
  USER_USERNAME_UPDATE,
  USER_USERNAME_SAVE,
  USER_EMAIL_UPDATE,
  USER_EMAIL_SAVE,
}