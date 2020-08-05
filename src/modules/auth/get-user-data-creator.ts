'use strict';

/** imports */
import {UserDataCreator} from './user-data';

/** getUserDataCreator */
function getUserDataCreator(callback: Function) {
  const userDataCreator: UserDataCreator = new UserDataCreator();
  callback(userDataCreator);
}

/** export */
export default getUserDataCreator;