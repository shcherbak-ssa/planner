'use strict';

/** imports */
const rootRequestHandler = require('./root');
const staticRouter = require('./static');

/** network object */
const network = {
  rootRequestHandler,
  staticRouter,
};

/** exports */
module.exports = network;