'use strict';

/** imports */
import { NewUserData } from "./new-user-data";

/** auth network interfaces */
export interface RegistrationNetwork {
  createAccount(user: NewUserData): any;
}
export interface LoginNetwork {
  loginAccount(user: string): any;
}