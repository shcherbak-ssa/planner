'use strict';

/** imports */
const argv = require('optimist').argv;
const {Router} = require('express');
const StaticFileSender = require('./src/static-file-sender');

/** init */
const rootRouter = new Router();

if (argv.isTestLib) {
  rootRouter.use(async (req, res) => {
    await StaticFileSender.createForRoot(res, 'view/test-lib.html').send();
  });
} else {
  rootRouter.use(async (req, res) => {
    // @todo: need to add logic with cookie
    await StaticFileSender.createForRoot(res, 'view/login.html').send();
  });
}

/** exports */
module.exports = rootRouter;