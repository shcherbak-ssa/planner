'use strict';

/** imports */
import UserLocalStorage from './modules/user-local-storage';

/** init */
window.onbeforeunload = () => {
  document.cookie = `session=${JSON.stringify({active: false})}`;
}

/** initPlanner */
async function initPlanner() {
  let isUserLogged = false;
  if (UserLocalStorage.isUserExist()) {
    isUserLogged = true;
  }
  return isUserLogged;
}

/** export */
export default initPlanner;