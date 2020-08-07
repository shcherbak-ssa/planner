'use strict';

/** imports */
import React, {useState, useEffect, useRef} from 'react';
// import {useHistory} from 'react-router-dom';
import PopupService from '@service/popup';
import './popup.scss';

// components
import FrameTitle from '../frame-title';
import ClosePopupButton from '../close-popup-button';

/** constants */
const POPUP_CONTAINER_TOP_POSITION = 120;

/** Popup component */
export default function Popup(props) {
  /** states */
  // const history = useHistory();
  const popupContainer = useRef(null);
  const [popupContainerStyle, setPopupContainerStyle] = useState({});

  /** data */
  const popupContainerAttributes = {
    className: 'popup-container',
    'data-class': 'bs mbr pc white',
    ref: popupContainer,
    style: popupContainerStyle
  };

  /** methods */
  function closePopupHandler(e) {
    e.preventDefault();
    // history.goBack();
    PopupService.closePopup();
  }
  function popupClickHandler(e) {
    if (e.target.classList.contains('popup')) {
      closePopupHandler(e);
    }
  }

  /** effects */
  useEffect(() => {
    if (!PopupService.isPopupOpen()) return setPopupContainerStyle({});
    
    const containerHeight = popupContainer.current.offsetHeight;
    const validContainerHeight = getValidContainerHeight();
    if (containerHeight >= validContainerHeight) {
      setPopupContainerStyle({
        top: POPUP_CONTAINER_TOP_POSITION + 'px',
        transform: 'translateX(-50%)',
      })
    }
    
    function getValidContainerHeight() {
      const documentHeight = document.documentElement.clientHeight;
      const popupContainerPadding = POPUP_CONTAINER_TOP_POSITION * 2;
      return documentHeight - popupContainerPadding;
    }
  }, [props.children])

  /** render */
  return (
    <div className="popup" data-class="bs full" onClick={popupClickHandler}>
      <div className="popup-header" data-class="fsb">
        <FrameTitle/>
        <ClosePopupButton clickHandler={closePopupHandler}/>
      </div>
      <div {...popupContainerAttributes}>
        {props.children}
      </div>
    </div>
  )
}