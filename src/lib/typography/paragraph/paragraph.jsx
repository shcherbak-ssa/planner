'use strict';

/** imports */
import React from 'react';
import classnames from 'classnames';
import './paragraph.scss';

/** Paragraph component */
export default function Paragraph(props) {
  /** data */
  const paragraphClassName = 'paragraph' + props.type;
  const className = classnames({
    [paragraphClassName]: !props.isBold,
    [paragraphClassName + '-bold']: props.isBold,
    [props.name]: !!props.name
  });
  
  /** render */
  return (
    <div className={className}>
      {props.children}
    </div>
  )
}