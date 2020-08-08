'use strict';

/** imports */
import {createStore} from 'redux';
import combineStorageReducers from './reducers';

/** init */
let storageStates = '';

/** Storage */
const Storage = {
  init() {
    storageStates = createStore(combineStorageReducers());
    return storageStates;
  },
};

/** export */
export default Storage;