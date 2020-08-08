'use strict';

/** imports */
import Storage from '../storage';
import UserData from '../../user/data';
import UserStorage from '../../user/storage';
import UserStorageState from '../../user/storage-state';
import {
  updateName,
  updateUsername,
  updateEmail,
} from './actions';

/** User */
class User implements UserStorage, UserStorageState {
  updateName(name: string): void {
    Storage.doAction(updateName(name));
  }
  updateUsername(username: string): void {
    Storage.doAction(updateUsername(username));
  }
  updateEmail(email: string): void {
    Storage.doAction(updateEmail(email));
  }
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