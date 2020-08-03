'use strict';

/** EventEmitter */
class EventEmitter {
  constructor() {
    this._handlers = new Map();
  }

  /** public methods */
  on(event, handler) {
    const handlers = this._hasEvent(event) ? [...this._getHandlers(event), handler] : [handler];
    this._setHandlers(event, handlers);
    return this;
  }
  off(event, handler) {
    const handlers = this._getHandlers(event).filter((item) => item !== handler);
    handlers.length === 0 ? this._deleteEvent(event) : this._setHandlers(event, handlers);
    return this;
  }
  emit(event, ...options) {
    const handlers = this._getHandlers(event);
    handlers.map((handler) => handler(...options));
    return this;
  }

  /** private methods */
  _hasEvent(event) {
    return this._handlers.has(event);
  }
  _setHandlers(event, handlers) {
    this._handlers.set(event, handlers);
  }
  _getHandlers(event) {
    return this._handlers.get(event);
  }
  _deleteEvent(event) {
    this._handlers.delete(event);
  }
}

/** export */
export default EventEmitter;