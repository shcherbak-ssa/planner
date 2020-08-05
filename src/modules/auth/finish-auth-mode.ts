'use strict';

/** imports */
import {IUserData} from './user-data';
import reloadToOrigin from './reload-to-origin';
import saveUserToLocalStorage from './save-user-to-local-storage';

/** finishAuthMode */
async function finishAuthMode(userData: IUserData) {
  await saveUserToLocalStorage(userData);
  reloadToOrigin();
}

/** export */
export default finishAuthMode;