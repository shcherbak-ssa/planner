'use strict';

/** UserStorage */
interface UserStorage {
  updateName(name: string): void;
  updateUsername(username: string): void;
  updateEmail(email: string): void;
}

/** export */
export default UserStorage;