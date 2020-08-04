'use strict';

/** imports */
import {checkEmail} from './rules';

/** EntryEmail */
class EntryEmail {
  /** public methods */
  async check(email: string) {
    await checkEmail(email);
  }

  /** private methods */
  
}

/** export */
export default EntryEmail;