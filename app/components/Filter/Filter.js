import React, { Component } from 'react';
import axios from 'axios';
import './Filter.scss';
import Select from '../Select/Select';
import Label from '../Label/Label';
import Button from '../Button/Button';
import { BASE_API_URL } from '../../constants';

/* eslint-disable react/prefer-stateless-function */
class Filter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            colorsData: [],
            manufacturersData: [],
        };

        this.filterCars = this.filterCars.bind(this);
    }

    componentDidMount() {
        axios.all([
            axios.get(BASE_API_URL + 'colors'),
            axios.get(BASE_API_URL + 'manufacturers')
        ])
        .then(axios.spread((colors, manufacturers) => {
            const colorsData = colors.data.colors;
            const manufacturersData = manufacturers.data.manufacturers;
            // console.log('colorsData: ', colorsData);
            // console.log('manufacturersData: ', manufacturersData);

            this.setState({
                colorsData,
                manufacturersData,
            });
        }));
    }

    filterCars() {
        console.log('filter');
    }

    render() {
        const { colorsData, manufacturersData } = this.state;
        const manufDataPrepared = manufacturersData.map(item => item.name);
        colorsData.unshift('All car colors');
        manufDataPrepared.unshift('All manufacturers');

        return (
            <div className="filter">
                <Label text="Color" />
                <Select options={colorsData} onSelectHandler={() => {}} />
                <Label text="Manufacturer" />
                <Select options={manufDataPrepared} onSelectHandler={() => {}} />
                <Button alignRight text="Filter" onClickHandler={this.filterCars} />
            </div>
        );
    }
}

export default Filter;

