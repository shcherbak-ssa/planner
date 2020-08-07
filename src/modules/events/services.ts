'use strict';

/** imports */
import EventEmitter from './emitter';
import DropdownService from '../../services/dropdown';

/** constants */
const DROPDOWN_SERVICE_INIT: string = 'dropdown-service-init';
const DROPDOWN_SERVICE_SAVE_ACTIVE_DROPDOWN: string = 'dropdown-service-save-active-dropdown';

/** init */
const servicesEventEmitter: EventEmitter = new EventEmitter();

// dropdown service
servicesEventEmitter
  .on(DROPDOWN_SERVICE_INIT, initDropdownService)
  .on(DROPDOWN_SERVICE_SAVE_ACTIVE_DROPDOWN, DropdownService.saveActiveDropdown);

function initDropdownService() {
  DropdownService.init();
  servicesEventEmitter.off(DROPDOWN_SERVICE_INIT, initDropdownService);
}

/** export */
export {
  servicesEventEmitter,
  DROPDOWN_SERVICE_INIT,
  DROPDOWN_SERVICE_SAVE_ACTIVE_DROPDOWN,
}