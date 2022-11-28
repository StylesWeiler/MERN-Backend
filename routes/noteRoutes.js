const express = require('express')
const router = express.Router()
const notesController = require('../controllers/notesController')

router.route('/') // calls for the following DB functionality 
    .get(notesController.getAllNotes)
    .post(notesController.createNewNote)
    .patch(notesController.updateNote)
    .delete(notesController.deleteNote)

module.exports = router

