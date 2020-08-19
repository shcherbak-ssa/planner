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
}

/** LoginError */
export class LoginError extends Error {
  constructor(message: string) {
    super(message);
    this.name = LOGIN_ERROR_NAME
  }
}

/** parseError */
export async function parseError(error: Error, callback: Function) {
  switch(error.name) {
    case AUTH_ERROR_NAME: return callback(error);
    case LOGIN_ERROR_NAME: return callback(error.message);
    default: console.log(error);
  }
}