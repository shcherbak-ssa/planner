'use strict';

/** imports */
import React, {useState, useEffect} from 'react';
import {useHistory, useLocation} from 'react-router-dom';
import {Provider} from 'react-redux';
import classnames from 'classnames';

import Storage from '@module/storage';
import DropdownService from '@service/dropdown';
import PopupService from '@service/popup';

// assets
import './app.scss';

// components
import Page from './components/page';
import Popup from './components/popup';
import PageRouter from './pages/page-router';
import PopupRouter from './popups/popup-router';

/** init */
const storage = Storage.init();

/** App component */
export default function App(props) {
  /** states */
  const history = useHistory();
  const location = useLocation();
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  /** data */
  const appPopupClassName = classnames({
    'app-popup': true,
    'is-open': isPopupOpen
  });

  /** effects */
  useEffect(() => {
    DropdownService.init();
    PopupService.init(history, location);
  }, []);

  useEffect(() => {
    location.state && location.state.background
      ? setIsPopupOpen(true)
      : setIsPopupOpen(false);
  }, [location])

  /** render */
  return (
    <Provider store={storage}>
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
    </Provider>
  )
}