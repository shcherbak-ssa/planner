'use strict';

/** imports */
import {CONFIRM_CODE_LENGTH, INVALID_CONFIRM_CODE} from './rules';

/** constants */
const frontendTestConfirmCode = '000000';

/** ConfirmCode */
class ConfirmCode {
  /** static methods */
  static getConfirmCodeLength(callback: Function) {
    callback(CONFIRM_CODE_LENGTH);
  }
  static async validate(code: string, callback: Function) {
    // @todo: request on server
    if (code === frontendTestConfirmCode) return callback();
    callback(INVALID_CONFIRM_CODE);
  }
}

/** export */
export default ConfirmCode;