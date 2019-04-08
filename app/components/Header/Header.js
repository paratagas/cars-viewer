import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { sortCarsByMilleage } from '../CarsList/actions';
import './Header.scss';
import Label from '../Label/Label';
import Select from '../Select/Select';

class Header extends Component {
    constructor(props) {
        super(props);
        this.sortByMilleage = this.sortByMilleage.bind(this);
    }

    sortByMilleage(selectValue) {
        if (selectValue !== 'Milleage') return;
        this.props.sortCarsByMilleage();
    }


    render() {
        const options = ['None', 'Milleage'];

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
                    <Select options={options} onSelectHandler={this.sortByMilleage} />
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    sortCarsByMilleage: () => dispatch(sortCarsByMilleage()),
});

const withConnect = connect(null, mapDispatchToProps);

export default compose(
    withConnect,
)(Header);
