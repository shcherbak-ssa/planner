'use strict';

/** imports */
import UserLocalStorage from '../user-local-storage';
import {AUTH_ERROR_NAME} from './auth-error';
import {LoginUserData} from './user-data';
import {validateEmail, validatePassword} from './rules';

/** Login */
class Login {
  /** static methods */
  static async login(userData: LoginUserData, callback: Function) {}
}

/** export */
export default Login;