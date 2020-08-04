'use strict';

/** imports */
const StaticFileSender = require('./static-file-sender');

/** constants */
const SESSION_COOKIE_OPTIONS = {active: true};
const ROOT_FILE_PATH = 'view/index.html';

/** init */
async function rootRequestHandler(req, res, next) {
  const sessionCookie = req.cookies.session;
  if (sessionCookie && JSON.parse(sessionCookie).active) return next();

  res.cookie('session', JSON.stringify(SESSION_COOKIE_OPTIONS));
  await StaticFileSender.createForRoot(res, ROOT_FILE_PATH).send();
}

/** exports */
module.exports = rootRequestHandler;