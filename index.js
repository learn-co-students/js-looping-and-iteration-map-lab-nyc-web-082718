// Code your solution in this file.
function lowerCaseDrivers(drivers) {
  let ldrivers = drivers.map(function(driver){return driver.toLowerCase()})
  return ldrivers
}

function nameToAttributes(drivers){
  let hash = drivers.map(function(driver){
    let hashed = {}
    hashed["firstName"] = driver.split(/\W/)[0]
    hashed["lastName"] = driver.split(/\W/)[1]
    return hashed
  })
  return hash
}

function attributesToPhrase(drivers){
  let phrases = drivers.map(function(driver){
    return driver["name"]+" is from "+driver["hometown"]
  })
  return phrases
}
