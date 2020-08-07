'use strict';

/** imports */
import {combineReducers, Reducer} from 'redux';
import StorageStates from './states';
import userStorageReducer from './user/reducer';

/** combineStorageReducers */
function combineStorageReducers(): Reducer<StorageStates> {
  return combineReducers<StorageStates>({
    user: userStorageReducer
  })
}

/** export */
export default combineStorageReducers;