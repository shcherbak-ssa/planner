'use strict';

/** imports */
import {Request} from './request';

/** NetworkAPI */
class NetworkAPI {
  /** public methods */
  async create(request: Request) {
    return await this.sendRequest(request, 'POST');
  }
  async read(request: Request) {
    return await this.sendRequest(request, 'GET');
  }
  async update(request: Request) {
    return await this.sendRequest(request, 'PUT');
  }
  async delete(request: Request) {
    return await this.sendRequest(request, 'DELETE');
  }

  /** private methods */
  private async sendRequest(request: Request, method: string) {
    const url: string = request.getUrl();
    const fetchOptions: object = this.getFetchOptions(request, method);
    const response = await fetch(url, fetchOptions);
    return this.parseResponse(response);
  }
  private getFetchOptions(request: Request, method: string): object {
    const body: any = request.getBody();
    const contentType: string = request.getContentType();
    const options = {
      method, body, headers: {
        'Content-Type': contentType
      }
    };
    return options;
  }

  private async parseResponse(response: any) {
    const contentTypeHeaderValue: string = response.headers.get('Content-Type');
    const contentType: string = this.parseContentType(contentTypeHeaderValue);
    return this.parseResponseBody(response, contentType);
  }
  private parseContentType(contentTypeHeaderValue: string) {
    const contentTypeRegexp: RegExp = /[^/]+\/([^;]+);/;
    const contentTypeMatch = contentTypeHeaderValue.match(contentTypeRegexp);
    return contentTypeMatch ? contentTypeMatch[1] : '';
  }
  private async parseResponseBody(response: any, contentType: string) {
    switch(contentType) {
      case 'json': return await response.json();
      default: return await response.text();
    }
  }
}

/** export */
export default NetworkAPI;