'use strict';

/** imports */
import EventEmitter from './emitter';
import Auth from '../auth';

/** init */
const authEventEmitter: EventEmitter = new EventEmitter();
const authModule: Auth = new Auth();
