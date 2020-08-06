'use strict';

/** imports */
import React from 'react';
import classnames from 'classnames';
import {faCheck} from '@fortawesome/free-solid-svg-icons';

// assets
import './checkbox.scss';

// components
import Typography from '../../typography';
import Icon from '../../icons/icon';

/** Checkbox component */
export default function Checkbox(props) {
  /** data */
  const className = classnames({
    'checkbox': true,
    'is-selected': props.isSelected,
    'is-error': props.isError && !props.isSelected
  });

  /** render */
  return (
    <div className={className} data-class="fac click" onClick={props.clickHandler}>
      <div className="checkbox-field" data-class="mbr bs fc">
        <Icon icon={faCheck} size="xs" name="checkbox-icon"/>
      </div>
      <Typography.Paragraph type="2">{props.description}</Typography.Paragraph>
    </div>
  )
}