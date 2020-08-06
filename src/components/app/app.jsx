'use strict';

/** imports */
import React, {useState} from 'react';
import classnames from 'classnames';
import DropdownService from '@service/dropdown';

// assets
import './app.scss';

// components
import Page from './components/page';
import PageRouter from './pages/page-router';

/** init */
DropdownService.init();

/** App component */
export default function App(props) {
  /** states */
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  /** data */
  const appPopupClassName = classnames({
    'app-popup': true,
    'is-open': isPopupOpen
  });

  /** render */
  return (
    <div className="app" data-class="full">
      <div className="app-page" data-class="full">
        <Page>
          <PageRouter/>
        </Page>
      </div>
      <div className={appPopupClassName}></div>
    </div>
  )
}