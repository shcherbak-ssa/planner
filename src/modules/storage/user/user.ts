'use strict';

/** imports */
import Storage from '../storage';
import UserStorage from '../../user/storage';
import {
  updateName,
  updateUsername,
  updateEmail,
} from './actions';

/** User */
class User implements UserStorage {
  updateName(name: string): void {
    Storage.doAction(updateName(name));
  }
  updateUsername(username: string): void {
    Storage.doAction(updateUsername(username));
  }
  updateEmail(email: string): void {
    Storage.doAction(updateEmail(email));
  }
}

/** export */
export default User;