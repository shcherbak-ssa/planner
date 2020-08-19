'use strict';

/** imports */
import { NewUserData } from "./new-user-data";

/** auth network interfaces */
export interface CheckEmailNetwork {
  isUserExist(email: string): void;
}
export interface CreateAccountNetwork {
  createAccount(user: NewUserData): any;
}
export interface LoginNetwork {
  loginAccount(email: string, password: string): any;
}