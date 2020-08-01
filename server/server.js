'use strict';

/** imports */
const express = require('express');
const {rootRouter} = require('./network');

/** constants */
const PORT = 8080;
const HOSTNAME = 'localhost';

/** init */
const planner = express();

// init root router
planner.use(/^\/$/, rootRouter);

// @todo: need to remove
planner.get('/static', (req, res) => {
  console.log('static:', req.originalUrl);
  res.end();
})

// run server
planner.listen(PORT, HOSTNAME, () => {
  console.log(`Server runs on http://${HOSTNAME}:${PORT}/`);
});