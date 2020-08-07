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
  function closePopupHandler(e) {
    e.preventDefault();
    history.goBack();
  }
  function popupClickHandler(e) {
    if (e.target.classList.contains('popup')) {
      closePopupHandler(e);
    }
  }

  /** render */
  return (
    <div className="popup" data-class="bs full" onClick={popupClickHandler}>
      <div className="popup-header" data-class="fsb">
        <FrameTitle/>
        <ClosePopupButton clickHandler={closePopupHandler}/>
      </div>
      <div className="popup-container" data-class="bs mbr white">
        {props.children}
      </div>
    </div>
  )
}