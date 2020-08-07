'use strict';

/** imports */
import UserLocalStorageService from '../../services/user-local-storage';
import {IUserData} from './user-data';

/** saveUserToLocalStorage */
async function saveUserToLocalStorage(userData: IUserData) {
  const email: string = userData.getEmail();
  const password: string = userData.getPassword();
  UserLocalStorageService.saveUserData(email, password);
}

/** export */
export default saveUserToLocalStorage;