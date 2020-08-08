'use strict';

/** imports */
import UserData from '../../user/data';
import UserActionType from './action-type';
import Constants from './constants';
import createMerge from '../merge';

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
  const merge = createMerge(state);
  switch(action.type) {
    case Constants.UPDATE_NAME:
      return merge({
        name: action.name
      });
    case Constants.UPDATE_USERNAME:
      return merge({
        username: action.username
      });
    case Constants.UPDATE_EMAIL:
      return merge({
        email: action.email
      });
    default: return state;
  }
}

/** export */
export default userStorageReducer;