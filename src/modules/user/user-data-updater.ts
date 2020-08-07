'use strict';

/** imports */
import UserStorage from './user-storage';
import Storage from '../storage/user';

/** UserDataUpdater */
class UserDataUpdater {
  private storage: UserStorage;
  constructor() {
    this.storage = new Storage();
  }

  /** public methods */
  updateName(name: string) {}
  updateUsername(username: string) {}
  updateEmail(email: string) {}
}

/** exports */
export default UserDataUpdater;