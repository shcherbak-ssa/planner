'use strict';

/** imports */
const express = require('express');
const cookieParser = require('cookie-parser');

const {
  rootRequestHandler,
  staticRouter,
  authRouter,
} = require('./network');

const {
  PORT, HOSTNAME,
  ROOT_REGEXP_PATH,
  STATIC_REGEXP_PATH,
  AUTH_REGEXP_PATH,
} = require('./constants').server;

/** init */
const planner = express();
planner.use(cookieParser());

// root request
planner.get(ROOT_REGEXP_PATH, rootRequestHandler);

// routers
planner.use(STATIC_REGEXP_PATH, staticRouter);
planner.use(AUTH_REGEXP_PATH, authRouter);

// run
planner.listen(PORT, HOSTNAME, () => {
  console.log(`Server runs on http://${HOSTNAME}:${PORT}/`);
});