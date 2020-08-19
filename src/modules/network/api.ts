'use strict';

/** imports */
import {
  parseFromJSON,
  transformToJSON,
} from '../../tools/json';

/** NetworkAPI */
export const NetworkAPI = {
  async get(path: string) {
    const getData: any = getLocalStorageItem(path);
    return parseFromJSON(getData);
  },
  async create(path: string, data: any) {
    const createData: string = transformToJSON(data);
    setLocalStorageItem(path, createData);
  },
  async update() {},
  async delete() {},
};

/** src */
function getLocalStorageItem(path: string) {
  return localStorage.getItem(path);
}
function setLocalStorageItem(path: string, data: string) {
  localStorage.setItem(path, data);
}