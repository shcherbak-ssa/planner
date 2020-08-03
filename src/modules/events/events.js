'use strict';

/** imports */
import EventEmitter from './emitter';

/** init */
const uiEventEmitter = new EventEmitter();

/** events */
const events = {
  uiEventEmitter,
  createEmitter(name) {
    const newEmitter = new EventEmitter();
    events[`${name}EventEmitter`] = newEmitter;
    return newEmitter;
  }
}

/** export */
export default events;