import {
    SAVE_CARS_TO_SERVER,
} from './constants';

const CarsListReducer = (state = [], action) => {
    switch (action.type) {
        case SAVE_CARS_TO_SERVER:
            return [
                ...state,
                action.cars,
            ];
        default:
            return state;
    }
};

export default CarsListReducer;
