export const getCityFromAddress = (address) => {
  const parts = address.split(", ");
  const city = parts[1];
  return city;
};

export const getCountryFromAddress = (address) => {
  const parts = address.split(", ");
  const country = parts[2];
  return country;
};

export const extractMinimumAge = (rentalConditions) => {
  const conditionsArray = rentalConditions.split("\n");
  const [conditionKey, conditionValue] = conditionsArray[0].split(": ");
  return {
    key: conditionKey,
    value: conditionValue,
  };
};
export const extractDriverLicense = (rentalConditions) => {
  const conditionsArray = rentalConditions.split("\n");
  const driverLicense = conditionsArray[1];
  return driverLicense;
};

export const extractSecurityDeposit = (rentalConditions) => {
  const conditionsArray = rentalConditions.split("\n");
  const SecurityLicense = conditionsArray[2];
  return SecurityLicense;
};

export const formatMileage = (mileage) => {
  return mileage.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export const formatRentalPrice = (rentalPrice) => {
  const currencySymbol = rentalPrice.charAt(0);
  const numericPart = rentalPrice.slice(1);
  return `${numericPart}${currencySymbol}`;
};
export const  generatePriceOptions = (maxPrice)=> {
  const step = 10;
  const options = [];
  for (let price = 0; price <= maxPrice; price += step) {
    options.push(price);
  }
  return options;
}


export const parseNumber = (value) => {
  if (!value || isNaN(value)) {
    return null;
  }

  return parseFloat(value);
};

export const filterCars = (cars, filter) => {
  if (!filter) {
    return cars;
  }

  return cars.filter((car) => {
    const rentalPrice = parseInt(car.rentalPrice.substring(1));
    const mileage = parseFloat(car.mileage);

    const brandMatch =
      !filter.brand || car.make.toLowerCase() === filter.brand.toLowerCase();
    const priceMatch = !filter.price || rentalPrice <= filter.price;
    const minMileageMatch = !filter.from || mileage >= filter.from;
    const maxMileageMatch = !filter.to || mileage <= filter.to;

    return brandMatch && priceMatch && minMileageMatch && maxMileageMatch;
 
  });
};
