'use strict';

/** imports */
import EventEmitter from './emitter';
import UserDataUpdater from '../user/data-updater';
import UserSave from '../user/save';

/** constants */
const USER_EDIT_INIT: string = 'user-edit-init';
const USER_NAME_UPDATE: string = 'user-name-update';
const USER_USERNAME_UPDATE: string = 'user-username-update';
const USER_EMAIL_UPDATE: string = 'user-email-update';
const USER_UPDATED_DATA_SAVE: string = 'user-updated-data-save';

/** init */
const userEventEmitter: EventEmitter = new EventEmitter();
const userDataUpdater: UserDataUpdater = new UserDataUpdater();

const updateName = userDataUpdater.updateName.bind(userDataUpdater);
const updateUsername = userDataUpdater.updateUsername.bind(userDataUpdater);
const updateEmail = userDataUpdater.updateEmail.bind(userDataUpdater);

userEventEmitter.on(USER_EDIT_INIT, userEditInitHandler);

function userEditInitHandler() {
  // UserSave.saveCurrentState();
  userEventEmitter
    .on(USER_NAME_UPDATE, updateName)
    .on(USER_USERNAME_UPDATE, updateUsername)
    .on(USER_EMAIL_UPDATE, updateEmail)
    .on(USER_UPDATED_DATA_SAVE, userUpdatedDataSave);

  function userUpdatedDataSave() {
    // UserSave.saveUpdatedDataOnServer();
    userEventEmitter
      .off(USER_NAME_UPDATE, updateName)
      .off(USER_USERNAME_UPDATE, updateUsername)
      .off(USER_EMAIL_UPDATE, updateEmail)
      .off(USER_UPDATED_DATA_SAVE, userUpdatedDataSave);
  }
}

/** export */
export {
  userEventEmitter,
  USER_EDIT_INIT,
  USER_NAME_UPDATE,
  USER_USERNAME_UPDATE,
  USER_EMAIL_UPDATE,
  USER_UPDATED_DATA_SAVE,
}