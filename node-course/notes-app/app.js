const validator = require('validator')
const yargs = require('yargs')
const chalk = require('chalk')
const notes = require('./notes')
const { demandOption } = require('yargs')

// msg = notes()
// console.log(msg)

// console.log(validator.isEmail("modalsaidul3232@gmail.com"))
// console.log(chalk.green("Success!"))


// add , remove , list , read

yargs.command({
    command:'add',
    describe: 'Adding some notes.',
    builder: {
        title: {
            describe: 'title of the note',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: "Body of the note.",
            demandOption: true,
            type: "string"
        }
    },
    handler: function(argv){
        notes.addNotes(argv.title, argv.body)
    }
})

yargs.command({
    command:'remove',
    describe: 'removing some notes.',
    handler: function(argv){
        notes.removeNotes(argv.title)
    }
})

// list
yargs.command({
    command:'list',
    describe: 'listing some notes.',
    handler: function(){
        notes.listNotes()
    }
})
// read
yargs.command({
    command:'read',
    describe: 'reading some notes.',
    handler: function(argv){
        notes.readNotes(argv.title)
    }
})



// console.log(yargs.argv)
yargs.parse()