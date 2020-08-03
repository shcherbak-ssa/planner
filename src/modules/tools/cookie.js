'use strict';

/** Cookie */
class Cookie {
  constructor() {
    this._cookie = this._parseDocumentCookie();
  }

  /** public methods */
  get(name) {
    return this._cookie.get(name);
  }

  /** private methods */
  _parseDocumentCookie() {
    return this._parseCookie(document.cookie)
  }
  _parseCookie(cookie) {
    const cookies = cookie.split(';');
    const cookiesMap = cookies.map((item) => item.split('='));
    return new Map(cookiesMap);
  }
}

/** export */
export default Cookie;