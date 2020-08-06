'use strict';

/** imports */
import React from 'react';
import {useHistory} from 'react-router-dom';
import './popup.scss';

// components
import FrameTitle from '../frame-title';
import ClosePopupButton from '../close-popup-button';

/** Popup component */
export default function Popup(props) {
  /** states */
  const history = useHistory();

  /** methods */
  function closePopupButtonClickHandler(e) {
    e.preventDefault();
    history.goBack();
  }

  /** render */
  return (
    <div className="popup" data-class="bs full">
      <div className="popup-header" data-class="fsb">
        <FrameTitle/>
        <ClosePopupButton clickHandler={closePopupButtonClickHandler}/>
      </div>
      <div className="popup-content">
        {props.children}
      </div>
    </div>
  )
}