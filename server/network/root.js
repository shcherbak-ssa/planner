'use strict';

/** imports */
const {Router} = require('express');
const StaticFileSender = require('./src/static-file-sender');

/** init */
const rootRouter = new Router();

rootRouter.use(async (req, res) => {
  // @todo: need to add logic with cookie
  await StaticFileSender.createForRoot(res, 'login.html').send();
});

/** exports */
module.exports = rootRouter;