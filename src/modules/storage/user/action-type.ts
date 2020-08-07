'use strict';

/** imports */
import {
  UPDATE_NAME,
  UPDATE_USERNAME,
  UPDATE_EMAIL,
  GET_CURRENT_STORAGE_STATE
} from './constants';

/** action types */
interface UpdateNameAction {
  type: typeof UPDATE_NAME;
  name: string;
}
interface UpdateUsernameAction {
  type: typeof UPDATE_USERNAME;
  username: string;
}
interface UpdateEmailAction {
  type: typeof UPDATE_EMAIL;
  email: string;
}
interface GetCurrentStorageState {
  type: typeof GET_CURRENT_STORAGE_STATE;
}

/** UserActionType */
type UserActionType =
  UpdateNameAction |
  UpdateUsernameAction |
  UpdateEmailAction |
  GetCurrentStorageState;

/** export */
export default UserActionType;