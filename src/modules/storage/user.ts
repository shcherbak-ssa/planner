'use strict';

/** imports */
import UserStorage from '../user/user-storage';

/** User */
class User implements UserStorage {
  updateName(name: string) {}
  updateUsername(username: string) {}
  updateEmail(email: string) {}
}

/** export */
export default User;