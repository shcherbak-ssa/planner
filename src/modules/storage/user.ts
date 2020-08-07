'use strict';

/** imports */
import UserData from '../user/user-data';
import UserStorage from '../user/user-storage';
import UserStorageState from '../user/user-storage-state';

/** User */
class User implements UserStorage, UserStorageState {
  updateName(name: string): void {}
  updateUsername(username: string): void {}
  updateEmail(email: string): void {}
  getCurrentStorageState(): UserData {}
}

/** export */
export default User;