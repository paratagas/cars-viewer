import React, { Component } from 'react';
import './Filter.scss';
import Select from '../Select/Select';
import Label from '../Label/Label';
import Button from '../Button/Button';

/* eslint-disable react/prefer-stateless-function */
class Filter extends Component {
    constructor(props) {
        super(props);
        this.filterCars = this.filterCars.bind(this);
    }

    filterCars() {
        console.log('filter');
    }

    render() {
        return (
            <div className="filter">
                <Label text="Color" />
                <Select />
                <Label text="Manufacturer" />
                <Select />
                <Button alignRight text="Filter" onClickHandler={this.filterCars} />
            </div>
        );
    }
}

export default Filter;

