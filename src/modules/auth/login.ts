'use strict';

/** imports */
import { AuthError } from './auth-errors';
import { IUserData } from './user-data';
import Validate from './validate';
import finishAuthMode from './finish-auth-mode';
import { LoginNetwork } from './network';
import { LoginNetworkImpl } from '../network/auth';

/** Login */
class Login {
  /** static methods */
  static async login(userData: IUserData, callback: Function) {
    try {
      const login: Login = new Login();
      await login.loginUser(userData);
    } catch (error) {
      await AuthError.parseError(error, callback);
    }
  }

  /** public methods */
  async loginUser(userData: IUserData) {
    await this.validateUserData(userData);
    await this.loginUserOnServer(userData);
    await finishAuthMode(userData);
  }

  /** private methods */
  private async validateUserData(userData: IUserData) {
    const validate: Validate = new Validate();
    await validate.validateEmail(userData);
    await validate.validatePassword(userData);
  }
  private async loginUserOnServer(userData: IUserData) {
    const email: string = userData.getEmail();
    const password: string = userData.getPassword();
    const network: LoginNetwork = new LoginNetworkImpl();
    await network.loginAccount(email, password);
  }
}

/** export */
export default Login;