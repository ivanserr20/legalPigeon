const fs = require('fs')

function readJson(){
    const rawData = fs.readFileSync('./models/DB.json')
    const json = JSON.parse(rawData)
    return json  
}

module.exports = readJson()