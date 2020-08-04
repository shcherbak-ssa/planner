'use strict';

/** imports */
import React from 'react';
import {Link} from 'react-router-dom';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import {ENTRY_EMAIL_PATH} from '../constants';

// assets
import './change-email-button.scss';

// components
import Icon from '@lib/icons/icon';
import Typography from '@lib/typography';

/** ChangeEmailButton component */
export default function ChangeEmailButton(props) {
  /** render */
  return (
    <Link to={ENTRY_EMAIL_PATH}>
      <div className="change-email-button" data-class="flex">
        <Icon icon={faArrowLeft} size="xs"/>
        <Typography.Paragraph type="2">Change email</Typography.Paragraph>
      </div>
    </Link>
  )
}