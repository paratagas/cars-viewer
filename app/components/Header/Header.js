import React, { Component } from 'react';
import './Header.scss';
import Label from '../Label/Label';
import Select from '../Select/Select';

class Header extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div className="header">
                <div className="header__available">
                    <div className="header__available__cars">
                        Available cars
                    </div>
                    <div className="header__available__results">
                        Showing 10 of 100 results
                    </div>
                </div>
                <div className="header__sort">
                    <Label text="Sort by" />
                    <Select />
                </div>
            </div>
        );
    }
}

export default Header;
