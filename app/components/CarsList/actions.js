import {
    SAVE_CARS_TO_SERVER,
    GET_CARS_FROM_SERVER,
} from './constants';

export const setCars = cars => ({
    type: SAVE_CARS_TO_SERVER,
    cars,
});

export const getCars = () => ({
    type: GET_CARS_FROM_SERVER,
});
