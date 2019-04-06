/* eslint-disable linebreak-style */
import { createSelector } from 'reselect';

/**
 * Direct selector to the canvas state domain
 */
const selectCarsDomain = (state) => state.get('cars');

/**
 * Other specific selectors
 */

const selectCars = () => createSelector(
    selectCarsDomain,
    (state) => state.get('cars')
);


export {
    selectCars,
};
