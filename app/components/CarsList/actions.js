import {
    SAVE_CARS_TO_SERVER,
    SORT_BY_MILLEAGE,
} from './constants';

export const setCars = cars => ({
    type: SAVE_CARS_TO_SERVER,
    cars,
});

export const sortCarsByMilleage = () => ({
    type: SORT_BY_MILLEAGE,
});
