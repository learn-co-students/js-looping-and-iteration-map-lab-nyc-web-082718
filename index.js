// Code your solution in this file.
function lowerCaseDrivers(drivers){
  return drivers.map(function(name){return name.toLowerCase()})
}


function nameToAttributes(drivers){
  let final_array = []
  drivers.map(function(name){
     let temp_array = name.split(" ")
     let temp_object = {firstName: temp_array[0], lastName: temp_array[1]}
     final_array.push(temp_object)
  })
  return final_array
}

function attributesToPhrase(drivers){
  return drivers.map(function(driverObj){return `${driverObj["name"]} is from ${driverObj["hometown"]}`})

}
