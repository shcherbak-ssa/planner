'use strict';

/** imports */
import UserData from '../user/user-data';
import UserStorage from '../user/user-storage';
import UserStorageState from '../user/user-storage-state';

/** User */
class User implements UserStorage {
  updateName(name: string): void {}
  updateUsername(username: string): void {}
  updateEmail(email: string): void {}
}

/** UserState */
class UserState implements UserStorageState {
  getCurrentStorageState(): UserData {}
}

/** Storage */
const Storage = {
  User,
  UserState
}

/** export */
export default Storage;