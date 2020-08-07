'use strict';

/** imports */
import UserData from './user-data';
import UserStorageState from './user-storage-state';
import Storage from '../storage/user';

/** init */
const userStorageState: UserStorageState = new Storage.UserState();

/** UserSave */
class UserSave {
  static lastState: UserData;

  /** static methods */
  static saveCurrentState() {
    UserSave.lastState = userStorageState.getCurrentStorageState();
  }
  static async saveUpdatedDataOnServer() {
    const currentState = userStorageState.getCurrentStorageState();
  }
}

/** export */
export default UserSave;