'use strict';

/** imports */
import UserData from '../../user/data';
import UserStorage from '../../user/storage';
import UserStorageState from '../../user/storage-state';

/** User */
class User implements UserStorage, UserStorageState {
  updateName(name: string): void {}
  updateUsername(username: string): void {}
  updateEmail(email: string): void {}
  getCurrentStorageState(): UserData {
    return {
      name: '',
      username: '',
      email: ''
    }
  }
}

/** export */
export default User;