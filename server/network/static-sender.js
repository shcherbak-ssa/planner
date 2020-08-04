'use strict';

/** imports */
const {existsSync} = require('fs');
const {join: joinPaths} = require('path');

const {
  PUBLIC_PATH,
  statuses: {
    SUCCESS_STATUS_CODE,
    ERROR_STATUS_CODE
  }
} = require('../constants');

/** static sender */
class StaticSender {
  constructor(res, filename) {
    this._res = res;
    this._filePath = this._getFilePath(filename);
  }

  /** static methods */
  static create(req, res) {
    const filename = req.originalUrl;
    return new StaticFileSender(res, filename);
  }
  static createForRoot(res, filename) {
    return new StaticFileSender(res, filename);
  }

  /** public methods */
  isExists() {
    return existsSync(this._filePath);
  }
  async send() {
    this._res.status(SUCCESS_STATUS_CODE).sendFile(this._filePath);
  }
  async sendError() {
    this._res.sendStatus(ERROR_STATUS_CODE).end(); // @todo: update for html file request
  }

  /** private methods */
  _getFilePath(filename) {
    return joinPaths(PUBLIC_PATH, filename);
  }
}

/** exports */
module.exports = StaticSender;