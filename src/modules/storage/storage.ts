'use strict';

/** imports */
import {createStore} from 'redux';
import combineStorageReducers from './reducers';

/** Storage */
const Storage = {
  states: null,
  init(callback: Function) {
    this.states = createStore(combineStorageReducers());
    callback(this.states);
  },
};

/** export */
export default Storage;