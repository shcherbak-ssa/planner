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
}

/** export */
export {
  AuthError,
  AUTH_ERROR_NAME,
}