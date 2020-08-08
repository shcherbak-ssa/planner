'use strict';

/** imports */
import Storage from '../modules/storage';

/** StorageService */
const StorageService = {
  init() {
    return Storage.init();
  },
  user(value?: string|Array<string>) {
    if (!value) return 
  }
};

/** export */
export default StorageService;