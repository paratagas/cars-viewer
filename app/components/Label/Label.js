import React, { Component } from 'react';
import './Label.scss';

/* eslint-disable react/prefer-stateless-function */
class Label extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { text } = this.props;

        return (
            <div className="label">
                {text}
            </div>
        );
    }
}

export default Label;
