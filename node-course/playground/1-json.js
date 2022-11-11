const fs = require('fs')

const information = {
    name:"Gunther",
    planet:"Earth",
    age:54
}

const informationJson = JSON.stringify(information)
console.log(informationJson)

fs.writeFileSync('1-json.json', informationJson)

const jsonBuffer = fs.readFileSync('1-json.json')
console.log(jsonBuffer)

const dataString = jsonBuffer.toString()
console.log(dataString)

const returnObject = JSON.parse(dataString)

returnObject.name = "Saidul Mondal"
returnObject.age = 33


const againJson = JSON.stringify(returnObject)
fs.writeFileSync('1-json.json', againJson)


console.log(returnObject)

