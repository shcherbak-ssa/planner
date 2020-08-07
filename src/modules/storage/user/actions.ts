'use strict';

/** imports */
import UserActionType from './action-type';
import {
  UPDATE_NAME,
  UPDATE_USERNAME,
  UPDATE_EMAIL,
  GET_CURRENT_STORAGE_STATE,
} from './constants';

/** actions */
function updateName(name: string): UserActionType {
  return {
    type: UPDATE_NAME,
    name
  }
}
function updateUsername(username: string): UserActionType {
  return {
    type: UPDATE_USERNAME,
    username
  }
}
function updateEmail(email: string): UserActionType {
  return {
    type: UPDATE_EMAIL,
    name
  }
}
function getCurrentStorageState(): UserActionType {
  return {
    type: GET_CURRENT_STORAGE_STATE
  }
}

/** export */
export {
  updateName,
  updateUsername,
  updateEmail,
  getCurrentStorageState,
}