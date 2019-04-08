import { LOCAL_STORAGE_STORE_NAME } from '../../constants';

function saveCarToFavList(currentCar) {
  let favCars = localStorage.getItem(LOCAL_STORAGE_STORE_NAME);

  if (!favCars) {
    localStorage.setItem(LOCAL_STORAGE_STORE_NAME, JSON.stringify([]));
  }

  favCars = localStorage.getItem(LOCAL_STORAGE_STORE_NAME);
  favCars = JSON.parse(favCars);

  const carExists = favCars.some(item => {
    return currentCar.stockNumber === item.stockNumber;
  });

  if (carExists) {
    const messageExists = `Car with stock number ${currentCar.stockNumber} already exists in favourite cars list.`;
    alert(messageExists);
    return;
  };

  favCars.push(currentCar);
  localStorage.setItem(LOCAL_STORAGE_STORE_NAME, JSON.stringify(favCars));
  const messageSaved = `Car with stock number ${currentCar.stockNumber} was saved to favourite cars list.`;
  location.href = '/';
  alert(messageSaved);
}

function removeCarFromFavList(currentCar) {
    let favCars = localStorage.getItem(LOCAL_STORAGE_STORE_NAME);

    if (!favCars) return;

    favCars = JSON.parse(favCars);

    favCars.forEach((item, index, array) => {
        if (currentCar.stockNumber === item.stockNumber) {
            array.splice(index, 1);
        }

        return array;
    });

    localStorage.setItem(LOCAL_STORAGE_STORE_NAME, JSON.stringify(favCars));
    const messageRemoved = `Car with stock number ${currentCar.stockNumber} was removed from favourite cars list.`;
    location.href = '/';
    alert(messageRemoved);
}

export {
    saveCarToFavList,
    removeCarFromFavList,
};
