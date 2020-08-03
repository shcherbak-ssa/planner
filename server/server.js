'use strict';

/** imports */
const express = require('express');
const {
  rootRouter,
  staticRouter
} = require('./network');

/** constants */
const PORT = 8080;
const HOSTNAME = 'localhost';

const ROOT_REGEXP_PATH = /^\/$/;
const AUTH_REGEXP_PATH = /^\/(registration|login)/;
const STATIC_REGEXP_PATH = /^\/(css|js|fonts|images)/;

/** init */
const planner = express();

// init routers
planner.use(ROOT_REGEXP_PATH, rootRouter);
planner.use(AUTH_REGEXP_PATH, rootRouter);
planner.use(STATIC_REGEXP_PATH, staticRouter);

// run server
planner.listen(PORT, HOSTNAME, () => {
  console.log(`Server runs on http://${HOSTNAME}:${PORT}/`);
});