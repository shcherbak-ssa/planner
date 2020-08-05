'use strict';

/** constants */
const USER_DATA_STORAGE_KEY: string = 'user';

/** UserLocalStorage */
const UserLocalStorage = {
  isUserExist() {
    return !!getUserDataItem();
  },
  getUserData() {
    return getUserDataItem();
  },
  saveUserData(email: string, password: string) {
    const userData: string = transformToJSON(email, password);
    localStorage.setItem(USER_DATA_STORAGE_KEY, userData);
  }
};

/** src */
function getUserDataItem() {
  return localStorage.getItem(USER_DATA_STORAGE_KEY);
}
function transformToJSON(email: string, password: string) {
  return JSON.stringify({email, password});
}

/** export */
export default UserLocalStorage;