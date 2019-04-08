/*
 * DetailsPage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import injectReducer from 'utils/injectReducer';
import axios from 'axios';
import reducer from './reducer';
import { setCurrentCar } from './actions';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import './index.scss';
import { BASE_API_URL, CAR_IMAGE_PLACEHOLDER_LARGE } from '../../constants';
import Button from '../../components/Button/Button';
import { saveCarToFavList, removeCarFromFavList } from '../../components/Util/localStorage';

/* eslint-disable react/prefer-stateless-function */
class DetailsPage extends React.PureComponent {
  static propTypes = {
    currentCar: PropTypes.object,
  };

  static defaultProps = {
    /*currentCar: {
      color: "yellow",
      fuelType: "Petrol",
      manufacturerName: "Chrysler",
      mileage: {
        number: 106411,
        unit: "km",
      },
      modelName: "Grand Voyager",
      stockNumber: 10075,
    },*/
    currentCar: {},
  };

  constructor(props) {
      super(props);
      this.saveCarToFavList = saveCarToFavList.bind(this);
      this.removeCarFromFavList = removeCarFromFavList.bind(this);
  }

  componentWillMount() {
    const stockNumber = this.props.match.params.stockNumber;

    axios
      .get(BASE_API_URL + `cars/${stockNumber}`)
      .then(response => {
        const data = response.data;
        // console.log('currentCar: ', data);
        this.props.setCurrentCar(data.car);
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const { currentCar } = this.props;

    //console.log('currentCar: ', currentCar);
    return (
    currentCar.stockNumber ?
      <div className="details">
        <div className="details__image">
          <img src={CAR_IMAGE_PLACEHOLDER_LARGE} />
        </div>
        <div className="details__info">
          <div className="details__info__car">
            <div className="details__info__car__title">
              {`${currentCar.manufacturerName} ${currentCar.modelName}`}
            </div>
            <div className="details__info__car__info">
              {`Stock # ${currentCar.stockNumber} - ${currentCar.mileage.number} ${currentCar.mileage.unit} - ${currentCar.fuelType} - ${currentCar.color}`}
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
                onClickHandler={() => this.saveCarToFavList(currentCar)}
            />
            <Button
                text="Remove"
                onClickHandler={() => this.removeCarFromFavList(currentCar)}
            />
          </div>
        </div>
      </div> :
      <div>Loading</div>
    );
  }
}

const mapStateToProps = store => {
  return {
    currentCar: store.toObject().currentCar,
  };
};

const mapDispatchToProps = dispatch => ({
  setCurrentCar: car => dispatch(setCurrentCar(car)),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withReducer = injectReducer({ key: 'currentCar', reducer });

export default compose(
  withReducer,
  withConnect,
)(DetailsPage);
