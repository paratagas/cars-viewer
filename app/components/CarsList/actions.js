import {
    SAVE_CARS_TO_SERVER,
} from './constants';

export const setCars = cars => ({
    type: SAVE_CARS_TO_SERVER,
    cars,
});
