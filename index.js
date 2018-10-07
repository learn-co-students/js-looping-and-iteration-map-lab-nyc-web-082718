const lowerCaseDrivers = function(drivers) {
  return drivers.map(driver => driver.toLowerCase());
}

const nameToAttributes = function(drivers) {
  return Object.assign([], drivers.map(function(driver) {
    return {
      firstName: driver.split(' ')[0],
      lastName: driver.split(' ')[1]
    }}));
}

const attributesToPhrase = function(drivers) {
  return drivers.map(function(driver) {
    return `${driver.name} is from ${driver.hometown}`;
  })
}
