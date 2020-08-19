'use strict';

/** imports */
import {
  parseFromJSON,
  transformToJSON,
} from '../../tools/json';

/** NetworkAPI */
const NetworkAPI = {
  async get(path: string) {
    if (!isPathExist(path)) return;

    const getData: any = localStorage.getItem(path);
    return parseFromJSON(getData);
  },
  async create(path: string, data: any) {
    if (isPathExist(path)) return;
    
    const createData: string = transformToJSON(data);
    localStorage.setItem(path, createData);
  },
  async update() {},
  async delete() {},
};

/** src */
function isPathExist(path: string) {
  return !!localStorage.getItem(path);
}

/** export */
export default NetworkAPI;