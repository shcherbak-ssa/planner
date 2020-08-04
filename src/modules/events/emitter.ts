'use strict';

/** EventEmitter */
class EventEmitter {
  private handlers: Map<string, Function[]>;
  constructor() {
    this.handlers = new Map();
  }

  /** public methods */
  on(event: string, handler: Function) {
    const handlers: Function[] = this.hasEvent(event)
      ? [...this.getHandlers(event), handler]
      : [handler];

    this.setHandlers(event, handlers);
    return this;
  }
  off(event: string, handler: Function) {
    if (!this.hasEvent(event)) return this;

    const updatedHandlers = this.getHandlers(event).filter((item) => item !== handler);
    updatedHandlers.length === 0
      ? this.deleteEvent(event)
      : this.setHandlers(event, updatedHandlers);

    return this;
  }
  emit(event: string, ...options: any) {
    const handlers = this.getHandlers(event);
    handlers.map((handler) => handler(...options));
    return this;
  }

  /** private methods */
  private hasEvent(event: string): boolean {
    return this.handlers.has(event);
  }
  private setHandlers(event: string, handlers: Function[]) {
    this.handlers.set(event, handlers);
  }
  private getHandlers(event: string): Function[] {
    return this.handlers.get(event) || [];
  }
  private deleteEvent(event: string) {
    this.handlers.delete(event);
  }
}

/** export */
export default EventEmitter;