'use strict';

/** imports */
import {AuthError} from './auth-error';

/** constants */
const CONFIRM_CODE_LENGTH: number = 6;
const PASSWORD_MIN_LENGTH: number = 8;
const EMAIL_REGEXP: RegExp = /\S+@\S+\.\S+/;

// messages
const FIELD_CANNOT_BE_EMPTY: string = 'Field cannot be empty';
const INVALID_EMAIL_MESSAGE: string = 'Invalid e-mail';
const INVALID_CONFIRM_CODE: string = 'Invalid confirmation code';
const INVALID_PASSWORD: string = `Password must be over ${PASSWORD_MIN_LENGTH} symbols`;

/** rules */

// validate fullname
async function validateFullname(fullname: string) {
  if (isEmpty(fullname)) {
    throw new AuthError(FIELD_CANNOT_BE_EMPTY, 'fullname');
  }
}

// validate email
async function validateEmail(email: string) {
  if (isEmpty(email)) {
    throw new AuthError(FIELD_CANNOT_BE_EMPTY, 'email');
  }
  if (!EMAIL_REGEXP.test(email)) {
    throw new Error(INVALID_EMAIL_MESSAGE);
  }
}

// validate password
async function validatePassword(password: string) {
  if (isEmpty(password)) {
    throw new AuthError(FIELD_CANNOT_BE_EMPTY, 'password');
  }
  if (password.length < PASSWORD_MIN_LENGTH) {
    throw new AuthError(INVALID_PASSWORD, 'password');
  }
}

// validate privacy policy
async function validatePrivacyPolicy(isPrivacyPolicyChecked: boolean) {
  if (!isPrivacyPolicyChecked) {
    throw new AuthError('', 'privacy');
  }
}

/** src function */
function isEmpty(value: string) {
  return value === '';
}

/** export */
export {
  validateFullname,
  validateEmail,
  validatePassword,
  validatePrivacyPolicy,
  CONFIRM_CODE_LENGTH,
  INVALID_CONFIRM_CODE,
};