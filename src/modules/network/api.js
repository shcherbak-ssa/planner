'use strict';

/** NetworkAPI */
class NetworkAPI {
  /** public methods */
  async create(request) {
    return await this._sendRequest(request, 'POST');
  }
  async read(request) {
    return await this._sendRequest(request, 'GET');
  }
  async update(request) {
    return await this._sendRequest(request, 'PUT');
  }
  async delete(request) {
    return await this._sendRequest(request, 'DELETE');
  }

  /** private methods */
  async _sendRequest(request, method) {
    const fetchParams = await this._getFetchParams(request, method);
    const response = await fetch(...fetchParams);
    return this._parseResponse(response);
  }
  async _getFetchParams(request, method) {
    const url = request.getUrl();
    const body = request.getBody();
    const contentType = request.getContentType();
    const options = {
      method, body, headers: {
        'Content-Type': contentType
      }
    };
    return [url, options];
  }
  async _parseResponse(response) {}
}

/** export */
export default NetworkAPI;