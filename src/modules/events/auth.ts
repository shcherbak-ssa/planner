'use strict';

/** imports */
import EventEmitter from './emitter';
import Auth from '../auth';

/** constants */
const INIT_REGISTRATION: string = 'init-registration';
const INIT_LOGIN: string = 'init-login';

const CHECK_ENTRY_EMAIL: string = 'check-entry-email';
const CHECK_CONFIRM_CODE: string = 'check-confirm-code';
const CREATE_USER: string = 'create-user';

const INIT_ENTRY_EMAIL: string = 'init-entry-email';
const INIT_CONFIRM_CODE: string = 'init-confirm-code';
const INIT_FIHISH: string = 'init-finish';

const REMOVE_ENTRY_EMAIL: string = 'remove-entry-email';
const REMOVE_CONFIRM_CODE: string = 'remove-confirm-code';
const REMOVE_FIHISH: string = 'remove-finish';

/** init */
const authEventEmitter: EventEmitter = new EventEmitter();
const auth: Auth = new Auth();

authEventEmitter
  .on(INIT_REGISTRATION, initRegistrationEvents)
  .on(INIT_LOGIN, initLoginEvents);

// registration
function initRegistrationEvents() {
  initEntryEmailEvents();
}

// registration/entry-email
function initEntryEmailEvents() {
  authEventEmitter
    .on(CHECK_ENTRY_EMAIL, auth.checkEntryEmail)
    .on(REMOVE_ENTRY_EMAIL, removeEntryEmailEvents)
    .on(INIT_CONFIRM_CODE, initConfirmCodeEvents)
    .off(INIT_ENTRY_EMAIL, initEntryEmailEvents);
}
function removeEntryEmailEvents() {
  authEventEmitter
    .off(CHECK_ENTRY_EMAIL, auth.checkEntryEmail)
    .off(REMOVE_ENTRY_EMAIL, removeEntryEmailEvents)
    .off(INIT_CONFIRM_CODE, initConfirmCodeEvents);
}

// registration/confirmation-code
function initConfirmCodeEvents() {
  authEventEmitter
    .on(CHECK_CONFIRM_CODE, auth.checkConfirmCode)
    .on(REMOVE_CONFIRM_CODE, removeConfirmCodeEvents)
    .on(INIT_ENTRY_EMAIL, initEntryEmailEvents)
    .on(INIT_FIHISH, initFinishEvents);
}
function removeConfirmCodeEvents() {
  authEventEmitter
    .off(CHECK_CONFIRM_CODE, auth.checkConfirmCode)
    .off(REMOVE_CONFIRM_CODE, removeConfirmCodeEvents)
    .off(INIT_FIHISH, initFinishEvents)
}

// registration/finish
function initFinishEvents() {
  authEventEmitter
    .on(CREATE_USER, auth.createUser)
    .on(REMOVE_FIHISH, removeFinishEvents)
}
function removeFinishEvents() {
  authEventEmitter
    .off(CREATE_USER, auth.createUser)
    .off(REMOVE_FIHISH, removeFinishEvents)
}

// login
function initLoginEvents() {}
function removeLoginEvents() {}

/** export */
export {
  authEventEmitter,
  INIT_REGISTRATION,
  INIT_LOGIN,
  CHECK_ENTRY_EMAIL,
  CHECK_CONFIRM_CODE,
  CREATE_USER,
  INIT_ENTRY_EMAIL,
  INIT_CONFIRM_CODE,
  INIT_FIHISH,
  REMOVE_ENTRY_EMAIL,
  REMOVE_CONFIRM_CODE,
  REMOVE_FIHISH,
}