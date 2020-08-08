'use strict';

/** createMerge */
function createMerge(state: any) {
  return (newStates: any) => {
    return Object.assign({}, state, newStates);
  }
}

/** export */
export default createMerge;