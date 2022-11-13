const fs = require('fs')
const chalk = require('chalk')
const getNotes = function (){
    return "Your Notes..."
}

const addNotes = (title, body) => {
    notes = loadNotes()
    const duplicateNotes = notes.filter(note =>note.title === title)
    if (duplicateNotes.length === 0) {
        notes.push({
            title:title,
            body:body
        })
        saveNotes(notes)
        console.log(chalk.green("successfully added!"))

    }
    else {
        console.log("The title is already taken!")
    }

}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)

    }
    catch(e) {
        return []
    }
    
}

const removeNotes = (title) => {
    console.log("Removing note of ",title)
    const notes = loadNotes() 
    const keepingNote = notes.filter(note => note.title !== title)
    // console.log(identifiedNote)
    if (keepingNote.length === notes.length) 
    {
        console.log(chalk.red.bold("No such note found!"))
    }
    else {
        saveNotes(keepingNote)
        console.log(chalk.green.bold("Successfully removed!"))
    }
}

const listNotes = () => {
    const notes = loadNotes() 
    console.log(chalk.inverse("your notes' titles!"))

    notes.forEach(element => {
        console.log(element.title)
    });
}

const readNotes = (title) => {
    notes = loadNotes()
    const findNote = notes.find(note => note.title === title)
    
    if (!findNote){
        console.log(chalk.inverse("No match found"))
    }
    else{
        console.log(chalk.green.inverse(findNote.title +"----"+ findNote.body))
    }
}

module.exports = {
    getNotes: getNotes,
    addNotes: addNotes,
    removeNotes: removeNotes,
    listNotes: listNotes,
    readNotes:readNotes
}