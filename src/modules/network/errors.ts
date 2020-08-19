'use strict';

/** constants */
const NETWORK_ERROR_NAME: string = 'NetworkError';

/** NetworkError */
export class NetworkError extends Error {
  constructor(message: string) {
    super(message);
    this.name = NETWORK_ERROR_NAME;
  }
}