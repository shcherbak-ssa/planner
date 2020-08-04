'use strict';

/** imports */
import {UserData, UserDataCreator} from './user-data';
import authGlobal from '../global/auth';

/** CreateAccount */
class CreateAccount {
  /** static methods */
  static getUserDataCreator(callback: Function) {
    const currentAuthMode: string = authGlobal.getCurrentAuthMode();
    const userDataCreator: UserDataCreator = new UserDataCreator(currentAuthMode);
    callback(userDataCreator);
  }
  static create(userData: UserData, callback: Function) {}
}

/** export */
export default CreateAccount;