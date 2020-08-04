'use strict';

/** constants */
const CONFIRM_CODE_LENGTH: number = 6;

const EMAIL_REGEXP: RegExp = /\S+@\S+\.\S+/;

// messages
const INVALID_EMAIL_MESSAGE: string = 'Invalid e-mail';
const INVALID_CONFIRM_CODE: string = 'Invalid confirmation code';

/** check email */
async function validateEmail(email: string) {
  if (!EMAIL_REGEXP.test(email)) throw new Error(INVALID_EMAIL_MESSAGE);
}

/** export */
export {
  validateEmail,
  CONFIRM_CODE_LENGTH,
  INVALID_CONFIRM_CODE,
};