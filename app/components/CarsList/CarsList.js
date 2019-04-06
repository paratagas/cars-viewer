import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import injectReducer from 'utils/injectReducer';
import axios from 'axios';
import './CarsList.scss';
import Car from '../Car/Car';
import Header from '../Header/Header';
import { BASE_API_URL } from '../../constants';
import reducer from './reducer';
import { setCars } from './actions';

class CarsList extends Component {
    static propTypes = {
        cars: PropTypes.array,
    };

    static defaultProps = {
        cars: [],
    };

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        axios
            .get(BASE_API_URL + 'cars')
            .then(response => {
                const data = response.data;
                console.log('data: ', data);
                this.props.setCars(data.cars);
            })
            .catch(error => {
                console.log(error);
            });
    }

    render() {
        const { cars } = this.props;

        return (
            cars.length &&
            <div className="cars--list">
                <Header />
                {cars[0].map((car, index) => <Car data={car} key={`car-${index}`} />)}
            </div>
        );
    }
}


const mapStateToProps = store => {
  return {
    cars: store.toObject().cars,
  };
};

const mapDispatchToProps = dispatch => ({
    setCars: cars => dispatch(setCars(cars)),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withReducer = injectReducer({ key: 'cars', reducer });

export default compose(
    withReducer,
    withConnect,
)(CarsList);
