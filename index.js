// Code your solution in this file.
const lowerCaseDrivers = function (drivers) {
  return drivers.map(function(driver) {
    return driver.toLowerCase()
  })
}

const nameToAttributes = function (drivers) {
  return drivers.map(function(driver) {
    const first = driver.split(' ')[0]
    const last = driver.split(' ')[1]

    return { firstName: first, lastName: last}
  })
}

const attributesToPhrase = function (drivers) {
  return drivers.map(function(driver) {
    return `${driver.name} is from ${driver.hometown}`
  })
}
