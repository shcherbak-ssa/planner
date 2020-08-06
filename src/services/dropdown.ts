'use strict';

/** data */
const activeDropdown: Function[] = [];

/** DropdownService */
const DropdownService = {
  init() {
    document.addEventListener('click', closeActiveDropdown);
  },
  saveActiveDropdown(closeDropdown: Function) {
    activeDropdown.push(closeDropdown);
  }
};

/** src */
function closeActiveDropdown() {
  const closeDropdown = activeDropdown.pop();
  if (closeDropdown) closeDropdown();
}

/** export */
export default DropdownService;