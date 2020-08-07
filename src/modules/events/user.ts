'use strict';

/** imports */
import EventEmitter from './emitter';
import UserDataUpdater from '../user/user-data-updater';
import UserSave from '../user/user-save';

/** constants */
const USER_EDIT_INIT: string = 'user-edit-init';
const USER_NAME_UPDATE: string = 'user-name-update';
const USER_USERNAME_UPDATE: string = 'user-username-update';
const USER_EMAIL_UPDATE: string = 'user-email-update';
const USER_UPDATED_DATA_SAVE: string = 'user-updated-data-save';

/** init */
const userEventEmitter: EventEmitter = new EventEmitter();
userEventEmitter.on(USER_EDIT_INIT, userEditInitHandler);

function userEditInitHandler() {
  UserSave.saveCurrentState();
  const userDataUpdater: UserDataUpdater = new UserDataUpdater();
  userEventEmitter
    .on(USER_NAME_UPDATE, userDataUpdater.updateName)
    .on(USER_USERNAME_UPDATE, userDataUpdater.updateUsername)
    .on(USER_EMAIL_UPDATE, userDataUpdater.updateEmail)
    .on(USER_UPDATED_DATA_SAVE, userUpdatedDataSave);

  function userUpdatedDataSave() {
    UserSave.saveUpdatedDataOnServer();
    userEventEmitter
      .off(USER_NAME_UPDATE, userDataUpdater.updateName)
      .off(USER_USERNAME_UPDATE, userDataUpdater.updateUsername)
      .off(USER_EMAIL_UPDATE, userDataUpdater.updateEmail)
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