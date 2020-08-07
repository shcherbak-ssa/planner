'use strict';

/** imports */
import UserData from './data';

/** UserStorageState */
interface UserStorageState {
  getCurrentStorageState(): UserData;
}

/** export */
export default UserStorageState;