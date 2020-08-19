'use strict';

/** imports */
import { RegistrationNetwork, LoginNetwork } from '../auth/network';
import { NewUserData } from '../auth/new-user-data';
import NetworkAPI from './api';
import { LoginError } from '../auth/auth-error';

/** constants */
const USER_NETWORK_PATH: string = 'user';
const LOGIN_ERROR_MESSAGE: string = 'Invalid email or password';

/** auth network module */
export class RegistrationNetworkImpl implements RegistrationNetwork {
  async createAccount(user: NewUserData) {
    await NetworkAPI.create(USER_NETWORK_PATH, user);
  }
}
export class LoginNetworkImpl implements LoginNetwork {
  /** public methods */
  async loginAccount(email: string, password: string) {
    const user: NewUserData = await NetworkAPI.get(USER_NETWORK_PATH);
    await this.checkUser(user, email, password);
  }

  /** private method */
  private async checkUser(user: NewUserData, email: string, password: string) {
    if (email !== user.email || password !== user.password) {
      throw new LoginError(LOGIN_ERROR_MESSAGE);
    }
  }
}