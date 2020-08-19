'use strict';

/** imports */
import { RegistrationNetwork, LoginNetwork } from '../auth/network';
import { NewUserData } from '../auth/new-user-data';
import NetworkAPI from './api';

/** constants */
const USER_NETWORK_PATH: string = 'user';

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

  }

  /** private method */
  private checkUser(user: NewUserData, email: string, password: string) {
    
  }
}