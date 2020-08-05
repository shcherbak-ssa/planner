'use strict';

/** imports */
import UserLocalStorage from '../user-local-storage';
import {IUserData} from './user-data';

/** saveUserToLocalStorage */
async function saveUserToLocalStorage(userData: IUserData) {
  const email: string = userData.getEmail();
  const password: string = userData.getPassword();
  UserLocalStorage.saveUserData(email, password);
}

/** export */
export default saveUserToLocalStorage;