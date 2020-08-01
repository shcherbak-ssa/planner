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

/** init */
const planner = express();

// init routers
planner.use(ROOT_REGEXP_PATH, rootRouter);
planner.use('/static', staticRouter);

// run server
planner.listen(PORT, HOSTNAME, () => {
  console.log(`Server runs on http://${HOSTNAME}:${PORT}/`);
});