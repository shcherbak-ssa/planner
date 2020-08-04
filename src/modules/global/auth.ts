'use strict';

/** AuthGlobal */
class AuthGlobal {
  private currentAuthMode: string;
  constructor() {
    this.currentAuthMode = '';
  }

  /** public methods */
  getCurrentAuthMode(): string {
    return this.currentAuthMode;
  }
  setCurrentAuthMode(currentAuthMode: string) {
    this.currentAuthMode = currentAuthMode;
  }
}

/** export */
const authGlobal: AuthGlobal = new AuthGlobal();
export default authGlobal;