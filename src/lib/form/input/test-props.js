'use strict';

/** test props */
const testProps = {
  placeholder: 'Your name',
  value: 'Stanislav',
  error: '',
  blurCallback: (value) => {
    console.log(value);
  }
};

/** exports */
export default testProps;