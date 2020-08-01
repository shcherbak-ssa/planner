'use strict';

/** imports */
const {existsSync} = require('fs');
const {join: joinPaths, extname: getExtname, parse: parsePath} = require('path');

/** constants */
const SUCCESS_STATUS_CODE = 200;
const ERROR_STATUS_CODE = 404;

const PUBLIC_PATH = joinPaths(process.cwd(), 'public');
const VIEW_FILES_PATH = joinPaths(PUBLIC_PATH, 'view');
const CSS_FILES_PATH = joinPaths(PUBLIC_PATH, 'css');
const JS_FILES_PATH = joinPaths(PUBLIC_PATH, 'js');
const FONT_FILES_PATH = joinPaths(PUBLIC_PATH, 'fonts');

/** static file sender */
class StaticFileSender {
  constructor(res, filename) {
    this._res = res;
    this._filePath = this._getFilePath(filename);
  }

  /** static methods */
  static create(req, res) {
    const url = req.originalUrl;
    const {base: filename} = parsePath(url);
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
    const fileExtname = getExtname(filename);
    const fileDirname = this._getFileDirname(fileExtname);
    return joinPaths(fileDirname, filename);
  }
  _getFileDirname(fileExtname) {
    switch(fileExtname) {
      case '.html': return VIEW_FILES_PATH;
      case '.css': return CSS_FILES_PATH;
      case '.js': return JS_FILES_PATH;
      case '.ttf': return FONT_FILES_PATH;
    }
  }
}

/** exports */
module.exports = StaticFileSender;