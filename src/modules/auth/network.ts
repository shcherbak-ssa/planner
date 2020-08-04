'use strict';

/** auth network interfaces */
interface EntryEmailNetwork {
  checkForUniqueness(email: string): Promise<Response>;
}

/** export */
export {
  EntryEmailNetwork,
};