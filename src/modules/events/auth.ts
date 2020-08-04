'use strict';

/** imports */
import EventEmitter from './emitter';
import EntryEmail from '../auth/entry-email';
import ConfirmCode from '../auth/confirm-code';
import CreateAccount from '../auth/create-account';

/** constants */
const INIT_REGISTRATION: string = 'init-registration';
const INIT_LOGIN: string = 'init-login';

const VALIDATE_ENTRY_EMAIL: string = 'validate-entry-email';
const SEND_CONFIRM_CODE_TO_EMAIL: string = 'send-confirm-code-to-email';

const GET_CONFIRM_CODE_LENGTH: string = 'get-confirm-code-length';
const VALIDATE_CONFIRM_CODE: string = 'validate-confirm-code';

const GET_USER_DATA_CREATOR: string = 'get-user-data-creator';
const CREATE_ACCOUNT: string = 'create-account';

const INIT_ENTRY_EMAIL: string = 'init-entry-email';
const INIT_CONFIRM_CODE: string = 'init-confirm-code';
const INIT_CREATE_ACCOUNT: string = 'init-create-account';

const REMOVE_ENTRY_EMAIL: string = 'remove-entry-email';
const REMOVE_CONFIRM_CODE: string = 'remove-confirm-code';
const REMOVE_CREATE_ACCOUNT: string = 'remove-create-account';

/** init */
const authEventEmitter: EventEmitter = new EventEmitter();

authEventEmitter
  .on(INIT_REGISTRATION, initRegistrationEvents)
  .on(INIT_LOGIN, initLoginEvents);

// registration
function initRegistrationEvents() {
  authEventEmitter.on(INIT_ENTRY_EMAIL, initEntryEmailEvents);
}

// registration/entry-email
function initEntryEmailEvents() {
  authEventEmitter
    .on(VALIDATE_ENTRY_EMAIL, EntryEmail.validate)
    .on(SEND_CONFIRM_CODE_TO_EMAIL, EntryEmail.sendConfirmCodeToEmail)
    .on(REMOVE_ENTRY_EMAIL, removeEntryEmailEvents)
    .on(INIT_CONFIRM_CODE, initConfirmCodeEvents)
}
function removeEntryEmailEvents() {
  authEventEmitter
    .off(VALIDATE_ENTRY_EMAIL, EntryEmail.validate)
    .off(REMOVE_ENTRY_EMAIL, removeEntryEmailEvents)
    .off(SEND_CONFIRM_CODE_TO_EMAIL, EntryEmail.sendConfirmCodeToEmail);
}

// registration/confirmation-code
function initConfirmCodeEvents() {
  authEventEmitter
    .on(GET_CONFIRM_CODE_LENGTH, ConfirmCode.getConfirmCodeLength)
    .on(VALIDATE_CONFIRM_CODE, ConfirmCode.validate)
    .on(REMOVE_CONFIRM_CODE, removeConfirmCodeEvents)
    .on(INIT_CREATE_ACCOUNT, initCreateAccountEvents);
}
function removeConfirmCodeEvents() {
  authEventEmitter
    .off(GET_CONFIRM_CODE_LENGTH, ConfirmCode.getConfirmCodeLength)
    .off(VALIDATE_CONFIRM_CODE, ConfirmCode.validate)
    .off(REMOVE_CONFIRM_CODE, removeConfirmCodeEvents)
    //.off(INIT_CREATE_ACCOUNT, initCreateAccountEvents)
}

// registration/create-accout
function initCreateAccountEvents() {
  authEventEmitter
    .on(GET_USER_DATA_CREATOR, CreateAccount.getUserDataCreator)
    .on(CREATE_ACCOUNT, CreateAccount.create)
    .on(REMOVE_CREATE_ACCOUNT, removeCreateAccountEvents)
    .on(INIT_ENTRY_EMAIL, initEntryEmailEvents)
}
function removeCreateAccountEvents() {
  authEventEmitter
    .off(GET_USER_DATA_CREATOR, CreateAccount.getUserDataCreator)
    .off(CREATE_ACCOUNT, CreateAccount.create)
    .off(REMOVE_CREATE_ACCOUNT, removeCreateAccountEvents)
    .off(INIT_ENTRY_EMAIL, initEntryEmailEvents)
}

// login
function initLoginEvents() {}
function removeLoginEvents() {}

/** export */
export {
  authEventEmitter,
  INIT_REGISTRATION,
  INIT_LOGIN,
  VALIDATE_ENTRY_EMAIL,
  SEND_CONFIRM_CODE_TO_EMAIL,
  GET_CONFIRM_CODE_LENGTH,
  VALIDATE_CONFIRM_CODE,
  GET_USER_DATA_CREATOR,
  CREATE_ACCOUNT,
  INIT_ENTRY_EMAIL,
  INIT_CONFIRM_CODE,
  INIT_CREATE_ACCOUNT,
  REMOVE_ENTRY_EMAIL,
  REMOVE_CONFIRM_CODE,
  REMOVE_CREATE_ACCOUNT,
}