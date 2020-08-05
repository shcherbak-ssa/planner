'use strict';

/** imports */
import authGlobal from '../global/auth';
import {UserDataCreator} from './user-data';

/** getUserDataCreator */
function getUserDataCreator(callback: Function) {
  const currentAuthMode: string = authGlobal.getCurrentAuthMode();
  const userDataCreator: UserDataCreator = new UserDataCreator(currentAuthMode);
  callback(userDataCreator);
}

/** export */
export default getUserDataCreator;