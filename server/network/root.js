'use strict';

/** imports */
const {Router} = require('express');
const FileSender = require('./src/file-sender');
const {SUCCESS_STATUS_CODE} = require('./src/constants');

/** init */
const rootRouter = new Router();

// @todo: need to add logic
rootRouter.use((req, res) => {
  console.log('root:', req.originalUrl);
  FileSender.create(res).send(SUCCESS_STATUS_CODE, 'login.html');
});

/** exports */
module.exports = rootRouter;