'use strict';

/** imports */
import React from 'react';
import './paragraph.scss';

/** Paragraph component */
export default function Paragraph(props) {
  /** data */
  let paragraphClassName = 'paragraph' + props.type;
  paragraphClassName += props.isBold ? '-bold' : '';
  paragraphClassName += props.name ? ` ${props.name}` : '';
  
  /** render */
  return (
    <div className={paragraphClassName}>
      {props.children}
    </div>
  )
}