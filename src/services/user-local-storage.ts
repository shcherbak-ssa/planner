'use strict';

/** imports */
import {transformToJSON} from '../tools/json';

/** constants */
const USER_DATA_STORAGE_KEY: string = 'user-local';

/** UserLocalStorageService */
const UserLocalStorageService = {
  isUserExist() {
    return !!getUserDataItem();
  },
  getUserData() {
    return getUserDataItem();
  },
  saveUserData(email: string, password: string) {
    const userData: string = transformToJSON({email, password});
    localStorage.setItem(USER_DATA_STORAGE_KEY, userData);
  }
};

/** src */
function getUserDataItem() {
  return localStorage.getItem(USER_DATA_STORAGE_KEY);
}

/** export */
export default UserLocalStorageService;