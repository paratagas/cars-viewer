import React, { Component } from 'react';
import './Car.scss';
import { CAR_IMAGE_PLACEHOLDER_SMALL } from '../../constants';

/* eslint-disable react/prefer-stateless-function */
class Car extends Component {
    constructor(props) {
        super(props);
        this.createMainInfo = this.createMainInfo.bind(this);
    }

    createMainInfo(data) {
        const { color, fuelType, mileage, stockNumber } = data;
        // console.log(data);
        return `Stock # ${data.stockNumber} - ${mileage.number} ${mileage.unit.toUpperCase()} - ${fuelType} - ${color}`;
    }

    render() {
        const { data, currentCar } = this.props;
        const url  = `/details/${data.stockNumber}`;

        return (
            <div className="car">
                <img src={CAR_IMAGE_PLACEHOLDER_SMALL} />
                <div className="car__info">
                    <div className="car__info__name">{`${data.manufacturerName} ${data.modelName}`}</div>
                    <div className="car__info__main">{this.createMainInfo(data)}</div>
                    <a className="car__info__details" href={url}>View details</a>
                </div>
            </div>
        );
    }
}

export default Car;
