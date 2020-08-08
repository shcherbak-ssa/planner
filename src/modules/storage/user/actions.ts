'use strict';

/** imports */
import UserActionType from './action-type';
import Constants from './constants';

/** actions */
function updateName(name: string): UserActionType {
  return {
    type: Constants.UPDATE_NAME,
    name
  }
}
function updateUsername(username: string): UserActionType {
  return {
    type: Constants.UPDATE_USERNAME,
    username
  }
}
function updateEmail(email: string): UserActionType {
  return {
    type: Constants.UPDATE_EMAIL,
    email
  }
}

/** export */
export {
  updateName,
  updateUsername,
  updateEmail,
}