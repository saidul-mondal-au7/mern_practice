const fs = require('fs')

fs.writeFileSync('text.txt', "This file is created by Node.js. ")
fs.appendFileSync('text.txt', "My name is Saidul Mondal")
