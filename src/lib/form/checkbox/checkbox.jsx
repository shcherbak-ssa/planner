'use strict';

/** imports */
import React from 'react';
import {faCheck} from '@fortawesome/free-solid-svg-icons';

// assets
import './checkbox.scss';

// components
import Typography from '../../typography';
import Icon from '../../icons/icon';

/** Checkbox component */
export default function Checkbox(props) {
  /** data */
  const isCheckedClassName = props.isSelected ? ' is-selected' : '';
  const isErrorClassName = props.isError ? ' is-error' : '';
  const className = `checkbox${isCheckedClassName + isErrorClassName}`;

  /** render */
  return (
    <div className={className} data-class="fac click" onClick={props.clickHandler}>
      <div className="checkbox-field" data-class="mbr bs fc">
        <Icon icon={faCheck} />
      </div>
      <Typography.Paragraph type="2">{props.description}</Typography.Paragraph>
    </div>
  )
}