// Code your solution in this file.
function lowerCaseDrivers(drivers){
  const downCaseDrivers = drivers.map(function(driver) {
    return driver.toLowerCase()
  })
  return downCaseDrivers
}

function nameToAttributes(drivers) {
  const splitName = drivers.map(function(driver) {
    let driverAtt = {}
    let name = driver.split(" ")
    return Object.assign({}, driverAtt, { firstName: name[0], lastName: name[1] })
    });
  return splitName
}

function attributesToPhrase(drivers){
  const statement = drivers.map(function(driver) {
    return `${driver.name} is from ${driver.hometown}`
});
return statement
}


// { name: 'Bobby', hometown: 'Pittsburgh' }
// "<NAME OF DRIVER> is from <HOMETOWN>"
