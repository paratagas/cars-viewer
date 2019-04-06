import React, { Component } from 'react';
import './Button.scss';

/* eslint-disable react/prefer-stateless-function */
class Button extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { text, alignRight, onClickHandler } = this.props;

        return (
            <button
                className={`button ${alignRight ? 'right' : ''}`}
                onClick={() => onClickHandler()}
            >
                {text}
            </button>
        );
    }
}

export default Button;
