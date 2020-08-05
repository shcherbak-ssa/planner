'use strict';

/** imports */
import AuthError from './auth-error';
import {IUserData} from './user-data';
import Validate from './validate';
import finishAuthMode from './finish-auth-mode';

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
    // @todo: server request logic
    await finishAuthMode(userData);
  }

  /** private methods */
  private async validateUserData(userData: IUserData) {
    const validate: Validate = new Validate();
    await validate.validateEmail(userData);
    await validate.validatePassword(userData);
  }
}

/** export */
export default Login;