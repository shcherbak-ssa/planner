'use strict';

/** imports */
import Constants from './constants';

/** action types */
interface UpdateNameAction {
  type: typeof Constants.UPDATE_NAME;
  name: string;
}
interface UpdateUsernameAction {
  type: typeof Constants.UPDATE_USERNAME;
  username: string;
}
interface UpdateEmailAction {
  type: typeof Constants.UPDATE_EMAIL;
  email: string;
}
interface GetCurrentStorageState {
  type: typeof Constants.GET_CURRENT_STORAGE_STATE;
}

/** UserActionType */
type UserActionType =
  | UpdateNameAction
  | UpdateUsernameAction
  | UpdateEmailAction
  | GetCurrentStorageState;

/** export */
export default UserActionType;