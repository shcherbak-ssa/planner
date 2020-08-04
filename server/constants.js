'use strict';

/** init */

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

/** constatns */
const constants = {
  server: serverConstants,
};

/** exports */
module.exports = constants;