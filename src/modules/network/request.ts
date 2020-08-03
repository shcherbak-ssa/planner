'use strict';

/** imports */
import {JSON_CONTENT_TYPE} from './constants';

/** Request */
class RequestData {
  url: string;
  body: any;
  contentType: string;
  
  constructor() {
    this.url = '';
    this.body = null;
    this.contentType = '';
  }
}
class RequestCreator {
  private data: RequestData;
  constructor() {
    this.data = new RequestData();
  }

  /** public methods */
  setUrl(url: string): RequestCreator {
    this.data.url = url;
    return this;
  }
  setJsonBody(body: object): RequestCreator {
    this.data.body = JSON.stringify(body);
    this.data.contentType = JSON_CONTENT_TYPE;
    return this;
  }
  createRequest(): Request {
    return new Request(this.data);
  }
}
class Request {
  private data: RequestData;
  constructor(data: RequestData) {
    this.data = data;
  }

  /** public methods */
  getUrl(): string {
    return this.data.url;
  }
  getBody(): any {
    return this.data.body;
  }
  getContentType(): string {
    return this.data.contentType;
  }
}

/** export */
export {
  RequestCreator,
  Request
}