'use strict';

/** imports */
import authGlobal from '../global/auth';
import {RegistrationUserData, UserDataCreator} from './user-data';
import {AUTH_ERROR_NAME} from './auth-error';
import {
  validateFullname,
  validateEmail,
  validatePassword,
  validatePrivacyPolicy,
} from './rules';

/** CreateAccount */
class CreateAccount {
  /** static methods */
  static getUserDataCreator(callback: Function) {
    const currentAuthMode: string = authGlobal.getCurrentAuthMode();
    const userDataCreator: UserDataCreator = new UserDataCreator(currentAuthMode);
    callback(userDataCreator);
  }
  static async create(userData: RegistrationUserData, callback: Function) {
    const createAccount: CreateAccount = new CreateAccount();
    try {
      await createAccount.createAccount(userData, callback);
    } catch (error) {
      await createAccount.parseError(error, callback);
    }
  }

  /** public methods */
  async createAccount(userData: RegistrationUserData, callback: Function) {
    await this.validateUserData(userData);
    // @todo: server request logic
    callback();
  }
  async parseError(error: Error, callback: Function) {
    if (error.name === AUTH_ERROR_NAME) return callback(error);
    console.log(error);
    callback(error);
  }

  /** private methods */
  private async validateUserData(userData: RegistrationUserData) {
    const fullname: string = userData.getFullname();
    await validateFullname(fullname);

    const email: string = userData.getEmail();
    await validateEmail(email);

    const password: string = userData.getPassword();
    await validatePassword(password);

    const isPrivacyPoliceChecked: boolean = userData.getPrivacyPolicy();
    await validatePrivacyPolicy(isPrivacyPoliceChecked);
  }
}

/** export */
export default CreateAccount;