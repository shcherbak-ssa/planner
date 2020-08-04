'use strict';

/** imports */
import React from 'react';

// components
import Typography from '@lib/typography';

/** constants */
const googleAuthText = {
  registration: 'You can sign in with',
  login: 'You can sign up with'
};

/** GoogleAuth component */
export default function GoogleAuth(props) {
  /** data */
  const {currentMode} = props;
  const currentText = googleAuthText[currentMode];

  /** render */
  return (
    <div className="google-auth" data-class="fsb">
      <Typography.Paragraph type="3" nama="google-auth-text">{currentText}</Typography.Paragraph>
    </div>
  )
}