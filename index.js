// Code your solution in this file.
function lowerCaseDrivers(drivers){
  return drivers.map(function (name){
    return name.toLowerCase()
  })
}

function nameToAttributes(drivers){
  let finalArray = []
   drivers.map(function(name){
    let splitNames = name.split(' ')
    let tempObj = {firstName: splitNames[0], lastName: splitNames[1]}
    finalArray.push(tempObj)
  })
  return finalArray
}

function attributesToPhrase(drivers){
  return drivers.map(function (name) {
    return `${name.name} is from ${name.hometown}`
  })
}
