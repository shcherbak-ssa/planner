'use strict';

/** imports */
import React, {useState, useEffect, useRef} from 'react';
import classnames from 'classnames';
import './input.scss';

// components
import Typography from '../../typography';

/** Input component */
export default function Input(props) {
  /** states */
  const [isFilled, setIsFilled] = useState(false);
  const [isError, setIsError] = useState(false);
  const inputField = useRef(null);
  
  /** data */
  const className = classnames({
    'input': true,
    'is-read-only': props.readOnly,
    'is-filled': isFilled,
    'is-error': isError,
    [props.name]: !!props.name
  })

  /** effects */
  useEffect(() => {
    if (props.value !== '') setIsFilled(true);
  }, [props.value]);

  useEffect(() => {
    if (props.error === '') return setIsError(false);
    focusOnInput();
    setIsFilled(true);
    setIsError(true);
  }, [props.error]);

  useEffect(() => {
    if (props.focus) {
      focusOnInput();
      setIsFilled(true);
    }   
  }, [props.focus]);

  /** methods */
  function clickHanlder(e) {
    e.preventDefault();
    if (props.readOnly) return;
    
    if (!e.target.classList.contains('input-field')) {
      focusOnInput();
      setIsFilled(true);
    }
  }
  function blurHandler(e) {
    e.preventDefault();
    if (e.target.value === '') setIsFilled(false);
    if (props.blurHandler) props.blurHandler(e);
  }
  function focusOnInput() {
    inputField.current.focus();
  }

  /** render */
  return (
    <div className={className} data-class="bs mbr bsh click" onClick={clickHanlder}>
      <input
        ref={inputField}
        type={props.type ? props.type : 'text'}
        className="input-field paragraph2"
        data-class="bs"
        value={props.value}
        onChange={props.changeHandler}
        onBlur={blurHandler}
      />
      <div className="input-placeholder" data-class="ptc">
        <Typography.Paragraph type="2">{props.placeholder}</Typography.Paragraph>
      </div>
      <div className="input-error">
        <Typography.Paragraph type="2">{props.error}</Typography.Paragraph>
      </div>
    </div>
  )
}