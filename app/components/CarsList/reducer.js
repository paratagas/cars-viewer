import {
    SAVE_CARS_TO_SERVER,
    SORT_BY_MILLEAGE,
} from './constants';

const CarsListReducer = (state = [], action) => {
    switch (action.type) {
        case SAVE_CARS_TO_SERVER:
            return [
                ...state,
                action.cars,
            ];
        case SORT_BY_MILLEAGE:
            /*const stateCopy = [...state[0]];

            stateCopy.sort((a, b) => {
                return a.mileage.number - b.mileage.number;
            });

            return stateCopy;*/
            return state;
        default:
            return state;
    }
};


export default CarsListReducer;
