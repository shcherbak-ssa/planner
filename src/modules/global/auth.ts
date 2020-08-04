'use strict';

/** AuthGlobal */
class AuthGlobal {
  private currentAuthMode: string;
  constructor() {
    this.currentAuthMode = '';
  }

  /** public methods */
  getCurrentAuthMode() {
    return this.currentAuthMode;
  }
  setCurrentAuthMode(currentAuthMode: string) {
    this.currentAuthMode = currentAuthMode;
  }
}

/** export */
export default AuthGlobal;