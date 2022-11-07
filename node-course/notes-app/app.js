const validator = require('validator')
const chalk = require('chalk')
const notes = require('./notes')

msg = notes()
console.log(msg)

console.log(validator.isEmail("modalsaidul3232@gmail.com"))
console.log(chalk.green("Success!"))