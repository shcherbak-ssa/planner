'use strict';

/** imports */
import UserLocalStorage from '../user-local-storage';
import {AUTH_ERROR_NAME} from './auth-error';
import reloadToOrigin from './reload';
import {RegistrationUserData} from './user-data';

import {
  validateFullname,
  validateEmail,
  validatePassword,
  validatePrivacyPolicy,
} from './rules';

/** CreateAccount */
class CreateAccount {
  /** static methods */
  static async create(userData: RegistrationUserData, callback: Function) {
    const createAccount: CreateAccount = new CreateAccount();
    try {
      await createAccount.createAccount(userData);
    } catch (error) {
      await createAccount.parseError(error, callback);
    }
  }

  /** public methods */
  async createAccount(userData: RegistrationUserData) {
    await this.validateUserData(userData);
    // @todo: server request logic
    
    await this.saveUserToLocalStorage(userData);
    reloadToOrigin();
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
  private async saveUserToLocalStorage(userData: RegistrationUserData) {
    const email: string = userData.getEmail();
    const password: string = userData.getPassword();
    UserLocalStorage.saveUserData(email, password);
  }
}

/** export */
export default CreateAccount;