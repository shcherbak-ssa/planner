'use strict';

/** imports */
const express = require('express');
const cookieParser = require('cookie-parser');

const {
  rootRequestHandler,
  staticRouter
} = require('./network');

/** constants */
const PORT = 8080;
const HOSTNAME = 'localhost';

const ROOT_REGEXP_PATH = /^\//;
const STATIC_REGEXP_PATH = /^\/(css|js|fonts|images)/;

/** init */
const planner = express();
planner.use(cookieParser());

// root request
planner.get(ROOT_REGEXP_PATH, rootRequestHandler);

// routers
planner.use(STATIC_REGEXP_PATH, staticRouter);

// run
planner.listen(PORT, HOSTNAME, () => {
  console.log(`Server runs on http://${HOSTNAME}:${PORT}/`);
});