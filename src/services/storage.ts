'use strict';

/** imports */
import Storage from '../modules/storage';

/** StorageService */
const StorageService = {
  init() {
    return Storage.init();
  },
  user(value?: string|Array<string>) {
    if (!value) return (state: any) => state.user
  }
};

/** export */
export default StorageService;