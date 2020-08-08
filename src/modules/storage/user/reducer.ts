'use strict';

/** imports */
import UserData from '../../user/data';
import UserActionType from './action-type';

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
    default: return state;
  }
}

/** export */
export default userStorageReducer;