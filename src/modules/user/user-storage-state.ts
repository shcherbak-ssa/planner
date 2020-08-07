'use strict';

/** imports */
import UserData from './user-data';

/** UserStorageState */
interface UserStorageState {
  getCurrentStorageState(): UserData;
}

/** export */
export default UserStorageState;