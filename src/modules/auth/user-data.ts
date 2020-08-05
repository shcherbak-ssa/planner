'use strict';

/** UserData */

// user-data-type
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

// user-data-creator
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
  createUserData(): UserData {
    return this.data.authMode === 'login'
      ? new LoginUserData(this.data)
      : new RegistrationUserData(this.data);
  }
}

// user-data
class UserData {
  data: UserDataType;
  constructor(data: UserDataType) {
    this.data = data;
  }

  /** public methods */
  getEmail(): string {
    return this.data.email;
  }
  getPassword(): string {
    return this.data.password;
  }
}
class RegistrationUserData extends UserData {
  constructor(data: UserDataType) {
    super(data);
  }

  /** public methods */
  getFullname(): string {
    return this.data.fullname;
  }
  getPrivacyPolicy(): boolean {
    return this.data.isPrivacyPolicyChecked;
  }
}
class LoginUserData extends UserData {
  constructor(data: UserDataType) {
    super(data);
  }
}

/** export */
export {
  UserDataCreator,
  RegistrationUserData,
  LoginUserData,
}