'use strict';

/** imports */
import React, {useState} from 'react';
import Form from '@lib/form';

/** InputPassword component */
export default function InputPassword(props) {
  /** states */
  const [inputValue, setInputValue] = useState('');

  /** data */
  const inputProps = {
    type: 'password',
    value: inputValue,
    error: props.error,
    placeholder: 'Password',
    changeHandler({target: {value}}) {
      if (props.error) props.removeError();
      props.setInputValue(value);
      setInputValue(value);
    }
  };
  
  /** render */
  return <Form.Input {...inputProps}/>
}