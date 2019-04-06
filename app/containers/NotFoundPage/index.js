/**
 * NotFoundPage
 *
 * This is the page we show when the user visits a url that doesn't have a route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import './index.scss';
import Logo from '../../images/logo.png';

import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
export default class NotFound extends React.PureComponent {
  render() {
      return (
          <div className="not--found--page">
            <img src={Logo} alt="Logo" />
            <div className="not--found--page__header">
              <FormattedMessage {...messages.header} />
            </div>
            <div className="not--found--page__message">
              <FormattedMessage {...messages.doesNotExist} />
            </div>
            <div className="not--found--page__message">
              <FormattedMessage {...messages.backHome} />
              <Link to="/" className="not--found--page__message__home">
                <FormattedMessage {...messages.homePage} />
              </Link>
            </div>
          </div>
      );
  }
}
