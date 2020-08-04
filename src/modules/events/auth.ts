'use strict';

/** imports */
import EventEmitter from './emitter';
import Auth from '../auth';

/** constants */
const INIT_REGISTRATION_EVENTS: string = 'init-registration-events';
const INIT_LOGIN_EVENTS: string = 'init-login-events';

const CHECK_ENTRY_EMAIL: string = 'check-entry-email';
const CHECK_CONFIRM_CODE: string = 'check-confirm-code';
const CREATE_USER: string = 'create-user';

const INIT_ENTRY_EMAIL: string = 'init-entry-email';
const INIT_CONFIRM_CODE: string = 'init-confirm-code';
const INIT_FIHISH: string = 'init-finish';

/** init */
const authEventEmitter: EventEmitter = new EventEmitter();
const auth: Auth = new Auth();

authEventEmitter
  .on(INIT_REGISTRATION_EVENTS, initRegistrationEvents)
  .on(INIT_LOGIN_EVENTS, initLoginEvents);

// registration
function initRegistrationEvents() {
  removeLoginEvents();
  initEntryEmailEvents();
}
function removeRegistrationEvents() {
  removeEntryEmailEvents();
  removeConfirmCodeEvents();
  removeFinishEvents();
}

// registration/entry-email
function initEntryEmailEvents() {
  removeConfirmCodeEvents();
  removeFinishEvents();

  authEventEmitter
    .on(CHECK_ENTRY_EMAIL, auth.checkEntryEmail)
    .on(INIT_CONFIRM_CODE, initConfirmCodeEvents)
    .off(INIT_ENTRY_EMAIL, initEntryEmailEvents);
}
function removeEntryEmailEvents() {
  authEventEmitter
    .off(CHECK_ENTRY_EMAIL, auth.checkEntryEmail)
    .off(INIT_CONFIRM_CODE, initConfirmCodeEvents);
}

// registration/confirmation-code
function initConfirmCodeEvents() {
  removeEntryEmailEvents();
  authEventEmitter
    .on(CHECK_CONFIRM_CODE, auth.checkConfirmCode)
    .on(INIT_ENTRY_EMAIL, initEntryEmailEvents)
    .on(INIT_FIHISH, initFinishEvents);
}
function removeConfirmCodeEvents() {
  authEventEmitter
    .off(CHECK_CONFIRM_CODE, auth.checkConfirmCode)
    .off(INIT_FIHISH, initFinishEvents)
}

// registration/finish
function initFinishEvents() {
  removeConfirmCodeEvents();
  authEventEmitter.on(CREATE_USER, auth.createUser);
}
function removeFinishEvents() {
  authEventEmitter.off(CREATE_USER, auth.createUser);
}

// login
function initLoginEvents() {
  removeRegistrationEvents();
}
function removeLoginEvents() {}

/** export */
export {
  authEventEmitter,
  INIT_REGISTRATION_EVENTS,
  INIT_LOGIN_EVENTS,
  INIT_ENTRY_EMAIL,
  INIT_CONFIRM_CODE,
  INIT_FIHISH,
  CHECK_ENTRY_EMAIL,
  CHECK_CONFIRM_CODE,
  CREATE_USER,
}