'use strict';

/** imports */
import {JSON_CONTENT_TYPE} from './constants';

/** Request */
class RequestData {
  constructor() {
    this.url = null;
    this.body = null;
    this.contentType = null;
  }
}
class RequestCreator {
  constructor() {
    this._data = new RequestData();
  }

  /** public methods */
  setUrl(url) {
    this._data.url = url;
    return this;
  }
  setJsonBody(body) {
    this._data.body = JSON.stringify(body);
    this._data.contentType = JSON_CONTENT_TYPE;
    return this;
  }
  createRequest() {
    return new Request(this._data);
  }
}
class Request {
  constructor(data) {
    this._data = data;
  }

  /** public methods */
  getUrl() {
    return this._data.url;
  }
  getBody() {
    return this._data.body;
  }
  getContentType() {
    return this._data.contentType;
  }
}

/** export */
export {
  RequestCreator,
  Request
}