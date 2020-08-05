'use strict';

/** imports */
import AuthError from './auth-error';
import {IUserData} from './user-data';
import Validate from './validate';
import finishAuthMode from './finish-auth-mode';

/** CreateAccount */
class CreateAccount {
  /** static methods */
  static async create(userData: IUserData, callback: Function) {
    try {
      const createAccount: CreateAccount = new CreateAccount();
      await createAccount.createAccount(userData);
    } catch (error) {
      await AuthError.parseError(error, callback);
    }
  }

  /** public methods */
  async createAccount(userData: IUserData) {
    await this.validateUserData(userData);
    // @todo: server request logic
    await finishAuthMode(userData);
  }

  /** private methods */
  private async validateUserData(userData: IUserData) {
    const validate: Validate = new Validate();
    await validate.validateFullname(userData);
    await validate.validateEmail(userData);
    await validate.validatePassword(userData);
    await validate.validatePrivacyPolicy(userData)
  }
}

/** export */
export default CreateAccount;