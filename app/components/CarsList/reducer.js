import {
    SAVE_CARS_TO_SERVER,
    GET_CARS_FROM_SERVER,
} from './constants';

const CarsListReducer = (state = [], action) => {
    switch (action.type) {
        case SAVE_CARS_TO_SERVER:
            return [
                ...state,
                action.cars,
            ];
        case GET_CARS_FROM_SERVER:
            const { cars } = getState();
            return [
                ...state,
                cars,
            ];
        default:
            return state;
    }
};

export default CarsListReducer;
