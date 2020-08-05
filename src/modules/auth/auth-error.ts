'use strict';

/** constants */
const AUTH_ERROR_NAME: string = 'AuthError';

/** AuthError */
class AuthError extends Error {
  type: string;
  constructor(message: string, type: string) {
    super(message);
    this.type = type;
    this.name = AUTH_ERROR_NAME;
  }

  /** static methods */
  static async parseError(error: Error, callback: Function) {
    if (error.name === AUTH_ERROR_NAME) return callback(error);
    console.log(error);
    callback(error);
  }
}

/** export */
export default AuthError;