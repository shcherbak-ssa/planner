'use strict';

/** imports */
import React from 'react';
import './paragraph.scss';

/** Paragraph component */
export default function Paragraph(props) {
  let paragraphClassName = 'paragraph' + props.type;
  paragraphClassName += props.isBold ? '-bold' : '';
  return (
    <p className={paragraphClassName}>{props.text}</p>
  )
}