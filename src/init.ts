'use strict';

/** imports */
import UserLocalStorageService from './services/user-local-storage';

/** init */
window.onbeforeunload = () => {
  document.cookie = `session=${JSON.stringify({active: false})}`;
}

/** initPlanner */
async function initPlanner() {
  let isUserLogged = false;
  if (UserLocalStorageService.isUserExist()) {
    isUserLogged = true;
  }
  return isUserLogged;
}

/** export */
export default initPlanner;