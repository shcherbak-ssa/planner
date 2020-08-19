'use strict';

/** imports */
import { RegistrationNetwork } from '../auth/network';
import { NewUserData } from '../auth/new-user-data';
import NetworkAPI from './api';

/** constants */
const USER_NETWORK_PATH: string = 'user';

/** auth network module */
export class RegistrationNetworkImpl implements RegistrationNetwork {
  async createAccount(user: NewUserData) {
    NetworkAPI.create(USER_NETWORK_PATH, user);
  }
}