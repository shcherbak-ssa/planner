'use strict';

/** imports */
import UserData from '../../user/data';
import UserActionType from './action-type';
import Constants from './constants';

/** init */
const initialState: UserData = {
  name: 'Stanislav Shcherbakov',
  username: 'shcherbak',
  email: 'shcherbak.ssa@gmail.com'
}

/** userStorageReducer */
function userStorageReducer(
  state: UserData = initialState,
  action: UserActionType
): UserData {
  switch(action.type) {
    case Constants.UPDATE_NAME: return state;
    case Constants.UPDATE_USERNAME: return state;
    case Constants.UPDATE_EMAIL: return state;
    case Constants.GET_CURRENT_STORAGE_STATE: return state;
    default: return state;
  }
}

/** export */
export default userStorageReducer;