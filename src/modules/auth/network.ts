'use strict';

/** auth network interfaces */
interface EntryEmailNetwork {
  checkUserEmail(email: string): Promise<Response>;
}

/** export */
export {
  EntryEmailNetwork,
};