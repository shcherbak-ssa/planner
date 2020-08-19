'use strict';

/** constants */
const AUTH_ERROR_NAME: string = 'AuthError';
const LOGIN_ERROR_NAME: string = 'LoginError';

/** AuthError */
export class AuthError extends Error {
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
    callback();
  }
}

/** LoginError */
export class LoginError extends Error {
  constructor(message: string) {
    super(message);
    this.name = LOGIN_ERROR_NAME
  }

  /** static methods */
  static async parseError(error: Error, callback: Function) {
    if (error.name === LOGIN_ERROR_NAME) return callback(error.message);
    console.log(error);
  }
}