'use strict';

/** import-module function */
async function importModule(module) {
  const importedModule = await import(module);
  return importedModule.default;
}

/** export */
export default importModule;