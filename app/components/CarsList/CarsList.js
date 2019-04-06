import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import injectReducer from 'utils/injectReducer';
import axios from 'axios';
import './CarsList.scss';
import Car from '../Car/Car';
import Header from '../Header/Header';
import { BASE_API_URL } from '../../constants';
import {
    SAVE_CARS_TO_SERVER,
    GET_CARS_FROM_SERVER,
} from './constants';
import reducer from './reducer';
import {
    getCars,
    setCars,
} from './actions';


import {
    makeSelectWorkspaceTranslate,
} from './selectors';

class CarsList extends Component {
    static propTypes = {
        cars: PropTypes.array,
    };

    static defaultProps = {
        cars: [],
    };

    constructor(props) {
        super(props);
        this.state = {
            cars: [],
        };
    }

    componentDidMount() {
        axios
            .get(BASE_API_URL + 'cars')
            .then(response => {
                const data = response.data;
                console.log('data: ', data);
                this.setState({
                    cars: data.cars,
                });

                this.props.setCars(data.cars);
            })
            .catch(error => {
                console.log(error);
            });
    }

    render() {
        const { cars } = this.state;
        // const { cars } = this.props;

        return (
            <div className="cars--list">
                <Header />
                {cars.map((car, index) => <Car data={car} key={`car-${index}`} />)}
            </div>
        );
    }
}

const mapStateToProps = state => {
    // cars: getCars(state.cars)
    return {
        cars: state.cars,
    };
};

const mapDispatchToProps = dispatch => ({
    setCars: cars => dispatch(setCars(cars)),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);
// const withReducer = injectReducer({ key: 'CarsList', reducer });
const withReducer = injectReducer({ key: 'cars', reducer });

export default compose(
    withReducer,
    withConnect,
)(CarsList);
