'use strict';

/** NewUserData */
export type NewUserData = {
  id: string,
  fullname: string,
  username: string,
  email: string,
  password: string,
}

/** NewUserDataCreator */
export class NewUserDataCreator {
  private data: NewUserData;
  constructor() {
    this.data = {
      id: '',
      fullname: '',
      username: '',
      email: '',
      password: '',
    }
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
  getData(): NewUserData {
    return this.data
  }
}