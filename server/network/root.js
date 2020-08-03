'use strict';

/** imports */
const {Router} = require('express');
const StaticFileSender = require('./src/static-file-sender');

/** constants */
const ROOT_COOKIE_NAME = 'root-mode';
const ROOT_COOKIE_OPTIONS = {expires: new Date(0)};
const ROOT_FILE_PATH = 'view/index.html';

/** init */
const rootRouter = new Router();

rootRouter.use(async (req, res) => {
  await setRootCookie(req, res);
  await StaticFileSender.createForRoot(res, ROOT_FILE_PATH).send();
});

/** src */
async function setRootCookie(req, res) {
  const cookieRootMode = await getCookieRootMode(req);
  res.cookie(ROOT_COOKIE_NAME, cookieRootMode, ROOT_COOKIE_OPTIONS);
}
async function getCookieRootMode(req) {
  const url = req.originalUrl;
  switch(url) {
    case /^\/$/: return 'app';
    case /^\/login$/: return 'login'
    case /^\/registration$/: return 'registration';
  }
}

/** exports */
module.exports = rootRouter;