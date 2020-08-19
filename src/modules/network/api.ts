'use strict';

/** imports */
import {
  parseFromJSON,
  transformToJSON,
} from '../../tools/json';
import { NetworkError } from './errors';

/** constants */
const getPathDoesNotExist = (path: string) => `${path} does not exist`;
const createPathExist = (path: string) => `${path} already exist`;

/** NetworkAPI */
export const NetworkAPI = {
  async get(path: string) {
    if (!isPathExist(path)) throw new NetworkError(getPathDoesNotExist(path));

    const getData: any = getLocalStorageItem(path);
    return parseFromJSON(getData);
  },
  async create(path: string, data: any) {
    if (isPathExist(path)) throw new NetworkError(createPathExist(path));

    const createData: string = transformToJSON(data);
    setLocalStorageItem(path, createData);
  },
  async update() {},
  async delete() {},
};

/** src */
function isPathExist(path: string) {
  return !!getLocalStorageItem(path);
}
function getLocalStorageItem(path: string) {
  return localStorage.getItem(path);
}
function setLocalStorageItem(path: string, data: string) {
  localStorage.setItem(path, data);
}