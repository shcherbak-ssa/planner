'use strict';

/** imports */
const rootRequestHandler = require('./root');
const staticRouter = require('./static');
const authRouter = require('./auth');

/** network object */
const network = {
  rootRequestHandler,
  staticRouter,
  authRouter,
};

/** exports */
module.exports = network;