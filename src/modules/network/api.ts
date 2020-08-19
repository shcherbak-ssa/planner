'use strict';

/** imports */
import {
  parseFromJSON,
  transformToJSON,
} from '../../tools/json';

/** NetworkAPI */
const NetworkAPI = {
  async get(path: string) {
    const getData: any = localStorage.getItem(path);
    return parseFromJSON(getData);
  },
  async create() {},
  async update() {},
  async delete() {},
};

/** export */
export default NetworkAPI;