/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import Filter from '../../components/Filter/Filter';
import CarsList from '../../components/CarsList/CarsList';
import './index.scss';

/* eslint-disable react/prefer-stateless-function */
export default class HomePage extends React.PureComponent {
  render() {
    return (
      <div className="home--page">
        <Filter />
        <CarsList />
      </div>
    );
  }
}
