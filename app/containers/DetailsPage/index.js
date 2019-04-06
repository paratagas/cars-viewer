/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import './index.scss';
import { CAR_IMAGE_PLACEHOLDER_LARGE } from '../../constants';
import Button from '../../components/Button/Button';
import { saveCarToFavList } from '../../components/Util/localStorage';

/* eslint-disable react/prefer-stateless-function */
export default class DetailsPage extends React.PureComponent {
  constructor(props) {
      super(props);
      this.saveCarToFavList = saveCarToFavList.bind(this);
  }

  render() {
    return (
      <div className="details">
        <div className="details__image">
          <img src={CAR_IMAGE_PLACEHOLDER_LARGE} />
        </div>
        <div className="details__info">
          <div className="details__info__car">
            <div className="details__info__car__title">
              Chrysler Crossfire
            </div>
            <div className="details__info__car__info">
              Stock # 61184 - 152.263 KM - Petrol - Yellow
            </div>
            <div className="details__info__car__main--text">
              This car is currently available and can be delivered as soon as
              tomorrow morning. Please be aware that delivery times shown in
              this page are not definitive and may change due to bad weather
              conditions.
            </div>
          </div>
          <div className="details__info__collect">
            <div className="details__info__collect__content">
              If you like this car, click the button and
              save it in your collection of favourite
              items.
            </div>
            <Button
                text="Save"
                onClickHandler={() => this.saveCarToFavList()}
            />
          </div>
        </div>
      </div>
    );
  }
}
