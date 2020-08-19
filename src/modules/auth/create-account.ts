'use strict';

/** imports */
import { parseError } from './errors';
import { IUserData } from './user-data';
import Validate from './validate';
import finishAuthMode from './finish-auth-mode';
import { NewUserData, NewUserDataCreator } from './new-user-data';
import { CreateAccountNetwork } from './network';
import { CreateAccountNetworkImpl } from '../network/auth';

/** CreateAccount */
class CreateAccount {
  /** static methods */
  static async create(userData: IUserData, callback: Function) {
    try {
      const createAccount: CreateAccount = new CreateAccount();
      await createAccount.createAccount(userData);
    } catch (error) {
      await parseError(error, callback);
    }
  }

  /** public methods */
  async createAccount(userData: IUserData) {
    await this.validateUserData(userData);
    await this.createUserOnServer(userData);
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
  private async createUserOnServer(userData: IUserData) {
    const newUserData: NewUserData = await this.createNewUserData(userData);
    const network: CreateAccountNetwork = new CreateAccountNetworkImpl();
    await network.createAccount(newUserData);
  }
  private async createNewUserData(userData: IUserData) {
    const newUserDataCreator: NewUserDataCreator = new NewUserDataCreator();
    const fullname: string = userData.getFullname();
    const email: string = userData.getEmail();
    const password: string = userData.getPassword();
    newUserDataCreator.setFullname(fullname);
    newUserDataCreator.setEmail(email);
    newUserDataCreator.setPassword(password);
    return newUserDataCreator.getData();
  }
}

/** export */
export default CreateAccount;