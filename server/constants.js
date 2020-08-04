'use strict';

/** imports */
const {join: joinPaths} = require('path');

/** init */
const PUBLIC_PATH = joinPaths(process.cwd(), 'public');

// server
const PORT = 8080;
const HOSTNAME = 'localhost';

const ROOT_REGEXP_PATH = /^\//;
const STATIC_REGEXP_PATH = /^\/(css|js|fonts|images)/;
const AUTH_REGEXP_PATH = /^\/(registration|login)/;

const serverConstants = {
  PORT, HOSTNAME,
  ROOT_REGEXP_PATH,
  STATIC_REGEXP_PATH,
  AUTH_REGEXP_PATH,
};

// http statuses
const SUCCESS_STATUS_CODE = 200;
const ERROR_STATUS_CODE = 404;

const statusesConstants = {
  SUCCESS_STATUS_CODE,
  ERROR_STATUS_CODE,
};

/** constatns */
const constants = {
  PUBLIC_PATH,
  server: serverConstants,
  statuses: statusesConstants,
};

/** exports */
module.exports = constants;