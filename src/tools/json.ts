'use strict';

/** init */
function parseFromJSON(json: string): any {
  return JSON.parse(json);
}
function transformToJSON(data: any): string {
  return JSON.stringify(data);
}

/** export */
export {
  parseFromJSON,
  transformToJSON,
}