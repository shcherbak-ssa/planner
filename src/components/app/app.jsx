'use strict';

/** imports */
import React, {useState, useEffect} from 'react';
import {useLocation} from 'react-router-dom';
import classnames from 'classnames';
import DropdownService from '@service/dropdown';

// assets
import './app.scss';

// components
import Page from './components/page';
import Popup from './components/popup';
import PageRouter from './pages/page-router';
import PopupRouter from './popups/popup-router';

/** init */
DropdownService.init();

/** App component */
export default function App(props) {
  /** states */
  const location = useLocation();
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  /** data */
  const appPopupClassName = classnames({
    'app-popup': true,
    'is-open': isPopupOpen
  });

  /** effects */
  useEffect(() => {
    location.state && location.state.background
      ? setIsPopupOpen(true)
      : setIsPopupOpen(false);
  }, [location])

  /** render */
  return (
    <div className="app" data-class="full">
      <div className="app-page" data-class="full">
        <Page>
          <PageRouter/>
        </Page>
      </div>
      <div className={appPopupClassName}>
        <Popup>
          <PopupRouter/>
        </Popup>
      </div>
    </div>
  )
}