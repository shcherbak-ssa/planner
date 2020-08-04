'use strict';

/** imports */
const {Router} = require('express');
const StaticFileSender = require('./static-file-sender');

/** init */
const staticRouter = new Router();

staticRouter.use(async (req, res) => {
  const staticFileSender = StaticFileSender.create(req, res);
  staticFileSender.isExists() ? await staticFileSender.send() : await staticFileSender.sendError();
});

/** exports */
module.exports = staticRouter;