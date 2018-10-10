function lowerCaseDrivers(drivers) {
  return drivers.map((driver) => driver.toLowerCase())
}

function nameToAttributes(drivers) {
  return drivers.map((driver) => {
    let obj = {
      'firstName': driver.split(' ')[0],
      'lastName': driver.split(' ')[1]
    }
    return obj
  }
}

function attributesToPhrase(drivers) {
  return drivers.map((driver) => return `${driver.name} is from ${driver.hometown}`)
}
