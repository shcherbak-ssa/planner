'use strict';

/** imports */
import UserStorage from '../user/user-storage';

/** User */
class User implements UserStorage {
  updateName(name: string): void {}
  updateUsername(username: string): void {}
  updateEmail(email: string): void {}
}

/** export */
export default User;