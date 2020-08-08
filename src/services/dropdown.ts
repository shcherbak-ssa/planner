'use strict';

/** Dropdown */
class Dropdown {
  private parentElement: HTMLElement;
  private closeDropdown: Function;
  constructor(parentElement: HTMLElement, closeDropdown: Function) {
    this.parentElement = parentElement;
    this.closeDropdown = closeDropdown;
  }

  /** public methods */
  getParentElement(): HTMLElement {
    return this.parentElement;
  }
  getCloseDropdownFunction(): Function {
    return this.closeDropdown;
  }
}

/** data */
const activeDropdown: Dropdown[] = [];

/** DropdownService */
const DropdownService = {
  init() {
    document.addEventListener('click', closeActiveDropdown);
  },
  saveActiveDropdown(parentElement: HTMLElement, closeDropdown: Function) {
    const dropdown: Dropdown = new Dropdown(parentElement, closeDropdown);
    activeDropdown.push(dropdown);
  }
};

/** src */
function closeActiveDropdown(e: Event) {
  const dropdown = activeDropdown.pop();
  if (!dropdown) return;

  const parentElement = dropdown.getParentElement();
  if (parentElement === e.target) return activeDropdown.push(dropdown);
  
  if (parentElement !== e.target) {
    const closeDropdown: Function = dropdown.getCloseDropdownFunction();
    closeDropdown();
  };
}

/** export */
export default DropdownService;