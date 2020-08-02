'use strict';

/** imports */
import ReactDOM from 'react-dom';

/** render function */
function render(component, rootID) {
  ReactDOM.render(component, document.getElementById(rootID));
}

/** export */
export default render;