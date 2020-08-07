'use strict';

/** imports */
import UserData from './data';
import UserStorageState from './storage-state';
import Storage from '../storage/user';

/** init */
const userStorageState: UserStorageState = new Storage();

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