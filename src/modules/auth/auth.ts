'use strict';

/** imports */
import EntryEmail from './entry-email';

/** Auth module */
class Auth {
  /** public methods */
  async checkEntryEmail(email: string, callback: Function) {
    console.log(email);
    try {
      const entryEmail: EntryEmail = new EntryEmail();
      console.log(email);
      await entryEmail.check(email);
      callback();
    } catch (error) {
      callback(error.message);
    }
  }
  async checkConfirmCode(code: string, callback: Function) {}
  async createUser(callback: Function) {}
}

/** export */
export default Auth;