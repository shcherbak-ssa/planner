'use strict';

/** imports */
import UserStorage from './storage';
import Storage from '../storage/user';

/** UserDataUpdater */
class UserDataUpdater {
  private storage: UserStorage;
  constructor() {
    this.storage = new Storage();
  }

  /** public methods */
  updateName(name: string) {
    this.storage.updateName(name);
  }
  updateUsername(username: string) {
    this.storage.updateUsername(username);
  }
  updateEmail(email: string) {
    this.storage.updateEmail(email);
  }
}

/** exports */
export default UserDataUpdater;