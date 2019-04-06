import {
  SAVE_CURRENT_CAR,
} from './constants';

export const setCurrentCar = currentCar => ({
    type: SAVE_CURRENT_CAR,
    currentCar,
});
