'use strict';

/** imports */
import {IUserData} from './user-data';
import {
  validateFullname,
  validateEmail,
  validatePassword,
  validatePrivacyPolicy,
} from './rules';

/** Validate */
class Validate {
  /** public methods */
  async validateFullname(userData: IUserData) {
    const fullname: string = userData.getFullname();
    await validateFullname(fullname);
  }
  async validateEmail(userData: IUserData) {
    const email: string = userData.getEmail();
    await validateEmail(email);
  }
  async validatePassword(userData: IUserData) {
    const password: string = userData.getPassword();
    await validatePassword(password);
  }
  async validatePrivacyPolicy(userData: IUserData) {
    const isPrivacyPoliceChecked: boolean = userData.getPrivacyPolicy();
    await validatePrivacyPolicy(isPrivacyPoliceChecked);
  }
}

/** export */
export default Validate;