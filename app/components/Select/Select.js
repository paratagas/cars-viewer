import React, { Component } from 'react';
import './Select.scss';

/* eslint-disable react/prefer-stateless-function */
class Select extends Component {
    render() {
        return (
            <div className="select">
                <select>
                    <option value="all">All car colors</option>
                    <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                    <option value="opel">Opel</option>
                    <option value="audi">Audi</option>
                </select>
            </div>
        );
    }
}

export default Select;
