function lowerCaseDrivers(drivers) {
  return drivers.map(function (driver) {
    return driver.toLowerCase();
  });
}

function nameToAttributes(arr) {
  return arr.map(function (name) {
    const nameArr = name.split(' ');
    return {
      firstName: nameArr[0],
      lastName: nameArr[1]
    }
  });
}

function attributesToPhrase(arr) {
  return arr.map(function (drivers) {
    return `${drivers.name} is from ${drivers.hometown}`
  });
}
