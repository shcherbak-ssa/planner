'use strict';

/** constants */
const EMAIL_REGEXP: RegExp = /\S+@\S+\.\S+/;
const INVALID_EMAIL_MESSAGE: string = 'Invalid e-mail';

/** check email */
async function checkEmail(email: string) {
  if (!EMAIL_REGEXP.test(email)) throw new Error(INVALID_EMAIL_MESSAGE);
}

/** export */
export {
  checkEmail
};