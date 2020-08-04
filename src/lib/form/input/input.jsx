'use strict';

/** imports */
import React, {useState, useEffect, useRef} from 'react';
import './input.scss';

// components
import Typography from '../../typography';

/** Input component */
export default function Input(props) {
  /** states */
  const [isFilled, setIsFilled] = useState(false);
  const [isError, setIsError] = useState(false);
  const [value, setValue] = useState(props.value);
  const inputField = useRef(null);
  
  /** data */
  const readOnlyClassName = props.readOnly ? ' is-read-only' : '';
  const filledClassName = isFilled ? ' is-filled' : '';
  const errorClassName = isError ? ' is-error' : '';
  const parentClassName = props.name ? ` ${props.name}` : '';

  const attributes = {
    className: `input${
      readOnlyClassName +
      filledClassName +
      errorClassName +
      parentClassName
    }`,
    'data-class': 'bs mbr bsh click'
  };

  /** effects */
  useEffect(() => {
    if (value !== '') setIsFilled(true);
  });
  useEffect(() => {
    if (props.error !== '') {
      focusOnInput();
      setIsFilled(true);
      setIsError(true);
    }
  });
  useEffect(() => {
    if (props.focus) {
      focusOnInput();
      setIsFilled(true);
    }   
  });

  /** methods */

  // handlers
  function clickHanlder(e) {
    e.preventDefault();
    if (props.readOnly) return;
    
    if (!e.target.classList.contains('input-field')) {
      focusOnInput();
      setIsFilled(true);
    }
  }
  function changeHandler({target}) {
    setValue(target.value);
    if (props.error && props.removeError) {
      props.removeError();
      removeError();
    }
    if (props.changeHandler) props.changeHandler(target.value);
  }
  function blurHandler(e) {
    e.preventDefault();
    if (value === '') setIsFilled(false);
    if (props.blurCallback) props.blurCallback(e.target.value);
  }

  // src
  function focusOnInput() {
    inputField.current.focus();
  }
  function removeError() {
    setIsError(false);
  }

  /** render */
  return (
    <div {...attributes} onClick={clickHanlder}>
      <input
        ref={inputField}
        type="text"
        className="input-field paragraph2"
        data-class="bs"
        value={value}
        onChange={changeHandler}
        onBlur={blurHandler}
      />
      <div className="input-placeholder" data-class="ptc">
        <Typography.Paragraph type="2">
          {props.placeholder}
        </Typography.Paragraph>
      </div>
      <div className="input-error">
        <Typography.Paragraph type="2">
          {props.error}
        </Typography.Paragraph>
      </div>
    </div>
  )
}