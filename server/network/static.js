'use strict';

/** imports */
const {Router} = require('express');
const StaticSender = require('./static-sender');

/** init */
const staticRouter = new Router();

staticRouter.use(async (req, res) => {
  const staticSender = StaticSender.create(req, res);
  staticSender.isExists() ? await staticSender.send() : await staticSender.sendError();
});

/** exports */
module.exports = staticRouter;