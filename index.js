// Code your solution in this file.
function lowerCaseDrivers(drivers) {
  const newDrivers = drivers.map(function(driver){
    return driver.toLowerCase();
  });
  return newDrivers;
}

function nameToAttributes(drivers) {
  const newDrivers = drivers.map(function(driver){
    return {firstName: driver.split(' ')[0], lastName: driver.split(' ')[1]}
  });
  return newDrivers;
}


function attributesToPhrase(drivers) {
  const newDrivers = drivers.map(function(driver){
    return `${driver.name} is from ${driver.hometown}`
  });
  return newDrivers;
}
