'use strict';

/** imports */
import React, {useState, useEffect} from 'react';
import './input.scss';

// components
import Typography from '../../typography';

/** Input component */
export default function Input(props) {
  /** states */
  const [isFilled, setIsFilled] = useState(false);
  const [isError, setIsError] = useState(false);
  const [value, setValue] = useState(props.value);
  
  /** constants */
  const filledClassName = isFilled ? ' is-filled' : '';
  const errorClassName = isError ? ' is-error' : '';
  const attributes = {
    className: `input${filledClassName}${errorClassName}`,
    'data-class': 'bs mbr bsh click'
  };

  /** effects */
  useEffect(() => {
    if (value !== '') setIsFilled(true);
    if (props.error !== '') {
      //focusOnInput(e);
      setIsError(true);
    }
  });

  /** handlers */
  function clickHanlder(e) {
    e.preventDefault();
    if (!e.target.classList.contains('input-field')) {
      focusOnInput(e);
      setIsFilled(true);
    }
  }
  function changeHandler({target}) {
    setValue(target.value);
  }
  function blurHandler(e) {
    e.preventDefault();
    if (value === '') setIsFilled(false);
    props.blurCallback(e.target.value);
  }

  /** src functions */
  function focusOnInput(e) {
    e.target.children[0].focus();
  }

  /** render */
  return (
    <div {...attributes} onClick={clickHanlder}>
      <input
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