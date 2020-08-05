'use strict';

/** UserData */

// user-data-type
class UserDataType {
  fullname: string;
  email: string;
  password: string;
  isPrivacyPolicyChecked: boolean;
  constructor() {
    this.fullname = '';
    this.email = '';
    this.password = '';
    this.isPrivacyPolicyChecked = false;
  }
}

// user-data-creator
class UserDataCreator {
  private data: UserDataType;
  constructor() {
    this.data = new UserDataType();
  }

  /** public methods */
  setFullname(fullname: string) {
    this.data.fullname = fullname;
  }
  setEmail(email: string) {
    this.data.email = email;
  }
  setPassword(password: string) {
    this.data.password = password;
  }
  setPrivacyPolicy(isPrivacyPolicyChecked: boolean) {
    this.data.isPrivacyPolicyChecked = isPrivacyPolicyChecked;
  }
  createUserData(): UserData {
    return new UserData(this.data);
  }
}

// user-data
interface IUserData {
  getFullname(): string;
  getEmail(): string;
  getPassword(): string;
  getPrivacyPolicy(): boolean;
}

class UserData implements IUserData {
  data: UserDataType;
  constructor(data: UserDataType) {
    this.data = data;
  }

  /** public methods */
  getFullname(): string {
    return this.data.fullname;
  }
  getEmail(): string {
    return this.data.email;
  }
  getPassword(): string {
    return this.data.password;
  }
  getPrivacyPolicy(): boolean {
    return this.data.isPrivacyPolicyChecked;
  }
}

/** export */
export {
  UserDataCreator,
  IUserData
}