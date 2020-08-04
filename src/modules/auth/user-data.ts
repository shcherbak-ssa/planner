'use strict';

/** UserData */
class UserDataType {
  fullname: string;
  email: string;
  password: string;
  isPrivacyPolicyChecked: boolean;
  authMode: string;
  constructor(authMode: string) {
    this.fullname = '';
    this.email = '';
    this.password = '';
    this.isPrivacyPolicyChecked = false;
    this.authMode = authMode;
  }
}
class UserDataCreator {
  private data: UserDataType;
  constructor(authMode: string) {
    this.data = new UserDataType(authMode);
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
}
class UserData {
  private data: UserDataType;
  constructor(data: UserDataType) {
    this.data = data;
  }
}

/** export */
export {
  UserDataCreator,
  UserData
}