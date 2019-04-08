import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Select.scss';

/* eslint-disable react/prefer-stateless-function */
class Select extends Component {
    render() {
        const { options, onSelectHandler } = this.props;

        return (
            <div className="select">
                <select onChange={() => onSelectHandler(event.target.value)}>
                    {options.map((item, index) => <option key={`option-${index}`} value={item}>{item}</option>)}
                </select>
            </div>
        );
    }
}

export default Select;
