'use strict';

/** imports */
import {createStore, Store} from 'redux';
import combineStorageReducers from './reducers';
import ActionType from './action-type';

/** init */
let storageStates: Store;

/** Storage */
const Storage = {
  init() {
    storageStates = createStore(combineStorageReducers());
    return storageStates;
  },
  doAction(action: ActionType) {
    storageStates.dispatch(action);
  }
};

/** export */
export default Storage;