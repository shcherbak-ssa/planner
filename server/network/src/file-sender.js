'use strict';

/** imports */
const {join: joinPaths, extname: getExtname} = require('path');

/** constants */
const PUBLIC_PATH = joinPaths(process.cwd(), 'public');
const VIEW_FILES_PATH = joinPaths(PUBLIC_PATH, 'view');

/** static file */
class FileSender {
  constructor(res) {
    this._res = res;
  }

  /** static methods */
  static create(res) {
    return new FileSender(res);
  }

  /** public methods */
  send(status, filename) {
    const filePath = this._getFilePath(filename);
    this._res.status(status).sendFile(filePath);
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
    }
  }
}

/** exports */
module.exports = FileSender;