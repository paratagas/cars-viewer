import {
    SAVE_CURRENT_CAR,
} from './constants';

const CarsListReducer = (state = {}, action) => {
    switch (action.type) {
        case SAVE_CURRENT_CAR:
            return Object.assign({}, state, action.currentCar);
        default:
            return state;
    }
};

export default CarsListReducer;
