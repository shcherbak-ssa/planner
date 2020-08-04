'use strict';

/** imports */
import {validateEmail} from './rules';

/** EntryEmail */
class EntryEmail {
  /** static methods */
  static async validate(email: string, callback: Function) {
    try {
      const entryEmail: EntryEmail = new EntryEmail();
      await entryEmail.validate(email);
      await entryEmail.checkForUniqueness(email);
      callback();
    } catch (error) {
      callback(error.message);
    }
  }
  static async sendConfirmCodeToEmail(email: string) {
    // @todo: send on server
  }
  
  /** public methods */
  async validate(email: string) {
    await validateEmail(email);
  }
  async checkForUniqueness(email: string) {
    // @todo: send on server
  }

  /** private methods */
}

/** export */
export default EntryEmail;