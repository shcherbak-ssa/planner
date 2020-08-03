'use strict';

/** imports */
const {Router} = require('express');
const StaticFileSender = require('./src/static-file-sender');

/** constants */
const COOKIE_SESSION_ACTIVE = 'session-active';
const ROOT_FILE_PATH = 'view/index.html';

/** init */
const rootRouter = new Router();

rootRouter.use(async (req, res, next) => {
  if (req.cookies[COOKIE_SESSION_ACTIVE]) return next();

  res.cookies(COOKIE_SESSION_ACTIVE, true);
  await StaticFileSender.createForRoot(res, ROOT_FILE_PATH).send();
});

/** exports */
module.exports = rootRouter;