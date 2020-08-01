'use strict';

/** imports */
const rootRouter = require('./root');
const staticRouter = require('./static');

/** network object */
const network = {
  rootRouter,
  staticRouter,
};

/** exports */
module.exports = network;